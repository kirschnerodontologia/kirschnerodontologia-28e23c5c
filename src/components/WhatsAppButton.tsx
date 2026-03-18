import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511945009425?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center h-14 w-14 rounded-full bg-cta text-cta-foreground shadow-lg shadow-cta/30 transition-all hover:brightness-110 hover:scale-105 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"
      aria-label="Falar pelo WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppButton;
