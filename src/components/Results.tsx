import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const photos = [
  "/result-1.png",
  "/result-2.png",
  "/result-3.png",
];

const whatsappUrl = "https://wa.me/5511945009425?text=Olá%2C%20venho%20através%20do%20site%20e%20gostaria%20de%20mais%20informações!";

const Results = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-xs font-body font-medium tracking-widest uppercase text-accent">Resultados</span>
          <h2 className="mt-2 text-xl sm:text-2xl font-display font-bold text-foreground uppercase">
            RESULTADOS REAIS, PACIENTES REAIS
          </h2>
          <p className="mt-2 text-sm text-muted-foreground font-body">
            Cada caso é único. Veja como planejamos e executamos transformações completas.
          </p>
        </motion.div>

        <div className="mt-10 max-w-xs mx-auto">
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {photos.map((src, i) => (
                <CarouselItem key={i}>
                  <div className="rounded-xl overflow-hidden aspect-[3/4]">
                    <img
                      src={src}
                      alt={`Resultado de tratamento ${i + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-sm text-muted-foreground font-body mb-3">
            Quer saber o que é possível no seu caso?
          </p>
          <button
            onClick={() => navigate(`/redirect?url=${encodeURIComponent(whatsappUrl)}`)}
            className="inline-flex items-center gap-2 rounded-full bg-cta px-6 py-2.5 text-sm font-body font-semibold text-cta-foreground shadow-md shadow-cta/20 transition-all hover:brightness-110 cursor-pointer"
          >
            <MessageCircle className="h-4 w-4" />
            Agendar consulta
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Results;