import { motion } from "framer-motion";
import { MessageCircle, ChevronDown, ArrowRight } from "lucide-react";
import heroImg from "@/assets/dr-roger-hero.jpg";
import logo from "@/assets/logo-kirschner.png";

const treatments = [
  {
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=500&fit=crop",
    category: "REABILITAÇÃO",
    title: "Implante Dental",
  },
  {
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=500&fit=crop",
    category: "ESTÉTICA",
    title: "Lentes & Facetas",
  },
  {
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=500&fit=crop",
    category: "PROTOCOLO",
    title: "Prótese sobre Implante",
  },
  {
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=500&fit=crop",
    category: "FACIAL",
    title: "Harmonização Orofacial",
  },
  {
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&h=500&fit=crop",
    category: "CLAREAMENTO",
    title: "Clareamento Dental",
  },
];

const Hero = () => {
  const whatsappUrl =
    "https://wa.me/5511945009425?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta.";

  return (
    <section className="relative min-h-screen bg-primary overflow-hidden flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 pb-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto space-y-6"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
            <span className="text-sm font-body font-medium text-gold">
              CROSP 46410
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight text-primary-foreground">
            Seu sorriso reabilitado por quem tem{" "}
            <span className="text-gold-gradient">35 anos</span> de experiência.
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-primary-foreground/60 font-body max-w-2xl mx-auto">
            Implantes, próteses, facetas e harmonização facial — tudo em uma
            clínica especializada no coração de São Paulo.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cta px-8 py-4 text-base font-body font-semibold text-cta-foreground shadow-lg shadow-cta/25 transition-all hover:brightness-110 hover:shadow-xl hover:shadow-cta/30"
            >
              <MessageCircle className="h-5 w-5" />
              Agendar consulta pelo WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#tratamentos"
              className="inline-flex items-center justify-center gap-1 rounded-full border border-primary-foreground/20 px-6 py-4 text-base font-body font-medium text-primary-foreground/80 transition-colors hover:bg-primary-foreground/5"
            >
              Ver tratamentos
              <ChevronDown className="h-4 w-4" />
            </a>
          </div>

          {/* Disclaimer */}
          <p className="text-sm text-primary-foreground/40 font-body">
            *Atendimento particular premium — sem plano de saúde
          </p>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/150?img=${i + 10}`}
                  alt=""
                  className="h-8 w-8 rounded-full border-2 border-primary object-cover"
                />
              ))}
            </div>
            <span className="text-sm text-primary-foreground/50 font-body">
              +10.000 pacientes atendidos
            </span>
          </div>
        </motion.div>
      </div>

      {/* Treatment Cards Carousel */}
      <div className="relative w-full overflow-hidden pb-8">
        {/* Gradient Overlays */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-primary to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-primary to-transparent" />

        {/* Scrolling Container */}
        <motion.div
          className="flex gap-4 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {[...treatments, ...treatments].map((t, index) => (
            <a
              key={index}
              href="#tratamentos"
              className="relative flex-shrink-0 w-52 h-64 rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={t.image}
                alt={t.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-[10px] font-body font-semibold tracking-widest text-gold">
                  {t.category}
                </span>
                <p className="text-sm font-display font-semibold text-primary-foreground mt-1">
                  {t.title}
                </p>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
