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
  <section id="sobre" className="py-24 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={aboutImg}
              alt="Prof. Dr. Roger Kirschner em sua clínica"
              className="w-full h-[500px] object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-5 -right-5 rounded-xl bg-accent px-6 py-3 shadow-lg">
            <p className="text-sm font-body font-bold text-accent-foreground">CROSP 46410</p>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="text-sm font-body font-semibold tracking-widest uppercase text-accent">Sobre</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            Prof. Dr. Roger Kirschner — 35 anos transformando sorrisos
          </h2>
          <div className="space-y-4 text-muted-foreground font-body text-[15px] leading-relaxed">
            <p>
              Dr. Roger Kirschner é referência nacional em Reabilitação Oral e Harmonização Orofacial, com mais de três décadas de atuação clínica em São Paulo.
            </p>
            <p>
              Doutor em Clínicas Odontológicas pela Faculdade São Leopoldo Mandic — Campinas, Mestre e Especialista em Prótese Dentária, Especialista em Periodontia e Implantodontia, é também MBA em Visagismo e Pós-Graduado em Estética Facial pelo IBECO.
            </p>
            <p>
              Coordenador de Pós-Graduação e Mestrado em Harmonização Orofacial pela SL Mandic, Dr. Roger é também Editor Assistente da Revista FACE (VMCOM) e realizou imersão em Anatomia Voltada à HOF em Miami, nos EUA.
            </p>
            <p>
              Palestrante convidado nos EUA, Peru e Bolívia, seu compromisso com a atualização científica reflete diretamente na qualidade dos tratamentos oferecidos aos seus pacientes.
            </p>
          </div>

          {/* Timeline */}
          <div className="pt-6 border-t border-border space-y-3">
            {credentials.map((c) => (
              <div key={c.text} className="flex items-center gap-3">
                <span className="text-base">{c.icon}</span>
                <span className="text-sm font-body text-foreground">{c.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
