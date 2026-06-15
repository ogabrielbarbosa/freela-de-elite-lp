import type { CSSProperties } from "react";
import { CtaBlock, CtaButton } from "./components/Cta";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Github,
  Instagram,
  VerifyMark,
  Whatsapp,
  XMark,
} from "./components/icons";
import Effects from "./components/Effects";
import LeadModal from "./components/LeadModal";

/** Inline `--d` stagger delay helper. */
const sd = (d: string): CSSProperties => ({ ["--d" as string]: d }) as CSSProperties;

const MODULES = [
  {
    n: "01",
    title: "Comece Aqui",
    desc: "Claude Code instalado e workspace organizado. Você sai usando já na primeira aula.",
    aulas: "3 aulas",
  },
  {
    n: "02",
    title: "Antes de Escrever Uma Linha",
    desc: "Projeto do cliente montado, ICP e oferta travados, com duas skills prontas.",
    aulas: "3 aulas",
  },
  {
    n: "03",
    title: "Copy que Vende",
    desc: "Briefing, headline e copy completa numa skill só, com a página inteira escrita pra você editar.",
    aulas: "3 aulas",
  },
  {
    n: "04",
    title: "Criando a Página",
    desc: "Do Claude Design ao código, a landing montada e rodando na sua máquina.",
    aulas: "4 aulas",
  },
  {
    n: "05",
    title: "Subindo Seu Site",
    desc: "Rastreamento, deploy na Vercel e domínio próprio. Sua primeira página no ar.",
    aulas: "3 aulas",
  },
  {
    n: "06",
    title: "Prospecção e Vendas",
    desc: "O prospector.py, as 5 contas de cold email e o roteiro de Loom que fecham a venda sem você aparecer.",
    aulas: "6 aulas",
  },
  {
    n: "07",
    title: "Bônus",
    desc: "Biblioteca de headlines, skills extras, modelo de contrato e o próximo passo depois da primeira venda.",
    aulas: "4 aulas",
  },
];

const FAQ = [
  {
    q: "Preciso ser um programador muito bom?",
    a: "Não. Se você entende o básico e sabe mexer no terminal, dá conta. O Claude Code faz o trabalho pesado de código. Você conduz.",
  },
  {
    q: "Vou ter que aparecer, gravar reels ou ligar pra cliente?",
    a: "Não. O contato é por cold email e por um Loom gravando a tela. Sua cara não aparece em momento nenhum.",
  },
  {
    q: "E se eu nunca vendi nada na vida?",
    a: "É o caso da maioria que entra. Por isso o sistema vem pronto: o que falar, pra quem mandar e como fechar já está montado. Você não escreve do zero.",
  },
  {
    q: "Trabalho o dia todo, não tenho tempo pra mais um curso.",
    a: "As aulas têm de 3 a 12 minutos e você faz junto. Não é aquele curso de 40 horas que você compra e larga na metade. Dá pra fechar a primeira venda em 14 dias fazendo no intervalo do trabalho.",
  },
  {
    q: "Nunca usei Claude Code. Consigo acompanhar?",
    a: "Sim. O primeiro módulo te coloca de pé com a ferramenta do zero. Você instala, configura e já sai usando.",
  },
  {
    q: "O que acontece depois das 26 aulas?",
    a: "Você fica com as 7 skills, o prospector.py, as contas de cold email e a landing modelo instalados na sua máquina. É seu pra reusar com cada cliente novo.",
  },
  {
    q: "Como funciona a garantia?",
    a: "7 dias. Não gostou, pede o reembolso por e-mail e recebe de volta. Sem burocracia.",
  },
  {
    q: "Por quanto tempo terei acesso?",
    a: "Compra única, acesso vitalício. Sem mensalidade.",
  },
  {
    q: "Quais as formas de pagamento?",
    a: "Cartão (em até 12x de R$9,90) ou Pix, pela Hubla. Acesso liberado na hora.",
  },
];

function Seals() {
  return (
    <div className="seals reveal" data-stagger style={sd("320ms")}>
      <span className="seal">
        <span className="ck">
          <Check />
        </span>{" "}
        Acesso imediato após o pagamento
      </span>
      <span className="seal">
        <span className="ck">
          <Check />
        </span>{" "}
        Garantia de 7 dias
      </span>
      <span className="seal">
        <span className="ck">
          <Check />
        </span>{" "}
        Assets prontos pra reusar
      </span>
    </div>
  );
}

function HeroTerminal() {
  return (
    <div className="mockup">
      <div className="bar">
        <div className="dots">
          <i />
          <i />
          <i />
        </div>
        <span className="title">
          claude code · <b>landing.tsx</b>
        </span>
      </div>
      <div className="terminal">
        <div className="ln">
          <span className="pr">$</span> claude code
        </div>
        <div className="ln">
          <span className="pr">{">"}</span> criar landing page para clínica odontológica
        </div>
        <div className="ln">
          <span className="dim">⠋ analisando briefing do cliente...</span>
        </div>
        <div className="ln">
          <span className="ok">✓</span> gerando estrutura ·{" "}
          <span className="file">hero, serviços, prova, contato</span>
        </div>
        <div className="ln">
          <span className="ok">✓</span> escrevendo copy · headline + CTA
        </div>
        <div className="ln">
          <span className="ok">✓</span> aplicando design system ·{" "}
          <span className="file">brand.css</span>
        </div>
        <div className="ln">
          <span className="ok">✓</span> deploy na Vercel →{" "}
          <span className="file">clinica-sorriso.com.br</span> no ar
        </div>
        <div className="ln">
          <span className="pr">{">"}</span> <span className="cur" />
        </div>
      </div>
    </div>
  );
}

/** Split editor + browser preview mockup (mechanism block). */
function EditorPreviewMockup() {
  const previewDot: CSSProperties = {
    width: 9,
    height: 9,
    borderRadius: "50%",
    background: "#cfd8e6",
    display: "block",
  };
  return (
    <div className="mockup">
      <div className="bar">
        <div className="dots">
          <i />
          <i />
          <i />
        </div>
        <span className="title">
          claude code · <b>building landing</b>
        </span>
      </div>
      <div className="editor-split">
        <div className="terminal">
          <div className="ln">
            <span className="pr">$</span> claude code
          </div>
          <div className="ln">
            <span className="ok">✓</span> hero
          </div>
          <div className="ln">
            <span className="ok">✓</span> serviços
          </div>
          <div className="ln">
            <span className="ok">✓</span> prova social
          </div>
          <div className="ln">
            <span className="ok">✓</span> contato
          </div>
          <div className="ln">
            <span className="pr">{">"}</span> build <span className="ok">ok</span>
          </div>
          <div className="ln">
            <span className="pr">{">"}</span> <span className="cur" />
          </div>
        </div>
        <div className="preview">
          <div className="pv-bar">
            <div className="dots" style={{ display: "flex", gap: 5 }}>
              <i style={previewDot} />
              <i style={previewDot} />
            </div>
            <div className="pv-url">clinica-sorriso.com.br</div>
          </div>
          <div className="pv-body">
            <div className="pv-h" />
            <div className="pv-h2" />
            <div className="pv-h3" />
            <div className="pv-btn" />
            <div className="pv-card" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ============ TOPBAR ============ */}
      <header className="topbar">
        <div className="container">
          <span className="wordmark">
            <span className="glyph">{">_"}</span> Freela de Elite
          </span>
          <a className="cta" href="#preco">
            ENTRAR NA LISTA · R$97
          </a>
        </div>
      </header>

      <main id="top">
        {/* ============ BLOCO 1 — HERO ============ */}
        <section className="hero dotgrid" id="hero">
          <div className="hero-glow" />
          <div className="container">
            <div className="hero-a">
              <div className="col">
                <h1 className="hero-h1 reveal">
                  Feche sua primeira venda de R$500 a R$1.000 vendendo{" "}
                  <span className="kw">landing pages feitas por IA</span>.
                </h1>
                <p className="hero-sub reveal" data-stagger style={sd("120ms")}>
                  Um sistema pronto que gera a página, encontra o cliente e fecha a venda. Você
                  só conduz. Primeira venda em até 14 dias, sem aparecer, sem reels, sem ligação.
                </p>
                <div className="reveal-s" data-stagger style={sd("220ms")}>
                  <div className="offerbox">
                    <span className="offer-tag">
                      <span className="dotpulse" /> Preço promocional de acesso antecipado
                    </span>
                    <div className="price">
                      <span className="was">R$497</span> R$97
                    </div>
                    <div className="inst">ou 12x de R$9,90</div>
                    <div className="terms">No lançamento volta pra R$497</div>
                  </div>
                </div>
                <div className="cta-wrap reveal">
                  <CtaButton />
                  <div className="cta-micro">
                    <span>Entrada na lista de espera</span>
                    <span className="dot" />
                    <span>Valor promocional garantido</span>
                    <span className="dot" />
                    <span>Sem compromisso</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ BLOCO 2 — IDENTIFICACAO ============ */}
        <section className="section" id="identificacao">
          <div className="container">
            <h2 className="section-title center reveal">
              Se você já pensou alguma dessas coisas, esse curso{" "}
              <span className="kw">foi feito pra você</span>:
            </h2>
            <div className="cards-3" style={{ marginTop: 48 }}>
              {[
                "Eu sei programar. Só não faço ideia de como conseguir cliente.",
                "Pra vender online parece que todo mundo tem que virar influencer. Eu não quero aparecer.",
                "Já mandei proposta no 99freelas e na Workana e nunca fechei nada por causa do preço.",
                "Fico empilhando curso técnico e o dinheiro continua não vindo.",
                "Tenho um nó na garganta só de pensar em gravar vídeo ou ligar pra cliente.",
                "Queria uma renda extra com código, mas não sei nem por onde começar a vender.",
              ].map((quote, i) => (
                <div
                  key={i}
                  className="quote-card reveal"
                  data-stagger
                  style={sd(`${i * 90}ms`)}
                >
                  <span className="qmark">“</span>
                  <p>{quote}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ BLOCO 3 — ANTES E DEPOIS ============ */}
        <section className="section section--alt" id="antes-depois">
          <div className="container">
            <h2 className="section-title center reveal">
              A diferença entre tentar vender sozinho e{" "}
              <span className="kw">ter um sistema</span>:
            </h2>
            <div className="compare" style={{ marginTop: 48 }}>
              <div className="cmp-card cmp--bad reveal-l">
                <h3>
                  <span className="ic">
                    <XMark />
                  </span>{" "}
                  Sem o Freela de Elite
                </h3>
                <ul className="cmp-list">
                  {[
                    "Manda proposta no freela e perde pra quem cobra mais barato",
                    "Acha que o que falta é mais um curso técnico",
                    "Trava na hora de falar com o cliente",
                    "Acredita que precisa virar criador de conteúdo pra vender",
                    "Meses passando sem fechar a primeira venda",
                  ].map((t, i) => (
                    <li key={i}>
                      <span className="mk">
                        <XMark />
                      </span>{" "}
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="cmp-card cmp--good reveal-r">
                <h3>
                  <span className="ic">
                    <span className="ck">
                      <Check />
                    </span>
                  </span>{" "}
                  Com o Freela de Elite
                </h3>
                <ul className="cmp-list">
                  <li>
                    <span className="mk">
                      <Check />
                    </span>{" "}
                    O <strong>prospector.py</strong> garimpa empresas e e-mails enquanto você
                    dorme
                  </li>
                  <li>
                    <span className="mk">
                      <Check />
                    </span>{" "}
                    7 skills de Claude Code montam a landing e a copy em minutos
                  </li>
                  <li>
                    <span className="mk">
                      <Check />
                    </span>{" "}
                    Cold email e um Loom de tela fecham a venda sem você aparecer
                  </li>
                  <li>
                    <span className="mk">
                      <Check />
                    </span>{" "}
                    Uma landing modelo que você adapta em uns 10 minutos por cliente
                  </li>
                  <li>
                    <span className="mk">
                      <Check />
                    </span>{" "}
                    Primeira venda em até 14 dias
                  </li>
                </ul>
              </div>
            </div>
            <div style={{ marginTop: 48 }}>
              <CtaBlock />
            </div>
          </div>
        </section>

        {/* ============ BLOCO 4 — MERCADO (navy) ============ */}
        <section className="section section--navy dotgrid" id="mercado">
          <div className="navy-glow" />
          <div className="container center">
            <span className="eyebrow eyebrow--center reveal">// O MERCADO</span>
            <h2
              className="section-title center reveal"
              style={{ maxWidth: 640, marginInline: "auto" }}
            >
              Todo negócio precisa de uma página.
            </h2>
            <div
              className="mercado-tags reveal"
              style={{ justifyContent: "center", maxWidth: 560, marginInline: "auto" }}
            >
              <span className="tag">Dentista</span>
              <span className="tag">Advogado</span>
              <span className="tag">Barbearia</span>
              <span className="tag">Loja</span>
              <span className="tag">Personal</span>
            </div>
            <p
              className="reveal"
              style={{ maxWidth: 480, margin: "0 auto", fontSize: "1.05rem" }}
            >
              A maioria não sabe fazer, nem onde contratar. Você monta em minutos.
            </p>

            <div className="bignum reveal-s">
              Uma landing vale <span className="val">R$500 a R$1.000</span>.
            </div>
            <p className="reveal" style={{ fontSize: "1.05rem" }}>
              A primeira venda já paga o curso. O resto é lucro.
            </p>
          </div>
        </section>

        {/* ============ BLOCO 5 — MECANISMO (split) ============ */}
        <section className="section" id="mecanismo">
          <div className="container">
            <div className="split">
              <div className="prose reveal-l">
                <span className="eyebrow">// POR QUE FUNCIONA</span>
                <h2 className="section-title" style={{ marginBottom: 22 }}>
                  Por que o Freela de Elite funciona{" "}
                  <span className="kw">quando outro curso não funciona?</span>
                </h2>
                <p>A maioria dos cursos te ensina a fazer a landing. E para por aí.</p>
                <p>
                  Resultado: você sabe construir a página e continua sem cliente. Sabe a
                  ferramenta, não sabe vender.
                </p>
                <p>
                  O Freela de Elite não é curso de “como fazer landing page”. É um{" "}
                  <strong>sistema fechado de prospecção e venda</strong>. Ele entrega as três
                  coisas que faltam: <strong>quem procurar, o que mandar e como fechar.</strong>{" "}
                  Tudo sem você aparecer.
                </p>
                <p>
                  Não é sua incapacidade de programar que te trava. É que ninguém te entregou o
                  sistema de venda pronto. Esse é o buraco que o curso preenche.
                </p>
              </div>
              <div className="reveal-r">
                <div className="tilt" id="mechTilt">
                  <EditorPreviewMockup />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ BLOCO 6 — MODULOS (carousel) ============ */}
        <section className="section section--alt" id="modulos">
          <div className="container">
            <div className="carousel-head">
              <div>
                <h2 className="section-title reveal">Veja tudo que você recebe hoje</h2>
                <p className="section-lead reveal" style={{ marginTop: 14 }}>
                  Um sistema completo, do zero à primeira venda. São{" "}
                  <strong>26 aulas curtas</strong>, de 3 a 12 minutos:
                </p>
              </div>
              <div className="carousel-ctrls reveal">
                <button id="carPrev" aria-label="Anterior" type="button">
                  <ChevronLeft />
                </button>
                <button id="carNext" aria-label="Próximo" type="button">
                  <ChevronRight />
                </button>
              </div>
            </div>
            <div className="carousel" id="carousel">
              {MODULES.map((m, i) => (
                <article
                  key={m.n}
                  className="mod-card reveal"
                  data-stagger
                  style={sd(`${i * 70}ms`)}
                >
                  <div className="mod-head">
                    <div>
                      <div className="num">MÓDULO {m.n}</div>
                    </div>
                    <div className="n">{m.n}</div>
                  </div>
                  <div className="mod-body">
                    <h3>{m.title}</h3>
                    <p>{m.desc}</p>
                    <span className="aulas">{m.aulas}</span>
                  </div>
                </article>
              ))}
            </div>
            <div className="carousel-progress" style={{ margin: "0 auto" }}>
              <i id="carBar" />
            </div>
            <p
              className="center reveal"
              style={{
                margin: "34px auto 0",
                maxWidth: 680,
                fontSize: "1.08rem",
                color: "var(--ink)",
              }}
            >
              No fim, sua primeira landing já está no ar e o sistema de prospecção já está
              rodando.
            </p>
            <div style={{ marginTop: 40 }}>
              <CtaBlock />
            </div>
          </div>
        </section>

        {/* ============ BLOCO 7 — MENTOR ============ */}
        <section className="section" id="mentor">
          <div className="container">
            <div className="mentor-grid">
              <div className="mentor-photo reveal-l">
                <div className="photo-frame">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/gabriel.png" alt="Gabriel" className="mentor-img" />
                </div>
                <a
                  className="float-badge fb-1"
                  href="https://instagram.com/ogabarbosa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram /> @ogabarbosa{" "}
                  <span className="verify-ic">
                    <VerifyMark />
                  </span>
                </a>
                <a
                  className="float-badge fb-2"
                  href="https://github.com/ogabrielbarbosa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github /> GitHub
                </a>
                <a
                  className="float-badge fb-3"
                  href="http://wa.me/5512996859020"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Whatsapp /> WhatsApp
                </a>
              </div>
              <div className="mentor-bio reveal-r">
                <span className="eyebrow">// QUEM VAI TE ENSINAR</span>
                <h2 className="section-title">Conheça o Gabriel</h2>
                <p style={{ marginTop: 16, fontSize: "1.08rem" }}>
                  Profissional de tecnologia ativo, com empresa no próprio nome.
                </p>
                <ul>
                  <li>
                    <span className="ck">
                      <Check />
                    </span>{" "}
                    Conseguiu o primeiro emprego como dev usando esse mesmo método
                  </li>
                  <li>
                    <span className="ck">
                      <Check />
                    </span>{" "}
                    Já vende landing page pra cliente real, sem aparecer
                  </li>
                  <li>
                    <span className="ck">
                      <Check />
                    </span>{" "}
                    Perfil verificado, mais de 8 mil seguidores na comunidade dev
                  </li>
                </ul>
                <blockquote className="mentor-quote">
                  “Eu sou a prova viva que funciona, pois arrumei meu primeiro trabalho com
                  isso.”
                </blockquote>
                <p>
                  Quando ele te ensina a prospectar e fechar, é porque ele faz isso de verdade.
                  Essa é a diferença entre aprender com quem dá aula e aprender com quem faz.
                </p>
                <div style={{ marginTop: 30 }}>
                  <CtaBlock align="left" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ BLOCO 8 — GARANTIA ============ */}
        <section className="section section--alt" id="garantia">
          <div className="container">
            <div className="guarantee">
              <div className="shield-wrap reveal-s">
                <svg
                  className="shield"
                  viewBox="0 0 220 252"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="sg" x1="0" y1="0" x2="0.35" y2="1">
                      <stop offset="0" stopColor="#2c3e70" />
                      <stop offset="1" stopColor="#161f44" />
                    </linearGradient>
                    <linearGradient id="sgSheen" x1="0" y1="0" x2="0.55" y2="0.9">
                      <stop offset="0" stopColor="#ffffff" stopOpacity="0.22" />
                      <stop offset="0.55" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="sgSeal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#22c55e" />
                      <stop offset="1" stopColor="#15893f" />
                    </linearGradient>
                  </defs>

                  {/* corpo do escudo */}
                  <path
                    d="M110 10l86 29v82c0 61-42 101-86 124-44-23-86-63-86-124V39z"
                    fill="url(#sg)"
                    stroke="rgba(255,255,255,.55)"
                    strokeWidth="2.5"
                  />
                  {/* brilho diagonal */}
                  <path
                    d="M110 10l86 29v82c0 61-42 101-86 124-44-23-86-63-86-124V39z"
                    fill="url(#sgSheen)"
                  />
                  {/* contorno interno fino */}
                  <path
                    d="M110 28l70 24v67c0 50-34 82-70 102-36-20-70-52-70-102V52z"
                    fill="none"
                    stroke="rgba(255,255,255,.14)"
                    strokeWidth="1.5"
                  />

                  {/* selo verde */}
                  <circle cx="110" cy="90" r="37" fill="rgba(0,0,0,.18)" />
                  <circle
                    cx="110"
                    cy="88"
                    r="37"
                    fill="url(#sgSeal)"
                    stroke="rgba(255,255,255,.92)"
                    strokeWidth="3"
                  />
                  <path
                    d="M93 89l12 12 23-25"
                    stroke="#fff"
                    strokeWidth="6.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />

                  {/* textos */}
                  <text
                    x="110"
                    y="170"
                    textAnchor="middle"
                    fill="#fff"
                    fontFamily="var(--font-mono), monospace"
                    fontWeight="700"
                    fontSize="30"
                    letterSpacing="-1"
                  >
                    7 DIAS
                  </text>
                  <text
                    x="110"
                    y="191"
                    textAnchor="middle"
                    fill="#aebcdc"
                    fontFamily="var(--font-mono), monospace"
                    fontSize="9.5"
                    letterSpacing="2.5"
                  >
                    GARANTIA TOTAL
                  </text>
                </svg>
              </div>
              <div className="reveal-r">
                <span className="eyebrow">// SEM RISCO</span>
                <h2 className="section-title">Garantia total de 7 dias</h2>
                <p style={{ marginTop: 16, fontSize: "1.08rem" }}>
                  Se você entrar, assistir às aulas e sentir que não é pra você, pede o reembolso
                  e recebe o dinheiro de volta. Sem perguntas, sem burocracia.{" "}
                  <strong>O risco é zero.</strong>
                </p>
                <ul className="gtee-list">
                  <li>
                    <span className="ic">
                      <svg
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v5l3 2" />
                      </svg>
                    </span>
                    <div>
                      <b>7 dias completos.</b>
                      <span>Tempo de sobra pra assistir, testar e decidir.</span>
                    </div>
                  </li>
                  <li>
                    <span className="ic">
                      <svg
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="6" width="20" height="12" rx="2" />
                        <circle cx="12" cy="12" r="2.5" />
                      </svg>
                    </span>
                    <div>
                      <b>Reembolso rápido.</b>
                      <span>Devolução direto na sua conta.</span>
                    </div>
                  </li>
                  <li>
                    <span className="ic">
                      <svg
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="m3 7 9 6 9-6" />
                      </svg>
                    </span>
                    <div>
                      <b>Sem complicação.</b>
                      <span>Manda um e-mail e pronto.</span>
                    </div>
                  </li>
                </ul>
                <div style={{ marginTop: 26 }}>
                  <CtaBlock align="left" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ BLOCO 9 — QUALIFICACAO ============ */}
        <section className="section" id="qualificacao">
          <div className="container">
            <h2 className="section-title center reveal">
              Pra ser justo com o <span className="kw">seu tempo</span>:
            </h2>
            <div className="compare" style={{ marginTop: 48 }}>
              <div className="cmp-card cmp--blue reveal-l">
                <h3>
                  <span className="ic">
                    <span className="ck">
                      <Check />
                    </span>
                  </span>{" "}
                  É pra você se:
                </h3>
                <ul className="cmp-list">
                  {[
                    "Já sabe programar (ou está aprendendo) e quer uma renda extra",
                    "Não quer virar criador de conteúdo pra vender",
                    "Está cansado de brigar por preço no freela",
                    "Quer um sistema pronto, não mais teoria empilhada",
                    "Topa fazer junto, com o Claude Code aberto",
                  ].map((t, i) => (
                    <li key={i}>
                      <span className="mk">
                        <Check />
                      </span>{" "}
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="cmp-card cmp--bad reveal-r">
                <h3>
                  <span className="ic">
                    <XMark />
                  </span>{" "}
                  Não é pra você se:
                </h3>
                <ul className="cmp-list">
                  {[
                    "Quer ganhar dinheiro sem fazer nada",
                    "Procura promessa de renda garantida",
                    "Não pretende abrir o terminal nem uma vez",
                  ].map((t, i) => (
                    <li key={i}>
                      <span className="mk">
                        <XMark />
                      </span>{" "}
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============ BLOCO 10 — FAQ ============ */}
        <section className="section section--alt" id="faq">
          <div className="container">
            <div className="center" style={{ marginBottom: 40 }}>
              <span className="eyebrow eyebrow--center reveal">// TIRE SUAS DÚVIDAS</span>
              <h2 className="section-title center reveal">Perguntas frequentes</h2>
            </div>
            <div className="faq reveal">
              {FAQ.map((item, i) => (
                <div className="faq-item" key={i}>
                  <button className="faq-q" type="button">
                    {item.q}
                    <span className="ico" />
                  </button>
                  <div className="faq-a">
                    <div className="inner">{item.a}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ BLOCO 11 — PRECO FINAL (navy) ============ */}
        <section className="section section--navy dotgrid" id="preco">
          <div className="navy-glow" />
          <div className="container">
            <div className="price-final reveal-s">
              <div className="price-card">
                <div className="label">Freela de Elite · Acesso Antecipado</div>
                <h3>Sistema de Landing Pages com Claude Code</h3>
                <ul className="pc-list">
                  {[
                    "Acesso garantido assim que o curso for lançado",
                    "26 aulas práticas, do zero à primeira venda",
                    "7 skills de Claude Code (sua biblioteca pra reusar)",
                    "prospector.py + 5 contas de cold email",
                    "Landing modelo + roteiro de Loom sem aparecer",
                    "Garantia de 7 dias",
                    "Acesso vitalício",
                  ].map((t, i) => (
                    <li key={i}>
                      <span className="ck">
                        <Check />
                      </span>{" "}
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="big">
                  <span className="was">R$497</span> R$97
                </div>
                <p className="inst">ou até 12x de R$9,90</p>
                <p className="launch-note">
                  No lançamento o valor sobe pra <b>R$497</b>. Entrando na lista agora, você
                  trava os <b>R$97</b>.
                </p>
                <div className="cta-wrap" style={{ marginTop: 8 }}>
                  <CtaButton label="GARANTIR MEU ACESSO ANTECIPADO" />
                </div>
                <p className="micro2">
                  Entrada na lista de espera | Preço de R$97 travado | Sem compromisso
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* sticky mobile CTA */}
      <div className="sticky-cta" id="stickyCta">
        <div className="sp">
          <div className="p">
            <span className="was">R$497</span> R$97
          </div>
          <small>Acesso antecipado · 12x de R$9,90</small>
        </div>
        <a className="cta" href="#preco">
          ENTRAR NA LISTA ▸
        </a>
      </div>

      <Effects />
      <LeadModal />
    </>
  );
}
