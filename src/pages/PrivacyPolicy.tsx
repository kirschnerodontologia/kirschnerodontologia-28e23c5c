import { Helmet } from "react-helmet-async";
import TopBar from "@/components/TopBar";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => (
  <>
    <Helmet>
      <title>Política de Privacidade | Dr. Roger Kirschner</title>
      <meta name="description" content="Política de Privacidade e proteção de dados pessoais conforme a LGPD." />
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
    <TopBar />
    <div className="min-h-screen bg-background pt-20 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-8 font-body">
          <ArrowLeft className="h-4 w-4" /> Voltar ao site
        </Link>

        <h1 className="text-2xl font-display font-bold text-foreground mb-6">Política de Privacidade</h1>

        <div className="prose prose-sm max-w-none font-body text-muted-foreground space-y-6 [&_h2]:text-foreground [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-3 [&_strong]:text-foreground">
          <p>Última atualização: 18 de março de 2026</p>

          <p>
            A clínica <strong>Dr. Roger Kirschner Odontologia e Estética</strong> respeita a sua privacidade e está comprometida com a proteção dos seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD, Lei nº 13.709/2018).
          </p>

          <h2>1. Dados coletados</h2>
          <p>
            Coletamos apenas os dados estritamente necessários para atendimento, como: nome, telefone e mensagens enviadas via WhatsApp ou formulário de contato. Não coletamos dados sensíveis sem consentimento explícito.
          </p>

          <h2>2. Finalidade do uso</h2>
          <p>
            Os dados são utilizados exclusivamente para: agendamento de consultas, comunicação com pacientes e melhoria dos serviços prestados. Não compartilhamos dados com terceiros para fins comerciais.
          </p>

          <h2>3. Cookies</h2>
          <p>
            Este site utiliza apenas cookies essenciais para funcionamento. Cookies de análise são ativados somente com seu consentimento explícito através do banner exibido na primeira visita.
          </p>

          <h2>4. Armazenamento e segurança</h2>
          <p>
            Os dados são armazenados de forma segura e acessados apenas por profissionais autorizados da clínica. Adotamos medidas técnicas e administrativas para proteger contra acessos não autorizados, perdas ou alterações.
          </p>

          <h2>5. Direitos do titular</h2>
          <p>
            Conforme a LGPD, você tem direito a: acessar seus dados, corrigir informações, solicitar exclusão, revogar consentimento e obter informações sobre compartilhamento. Para exercer seus direitos, entre em contato pelo e-mail: <strong>kirschnerodontologia@gmail.com</strong>.
          </p>

          <h2>6. Controlador de dados</h2>
          <p>
            <strong>Dr. Roger Kirschner</strong><br />
            CROSP 46410<br />
            Rua Haddock Lobo, 1307 — Conjunto 14, 1º andar — São Paulo/SP<br />
            E-mail: kirschnerodontologia@gmail.com
          </p>
        </div>
      </div>
    </div>
  </>
);

export default PrivacyPolicy;
