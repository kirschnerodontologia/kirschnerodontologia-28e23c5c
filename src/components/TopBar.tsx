import { Phone } from "lucide-react";

const TopBar = () => (
  <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground">
    <div className="container mx-auto flex items-center justify-between px-4 py-1.5 text-xs font-body">
      <span className="text-primary-foreground/70">
        Atendimento na região de São Paulo – SP
      </span>
      <a
        href="tel:+5511945009425"
        className="inline-flex items-center gap-1 font-semibold text-primary-foreground hover:text-accent transition-colors"
      >
        <Phone className="h-3 w-3" />
        (11) 94500-9425
      </a>
    </div>
  </div>
);

export default TopBar;
