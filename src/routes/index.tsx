import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, Play } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const LOGOS = [
  "Clínica Prime Estética",
  "Instituto Harmonie",
  "Dra. Mariana Estética",
  "Bodyplastia",
  "Clínica Essenza",
  "Núcleo Facial",
  "Instituto Renovare",
  "Estética Avançada",
];

const CASES = [
  { tag: "CLÍNICA DE ESTÉTICA", headline: "A FA nos ajudou a transformar contatos em pacientes todos os meses" },
  { tag: "HARMONIZAÇÃO FACIAL", headline: "Encontramos gargalos no atendimento que impediam novas avaliações" },
  { tag: "ESTÉTICA AVANÇADA", headline: "Paramos de depender só de indicação para gerar demanda qualificada" },
  { tag: "CLÍNICA PREMIUM", headline: "Organizamos o comercial e melhoramos o acompanhamento dos pacientes" },
  { tag: "PROCEDIMENTOS HIGH TICKET", headline: "Em poucas semanas, enxergamos onde as oportunidades estavam sendo perdidas" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Hero />
      <Cases />
      <Footer />
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-2xl font-black tracking-tight text-foreground">
        FA
      </span>
      <span className="h-2 w-2 rounded-full bg-neon glow-neon" />
      <span className="hidden text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground sm:inline">
        Fazendo Acontecer
      </span>
    </div>
  );
}

function Hero() {
  return (
    <section id="topo" className="relative">
      {/* Background abstract */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full opacity-30 blur-[140px]" style={{ background: "radial-gradient(circle, #95EC00 0%, transparent 70%)" }} />
        <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full opacity-20 blur-[160px]" style={{ background: "radial-gradient(circle, #95EC00 0%, transparent 70%)" }} />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-8 pb-20 lg:pt-10 lg:pb-28">
        <header className="flex items-center justify-between">
          <Logo />
          <a
            href="#form"
            className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline"
          >
            Diagnóstico gratuito →
          </a>
        </header>

        <div className="mt-14 grid gap-14 lg:mt-20 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Left */}
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-neon" />
              Para clínicas de estética e alta performance
            </div>

            <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[3.75rem]">
              Receba um{" "}
              <span className="text-neon">Diagnóstico Estratégico</span> para gerar mais{" "}
              <span className="text-neon">pacientes qualificados</span> e organizar o crescimento da sua clínica nos{" "}
              <span className="text-neon">próximos 90 dias</span>.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Mais do que atrair contatos, a FA ajuda clínicas de estética a identificarem gargalos na captação,
              atendimento, vendas e acompanhamento comercial para transformar oportunidades em pacientes reais.
            </p>

            {/* Social proof */}
            <div className="mt-12">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Clínicas e profissionais da saúde confiam na FA para estruturar crescimento com demanda, vendas e dados.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
                {LOGOS.map((name) => (
                  <div
                    key={name}
                    className="flex h-10 items-center text-[13px] font-semibold uppercase tracking-wider text-muted-foreground/70 transition-colors hover:text-foreground"
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div id="form" className="lg:sticky lg:top-8">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputCls =
    "w-full rounded-lg border border-border bg-[#0e0e0e] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-neon focus:ring-2 focus:ring-neon/30";

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-[#151515] p-8 shadow-2xl">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-neon">
          <ArrowRight className="h-5 w-5 text-black" />
        </div>
        <h3 className="text-xl font-bold text-foreground">Solicitação recebida.</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Nossa equipe entrará em contato em breve para agendar seu Diagnóstico Estratégico.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-[#2A2A2A] bg-[#151515] p-6 shadow-2xl sm:p-8"
    >
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neon">Vaga limitada</p>
        <h2 className="mt-2 text-2xl font-bold text-foreground">Solicite seu diagnóstico gratuito</h2>
      </div>

      <div className="space-y-3">
        <input required type="text" placeholder="Nome completo" className={inputCls} />
        <input required type="tel" placeholder="WhatsApp" className={inputCls} />
        <input required type="email" placeholder="E-mail" className={inputCls} />
        <input required type="text" placeholder="Nome da sua clínica" className={inputCls} />
        <input required type="text" placeholder="Cidade/Estado" className={inputCls} />

        <select required defaultValue="" className={inputCls}>
          <option value="" disabled>Qual o principal objetivo hoje?</option>
          <option>Atrair mais pacientes qualificados</option>
          <option>Melhorar o atendimento comercial</option>
          <option>Vender procedimentos de maior valor</option>
          <option>Organizar CRM e acompanhamento</option>
          <option>Aumentar previsibilidade de vendas</option>
          <option>Ainda não sei exatamente</option>
        </select>

        <select required defaultValue="" className={inputCls}>
          <option value="" disabled>Faturamento mensal aproximado da clínica</option>
          <option>Até R$30 mil/mês</option>
          <option>R$30 mil a R$80 mil/mês</option>
          <option>R$80 mil a R$150 mil/mês</option>
          <option>R$150 mil a R$300 mil/mês</option>
          <option>Acima de R$300 mil/mês</option>
        </select>

        <select required defaultValue="" className={inputCls}>
          <option value="" disabled>Já investe em tráfego pago?</option>
          <option>Sim, atualmente</option>
          <option>Já investi, mas parei</option>
          <option>Ainda não invisto</option>
          <option>Não sei responder</option>
        </select>
      </div>

      <button
        type="submit"
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-neon px-6 py-4 text-sm font-bold uppercase tracking-wider text-black transition-all hover:bg-[#B6FF35] glow-neon"
      >
        Quero receber meu diagnóstico
        <ArrowRight className="h-4 w-4" />
      </button>

      <p className="mt-3 text-center text-xs text-muted-foreground">
        Análise gratuita sujeita à disponibilidade da equipe FA.
      </p>
    </form>
  );
}

function Cases() {
  return (
    <section className="relative border-t border-border/50 bg-background py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-[160px]" style={{ background: "radial-gradient(circle, #95EC00 0%, transparent 70%)" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center rounded-full border border-neon/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-neon">
            Cases de sucesso
          </span>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Nossos resultados falam por nós
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CASES.slice(0, 3).map((c, i) => (
            <CaseCard key={i} {...c} />
          ))}
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:mx-auto lg:max-w-[66%] lg:grid-cols-2">
          {CASES.slice(3, 5).map((c, i) => (
            <CaseCard key={i} {...c} />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="#form"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-neon px-8 py-4 text-sm font-bold uppercase tracking-wider text-black transition-all hover:bg-[#B6FF35] glow-neon"
          >
            Quero receber meu diagnóstico
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function CaseCard({ tag, headline }: { tag: string; headline: string }) {
  return (
    <div className="group relative aspect-[9/14] overflow-hidden rounded-2xl border border-border bg-[#0e0e0e] transition-all hover:border-neon/40 hover:shadow-[0_0_60px_-20px_rgba(149,236,0,0.4)]">
      {/* Placeholder abstract bg */}
      <div
        className="absolute inset-0 opacity-70 transition-transform duration-700 group-hover:scale-105"
        style={{
          background:
            "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 50%, #151515 100%), radial-gradient(circle at 30% 40%, rgba(149,236,0,0.08), transparent 60%)",
        }}
      />
      {/* subtle noise/pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 70% 30%, rgba(149,236,0,0.15), transparent 50%), radial-gradient(circle at 20% 80%, rgba(255,255,255,0.04), transparent 50%)",
        }}
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

      {/* Tag */}
      <div className="absolute left-4 top-4">
        <span className="inline-flex items-center rounded-full border border-white/15 bg-black/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-foreground backdrop-blur-sm">
          {tag}
        </span>
      </div>

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neon shadow-[0_0_40px_rgba(149,236,0,0.6)] transition-transform group-hover:scale-110">
          <Play className="h-6 w-6 translate-x-0.5 fill-black text-black" />
        </div>
      </div>

      {/* Bottom content */}
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="text-sm font-semibold leading-snug text-foreground">
          {headline}
        </p>
        <div className="mt-3 flex items-center gap-2">
          <span className="text-[10px] font-black tracking-widest text-foreground">FA</span>
          <span className="h-1 w-1 rounded-full bg-neon" />
          <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">Fazendo Acontecer</span>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>Copyright © 2026 FA — Fazendo Acontecer</p>
        <div className="flex items-center gap-6">
          <a href="#" className="transition-colors hover:text-foreground">Termos de uso</a>
          <a href="#" className="transition-colors hover:text-foreground">Política de privacidade</a>
        </div>
      </div>
    </footer>
  );
}
