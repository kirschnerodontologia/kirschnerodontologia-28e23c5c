import { useNavigate } from "react-router-dom";

const whatsappUrl = "https://wa.me/5511945009425?text=Olá%2C%20venho%20através%20do%20site%20e%20gostaria%20de%20mais%20informações!";

const WhatsAppButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/redirect?url=${encodeURIComponent(whatsappUrl)}`);
  };

  return (
    <a
      href={whatsappUrl}
      onClick={(e) => { e.preventDefault(); handleClick(); }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center h-14 w-14 rounded-full shadow-lg transition-all hover:scale-105 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite] cursor-pointer"
      style={{ backgroundColor: "#25D366" }}
      aria-label="Falar pelo WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.052 31.2l6.014-1.952A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0Zm9.32 22.614c-.39 1.1-1.932 2.014-3.178 2.28-.852.18-1.962.324-5.704-1.226-4.788-1.984-7.866-6.856-8.104-7.174-.228-.318-1.918-2.554-1.918-4.872s1.214-3.456 1.644-3.928c.43-.472.94-.59 1.254-.59.312 0 .626.004.9.016.288.014.676-.11 1.058.806.39.94 1.332 3.242 1.448 3.478.118.236.196.51.04.826-.158.318-.236.514-.472.794-.236.278-.498.622-.71.834-.236.236-.482.494-.208.968.276.472 1.224 2.018 2.63 3.268 1.808 1.606 3.332 2.104 3.804 2.34.472.236.748.196 1.024-.118.276-.316 1.184-1.372 1.5-1.844.316-.472.632-.39 1.064-.236.432.158 2.734 1.29 3.206 1.526.472.236.786.354.902.55.118.196.118 1.13-.272 2.228Z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
