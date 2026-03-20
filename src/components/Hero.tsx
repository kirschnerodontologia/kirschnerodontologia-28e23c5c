import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import logo from "@/assets/logo-kirschner.png";

const carouselImages = [
  "/hero-1.jpg",
  "/hero-2.jpg",
  "/hero-3.jpg",
  "/hero-4.jpg",
  "/hero-5.jpg",
  "/hero-6.jpg",
];

const Hero = () => {
  const whatsappUrl =
    "https://wa.me/5511945009425?text=Olá%2C%20venho%20através%20do%20site%20e%20gostaria%20de%20mais%20informações!";

  return (
    <section className="relative min-h-screen bg-background overflow-hidden flex flex-col pt-10">
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-12 pb-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl mx-auto space-y-4"
        >
          <img src={logo} alt="Roger Kirschner Odontologia e Estética" className="h-14 sm:h-16 mx-auto mb-1" />

          <div className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/5 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-body font-medium text-accent">
              Odontologia & Estética Facial
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold leading-snug text-foreground uppercase">
            Seu sorriso reabilitado por quem tem{" "}
            <span className="text-gold-gradient">35 anos</span> de experiência.
          </h1>

          <p className="text-sm sm:text-base text-muted-foreground font-body max-w-lg mx-auto leading-relaxed">
            Implantes, próteses, facetas e harmonização facial. Tudo em uma
            clínica especializada no coração de São Paulo.
          </p>

          <div className="flex justify-center pt-1">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cta px-6 py-2.5 text-sm font-body font-semibold text-cta-foreground shadow-md shadow-cta/20 transition-all hover:brightness-110 hover:shadow-lg hover:shadow-cta/25"
            >
              <MessageCircle className="h-4 w-4" />
              Agendar consulta pelo WhatsApp
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <p className="text-xs text-muted-foreground/70 font-body">
            *Atendimento particular premium, sem plano de saúde
          </p>

          <div className="flex items-center justify-center gap-2 pt-1">
            <div className="flex -space-x-1.5">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/150?img=${i + 10}`}
                  alt=""
                  className="h-6 w-6 rounded-full border-2 border-background object-cover"
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground font-body">
              +10.000 pacientes atendidos
            </span>
          </div>
        </motion.div>
      </div>

      {/* Treatment Cards Carousel */}
      <div className="relative w-full overflow-hidden pb-6">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-background to-transparent" />

        <motion.div
          className="flex gap-3 px-4"
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
              className="relative flex-shrink-0 w-40 h-48 rounded-xl overflow-hidden group cursor-pointer"
            >
              <img
                src={t.image}
                alt={t.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <span className="text-[9px] font-body font-semibold tracking-widest text-accent-foreground/80">
                  {t.category}
                </span>
                <p className="text-xs font-display font-semibold text-white mt-0.5">
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
