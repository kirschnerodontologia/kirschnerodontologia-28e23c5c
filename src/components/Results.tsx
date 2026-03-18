import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

import before1 from "@/assets/result-before-1.jpg";
import before2 from "@/assets/result-before-2.jpg";
import before3 from "@/assets/result-before-3.jpg";
import after1 from "@/assets/result-after-1.jpg";
import after2 from "@/assets/result-after-2.jpg";
import after3 from "@/assets/result-after-3.jpg";

const cases = [
  { before: before1, after: after1, label: "Harmonização Facial" },
  { before: before2, after: after2, label: "Harmonização Facial" },
  { before: before3, after: after3, label: "Harmonização Facial" },
];

const Results = () => {
  const whatsappUrl = "https://wa.me/5511945009425?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20gratuita.";

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-xs font-body font-medium tracking-widest uppercase text-accent">Resultados</span>
          <h2 className="mt-2 text-xl sm:text-2xl font-display font-bold text-foreground">
            Resultados reais, pacientes reais
          </h2>
          <p className="mt-2 text-sm text-muted-foreground font-body">
            Cada caso é único. Veja como planejamos e executamos transformações completas.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {cases.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-xl overflow-hidden border border-border bg-card shadow-sm"
              >
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img
                      src={c.before}
                      alt={`Antes - ${c.label}`}
                      className="w-full aspect-[3/4] object-cover"
                      loading="lazy"
                    />
                    <span className="absolute bottom-2 left-2 bg-background/80 backdrop-blur-sm text-[10px] font-body font-semibold text-foreground px-2 py-0.5 rounded">
                      Antes
                    </span>
                  </div>
                  <div className="relative">
                    <img
                      src={c.after}
                      alt={`Depois - ${c.label}`}
                      className="w-full aspect-[3/4] object-cover"
                      loading="lazy"
                    />
                    <span className="absolute bottom-2 right-2 bg-accent/90 backdrop-blur-sm text-[10px] font-body font-semibold text-accent-foreground px-2 py-0.5 rounded">
                      Depois
                    </span>
                  </div>
                </div>
                <div className="px-3 py-2.5">
                  <p className="text-xs font-display font-semibold text-foreground">{c.label}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10">
            <p className="text-sm text-muted-foreground font-body mb-3">
              Quer saber o que é possível no seu caso?
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-cta px-6 py-2.5 text-sm font-body font-semibold text-cta-foreground shadow-md shadow-cta/20 transition-all hover:brightness-110"
            >
              <MessageCircle className="h-4 w-4" />
              Agendar avaliação gratuita
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Results;
