import { Play } from "./icons";

const STANDARD_LABEL = "GARANTIR MEU ACESSO ANTECIPADO";
const CHECKOUT_HREF = "#preco";

/** The green CTA button with the ▶ glyph (icon only — no video). */
export function CtaButton({
  label = STANDARD_LABEL,
  href = CHECKOUT_HREF,
}: {
  label?: string;
  href?: string;
}) {
  return (
    <a className="cta" href={href}>
      {label}{" "}
      <span className="play">
        <Play />
      </span>
    </a>
  );
}

/** Standard microcopy that repeats under every CTA. */
export function CtaMicro() {
  return (
    <div className="cta-micro">
      <span>Entrada na lista de espera</span>
      <span className="dot" />
      <span>Valor promocional garantido</span>
      <span className="dot" />
      <span>Sem compromisso</span>
    </div>
  );
}

/** Full CTA block: button + microcopy, centered or left-aligned. */
export function CtaBlock({
  label = STANDARD_LABEL,
  align = "center",
}: {
  label?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`cta-wrap${align === "left" ? " left" : ""}`}>
      <CtaButton label={label} />
      <CtaMicro />
    </div>
  );
}
