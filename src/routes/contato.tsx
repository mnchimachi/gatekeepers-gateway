import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Martins Automações | (19) 9 8828-3830" },
      { name: "description", content: "Fale com a Martins Automações. WhatsApp (19) 9 8828-3830. Atendimento 24h em Leme-SP e região." },
      { property: "og:title", content: "Contato — Martins Automações" },
      { property: "og:description", content: "WhatsApp (19) 9 8828-3830 — Atendimento 24h em Leme-SP." },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: Contato,
});

function Contato() {
  return (
    <>
      <section className="bg-hero text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-glow">Fale conosco</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold max-w-3xl">
            Vamos resolver o seu <span className="text-brand-glow">portão</span>
          </h1>
          <p className="mt-5 text-lg text-white/80 max-w-2xl">
            Atendimento 24 horas em Leme-SP e região. Resposta rápida via WhatsApp ou telefone.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
          <a
            href="https://wa.me/5519988283830?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-border bg-card p-8 shadow-card hover:shadow-elegant hover:border-brand/40 transition"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[color:var(--whatsapp)] text-white shadow-elegant">
              <MessageCircle className="h-7 w-7" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-navy-deep">WhatsApp</h3>
            <p className="mt-2 text-2xl font-extrabold text-foreground">(19) 9 8828-3830</p>
            <p className="mt-2 text-muted-foreground">Resposta rápida — orçamento sem compromisso.</p>
          </a>

          <a
            href="tel:+5519988283830"
            className="group rounded-xl border border-border bg-card p-8 shadow-card hover:shadow-elegant hover:border-brand/40 transition"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-brand-gradient text-white shadow-elegant">
              <Phone className="h-7 w-7" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-navy-deep">Telefone</h3>
            <p className="mt-2 text-2xl font-extrabold text-foreground">(19) 9 8828-3830</p>
            <p className="mt-2 text-muted-foreground">Ligue a qualquer hora, 24 horas por dia.</p>
          </a>

          <div className="rounded-xl border border-border bg-card p-8 shadow-card">
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-brand-gradient text-white shadow-elegant">
              <MapPin className="h-7 w-7" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-navy-deep">Região atendida</h3>
            <p className="mt-2 text-lg font-semibold text-foreground">Leme - SP e região</p>
            <p className="mt-2 text-muted-foreground">Atendemos também cidades próximas.</p>
          </div>

          <div className="rounded-xl border border-border bg-card p-8 shadow-card">
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-brand-gradient text-white shadow-elegant">
              <Clock className="h-7 w-7" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-navy-deep">Horário</h3>
            <p className="mt-2 text-lg font-semibold text-foreground">24 horas — todos os dias</p>
            <p className="mt-2 text-muted-foreground">Inclusive feriados e finais de semana.</p>
          </div>
        </div>
      </section>

      <section className="bg-hero text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Solicite seu orçamento agora — <span className="text-brand-glow">sem compromisso</span>
          </h2>
          <a
            href="https://wa.me/5519988283830?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-[color:var(--whatsapp)] px-8 py-4 text-base font-bold text-white shadow-elegant hover:opacity-90 transition"
          >
            <MessageCircle className="h-5 w-5" /> Chamar no WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
