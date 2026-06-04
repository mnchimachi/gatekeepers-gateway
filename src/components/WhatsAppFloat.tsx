import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5519988283830?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center h-14 w-14 rounded-full bg-[color:var(--whatsapp)] text-white shadow-elegant hover:scale-110 transition-transform"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute inset-0 rounded-full animate-ping bg-[color:var(--whatsapp)] opacity-30" />
    </a>
  );
}
