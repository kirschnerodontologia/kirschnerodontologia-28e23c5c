import { motion } from "framer-motion";
import { MapPin, Clock, Phone, MessageCircle, AlertTriangle, Navigation } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const whatsappUrl = "https://wa.me/5511945009425?text=Olá%2C%20venho%20através%20do%20site%20e%20gostaria%20de%20mais%20informações!";
  const phoneUrl = "tel:+5511945009425";
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Rua+Haddock+Lobo+1307+São+Paulo+SP";

  return (
    <section id="contato" className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-body font-medium tracking-widest uppercase text-accent border border-accent/20 rounded-full px-3 py-1 mb-3">
            Onde Estamos
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start gap-3">
              <MapPin className="h-7 w-7 text-accent flex-shrink-0 mt-1" />
              <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground leading-snug uppercase">
                ATENDEMOS TODA A REGIÃO DE{" "}
                <span className="text-accent">SÃO PAULO</span>
              </h2>
            </div>

            <p className="text-sm text-muted-foreground font-body">
              Localização privilegiada e fácil acesso para receber pacientes de toda São Paulo com conforto e agilidade.
            </p>

            {/* Urgency box */}
            <div className="rounded-lg border border-border bg-background p-5 space-y-2">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-foreground" />
                <p className="text-sm font-display font-bold text-foreground">
                  Seu sorriso não pode esperar. Não adie mais!
                </p>
              </div>
              <p className="text-xs text-muted-foreground font-body leading-relaxed">
                Estamos prontos para te atender com acolhimento, tecnologia de ponta e o cuidado que você merece. Agende agora sua consulta e dê o primeiro passo rumo ao sorriso dos sonhos.
              </p>
              <p className="text-xs text-muted-foreground/70 font-body italic">
                Consulta sem compromisso.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => navigate(`/redirect?url=${encodeURIComponent(whatsappUrl)}`)}
                className="inline-flex items-center gap-2 rounded-full bg-cta px-5 py-2.5 text-sm font-body font-semibold text-cta-foreground shadow-md shadow-cta/20 transition-all hover:brightness-110 cursor-pointer"
              >
                <MessageCircle className="h-4 w-4" />
                Chamar no WhatsApp
              </button>
              <a
                href={phoneUrl}
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-body font-medium text-foreground transition-colors hover:bg-muted"
              >
                <Phone className="h-4 w-4" />
                Ligar Agora
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-body font-medium text-foreground transition-colors hover:bg-muted"
              >
                <Navigation className="h-4 w-4" />
                Como Chegar
              </a>
            </div>

            {/* Address & Hours */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-xs text-muted-foreground font-body leading-relaxed">
                  <p>Rua Haddock Lobo, 1307, Conj. 14</p>
                  <p>São Paulo, SP</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-xs text-muted-foreground font-body leading-relaxed">
                  <p>Segunda a sexta das 08h às 18h</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative rounded-xl overflow-hidden shadow-md border border-border h-[420px] lg:h-full lg:min-h-[480px]"
          >
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 rounded-lg bg-background/90 backdrop-blur-sm px-3 py-2 text-xs font-body font-medium text-foreground shadow-sm border border-border hover:bg-background transition-colors"
            >
              Abrir no Maps
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2!2d-46.668!3d-23.5556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzIwLjIiUyA0NsijNDAuMSJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da clínica Dr. Roger Kirschner"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
