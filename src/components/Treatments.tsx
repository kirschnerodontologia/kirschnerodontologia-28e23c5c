import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import implantImg from "@/assets/implante-dentario.jpg";

const treatments = [
  {
    image: implantImg,
    name: "Implante Dental",
    desc: "Substitua dentes perdidos com naturalidade e segurança.",
  },
  {
    image: "/protese.jpg",
    name: "Próteses",
    desc: "Protocolo completo para total reabilitação oral.",
  },
  {
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&h=700&fit=crop",
    name: "Lentes & Facetas",
    desc: "Transformação estética em poucos dias.",
  },
  {
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=700&fit=crop",
    name: "Harmonização Orofacial",
    desc: "Procedimentos minimamente invasivos para realçar sua beleza.",
  },
  {
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&h=700&fit=crop",
    name: "Clareamento Dental",
    desc: "Dentes mais brancos com segurança e acompanhamento.",
  },
  {
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=700&fit=crop",
    name: "Ortodontia",
    desc: "Aparelho convencional ou alinhadores invisíveis.",
  },
  {
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=700&fit=crop",
    name: "Endodontia",
    desc: "Canal sem dor. Salve seu dente com conforto.",
  },
  {
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&h=700&fit=crop",
    name: "Cirurgia Oral",
    desc: "Extrações e cirurgias com segurança e planejamento.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Treatments = () => {
  const whatsappUrl =
    "https://wa.me/5511945009425?text=Olá%2C%20venho%20através%20do%20site%20e%20gostaria%20de%20mais%20informações!";

  return (
    <section id="tratamentos" className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="inline-block text-xs font-body font-medium tracking-widest uppercase text-accent border border-accent/20 rounded-full px-3 py-1 mb-3">
            Nossos Tratamentos
          </span>
          <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground leading-snug uppercase">
            CADA ÁREA, UM ESPECIALISTA DEDICADO.
          </h2>
          <p className="mt-2 text-sm text-muted-foreground font-body max-w-md mx-auto">
            Da prevenção à reabilitação completa, com profissionais dedicados a cada especialidade.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {treatments.map((t) => (
            <motion.div
              key={t.name}
              variants={item}
              className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex flex-col"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-sm font-display font-semibold text-card-foreground">
                  {t.name}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground font-body leading-relaxed flex-1">
                  {t.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-muted-foreground font-body mb-3">
            Não sabe por onde começar? Agende uma consulta personalizada.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-accent font-body font-semibold text-sm hover:underline"
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
