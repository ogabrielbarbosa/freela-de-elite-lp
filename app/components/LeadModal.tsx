"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

type Step = {
  key: string;
  question: string;
  inputMode: "text" | "email" | "tel";
  validate: (v: string) => boolean;
  error: string;
  format?: (v: string) => string;
};

const STEPS: Step[] = [
  {
    key: "nome",
    question: "Qual é o seu nome?",
    inputMode: "text",
    validate: (v) => v.trim().length >= 2,
    error: "digite seu nome",
  },
  {
    key: "email",
    question: "Qual é o seu melhor email?",
    inputMode: "email",
    validate: (v) => /^\S+@\S+\.\S+$/.test(v.trim()),
    error: "email inválido",
  },
  {
    key: "telefone",
    question: "Qual é o seu WhatsApp? (com DDD)",
    inputMode: "tel",
    validate: (v) => v.replace(/\D/g, "").length >= 10,
    error: "telefone inválido",
  },
  {
    key: "nivel",
    question: "Qual o seu nível? (iniciante, intermediário ou avançado)",
    inputMode: "text",
    validate: (v) => v.trim().length >= 3,
    error: "responda iniciante, intermediário ou avançado",
  },
];

type Phase = "ask" | "working" | "done";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];
const pad = (n: number) => String(n).padStart(2, "0");

/** macOS-style "Fri Jun 12 11:38:39" stamp for the current moment. */
function loginStamp(): string {
  const d = new Date();
  return `${DAYS[d.getDay()]} ${MONTHS[d.getMonth()]} ${pad(d.getDate())} ${pad(
    d.getHours(),
  )}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

/** Claude Code mascot — drop a PNG at /public/claude.png and it renders here. */
function ClaudeBot() {
  return (
    <Image
      className="cc-bot"
      src="/claude.png"
      alt="Claude Code"
      width={56}
      height={56}
      priority
    />
  );
}

export default function LeadModal() {
  const [open, setOpen] = useState(false);
  const [phase, setPhase] = useState<Phase>("ask");
  const [step, setStep] = useState(0);
  const [history, setHistory] = useState<{ q: string; a: string }[]>([]);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [login, setLogin] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const reset = useCallback(() => {
    setPhase("ask");
    setStep(0);
    setHistory([]);
    setValue("");
    setError("");
  }, []);

  const close = useCallback(() => setOpen(false), []);

  // Open the modal whenever any CTA outside the modal is clicked.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = e.target as HTMLElement | null;
      const cta = el?.closest("a.cta, button.cta");
      if (!cta) return;
      if (cta.closest("[data-lead-modal]")) return;
      e.preventDefault();
      reset();
      setLogin(loginStamp());
      setOpen(true);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [reset]);

  // Body scroll lock + Escape to close.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  // Focus the prompt + keep the latest line in view.
  useEffect(() => {
    if (!open) return;
    if (phase === "ask") {
      const t = setTimeout(() => inputRef.current?.focus(), 60);
      return () => clearTimeout(t);
    }
  }, [open, phase, step]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [history, phase, step]);

  // Mouse wheel scrolls one line at a time, smoothly — like a real terminal.
  useEffect(() => {
    if (!open) return;
    const el = scrollRef.current;
    if (!el) return;
    const LINE = 24; // ~one terminal line
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      el.scrollBy({ top: Math.sign(e.deltaY) * LINE, behavior: "smooth" });
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [open]);

  // Cleanup the working timer on unmount.
  useEffect(() => () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phase !== "ask") return;
    const current = STEPS[step];
    if (!current.validate(value)) {
      setError(current.error);
      return;
    }
    const answer = current.format ? current.format(value) : value.trim();
    setHistory((h) => [...h, { q: current.question, a: answer }]);
    setValue("");
    setError("");
    setPhase("working");
    timerRef.current = setTimeout(() => {
      if (step + 1 >= STEPS.length) {
        setPhase("done");
      } else {
        setStep((s) => s + 1);
        setPhase("ask");
      }
    }, 1100);
  };

  if (!open) return null;

  return createPortal(
    <div
      className="lead-overlay"
      data-lead-modal
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        className="cc-win"
        role="dialog"
        aria-modal="true"
        aria-label="Cadastro"
        onMouseDown={(e) => {
          // Any click inside the window keeps the prompt focused, like a real terminal.
          if (!(e.target as HTMLElement).closest(".cc-light")) {
            inputRef.current?.focus();
          }
        }}
      >
        <div className="cc-bar">
          <div className="cc-lights">
            <button type="button" className="cc-light r" onClick={close} aria-label="Fechar">
              ✕
            </button>
            <span className="cc-light y" aria-hidden="true">
              −
            </span>
            <span className="cc-light g" aria-hidden="true">
              +
            </span>
          </div>
          <span className="cc-tab">⌥⌘1</span>
        </div>

        <div className="cc-term">
          <div className="cc-scroll" ref={scrollRef}>
            {/* welcome banner — Claude Code CLI */}
            <div className="cc-line">Last login: {login} on console</div>
            <div className="cc-line">freela-de-elite@ ~ % claude</div>
            <div className="cc-banner">
              <ClaudeBot />
              <div className="cc-banner-text">
                <div className="cc-line">
                  <b className="cc-white">Claude Code</b>{" "}
                  <span className="cc-dim">v2.1.114</span>
                </div>
                <div className="cc-line cc-dim">Opus 4.7 (1M context) · Claude Max</div>
                <div className="cc-line cc-dim">/Users/gabrielbarbosa</div>
              </div>
            </div>

            {/* answered history */}
            {history.map((h, i) => (
              <div key={STEPS[i].key}>
                <div className="cc-line cc-q">
                  <span className="cc-bullet">●</span> {h.q}
                </div>
                <div className="cc-line cc-ans">
                  <span className="cc-prompt">❯</span> {h.a}
                </div>
              </div>
            ))}

            {phase === "working" && (
              <>
                <div className="cc-line cc-work">
                  <span className="cc-star">✶</span> Working…
                </div>
                <div className="cc-line cc-tip">
                  {"  "}⎿{"  "}Tip: Share Claude Code and earn R$55 of extra usage · /passes
                </div>
              </>
            )}

            {phase === "ask" && (
              <>
                <div className="cc-line cc-q">
                  <span className="cc-bullet">●</span> {STEPS[step].question}
                </div>
                {error && <div className="cc-line cc-err">✗ {error}</div>}
                <form className="cc-inputbox" onSubmit={submit}>
                  <span className="cc-prompt">❯</span>
                  <span className="cc-entry">
                    <span className="cc-typed">{value}</span>
                    <span className="cc-block" />
                  </span>
                  <input
                    ref={inputRef}
                    className="cc-capture"
                    type={STEPS[step].inputMode === "email" ? "email" : "text"}
                    inputMode={STEPS[step].inputMode}
                    value={value}
                    autoComplete="off"
                    spellCheck={false}
                    onChange={(e) => {
                      setValue(e.target.value);
                      if (error) setError("");
                    }}
                  />
                </form>
              </>
            )}

            {phase === "done" && (
              <>
                <div className="cc-line cc-q">
                  <span className="cc-bullet ok">●</span> Pronto, {history[0]?.a}! Você entrou na
                  lista de acesso antecipado.
                </div>
                <div className="cc-line cc-ans">
                  <span className="cc-prompt ok">✓</span> O curso{" "}
                  <span className="cc-white">ainda vai ser lançado</span>. Assim que abrir, você
                  recebe o aviso em primeira mão no email e no WhatsApp.
                </div>
                <div className="cc-line cc-ans">
                  <span className="cc-prompt ok">✓</span> Seu preço promocional de{" "}
                  <span className="cc-white">R$97</span> (em vez de R$497) está travado.
                </div>
                <div className="cc-line cc-ans">
                  <span className="cc-prompt" style={{ visibility: "hidden" }}>
                    ❯
                  </span>{" "}
                  fica de olho no:{" "}
                  <a
                    className="cc-ig"
                    href="https://www.instagram.com/ogabarbosa/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    instagram.com/ogabarbosa
                  </a>
                </div>
              </>
            )}

            <div className="cc-foot">
              <span className="cc-dim">● xhigh · /effort</span>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
