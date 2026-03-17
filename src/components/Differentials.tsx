import { motion } from "framer-motion";
import { Award, BookOpen, Cpu, Globe, Heart, Shield, Star } from "lucide-react";
import clinicImg from "@/assets/clinic-interior.jpg";

const diffs = [
  {
    icon: Award,
    title: "35 anos dedicados à reabilitação oral",
    text: "Protocolos desenvolvidos ao longo de décadas e reconhecidos internacionalmente.",
  },
  {
    icon: Cpu,
    title: "Tecnologia aliada ao olhar clínico",
    text: "Materiais de última geração com o refinamento de quem já tratou milhares de casos complexos.",
  },
  {
    icon: Heart,
    title: "Ambiente acolhedor",
    text: "Para quem tem medo do dentista. Acolhimento que transforma medo em confiança.",
  },
  {
    icon: Shield,
    title: "Materiais de alto padrão",
    text: "Marcas certificadas e protocolos personalizados para cada caso.",
  },
];

const Differentials = () => (
  <section className="py-14 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg mb-10">
        <span className="text-xs font-body font-medium tracking-widest uppercase text-muted-foreground">
          Diferenciais
        </span>
        <h2 className="mt-2 text-xl sm:text-2xl font-display font-bold text-foreground leading-snug">
          Por que pacientes escolhem o Dr. Roger há mais de três décadas?
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 max-w-5xl mx-auto items-stretch">
        {/* Cards em grid 2x2 à esquerda */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {diffs.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative rounded-lg border border-border bg-background p-5 pl-7 border-l-[3px] border-l-primary/40"
            >
              <d.icon className="h-5 w-5 text-muted-foreground mb-3" strokeWidth={1.5} />
              <h3 className="text-sm font-display font-semibold text-foreground mb-1.5">
                {d.title}
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground font-body">
                {d.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Imagem da clínica à direita */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl overflow-hidden shadow-lg w-full lg:w-80"
        >
          <img
            src={clinicImg}
            alt="Interior da clínica do Dr. Roger Kirschner"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Badge Google Reviews */}
          <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm rounded-xl px-4 py-3 flex items-center gap-3 shadow-md">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-400/20">
              <Star className="h-5 w-5 text-amber-500 fill-amber-500" />
            </div>
            <div>
              <p className="text-sm font-display font-bold text-foreground">+100</p>
              <p className="text-[10px] text-muted-foreground font-body">
                Avaliações 5 Estrelas
                <span className="ml-1 opacity-60">by Google • 2025</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Differentials;
