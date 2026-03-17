import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const Results = () => {
  const whatsappUrl = "https://wa.me/5511945009425?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20gratuita.";

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto"
        >
          <span className="text-xs font-body font-medium tracking-widest uppercase text-accent">Resultados</span>
          <h2 className="mt-2 text-xl sm:text-2xl font-display font-bold text-foreground">
            Resultados reais, pacientes reais
          </h2>
          <p className="mt-2 text-sm text-muted-foreground font-body">
            Cada caso é único. Veja como planejamos e executamos transformações completas.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-8">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="aspect-[4/3] rounded-lg bg-card border border-border flex items-center justify-center"
              >
                <p className="text-[10px] text-muted-foreground font-body">Antes / Depois {n}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
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
