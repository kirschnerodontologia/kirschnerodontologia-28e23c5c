import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const treatments = [
  { icon: "🦷", name: "Implante Dental", desc: "Substitua dentes perdidos com naturalidade" },
  { icon: "😁", name: "Prótese sobre Implante", desc: "Protocolo completo para total reabilitação" },
  { icon: "✨", name: "Lentes & Facetas", desc: "Transformação estética em poucos dias" },
  { icon: "🌟", name: "Clareamento Dental", desc: "LED e home care para um branco real" },
  { icon: "🦴", name: "Harmonização Orofacial", desc: "Botox e preenchimento por especialista" },
  { icon: "🔧", name: "Ortodontia", desc: "Aparelho ou alinhadores invisíveis" },
  { icon: "💊", name: "Endodontia", desc: "Canal sem dor — salve seu dente" },
  { icon: "🔪", name: "Cirurgia Oral", desc: "Extrações e cirurgias com segurança" },
  { icon: "🏥", name: "Pronto-Socorro Dental", desc: "Atendimento para dor de dente urgente" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Treatments = () => {
  const whatsappUrl = "https://wa.me/5511945009425?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação.";

  return (
    <section id="tratamentos" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-body font-semibold tracking-widest uppercase text-accent">Tratamentos</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-foreground">
            O que podemos fazer pelo seu sorriso
          </h2>
          <p className="mt-4 text-muted-foreground font-body">
            Tratamentos completos para quem quer resultado de verdade
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {treatments.map((t) => (
            <motion.div
              key={t.name}
              variants={item}
              className="group relative rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-accent/30 hover:-translate-y-1"
            >
              <span className="text-2xl">{t.icon}</span>
              <h3 className="mt-3 text-lg font-display font-semibold text-card-foreground">{t.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground font-body">{t.desc}</p>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all group-hover:w-full rounded-b-xl" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground font-body mb-4">
            Não sabe por onde começar? Agende uma avaliação e receba um plano personalizado.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent font-body font-semibold hover:underline"
          >
            <MessageCircle className="h-4 w-4" />
            Falar com a clínica →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Treatments;
