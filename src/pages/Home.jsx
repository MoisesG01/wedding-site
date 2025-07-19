import { useState, useEffect } from "react";

export default function Home() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Data do casamento: 22 de Novembro de 2025 às 18:00
    const weddingDate = new Date("2025-11-22T18:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const difference = weddingDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      } else {
        // Casamento já aconteceu
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Atualiza imediatamente
    updateCountdown();

    // Atualiza a cada segundo
    const timer = setInterval(updateCountdown, 1000);

    // Cleanup do timer
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen elegant-gradient">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src="https://odebate.com.br/wp-content/uploads/2019/03/08032019casal.jpg"
          alt="Casal feliz"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ zIndex: 1 }}
        />
        <div
          className="absolute inset-0 elegant-gradient-dark opacity-80"
          style={{ zIndex: 2 }}
        ></div>

        {/* Floating elements */}
        <div className="absolute inset-0" style={{ zIndex: 3 }}>
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-20 w-40 h-40 bg-pink-200/20 rounded-full blur-xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-10 w-24 h-24 bg-rose-200/15 rounded-full blur-lg animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative text-center text-white z-10 flex flex-col items-center justify-center w-full px-4 elegant-animation">
          <div className="mb-8">
            <span
              className="text-6xl animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              💕
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl mb-6 text-elegant font-light tracking-wider">
            Wilson & Erica
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-pink-300 to-rose-300 mx-auto mb-8 rounded-full"></div>

          <p className="text-2xl md:text-3xl mb-8 text-body-light tracking-wide text-gray-100">
            Vamos nos casar!
          </p>

          <div className="text-lg md:text-xl text-body-light mb-12 space-y-2">
            <p className="font-medium text-white">22 de Novembro de 2025</p>
            <p className="text-gray-200">São Paulo, Brasil</p>
          </div>

          <div className="elegant-animation-delay-1">
            <button
              onClick={() => {
                const confirmacaoSection =
                  document.getElementById("confirmacao");
                if (confirmacaoSection) {
                  confirmacaoSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="elegant-button text-lg px-12 py-4 font-medium"
            >
              Confirmar Presença
            </button>
          </div>
        </div>
      </div>

      {/* Couple Introduction */}
      <div className="py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-20 elegant-animation">
          <h2 className="text-5xl text-elegant mb-6 elegant-text-gradient">
            Nossa História
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-slate-300 to-gray-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-body text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Nos conhecemos em 2020 e desde então nossa história tem sido repleta
            de amor, risadas e momentos especiais. Agora estamos prontos para
            começar uma nova jornada juntos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="text-center elegant-animation-delay-1">
            <div className="w-72 h-72 mx-auto elegant-card rounded-full flex items-center justify-center mb-8 elegant-card-hover">
              <span className="text-8xl">👰</span>
            </div>
            <h3 className="text-3xl text-elegant mb-3 elegant-text-gradient">
              Erica Silva
            </h3>
            <p className="text-body text-slate-600">
              Designer e apaixonada por arte
            </p>
          </div>

          <div className="text-center elegant-animation-delay-2">
            <div className="w-72 h-72 mx-auto elegant-card rounded-full flex items-center justify-center mb-8 elegant-card-hover">
              <span className="text-8xl">🤵</span>
            </div>
            <h3 className="text-3xl text-elegant mb-3 elegant-text-gradient">
              Wilson Santos
            </h3>
            <p className="text-body text-slate-600">
              Engenheiro e amante da tecnologia
            </p>
          </div>
        </div>
      </div>

      {/* Key Information */}
      <div className="elegant-gradient-pink py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl text-elegant text-center mb-16 elegant-text-gradient">
            Informações Importantes
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center elegant-card p-8 elegant-card-hover elegant-animation-delay-1">
              <div className="text-6xl mb-6">📅</div>
              <h3 className="text-2xl text-elegant mb-4 elegant-text-gradient">
                Data
              </h3>
              <p className="text-body text-slate-600 mb-2">
                22 de Novembro de 2025
              </p>
              <p className="text-body text-slate-600">Sábado às 18h</p>
            </div>

            <div className="text-center elegant-card p-8 elegant-card-hover elegant-animation-delay-2">
              <div className="text-6xl mb-6">📍</div>
              <h3 className="text-2xl text-elegant mb-4 elegant-text-gradient">
                Local
              </h3>
              <p className="text-body text-slate-600 mb-2">Espaço de Eventos</p>
              <p className="text-body text-slate-600">Rua das Flores, 123</p>
            </div>

            <div className="text-center elegant-card p-8 elegant-card-hover elegant-animation-delay-3">
              <div className="text-6xl mb-6">👗</div>
              <h3 className="text-2xl text-elegant mb-4 elegant-text-gradient">
                Dress Code
              </h3>
              <p className="text-body text-slate-600 mb-2">
                Elegante Esportivo
              </p>
              <p className="text-body text-slate-600">Cores: Rosa e Dourado</p>
            </div>
          </div>
        </div>
      </div>

      {/* Countdown */}
      <div className="elegant-gradient-dark py-24 px-4 text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-5xl text-elegant mb-12 elegant-animation">
            Contagem Regressiva
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="elegant-glass rounded-2xl p-8 elegant-card-hover elegant-animation-delay-1">
              <div className="text-5xl md:text-6xl font-bold mb-3 text-white">
                {countdown.days}
              </div>
              <div className="text-lg text-gray-300 text-body">Dias</div>
            </div>
            <div className="elegant-glass rounded-2xl p-8 elegant-card-hover elegant-animation-delay-2">
              <div className="text-5xl md:text-6xl font-bold mb-3 text-white">
                {countdown.hours.toString().padStart(2, "0")}
              </div>
              <div className="text-lg text-gray-300 text-body">Horas</div>
            </div>
            <div className="elegant-glass rounded-2xl p-8 elegant-card-hover elegant-animation-delay-3">
              <div className="text-5xl md:text-6xl font-bold mb-3 text-white">
                {countdown.minutes.toString().padStart(2, "0")}
              </div>
              <div className="text-lg text-gray-300 text-body">Minutos</div>
            </div>
            <div className="elegant-glass rounded-2xl p-8 elegant-card-hover elegant-animation-delay-4">
              <div className="text-5xl md:text-6xl font-bold mb-3 text-white">
                {countdown.seconds.toString().padStart(2, "0")}
              </div>
              <div className="text-lg text-gray-300 text-body">Segundos</div>
            </div>
          </div>

          {/* Mensagem especial quando faltam poucos dias */}
          {countdown.days <= 7 && countdown.days > 0 && (
            <div className="elegant-glass rounded-2xl p-6 elegant-animation">
              <p className="text-xl text-body font-medium">
                🎉 Quase lá! Estamos muito ansiosos!
              </p>
            </div>
          )}

          {/* Mensagem quando o casamento já aconteceu */}
          {countdown.days === 0 &&
            countdown.hours === 0 &&
            countdown.minutes === 0 &&
            countdown.seconds === 0 && (
              <div className="elegant-glass rounded-2xl p-6 elegant-animation">
                <p className="text-xl text-body font-medium">
                  💕 Obrigado por celebrar conosco!
                </p>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
