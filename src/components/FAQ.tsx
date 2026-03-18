import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import drFaqImg from "@/assets/dra-faq.png";

const faqs = [
  {
    question: "Consigo parcelar meu tratamento?",
    answer:
      "Sim! Oferecemos diversas formas de pagamento, incluindo parcelamento no cartão de crédito. Consulte as condições na sua avaliação.",
  },
  {
    question: "O procedimento dói?",
    answer:
      "Utilizamos técnicas modernas de anestesia e sedação para garantir o máximo conforto. A maioria dos pacientes relata pouca ou nenhuma dor.",
  },
  {
    question: "Todo mundo pode fazer implante?",
    answer:
      "A maioria dos pacientes adultos pode receber implantes. Em casos específicos, pode ser necessário um tratamento prévio. Isso é avaliado na consulta.",
  },
  {
    question: "O que é a carga imediata e eu posso fazer?",
    answer:
      "Carga imediata é a colocação do dente provisório no mesmo dia do implante. Nem todos os casos permitem, mas avaliamos cada situação individualmente.",
  },
  {
    question: "Quanto tempo dura um implante?",
    answer:
      "Com os cuidados adequados de higiene e acompanhamento, um implante pode durar a vida toda. Fazemos acompanhamento periódico para garantir a longevidade.",
  },
  {
    question: "O implante fica igual ao dente natural?",
    answer:
      "Sim. Trabalhamos com materiais de alta qualidade para que o resultado seja o mais natural possível, tanto em estética quanto em funcionalidade.",
  },
  {
    question: "Quanto tempo leva o tratamento completo?",
    answer:
      "Depende do caso. Tratamentos simples podem levar semanas, enquanto reabilitações completas podem levar alguns meses. Tudo é explicado no planejamento.",
  },
];

const FAQ = () => {
  return (
    <section id="duvidas" className="py-16 relative overflow-hidden bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left max-w-2xl mb-8"
            >
              <span className="inline-block text-xs font-body font-medium tracking-widest uppercase text-accent border border-accent/20 rounded-full px-3 py-1 mb-3">
                Tire Suas Dúvidas
              </span>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground leading-snug">
                O que mais nos perguntam{" "}
                <span className="italic text-accent">antes de agendar.</span>
              </h2>
              <p className="mt-2 text-sm text-muted-foreground font-body">
                Transparência faz parte do nosso cuidado. Aqui estão as respostas para as dúvidas mais comuns, sem enrolação.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Accordion type="single" collapsible className="space-y-2">
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="bg-muted/50 rounded-lg border-none px-5"
                  >
                    <AccordionTrigger className="text-sm font-body font-medium text-foreground hover:no-underline py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground font-body pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="hidden lg:block w-72 xl:w-80 flex-shrink-0"
          >
            <img
              src={drFaqImg}
              alt="Dra. Kirschner"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
