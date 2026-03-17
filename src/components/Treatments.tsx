import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const treatments = [
  {
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=700&fit=crop",
    name: "Implante Dental",
    desc: "Substitua dentes perdidos com naturalidade e segurança, devolvendo função e estética ao seu sorriso.",
  },
  {
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=700&fit=crop",
    name: "Prótese sobre Implante",
    desc: "Protocolo completo para total reabilitação, com técnicas avançadas e materiais de última geração.",
  },
  {
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&h=700&fit=crop",
    name: "Lentes & Facetas",
    desc: "Transformação estética em poucos dias. Resultados naturais e duradouros para um sorriso perfeito.",
  },
  {
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=700&fit=crop",
    name: "Harmonização Orofacial",
    desc: "Procedimentos minimamente invasivos para realçar sua beleza natural com sutileza e sofisticação.",
  },
  {
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&h=700&fit=crop",
    name: "Clareamento Dental",
    desc: "LED e home care para um branco real. Dentes mais brancos com segurança e acompanhamento profissional.",
  },
  {
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=700&fit=crop",
    name: "Ortodontia",
    desc: "Aparelho convencional ou alinhadores invisíveis para corrigir o alinhamento dos seus dentes.",
  },
  {
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=700&fit=crop",
    name: "Endodontia",
    desc: "Canal sem dor — salve seu dente com técnicas modernas e conforto durante todo o procedimento.",
  },
  {
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&h=700&fit=crop",
    name: "Cirurgia Oral",
    desc: "Extrações e cirurgias realizadas com segurança, planejamento e o máximo de conforto para o paciente.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Treatments = () => {
  const whatsappUrl =
    "https://wa.me/5511945009425?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação.";

  return (
    <section id="tratamentos" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-body font-medium tracking-widest uppercase text-accent border border-accent/30 rounded-full px-4 py-1.5 mb-4">
            Nossos Tratamentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground italic">
            O QUE PODEMOS FAZER.{" "}
            <span className="not-italic text-foreground/70">CADA ÁREA, UM ESPECIALISTA DEDICADO.</span>
          </h2>
          <p className="mt-5 text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Da prevenção à reabilitação completa, oferecemos todos os tratamentos que você e sua família precisam, com profissionais dedicados exclusivamente a cada área.
          </p>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {treatments.map((t) => (
            <motion.div
              key={t.name}
              variants={item}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-display font-bold text-card-foreground">
                  {t.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground font-body leading-relaxed flex-1">
                  {t.desc}
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-body font-semibold text-accent-foreground transition-all hover:brightness-110 self-start"
                >
                  Consultar disponibilidade
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground font-body mb-4 text-lg">
            Não sabe por onde começar? Agende uma avaliação e receba um plano personalizado.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent font-body font-semibold text-lg hover:underline"
          >
            <MessageCircle className="h-5 w-5" />
            Falar com a clínica →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Treatments;
