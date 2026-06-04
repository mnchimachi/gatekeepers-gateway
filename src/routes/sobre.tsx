import { createFileRoute } from "@tanstack/react-router";
import { Award, Users, Clock, MapPin } from "lucide-react";
import service from "@/assets/service.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Martins Automações | Portões Eletrônicos" },
      { name: "description", content: "Conheça a Martins Automações: especialistas em portões eletrônicos em Leme-SP, com atendimento 24h e foco em qualidade." },
      { property: "og:title", content: "Sobre — Martins Automações" },
      { property: "og:description", content: "Anos de experiência em automação de portões em Leme-SP e região." },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: Sobre,
});

const stats = [
  { icon: Award, value: "100%", label: "Serviço garantido" },
  { icon: Users, value: "1000+", label: "Clientes atendidos" },
  { icon: Clock, value: "24h", label: "Atendimento todos os dias" },
  { icon: MapPin, value: "Leme-SP", label: "E toda a região" },
];

function Sobre() {
  return (
    <>
      <section className="bg-hero text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-glow">Quem somos</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold max-w-3xl">
            A Martins <span className="text-brand-glow">Automações</span>
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl">
            Somos uma empresa especializada em portões eletrônicos, oferecendo
            soluções completas de venda, instalação, manutenção e conserto em Leme-SP e região.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <img src={service} alt="Equipe Martins Automações" loading="lazy" className="rounded-xl shadow-elegant w-full" width={1024} height={1024} />
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-deep">
              Compromisso com qualidade e agilidade
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Acreditamos que segurança e praticidade caminham juntas. Por isso,
              nossa equipe trabalha com dedicação para oferecer o melhor em automação
              de portões — do diagnóstico inicial até a entrega do serviço.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Atendemos 24 horas por dia, todos os dias da semana, porque entendemos
              que um portão parado não pode esperar.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl bg-card p-8 text-center shadow-card">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-brand-gradient text-white shadow-elegant">
                  <s.icon className="h-7 w-7" />
                </div>
                <p className="mt-5 text-3xl font-extrabold text-navy-deep">{s.value}</p>
                <p className="mt-1 text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
