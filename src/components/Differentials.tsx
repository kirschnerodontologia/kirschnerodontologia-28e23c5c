import { motion } from "framer-motion";
import { Award, BookOpen, Cpu, Globe } from "lucide-react";

const diffs = [
  {
    icon: Award,
    title: "35 anos dedicados à reabilitação oral",
    text: "Cada tratamento é planejado com protocolos desenvolvidos ao longo de décadas e reconhecidos internacionalmente.",
  },
  {
    icon: BookOpen,
    title: "Especialização que poucos têm",
    text: "Doutor e Mestre pela São Leopoldo Mandic, com especializações em Implantodontia, Periodontia, Prótese e Estética Facial.",
  },
  {
    icon: Cpu,
    title: "Tecnologia aliada ao olhar clínico",
    text: "Materiais de última geração com o refinamento de quem já tratou milhares de casos complexos.",
  },
  {
    icon: Globe,
    title: "Palestrante internacional, dentista humanizado",
    text: "Referência no Brasil, Peru, Bolívia e EUA — e ainda assim atende com atenção e tempo.",
  },
];

const Differentials = () => (
  <section className="py-16 bg-primary">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-lg mx-auto mb-10">
        <span className="text-xs font-body font-medium tracking-widest uppercase text-accent-foreground/60">Diferenciais</span>
        <h2 className="mt-2 text-xl sm:text-2xl font-display font-bold text-primary-foreground leading-snug">
          Por que pacientes escolhem o Dr. Roger há mais de três décadas?
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {diffs.map((d, i) => (
          <motion.div
            key={d.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex gap-4 rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 p-5"
          >
            <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-md bg-accent/15">
              <d.icon className="w-4 h-4 text-accent" />
            </div>
            <div>
              <h3 className="text-sm font-display font-semibold text-primary-foreground">{d.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-primary-foreground/55 font-body">{d.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Differentials;
