import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Consigo parcelar meu tratamento?",
    answer:
      "Sim! Oferecemos diversas formas de pagamento, incluindo parcelamento no cartão de crédito. Consulte as condições na sua consulta.",
  },
  {
    question: "O procedimento dói?",
    answer:
      "Utilizamos técnicas modernas de anestesia e sedação para garantir o máximo conforto. A maioria dos pacientes relata pouca ou nenhuma dor.",
  },
  {
    question: "Qual é o horário de funcionamento da clínica?",
    answer:
      "Atendemos de segunda a sexta-feira, das 08h00 às 18h00. Agende pelo WhatsApp para garantir o melhor horário.",
  },
  {
    question: "Vocês atendem por plano de saúde?",
    answer:
      "Nosso atendimento é particular premium. Trabalhamos com foco total na qualidade e personalização de cada caso.",
  },
  {
    question: "Preciso de uma consulta inicial antes do tratamento?",
    answer:
      "Sim. Realizamos uma consulta de planejamento para entender seu caso, apresentar as opções e alinhar expectativas antes de qualquer procedimento.",
  },
  {
    question: "A clínica oferece estacionamento?",
    answer:
      "A região conta com diversas opções de estacionamento próximas ao consultório, com fácil acesso.",
  },
  {
    question: "Quanto tempo dura um tratamento completo?",
    answer:
      "Depende do caso. Tratamentos simples podem levar semanas, enquanto reabilitações completas podem levar alguns meses. Tudo é explicado no planejamento.",
  },
  {
    question: "A clínica atende emergências?",
    answer:
      "Sim, atendemos urgências odontológicas. Entre em contato pelo WhatsApp para avaliarmos a situação e encaixarmos seu atendimento o mais rápido possível.",
  },
];

const FAQ = () => {
  return (
    <section id="duvidas" className="py-16 relative overflow-hidden bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-8"
        >
          <span className="inline-block text-xs font-body font-medium tracking-widest uppercase text-accent border border-accent/20 rounded-full px-3 py-1 mb-3">
            Tire Suas Dúvidas
          </span>
          <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground leading-snug uppercase">
            O QUE MAIS NOS PERGUNTAM{" "}
            <span className="italic text-accent">ANTES DE AGENDAR.</span>
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
          className="max-w-3xl mx-auto"
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
    </section>
  );
};

export default FAQ;
