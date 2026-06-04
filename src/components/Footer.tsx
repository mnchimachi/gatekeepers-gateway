import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <span className="inline-flex items-center rounded-lg bg-white px-4 py-3 mb-4 shadow-card">
              <img src={logo} alt="Martins Automações" className="h-12 w-auto" />
            </span>
            <p className="text-sm leading-relaxed max-w-md">
              Especialistas em portões eletrônicos em Leme-SP e região.
              Venda, instalação, manutenção e conserto com atendimento 24 horas.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-brand">Início</Link></li>
              <li><Link to="/servicos" className="hover:text-brand">Serviços</Link></li>
              <li><Link to="/sobre" className="hover:text-brand">Sobre</Link></li>
              <li><Link to="/contato" className="hover:text-brand">Contato</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-brand" /> (19) 9 8828-3830</li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-brand" /> Leme - SP e região</li>
              <li className="flex items-start gap-2"><Clock className="h-4 w-4 mt-0.5 text-brand" /> Atendimento 24 horas</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 text-xs text-white/50 flex flex-wrap justify-between gap-2">
          <p>© {new Date().getFullYear()} Martins Automações. Todos os direitos reservados.</p>
          <p>Leme - SP</p>
        </div>
      </div>
    </footer>
  );
}
