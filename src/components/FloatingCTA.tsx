import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingCTA = () => {
  const [visible, setVisible] = useState(false);
  const whatsappUrl = "https://wa.me/5511945009425?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta.";

  useEffect(() => {
    const handleScroll = () => {
      const threshold = document.documentElement.scrollHeight * 0.3;
      setVisible(window.scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-t border-primary-foreground/10 py-2 px-4"
        >
          <div className="container mx-auto flex items-center justify-between gap-3">
            <span className="hidden sm:block text-xs text-primary-foreground/60 font-body">
              (11) 94500-9425
            </span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-cta px-5 py-2 text-xs font-body font-semibold text-cta-foreground shadow-md shadow-cta/20 transition-all hover:brightness-110 mx-auto sm:mx-0"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Agendar pelo WhatsApp
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
