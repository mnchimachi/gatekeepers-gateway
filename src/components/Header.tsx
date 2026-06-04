import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Início" },
  { to: "/servicos", label: "Serviços" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-navy-deep/95 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
            <span className="inline-flex items-center rounded-lg bg-white px-3 py-2 shadow-elegant">
              <img src={logo} alt="Martins Automações" className="h-10 w-auto" />
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm font-semibold text-white/80 hover:text-white transition-colors"
                activeProps={{ className: "text-brand" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://wa.me/5519988283830"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-brand-gradient px-5 py-2.5 text-sm font-bold text-white shadow-elegant hover:opacity-90 transition"
            >
              Orçamento Grátis
            </a>
          </nav>
          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-white/90 font-semibold py-2"
                activeProps={{ className: "text-brand" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://wa.me/5519988283830"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-brand-gradient px-5 py-3 text-sm font-bold text-white"
            >
              Orçamento Grátis
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
