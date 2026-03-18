import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="space-y-3">
            <p className="text-xs leading-relaxed font-body text-primary-foreground/60">
              Clínica especializada em reabilitação oral, implantes, próteses, estética dental e harmonização orofacial.
            </p>
          </div>

          {/* Responsável Técnico */}
          <div className="space-y-3">
            <h3 className="text-sm font-display font-bold text-primary-foreground uppercase">Responsável Técnico</h3>
            <div className="text-xs font-body text-primary-foreground/60 space-y-1">
              <p>Dr. Roger Kirschner</p>
              <p>CROSP 46410</p>
              <p>Especialista em Reabilitação Oral</p>
            </div>
          </div>

          {/* Contato */}
          <div className="space-y-3">
            <h3 className="text-sm font-display font-bold text-primary-foreground uppercase">Contato</h3>
            <div className="text-xs font-body text-primary-foreground/60 space-y-1">
              <p>Rua Haddock Lobo, 1307, Conj. 14</p>
              <p>1º andar – São Paulo/SP</p>
              <p>Tel: (11) 94500-9425</p>
              <p>kirschnerodontologia@gmail.com</p>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h3 className="text-sm font-display font-bold text-primary-foreground uppercase">Informações Legais</h3>
            <div className="text-xs font-body text-primary-foreground/60 space-y-1">
              <p>CNPJ: 50.431.586/0001-17</p>
              <p>
                Este site está em conformidade com a{" "}
                <strong className="text-primary-foreground/80">Lei Geral de Proteção de Dados (LGPD)</strong> – Lei nº 13.709/2018.
              </p>
              <Link
                to="/politica-de-privacidade"
                className="inline-block mt-1 text-primary-foreground/80 hover:text-primary-foreground hover:underline"
              >
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs font-body text-primary-foreground/40">
            © {new Date().getFullYear()} Dr. Roger Kirschner Odontologia e Estética. Todos os direitos reservados.
          </p>
          <p className="text-xs font-body text-primary-foreground/40">
            Horário: Seg–Sex 08h às 18h
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
