import { motion } from "framer-motion";
import { Award, BookOpen, Cpu, Globe, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const diffs = [
  {
    icon: Award,
    title: "35 anos dedicados à reabilitação oral",
    text: "Protocolos desenvolvidos ao longo de décadas e reconhecidos internacionalmente.",
    area: "md:[grid-area:1/1/2/2]",
  },
  {
    icon: BookOpen,
    title: "Especialização que poucos têm",
    text: "Doutor e Mestre pela São Leopoldo Mandic, com especializações em Implantodontia, Periodontia, Prótese e Estética Facial.",
    area: "md:[grid-area:1/2/3/3]",
  },
  {
    icon: Cpu,
    title: "Tecnologia aliada ao olhar clínico",
    text: "Materiais de última geração com o refinamento de quem já tratou milhares de casos complexos.",
    area: "md:[grid-area:2/1/3/2]",
  },
  {
    icon: Globe,
    title: "Palestrante internacional",
    text: "Referência no Brasil, Peru, Bolívia e EUA — e ainda assim atende com atenção e tempo.",
    area: "md:[grid-area:3/1/4/3]",
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {diffs.map((d, i) => (
          <motion.div
            key={d.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className={`relative rounded-xl border border-border bg-background p-1 ${d.area}`}
          >
            <GlowingEffect
              spread={40}
              glow
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={2}
            />
            <div className="relative flex h-full flex-col gap-3 rounded-lg bg-background p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-md border border-border">
                  <d.icon className="h-4 w-4 text-primary" />
                </div>
                <h3 className="text-sm font-display font-semibold text-foreground">
                  {d.title}
                </h3>
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground font-body">
                {d.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Differentials;
