"use client";

import { useEffect } from "react";

/**
 * Ported 1:1 from the design prototype's script.js — scroll reveals, FAQ
 * accordion, modules carousel (buttons + drag), mechanism 3D tilt, and the
 * sticky mobile CTA. Runs once after hydration; all listeners are cleaned up
 * on unmount.
 */
export default function Effects() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    /* ---- reveal on scroll (intersection observer + stagger) ---- */
    const revealEls = document.querySelectorAll<HTMLElement>(
      ".reveal, .reveal-l, .reveal-r, .reveal-s"
    );
    const reveal = (el: Element) => el.classList.add("in");
    const sweep = () => {
      const h = window.innerHeight || document.documentElement.clientHeight;
      revealEls.forEach((el) => {
        if (el.classList.contains("in")) return;
        const r = el.getBoundingClientRect();
        if (r.top < h * 0.92 && r.bottom > 0) reveal(el);
      });
    };
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              reveal(e.target);
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      revealEls.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    }
    sweep();
    window.addEventListener("scroll", sweep, { passive: true });
    window.addEventListener("load", sweep);
    const safety = window.setTimeout(() => revealEls.forEach(reveal), 2600);
    cleanups.push(() => {
      window.removeEventListener("scroll", sweep);
      window.removeEventListener("load", sweep);
      window.clearTimeout(safety);
    });

    /* ---- FAQ accordion ---- */
    document.querySelectorAll<HTMLElement>(".faq-item").forEach((item) => {
      const q = item.querySelector<HTMLElement>(".faq-q");
      const a = item.querySelector<HTMLElement>(".faq-a");
      if (!q || !a) return;
      const onClick = () => {
        const open = item.classList.contains("open");
        document.querySelectorAll<HTMLElement>(".faq-item.open").forEach((other) => {
          if (other !== item) {
            other.classList.remove("open");
            const oa = other.querySelector<HTMLElement>(".faq-a");
            if (oa) oa.style.maxHeight = "";
          }
        });
        if (open) {
          item.classList.remove("open");
          a.style.maxHeight = "";
        } else {
          item.classList.add("open");
          a.style.maxHeight = a.scrollHeight + "px";
        }
      };
      q.addEventListener("click", onClick);
      cleanups.push(() => q.removeEventListener("click", onClick));
    });
    const onResizeFaq = () => {
      document.querySelectorAll<HTMLElement>(".faq-item.open .faq-a").forEach((a) => {
        a.style.maxHeight = a.scrollHeight + "px";
      });
    };
    window.addEventListener("resize", onResizeFaq);
    cleanups.push(() => window.removeEventListener("resize", onResizeFaq));

    /* ---- Modules carousel ---- */
    const car = document.getElementById("carousel");
    if (car) {
      const prev = document.getElementById("carPrev") as HTMLButtonElement | null;
      const next = document.getElementById("carNext") as HTMLButtonElement | null;
      const bar = document.getElementById("carBar");
      const step = () => {
        const card = car.querySelector<HTMLElement>(".mod-card");
        return card ? card.getBoundingClientRect().width + 20 : 360;
      };
      const update = () => {
        const max = car.scrollWidth - car.clientWidth;
        const pct = max > 0 ? car.scrollLeft / max : 0;
        if (bar) bar.style.width = 20 + pct * 80 + "%";
        if (prev) prev.disabled = car.scrollLeft < 4;
        if (next) next.disabled = car.scrollLeft > max - 4;
      };
      const onPrev = () => car.scrollBy({ left: -step(), behavior: "smooth" });
      const onNext = () => car.scrollBy({ left: step(), behavior: "smooth" });
      prev?.addEventListener("click", onPrev);
      next?.addEventListener("click", onNext);
      car.addEventListener("scroll", update, { passive: true });
      window.addEventListener("resize", update);
      update();

      /* drag-to-scroll */
      let down = false,
        startX = 0,
        startScroll = 0,
        moved = false;
      const onDown = (e: PointerEvent) => {
        down = true;
        moved = false;
        startX = e.clientX;
        startScroll = car.scrollLeft;
        car.style.cursor = "grabbing";
      };
      const onMove = (e: PointerEvent) => {
        if (!down) return;
        const dx = e.clientX - startX;
        if (Math.abs(dx) > 4) moved = true;
        car.scrollLeft = startScroll - dx;
      };
      const onUp = () => {
        down = false;
        car.style.cursor = "";
      };
      const onClickCapture = (e: MouseEvent) => {
        if (moved) e.preventDefault();
      };
      car.addEventListener("pointerdown", onDown);
      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);
      car.addEventListener("click", onClickCapture, true);

      cleanups.push(() => {
        prev?.removeEventListener("click", onPrev);
        next?.removeEventListener("click", onNext);
        car.removeEventListener("scroll", update);
        window.removeEventListener("resize", update);
        car.removeEventListener("pointerdown", onDown);
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onUp);
        car.removeEventListener("click", onClickCapture, true);
      });
    }

    /* ---- Mechanism mockup: subtle 3D tilt on hover ---- */
    const tilt = document.getElementById("mechTilt");
    if (tilt && window.matchMedia("(pointer:fine)").matches) {
      const host = tilt.parentElement;
      if (host) {
        const onTiltMove = (e: PointerEvent) => {
          const r = host.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          tilt.style.transform = `perspective(900px) rotateY(${px * 6}deg) rotateX(${-py * 6}deg)`;
        };
        const onTiltLeave = () => {
          tilt.style.transform = "";
        };
        host.addEventListener("pointermove", onTiltMove);
        host.addEventListener("pointerleave", onTiltLeave);
        cleanups.push(() => {
          host.removeEventListener("pointermove", onTiltMove);
          host.removeEventListener("pointerleave", onTiltLeave);
        });
      }
    }

    /* ---- Sticky mobile CTA: appears after hero ---- */
    const sticky = document.getElementById("stickyCta");
    const hero = document.getElementById("hero");
    if (sticky && hero && "IntersectionObserver" in window) {
      const so = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            const past = !e.isIntersecting && e.boundingClientRect.top < 0;
            sticky.classList.toggle("show", past && window.innerWidth <= 760);
          });
        },
        { threshold: 0 }
      );
      so.observe(hero);
      const onResizeSticky = () => {
        if (window.innerWidth > 760) sticky.classList.remove("show");
      };
      window.addEventListener("resize", onResizeSticky);
      cleanups.push(() => {
        so.disconnect();
        window.removeEventListener("resize", onResizeSticky);
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
