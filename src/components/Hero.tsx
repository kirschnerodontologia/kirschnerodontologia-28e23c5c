import { motion } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";
import heroImg from "@/assets/dr-roger-hero.jpg";

const trustItems = [
  "35 anos de experiência",
  "Especialista em Reabilitação Oral",
  "Palestrante Internacional",
  "Atendimento particular premium",
];

const Hero = () => {
  const whatsappUrl = "https://wa.me/5511945009425?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta.";

  return (
    <section className="relative min-h-screen bg-primary overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-0 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5">
                <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
                <span className="text-sm font-body font-medium text-gold">CROSP 46410</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight text-primary-foreground">
                Seu sorriso reabilitado por quem tem{" "}
                <span className="text-gold-gradient">35 anos</span> de experiência.
              </h1>
              <p className="text-lg text-primary-foreground/70 font-body max-w-lg">
                Implantes, próteses, facetas e harmonização facial — tudo em uma clínica especializada no coração de São Paulo.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-cta px-8 py-4 text-base font-body font-semibold text-cta-foreground shadow-lg shadow-cta/25 transition-all hover:brightness-110 hover:shadow-xl hover:shadow-cta/30"
              >
                <MessageCircle className="h-5 w-5" />
                Agendar consulta pelo WhatsApp
              </a>
              <a
                href="#tratamentos"
                className="inline-flex items-center justify-center gap-1 rounded-lg border border-primary-foreground/20 px-6 py-4 text-base font-body font-medium text-primary-foreground/80 transition-colors hover:bg-primary-foreground/5"
              >
                Ver tratamentos
                <ChevronDown className="h-4 w-4" />
              </a>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4 border-t border-primary-foreground/10">
              {trustItems.map((item) => (
                <span key={item} className="flex items-center gap-2 text-sm text-primary-foreground/60 font-body">
                  <span className="text-cta">✔</span>
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent z-10" />
              <img
                src={heroImg}
                alt="Dr. Roger Kirschner — Especialista em Reabilitação Oral"
                className="w-full h-[600px] object-cover object-top"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 shadow-xl z-20 border border-border">
              <p className="text-sm font-body font-semibold text-foreground">+10.000</p>
              <p className="text-xs text-muted-foreground">pacientes atendidos</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
