import { createFileRoute } from "@tanstack/react-router";
import { Settings, Radio, Wrench, Zap, KeyRound, Clock, ShieldCheck, Building2 } from "lucide-react";
import industrial from "@/assets/industrial.jpg";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Martins Automações | Portões Eletrônicos Leme-SP" },
      { name: "description", content: "Instalação, manutenção, conserto e venda de motores, controles e peças para portões eletrônicos em Leme-SP e região." },
      { property: "og:title", content: "Serviços — Martins Automações" },
      { property: "og:description", content: "Conheça todos os nossos serviços em portões eletrônicos." },
      { property: "og:url", content: "/servicos" },
    ],
    links: [{ rel: "canonical", href: "/servicos" }],
  }),
  component: Servicos,
});

const services = [
  { icon: Settings, title: "Instalação de Motores", desc: "Motores deslizantes, basculantes e pivotantes das melhores marcas, instalados por técnicos especializados." },
  { icon: Wrench, title: "Conserto e Reparo", desc: "Diagnóstico técnico e reparo de portões que não abrem, fazem barulho, travam ou perderam a sincronia." },
  { icon: Zap, title: "Manutenção Preventiva", desc: "Lubrificação, alinhamento, troca de peças de desgaste e checagem elétrica completa." },
  { icon: Radio, title: "Controles Remotos", desc: "Venda, programação e cópia de controles. Trabalhamos com todas as frequências e marcas." },
  { icon: KeyRound, title: "Fechaduras e Interfones", desc: "Instalação e conserto de fechaduras eletrônicas, interfones e videoporteiros." },
  { icon: ShieldCheck, title: "Troca de Peças", desc: "Placas eletrônicas, capacitores, cremalheiras, polias, correntes e mais — sempre com peças originais." },
  { icon: Building2, title: "Portões Industriais", desc: "Atendimento a empresas, condomínios e galpões com soluções robustas e personalizadas." },
  { icon: Clock, title: "Emergência 24h", desc: "Atendimento de urgência todos os dias, inclusive finais de semana e feriados." },
];

function Servicos() {
  return (
    <>
      <section className="bg-hero text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-glow">Nossos serviços</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold max-w-3xl">
            Tudo sobre portões eletrônicos em <span className="text-brand-glow">um só lugar</span>
          </h1>
          <p className="mt-5 text-lg text-white/80 max-w-2xl">
            Atendimento completo para residências, condomínios, comércios e indústrias em Leme-SP e região.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-border bg-card p-7 shadow-card hover:shadow-elegant hover:border-brand/40 transition">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-brand-gradient text-white shadow-elegant">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-navy-deep">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <img src={industrial} alt="Portão industrial automatizado" loading="lazy" className="rounded-xl shadow-elegant w-full" width={1024} height={1024} />
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-brand">Para empresas</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-navy-deep">
              Soluções para condomínios e indústrias
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Portões de alto fluxo, sistemas de controle de acesso, contratos de
              manutenção e atendimento prioritário. Conte com a Martins Automações
              para manter seu portão sempre funcionando.
            </p>
            <a
              href="https://wa.me/5519988283830"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand-gradient px-7 py-4 text-base font-bold text-white shadow-elegant hover:opacity-90 transition"
            >
              Pedir orçamento empresarial
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
