import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import Treatments from "@/components/Treatments";
import Differentials from "@/components/Differentials";
import About from "@/components/About";
import Results from "@/components/Results";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import FloatingCTA from "@/components/FloatingCTA";
import CookieConsent from "@/components/CookieConsent";
import { Helmet } from "react-helmet-async";

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Dr. Roger Kirschner",
  description:
    "Clínica odontológica especializada em implantes, próteses, facetas e harmonização facial. 35 anos de experiência.",
  telephone: "+5511945009425",
  email: "kirschnerodontologia@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Haddock Lobo, 1307, Conjunto 14, 1º andar",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  openingHours: "Mo-Fr 08:00-18:00",
  priceRange: "$$$$",
  medicalSpecialty: "Reabilitação Oral",
};

const Index = () => (
  <>
    <Helmet>
      <title>Implante Dental e Reabilitação Oral em SP | Dr. Roger Kirschner</title>
      <meta
        name="description"
        content="Clínica odontológica especializada em implantes, próteses, facetas e harmonização facial. 35 anos de experiência. Agende sua avaliação."
      />
      <link rel="canonical" href="https://drrogerkirschner.com.br" />
      <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
    </Helmet>
    <main>
      <TopBar />
      <Hero />
      <Treatments />
      <Differentials />
      <About />
      <Results />
      <Contact />
    </main>
    <FloatingCTA />
    <CookieConsent />
  </>
);

export default Index;
