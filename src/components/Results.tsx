import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const Results = () => {
  const whatsappUrl = "https://wa.me/5511945009425?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20gratuita.";

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-sm font-body font-semibold tracking-widest uppercase text-accent">Resultados</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-foreground">
            Resultados reais, pacientes reais
          </h2>
          <p className="mt-4 text-muted-foreground font-body">
            Cada caso é único. Veja como planejamos e executamos transformações completas.
          </p>

          {/* Placeholder grid for before/after photos */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="aspect-[4/3] rounded-xl bg-card border border-border flex items-center justify-center"
              >
                <p className="text-xs text-muted-foreground font-body">Antes / Depois {n}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <p className="text-muted-foreground font-body mb-4">
              Quer saber o que é possível no seu caso?
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-cta px-8 py-4 text-base font-body font-semibold text-cta-foreground shadow-lg shadow-cta/25 transition-all hover:brightness-110"
            >
              <MessageCircle className="h-5 w-5" />
              Agendar avaliação gratuita
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Results;
