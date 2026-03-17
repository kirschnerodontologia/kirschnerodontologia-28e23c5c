import { motion } from "framer-motion";
import aboutImg from "@/assets/dr-roger-about.jpg";

const credentials = [
  { icon: "🎓", text: "Doutor — SL Mandic Campinas" },
  { icon: "🎓", text: "Mestre & Especialista em Prótese — SL Mandic SP" },
  { icon: "🏥", text: "Especialista em Periodontia — SL Mandic SP" },
  { icon: "🔩", text: "Especialista em Implantodontia — FMU SP" },
  { icon: "💼", text: "MBA em Visagismo — Estácio SP" },
  { icon: "🌎", text: "Palestrante Internacional — EUA · Peru · Bolívia" },
  { icon: "📚", text: "Editor — Revista FACE (VMCOM)" },
  { icon: "👨‍🏫", text: "Coordenador de Mestrado em HOF — SL Mandic" },
];

const About = () => (
  <section id="sobre" className="py-16 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={aboutImg}
              alt="Prof. Dr. Roger Kirschner em sua clínica"
              className="w-full h-[380px] object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-3 -right-3 rounded-lg bg-accent px-4 py-2 shadow-md">
            <p className="text-xs font-body font-bold text-accent-foreground">CROSP 46410</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <span className="text-xs font-body font-medium tracking-widest uppercase text-accent">Sobre</span>
          <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground leading-snug">
            Prof. Dr. Roger Kirschner — 35 anos transformando sorrisos
          </h2>
          <div className="space-y-3 text-muted-foreground font-body text-sm leading-relaxed">
            <p>
              Dr. Roger Kirschner é referência nacional em Reabilitação Oral e Harmonização Orofacial, com mais de três décadas de atuação clínica em São Paulo.
            </p>
            <p>
              Doutor em Clínicas Odontológicas pela São Leopoldo Mandic — Campinas, Mestre e Especialista em Prótese Dentária, Especialista em Periodontia e Implantodontia, MBA em Visagismo e Pós-Graduado em Estética Facial pelo IBECO.
            </p>
            <p>
              Palestrante convidado nos EUA, Peru e Bolívia, seu compromisso com a atualização científica reflete diretamente na qualidade dos tratamentos.
            </p>
          </div>

          <div className="pt-4 border-t border-border space-y-2">
            {credentials.map((c) => (
              <div key={c.text} className="flex items-center gap-2">
                <span className="text-sm">{c.icon}</span>
                <span className="text-xs font-body text-foreground/80">{c.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
