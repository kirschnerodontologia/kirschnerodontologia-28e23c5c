import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-4 left-4 right-4 z-[60] mx-auto max-w-lg rounded-xl border border-border bg-card p-4 shadow-xl"
        >
          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
            <div className="flex-1">
              <p className="text-xs font-body text-foreground font-semibold mb-1">
                Privacidade e Cookies
              </p>
              <p className="text-[11px] text-muted-foreground font-body leading-relaxed">
                Usamos cookies essenciais para o funcionamento do site. Não coletamos dados pessoais sem seu consentimento, conforme a{" "}
                <a href="/politica-de-privacidade" className="underline text-primary hover:text-primary/80">
                  Política de Privacidade
                </a>{" "}
                e a LGPD (Lei 13.709/2018).
              </p>
              <div className="flex gap-2 mt-3">
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
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
