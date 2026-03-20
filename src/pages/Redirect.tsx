import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";

const COUNTDOWN_SECONDS = 5;

const Redirect = () => {
  const [searchParams] = useSearchParams();
  const targetUrl = searchParams.get("url") || "https://wa.me/5511945009425";
  const [seconds, setSeconds] = useState(COUNTDOWN_SECONDS);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          window.location.href = targetUrl;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [targetUrl]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Green top bar */}
      <div className="w-full py-3 px-4 text-center" style={{ backgroundColor: "#25D366" }}>
        <p className="text-sm font-body font-semibold text-white">
          ✅ Recebemos a sua solicitação
        </p>
      </div>

      {/* Center content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 text-center space-y-6">
        <div className="relative">
          <div className="h-20 w-20 rounded-full bg-muted/50 flex items-center justify-center animate-pulse">
            <Search className="h-9 w-9 text-muted-foreground" />
          </div>
        </div>

        <div className="space-y-2 max-w-md">
          <p className="text-base font-body font-medium text-foreground">
            Aguarde que estamos localizando um consultor para te atender no WhatsApp...
          </p>
          <p className="text-3xl font-display font-bold text-foreground">
            {seconds}s
          </p>
        </div>

        <div className="w-48 h-1.5 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-1000 ease-linear"
            style={{
              backgroundColor: "#25D366",
              width: `${((COUNTDOWN_SECONDS - seconds) / COUNTDOWN_SECONDS) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Redirect;
