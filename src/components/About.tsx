import { motion } from "framer-motion";
import { GraduationCap, Globe, Heart } from "lucide-react";
import aboutImg from "@/assets/dr-roger-about.jpg";

const highlights = [
  { icon: GraduationCap, title: "Doutor & Mestre", sub: "SL Mandic" },
  { icon: Globe, title: "Palestrante", sub: "Internacional" },
  { icon: Heart, title: "Cuidado", sub: "Humanizado" },
];

const About = () => (
  <section id="sobre" className="py-16 bg-secondary/30">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="inline-block text-[10px] font-body font-medium tracking-widest uppercase text-muted-foreground border border-border rounded-full px-3 py-1 mb-3">
          Quem Cuida de Você
        </span>
        <h2 className="text-lg sm:text-xl font-display font-bold text-foreground leading-snug">
          CONHEÇA O PROFISSIONAL POR TRÁS{" "}
          <span className="text-gold-gradient">DO SEU NOVO SORRISO.</span>
        </h2>
      </div>

      {/* Content */}
      <div className="grid lg:grid-cols-2 gap-10 items-start max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-xl overflow-hidden">
            <img
              src={aboutImg}
              alt="Prof. Dr. Roger Kirschner em sua clínica"
              className="w-full h-[420px] object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 flex flex-col justify-center"
        >
          <div>
            <h3 className="text-lg font-display font-bold text-foreground">
              Prof. Dr. Roger Kirschner
            </h3>
            <p className="text-xs font-body text-muted-foreground mt-0.5">
              CROSP 46410
            </p>
          </div>

          <div className="space-y-3 text-muted-foreground font-body text-xs leading-relaxed">
            <p>
              Doutor em Clínicas Odontológicas pela São Leopoldo Mandic — Campinas, Mestre e Especialista em Prótese Dentária, Especialista em Periodontia e Implantodontia, MBA em Visagismo e Pós-Graduado em Estética Facial pelo IBECO.
            </p>
            <p>
              Referência nacional em Reabilitação Oral e Harmonização Orofacial, com mais de três décadas de atuação clínica em São Paulo, conduzindo os atendimentos com técnica apurada, atenção aos detalhes e um cuidado diferenciado em cada procedimento. ✨
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-3">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="flex flex-col items-center gap-1.5 rounded-lg border border-border bg-background p-3 text-center"
              >
                <h.icon className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-[11px] font-body font-semibold text-foreground leading-tight">
                    {h.title}
                  </p>
                  <p className="text-[10px] font-body text-muted-foreground leading-tight">
                    {h.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
