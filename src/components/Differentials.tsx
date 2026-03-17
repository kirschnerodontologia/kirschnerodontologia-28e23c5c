import { motion } from "framer-motion";
import { Award, BookOpen, Cpu, Globe } from "lucide-react";
import clinicImg from "@/assets/clinic-interior.jpg";

const diffs = [
  {
    icon: Award,
    title: "35 anos dedicados à reabilitação oral",
    text: "Protocolos desenvolvidos ao longo de décadas e reconhecidos internacionalmente.",
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
    title: "Palestrante internacional",
    text: "Referência no Brasil, Peru, Bolívia e EUA — e ainda assim atende com atenção e tempo.",
  },
];

const Differentials = () => (
  <section className="py-14 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-lg mx-auto mb-10">
        <span className="text-xs font-body font-medium tracking-widest uppercase text-muted-foreground">
          Diferenciais
        </span>
        <h2 className="mt-2 text-xl sm:text-2xl font-display font-bold text-foreground leading-snug">
          Por que pacientes escolhem o Dr. Roger há mais de três décadas?
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto items-center">
        {/* Bullets à esquerda */}
        <div className="flex flex-col gap-5">
          {diffs.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-4 items-start"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                <d.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-display font-semibold text-foreground">
                  {d.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground font-body">
                  {d.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Imagem da clínica à direita */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src={clinicImg}
            alt="Interior da clínica do Dr. Roger Kirschner"
            className="w-full h-full object-cover aspect-[3/4] lg:aspect-[4/5]"
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default Differentials;
