import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Zap,
  Thermometer,
  Gauge,
  ShieldCheck,
  Wrench,
  Activity,
  Trophy,
  ChevronDown,
  MessageCircle,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import logoAsset from "@/assets/gutweaks-logo.png.asset.json";
import { QuoteChat } from "@/components/QuoteChat";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  return (
    <div className="min-h-screen">
      <Nav onQuote={() => setQuoteOpen(true)} />
      <Hero onQuote={() => setQuoteOpen(true)} />
      <Stats />
      <Services onQuote={() => setQuoteOpen(true)} />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA onQuote={() => setQuoteOpen(true)} />
      <Footer />
      <FloatingCTA onQuote={() => setQuoteOpen(true)} />
      <QuoteChat open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}

/* -------- NAV -------- */
function Nav({ onQuote }: { onQuote: () => void }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={logoAsset.url} alt="GuTweaks" className="h-10 w-10 object-contain" />
          <div className="leading-tight">
            <p className="text-sm font-bold tracking-tight">GuTweaks</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Pro Optimization</p>
          </div>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#servicos" className="hover:text-foreground">Serviços</a>
          <a href="#processo" className="hover:text-foreground">Como funciona</a>
          <a href="#depoimentos" className="hover:text-foreground">Resultados</a>
          <a href="#faq" className="hover:text-foreground">FAQ</a>
        </nav>
        <button
          onClick={onQuote}
          className="inline-flex items-center gap-2 rounded-lg brand-gradient px-4 py-2 text-sm font-semibold text-brand-foreground transition-transform hover:scale-[1.02]"
        >
          <Sparkles className="h-4 w-4" />
          Fazer orçamento
        </button>
      </div>
    </header>
  );
}

/* -------- HERO -------- */
function Hero({ onQuote }: { onQuote: () => void }) {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="abstract-lines -z-10" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/2 -z-10 hidden -translate-y-1/2 opacity-[0.06] md:block"
      >
        <img src={logoAsset.url} alt="" className="h-[520px] w-[520px] object-contain" />
      </div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/40 to-background" />

      <div className="container-x grid gap-12 py-20 md:grid-cols-[1.1fr_1fr] md:py-28 lg:py-32">
        <div className="fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs">
            <span className="h-2 w-2 rounded-full bg-emerald-400 pulse-dot" />
            <span className="text-muted-foreground">Atendendo agora</span>
          </div>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-gradient">Otimização profissional</span>
            <br />
            <span className="text-foreground">de PC ao extremo.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Ajustes de BIOS, overclock seguro, redução de input lag e estabilidade total.
            Atendimento 100% personalizado, feito sob medida pra sua máquina e o seu jogo.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={onQuote}
              className="inline-flex items-center gap-2 rounded-xl brand-gradient px-6 py-3.5 text-sm font-semibold text-brand-foreground shadow-[0_10px_40px_-10px_var(--brand)] transition-transform hover:scale-[1.02]"
            >
              Fazer orçamento personalizado
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface/60 px-6 py-3.5 text-sm font-semibold hover:bg-accent"
            >
              Ver serviços
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-xs uppercase tracking-widest text-muted-foreground">
            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-brand" /> Overclock seguro</span>
            <span className="flex items-center gap-2"><Zap className="h-4 w-4 text-brand" /> Zero delay</span>
            <span className="flex items-center gap-2"><Activity className="h-4 w-4 text-brand" /> Estabilidade total</span>
          </div>
        </div>

        {/* Feature cards column */}
        <div className="grid content-start gap-3">
          <FeatureCard
            index="01"
            label="Zero Delay"
            title="FPS alto e resposta imediata"
            desc="Latência praticamente imperceptível — cada movimento traduzido em performance real."
            icon={<Zap className="h-5 w-5" />}
          />
          <FeatureCard
            index="02"
            label="Estabilidade"
            title="Temperaturas sob controle"
            desc="Sistema tunado sem travadas, sem stutter e sem esquentar em partidas longas."
            icon={<Thermometer className="h-5 w-5" />}
          />
          <FeatureCard
            index="03"
            label="Overclock"
            title="Máxima eficiência"
            desc="Mais performance extraída da CPU, GPU e RAM com segurança total."
            icon={<Gauge className="h-5 w-5" />}
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  index, label, title, desc, icon,
}: { index: string; label: string; title: string; desc: string; icon: React.ReactNode }) {
  return (
    <div className="surface-card group relative overflow-hidden rounded-2xl p-5 transition-colors hover:border-brand/50">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-2 text-brand">
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {label}
            </span>
            <span className="text-[10px] font-mono text-muted-foreground">{index}</span>
          </div>
          <h3 className="mt-1 text-lg font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
        </div>
      </div>
    </div>
  );
}

/* -------- STATS -------- */
function Stats() {
  const items = [
    { v: "+180", l: "FPS de ganho médio" },
    { v: "500+", l: "PCs otimizados" },
    { v: "<1ms", l: "de input lag" },
    { v: "100%", l: "clientes satisfeitos" },
  ];
  return (
    <section className="border-y border-border bg-surface/40">
      <div className="container-x grid grid-cols-2 gap-6 py-12 sm:grid-cols-4">
        {items.map((s) => (
          <div key={s.l} className="text-center">
            <p className="text-3xl font-bold text-gradient sm:text-4xl">{s.v}</p>
            <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------- SERVICES -------- */
function Services({ onQuote }: { onQuote: () => void }) {
  const items = [
    "Ajustes avançados de BIOS/UEFI",
    "Overclock seguro de CPU, GPU e RAM",
    "Regulação fina de tensões e PBO",
    "Redução de temperaturas",
    "Otimização completa do Windows",
    "Affinity de núcleos e prioridades",
    "Testes de estresse e estabilidade",
    "Diagnóstico profundo de hardware",
    "Tweaks de rede e input lag",
    "Suporte pós-otimização",
  ];
  return (
    <section id="servicos" className="py-24">
      <div className="container-x">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-brand">Serviços</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Cada máquina é única.<br />
            <span className="text-muted-foreground">Cada otimização também.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Você me conta a sua config e o que quer alcançar. Eu analiso o seu hardware e devolvo
            uma proposta técnica sob medida — sem pacote genérico, sem enrolação.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
          <div className="surface-card rounded-2xl p-8">
            <div className="mb-6 flex items-center gap-3">
              <Wrench className="h-5 w-5 text-brand" />
              <h3 className="text-xl font-semibold">Trabalhamos por orçamento</h3>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {items.map((i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Pagamento</p>
                <p className="mt-1 text-sm">PIX · Cartão · Internacional</p>
              </div>
              <button
                onClick={onQuote}
                className="inline-flex items-center gap-2 rounded-lg brand-gradient px-5 py-3 text-sm font-semibold text-brand-foreground"
              >
                Fazer orçamento <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="grid gap-6">
            <MiniCard
              icon={<Trophy className="h-5 w-5" />}
              title="Foco em competitivo"
              desc="Robustez pra Fortnite, Valorant, CS2 e outros títulos onde cada frame conta."
            />
            <MiniCard
              icon={<ShieldCheck className="h-5 w-5" />}
              title="100% seguro"
              desc="Sem risco pra sua máquina. Backup, testes de estabilidade e reversão sempre possível."
            />
            <MiniCard
              icon={<MessageCircle className="h-5 w-5" />}
              title="Atendimento direto"
              desc="Você fala diretamente comigo do começo ao fim, sem passar por atendente ou bot."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="surface-card rounded-2xl p-6">
      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface-2 text-brand">
        {icon}
      </div>
      <h4 className="text-base font-semibold">{title}</h4>
      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}

/* -------- PROCESS -------- */
function Process() {
  const steps = [
    { n: "01", t: "Você abre o orçamento", d: "Clica no botão, me passa a config do seu PC pelo chat e o que quer resolver." },
    { n: "02", t: "Analiso sua máquina", d: "Estudo cada peça, sistema e uso, e monto uma proposta feita sob medida pra você." },
    { n: "03", t: "Agendamos e otimizo", d: "Marcamos horário, faço a otimização remota com você acompanhando e testando ao vivo." },
    { n: "04", t: "Suporte contínuo", d: "Depois da entrega, seguimos em contato pra ajuste fino e qualquer dúvida futura." },
  ];
  return (
    <section id="processo" className="py-24">
      <div className="container-x">
        <p className="text-xs uppercase tracking-[0.25em] text-brand">Processo</p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Simples, transparente,<br />
          <span className="text-muted-foreground">e sob medida.</span>
        </h2>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="surface-card rounded-2xl p-6">
              <p className="text-3xl font-bold text-brand">{s.n}</p>
              <h3 className="mt-3 text-lg font-semibold">{s.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------- TESTIMONIALS -------- */
function Testimonials() {
  const items = [
    { n: "Arthur", pc: "i3-12400F + RTX 3050", txt: "Fortnite competitivo travava. Passou pra 240+ FPS estáveis e o input ficou instantâneo." },
    { n: "Renan", pc: "Ryzen 5 5600 + GTX 1660S", txt: "Salto absurdo de FPS e o PC parou de esquentar. Trabalho impecável, valeu cada real." },
    { n: "Pietro", pc: "Ryzen 7 5700X + RX 6600", txt: "Achei que meu PC não dava mais. Depois da otimização, virou outra máquina no Valorant." },
    { n: "Gabriel", pc: "i5-11400 + RTX 3060", txt: "Suporte impecável, tudo explicado no processo. Já indiquei pra vários amigos do time." },
  ];
  return (
    <section id="depoimentos" className="border-y border-border bg-surface/30 py-24">
      <div className="container-x">
        <p className="text-xs uppercase tracking-[0.25em] text-brand">Resultados reais</p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          O que dizem sobre o serviço
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((t) => (
            <figure key={t.n} className="surface-card rounded-2xl p-6">
              <p className="text-sm leading-relaxed">"{t.txt}"</p>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-semibold">{t.n}</p>
                <p className="text-xs text-muted-foreground">{t.pc}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------- FAQ -------- */
function FAQ() {
  const items = [
    {
      q: "Como é feita a otimização?",
      a: "Feita remotamente, com acesso autorizado por você. Faço backup, ajustes de BIOS, otimização do Windows, overclock quando cabível e testes de estabilidade antes de entregar.",
    },
    {
      q: "Tem risco pra minha máquina?",
      a: "Não. Todo processo é reversível, sempre com backup e ajustes dentro dos limites seguros do seu hardware. Nada de tensões absurdas ou tweaks que comprometam a vida útil.",
    },
    {
      q: "Vocês acessam meus arquivos pessoais?",
      a: "Não. O acesso é focado só no que é necessário pra otimização. Seus arquivos pessoais não são abertos, movidos nem coletados.",
    },
    {
      q: "Quanto tempo demora?",
      a: "Depende da configuração e do que vamos ajustar. Em média entre 2h e 4h, com você acompanhando via call.",
    },
    {
      q: "Vocês entram em call durante a otimização?",
      a: "Sim. Todo o processo é feito com você presente na call, podendo testar antes e depois de cada ajuste.",
    },
    {
      q: "Tem garantia ou reembolso?",
      a: "Sim. Se algo não funcionar como acordado, ajustamos até ficar redondo. Caso não seja possível, o reembolso é analisado caso a caso.",
    },
  ];
  return (
    <section id="faq" className="py-24">
      <div className="container-x grid gap-12 md:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-brand">FAQ</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Perguntas<br />frequentes
          </h2>
          <p className="mt-4 text-muted-foreground">
            Ficou alguma dúvida? Abre o orçamento e me pergunta direto no chat.
          </p>
        </div>
        <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface/40">
          {items.map((it, i) => (
            <details key={i} className="group">
              <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-left text-sm font-medium hover:bg-accent/40">
                {it.q}
                <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-5 text-sm text-muted-foreground">{it.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------- CTA -------- */
function CTA({ onQuote }: { onQuote: () => void }) {
  return (
    <section className="py-20">
      <div className="container-x">
        <div className="surface-card glow-ring relative overflow-hidden rounded-3xl p-10 text-center md:p-16">
          <div aria-hidden className="pointer-events-none absolute inset-0 opacity-40" style={{ background: "var(--gradient-radial)" }} />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
              Pronto pra extrair o <span className="text-gradient">máximo</span> do seu PC?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Abre o chat de orçamento, me passa sua config e agendamos hoje mesmo.
            </p>
            <button
              onClick={onQuote}
              className="mt-8 inline-flex items-center gap-2 rounded-xl brand-gradient px-6 py-4 text-sm font-semibold text-brand-foreground shadow-[0_20px_60px_-20px_var(--brand)] transition-transform hover:scale-[1.02]"
            >
              <Sparkles className="h-4 w-4" />
              Fazer orçamento personalizado
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------- FOOTER -------- */
function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container-x flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-2">
          <img src={logoAsset.url} alt="GuTweaks" className="h-7 w-7 object-contain" />
          <span>© {new Date().getFullYear()} GuTweaks · Pro Optimization</span>
        </div>
        <span className="text-xs">Feito por gamer, pra gamer.</span>
      </div>
    </footer>
  );
}

/* -------- FLOATING CTA -------- */
function FloatingCTA({ onQuote }: { onQuote: () => void }) {
  return (
    <button
      onClick={onQuote}
      aria-label="Abrir orçamento"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full brand-gradient px-5 py-3 text-sm font-semibold text-brand-foreground shadow-[0_20px_60px_-15px_var(--brand)] transition-transform hover:scale-[1.05]"
    >
      <MessageCircle className="h-4 w-4" />
      Orçamento
    </button>
  );
}
