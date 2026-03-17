import { Phone } from "lucide-react";

const TopBar = () => (
  <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground">
    <div className="container mx-auto flex items-center justify-between px-4 py-2 text-sm font-body">
      <span className="text-primary-foreground/80">
        Atendimento na região de São Paulo – SP
      </span>
      <a
        href="tel:+5511945009425"
        className="inline-flex items-center gap-1.5 font-semibold text-primary-foreground hover:text-accent transition-colors"
      >
        <Phone className="h-3.5 w-3.5" />
        (11) 94500-9425
      </a>
    </div>
  </div>
);

export default TopBar;
