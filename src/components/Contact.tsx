import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  const whatsappUrl = "https://wa.me/5511945009425?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta.";

  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-body font-semibold tracking-widest uppercase text-accent">Contato</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-foreground">
            Venha nos visitar
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-body font-semibold text-foreground">Endereço</h3>
                <p className="text-sm text-muted-foreground font-body mt-1">
                  Rua Haddock Lobo, 1307 — Conjunto 14, 1º andar<br />São Paulo – SP
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-body font-semibold text-foreground">Horário</h3>
                <p className="text-sm text-muted-foreground font-body mt-1">Segunda a sexta · 08h00 às 18h00</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-body font-semibold text-foreground">WhatsApp</h3>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-accent font-body font-semibold mt-1 inline-block hover:underline">
                  (11) 94500-9425
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-body font-semibold text-foreground">E-mail</h3>
                <a href="mailto:kirschnerodontologia@gmail.com" className="text-sm text-accent font-body font-semibold mt-1 inline-block hover:underline">
                  kirschnerodontologia@gmail.com
                </a>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-cta px-8 py-4 text-base font-body font-semibold text-cta-foreground shadow-lg shadow-cta/25 transition-all hover:brightness-110"
            >
              <MessageCircle className="h-5 w-5" />
              Agendar pelo WhatsApp
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl overflow-hidden shadow-lg border border-border h-[400px]"
          >
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
