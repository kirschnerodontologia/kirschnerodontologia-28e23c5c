import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-4 left-4 right-4 z-[60] mx-auto max-w-lg rounded-xl border border-border bg-card p-4 shadow-xl"
    >
      <div className="flex items-start gap-3">
        <Shield className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
        <div className="flex-1">
          <p className="mb-1 text-xs font-body font-semibold text-foreground">Privacidade e Cookies</p>
          <p className="font-body text-[11px] leading-relaxed text-muted-foreground">
            Usamos cookies essenciais para o funcionamento do site. Não coletamos dados pessoais sem seu consentimento, conforme a{" "}
            <a href="/politica-de-privacidade" className="text-primary underline hover:text-primary/80">
              Política de Privacidade
            </a>{" "}
            e a LGPD (Lei 13.709/2018).
          </p>
          <div className="mt-3 flex gap-2">
            <button
              onClick={accept}
              className="rounded-full bg-primary px-4 py-1.5 text-[11px] font-body font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Aceitar
            </button>
            <button
              onClick={decline}
              className="rounded-full border border-border px-4 py-1.5 text-[11px] font-body font-medium text-muted-foreground transition-colors hover:bg-muted"
            >
              Recusar
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CookieConsent;
