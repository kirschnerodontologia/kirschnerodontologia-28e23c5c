import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  const whatsappUrl = "https://wa.me/5511945009425?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta.";

  return (
    <section id="contato" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-lg mx-auto mb-10">
          <span className="text-xs font-body font-medium tracking-widest uppercase text-accent">Contato</span>
          <h2 className="mt-2 text-xl sm:text-2xl font-display font-bold text-foreground uppercase">
            VENHA NOS VISITAR
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            {[
              { icon: MapPin, label: "Endereço", value: "Rua Haddock Lobo, 1307, Conj. 14, 1º andar, São Paulo, SP" },
              { icon: Clock, label: "Horário", value: "Segunda a sexta · 08h00 às 18h00" },
              { icon: Phone, label: "WhatsApp", value: "(11) 94500-9425", href: whatsappUrl },
              { icon: Mail, label: "E-mail", value: "kirschnerodontologia@gmail.com", href: "mailto:kirschnerodontologia@gmail.com" },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-md bg-accent/10 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h3 className="text-xs font-body font-semibold text-foreground">{label}</h3>
                  {href ? (
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-xs text-accent font-body mt-0.5 inline-block hover:underline">
                      {value}
                    </a>
                  ) : (
                    <p className="text-xs text-muted-foreground font-body mt-0.5">{value}</p>
                  )}
                </div>
              </div>
            ))}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-cta px-5 py-2.5 text-sm font-body font-semibold text-cta-foreground shadow-md shadow-cta/20 transition-all hover:brightness-110"
            >
              <MessageCircle className="h-4 w-4" />
              Agendar pelo WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-xl overflow-hidden shadow-md border border-border h-[320px]"
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
