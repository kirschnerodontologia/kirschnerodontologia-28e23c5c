import { motion } from "framer-motion";
import { Award, BookOpen, Cpu, Globe } from "lucide-react";

const diffs = [
  {
    icon: Award,
    title: "35 anos dedicados à reabilitação oral",
    text: "Não é só experiência — é método. Cada tratamento é planejado com protocolos desenvolvidos ao longo de décadas em São Paulo e reconhecidos internacionalmente.",
  },
  {
    icon: BookOpen,
    title: "Especialização que poucos têm",
    text: "Doutor e Mestre pela Faculdade São Leopoldo Mandic, com especializações em Implantodontia, Periodontia, Prótese e Estética Facial. O Dr. Roger não generaliza — ele é referência.",
  },
  {
    icon: Cpu,
    title: "Tecnologia aliada ao olhar clínico",
    text: "A clínica combina materiais de última geração com o refinamento de quem já tratou milhares de casos complexos. Aqui, o resultado previsível não é sorte — é processo.",
  },
  {
    icon: Globe,
    title: "Palestrante internacional, dentista humanizado",
    text: "Professor, editor científico e referência no Brasil, Peru, Bolívia e nos EUA — e ainda assim atende você com atenção e tempo. Cada paciente é único.",
  },
];

const Differentials = () => (
  <section className="py-24 bg-primary">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-sm font-body font-semibold tracking-widest uppercase text-gold">Diferenciais</span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-primary-foreground">
          Por que pacientes escolhem o Dr. Roger há mais de três décadas?
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {diffs.map((d, i) => (
          <motion.div
            key={d.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex gap-5 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6"
          >
            <div className="flex-shrink-0 flex items-start justify-center w-12 h-12 rounded-lg bg-gold/15">
              <d.icon className="w-6 h-6 text-gold mt-3" />
            </div>
            <div>
              <h3 className="text-lg font-display font-semibold text-primary-foreground">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/60 font-body">{d.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Differentials;
