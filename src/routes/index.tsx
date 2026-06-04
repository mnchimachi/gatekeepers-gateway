import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Shield, Wrench, ThumbsUp, Clock, Zap, Settings, Radio, KeyRound } from "lucide-react";
import heroGate from "@/assets/hero-gate.jpg";
import motor from "@/assets/motor.jpg";
import service from "@/assets/service.jpg";
import remote from "@/assets/remote.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Martins Automações — Portões Eletrônicos em Leme-SP | Atendimento 24h" },
      { name: "description", content: "Venda, instalação, manutenção e conserto de portões eletrônicos em Leme-SP e região. Atendimento 24 horas. Orçamento sem compromisso." },
      { property: "og:title", content: "Martins Automações — Portões Eletrônicos em Leme-SP" },
      { property: "og:description", content: "Especialistas em portões eletrônicos. Atendimento 24 horas em Leme e região." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const features = [
  { icon: Settings, title: "Motores para Portões", desc: "Instalação de motores para portões deslizantes, basculantes e pivotantes." },
  { icon: Radio, title: "Controles Remotos", desc: "Programação, cópia e venda de controles para todas as marcas." },
  { icon: Wrench, title: "Troca de Peças", desc: "Substituição de placas, cremalheiras, capacitores e demais componentes." },
  { icon: Zap, title: "Manutenção Preventiva", desc: "Revisões periódicas para evitar quebras e prolongar a vida útil." },
  { icon: KeyRound, title: "Fechaduras Elétricas", desc: "Instalação e conserto de fechaduras eletrônicas e interfones." },
  { icon: Clock, title: "Atendimento 24h", desc: "Serviço emergencial todos os dias, inclusive feriados." },
];

const trust = [
  { icon: Shield, title: "Qualidade e Confiança", desc: "Anos de experiência atendendo Leme e região." },
  { icon: Wrench, title: "Serviço Garantido", desc: "Garantia em todos os serviços prestados." },
  { icon: ThumbsUp, title: "Satisfação Garantida", desc: "Atendimento humano, técnico e transparente." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero text-white">
        <div className="absolute inset-0 opacity-30">
          <img src={heroGate} alt="" className="h-full w-full object-cover" width={1600} height={1024} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/15 border border-brand/30 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-glow">
              <Clock className="h-3.5 w-3.5" /> Atendimento 24 horas
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05]">
              Venda, instalação e conserto de <span className="text-brand-glow">portões eletrônicos</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl">
              Especialistas em automação de portões em Leme-SP e região.
              Rápido, garantido e com orçamento sem compromisso.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://wa.me/5519988283830?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-brand-gradient px-7 py-4 text-base font-bold text-white shadow-elegant hover:opacity-90 transition"
              >
                Solicitar Orçamento <ArrowRight className="h-5 w-5" />
              </a>
              <Link
                to="/servicos"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 px-7 py-4 text-base font-bold text-white hover:bg-white/10 transition"
              >
                Ver Serviços
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-navy text-white border-y border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 grid sm:grid-cols-3 gap-6">
          {trust.map((t) => (
            <div key={t.title} className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brand/20 text-brand-glow shrink-0">
                <t.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="font-bold uppercase text-sm tracking-wide">{t.title}</p>
                <p className="text-sm text-white/70">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wider text-brand">O que fazemos</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-navy-deep">
              Soluções completas em portões automáticos
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Atendemos residências, condomínios e empresas com todos os tipos de automação.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="group rounded-xl border border-border bg-card p-7 shadow-card hover:shadow-elegant hover:border-brand/40 transition">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-brand-gradient text-white shadow-elegant">
                  <f.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy-deep">{f.title}</h3>
                <p className="mt-2 text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src={motor} alt="Motor de portão eletrônico" loading="lazy" className="rounded-xl shadow-card aspect-square object-cover" width={1024} height={1024} />
            <img src={remote} alt="Controles remotos" loading="lazy" className="rounded-xl shadow-card aspect-square object-cover mt-10" width={1024} height={1024} />
            <img src={service} alt="Técnico em manutenção" loading="lazy" className="rounded-xl shadow-card aspect-square object-cover col-span-2" width={1024} height={1024} />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-brand">Por que a Martins</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-navy-deep">
              Técnicos especializados, prontos para atender você
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Trabalhamos com as principais marcas do mercado e garantimos um serviço
              ágil e duradouro. Seu portão emperrou ou parou de funcionar? A gente resolve.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Atendimento emergencial 24 horas",
                "Orçamento gratuito e sem compromisso",
                "Peças originais com garantia",
                "Profissionais uniformizados e treinados",
              ].map((i) => (
                <li key={i} className="flex items-start gap-3 text-foreground">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-gradient shrink-0" />
                  {i}
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/5519988283830"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-md bg-brand-gradient px-7 py-4 text-base font-bold text-white shadow-elegant hover:opacity-90 transition"
            >
              Chamar no WhatsApp <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-hero text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold">
            Entre em contato e solicite um orçamento <span className="text-brand-glow">sem compromisso</span>
          </h2>
          <p className="mt-5 text-white/80 text-lg">
            Atendemos Leme e toda a região, 24 horas por dia.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/5519988283830"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[color:var(--whatsapp)] px-8 py-4 text-base font-bold text-white shadow-elegant hover:opacity-90 transition"
            >
              WhatsApp (19) 9 8828-3830
            </a>
            <a
              href="tel:+5519988283830"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 px-8 py-4 text-base font-bold text-white hover:bg-white/10 transition"
            >
              Ligar agora
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
