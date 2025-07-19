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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center bg-gray-900">
        <img
          src="https://odebate.com.br/wp-content/uploads/2019/03/08032019casal.jpg"
          alt="Casal feliz"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
          style={{ zIndex: 1 }}
        />
        <div
          className="absolute inset-0 bg-black bg-opacity-60"
          style={{ zIndex: 2 }}
        ></div>
        <div className="relative text-center text-white z-10 flex flex-col items-center justify-center w-full px-4">
          <h1
            className="text-6xl md:text-8xl mb-4"
            style={{
              fontFamily: "Playfair Display, serif",
              fontWeight: 700,
              letterSpacing: "2px",
              textShadow: "0 4px 24px rgba(0,0,0,0.4)",
            }}
          >
            Wilson & Erica
          </h1>
          <p
            className="text-2xl md:text-3xl mb-8 text-gray-200 font-light tracking-wide"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.3)" }}
          >
            Vamos nos casar!
          </p>
          <div
            className="text-lg md:text-xl text-gray-300 mb-8"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.2)" }}
          >
            <p className="font-semibold">22 de Novembro de 2025</p>
            <p className="mt-2">São Paulo, Brasil</p>
          </div>
          <div>
            <button className="bg-white text-slate-800 px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-xl border-2 border-white/20">
              Confirmar Presença
            </button>
          </div>
        </div>
      </div>

      {/* Couple Introduction */}
      <div className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-slate-800 mb-4">
            Nossa História
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Nos conhecemos em 2020 e desde então nossa história tem sido repleta
            de amor, risadas e momentos especiais. Agora estamos prontos para
            começar uma nova jornada juntos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center">
            <div className="w-64 h-64 mx-auto bg-gradient-to-br from-slate-200 to-gray-300 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <span className="text-6xl">👰</span>
            </div>
            <h3 className="text-2xl font-serif text-slate-800 mb-2">
              Erica Silva
            </h3>
            <p className="text-slate-600">Designer e apaixonada por arte</p>
          </div>

          <div className="text-center">
            <div className="w-64 h-64 mx-auto bg-gradient-to-br from-slate-300 to-gray-400 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <span className="text-6xl">🤵</span>
            </div>
            <h3 className="text-2xl font-serif text-slate-800 mb-2">
              Wilson Santos
            </h3>
            <p className="text-slate-600">Engenheiro e amante da tecnologia</p>
          </div>
        </div>
      </div>

      {/* Key Information */}
      <div className="bg-white py-16 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-center text-slate-800 mb-12">
            Informações Importantes
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-slate-50 rounded-lg border border-slate-200">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Data
              </h3>
              <p className="text-slate-600">22 de Novembro de 2025</p>
              <p className="text-slate-600">Sábado às 18h</p>
            </div>

            <div className="text-center p-6 bg-slate-50 rounded-lg border border-slate-200">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Local
              </h3>
              <p className="text-slate-600">Espaço de Eventos</p>
              <p className="text-slate-600">Rua das Flores, 123</p>
            </div>

            <div className="text-center p-6 bg-slate-50 rounded-lg border border-slate-200">
              <div className="text-4xl mb-4">👗</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Dress Code
              </h3>
              <p className="text-slate-600">Elegante Esportivo</p>
              <p className="text-slate-600">Cores: Rosa e Dourado</p>
            </div>
          </div>
        </div>
      </div>

      {/* Countdown */}
      <div className="bg-gradient-to-r from-slate-800 to-gray-900 py-16 px-4 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-8">Contagem Regressiva</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm border border-white border-opacity-20">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {countdown.days}
              </div>
              <div className="text-sm md:text-base text-gray-300">Dias</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm border border-white border-opacity-20">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {countdown.hours.toString().padStart(2, "0")}
              </div>
              <div className="text-sm md:text-base text-gray-300">Horas</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm border border-white border-opacity-20">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {countdown.minutes.toString().padStart(2, "0")}
              </div>
              <div className="text-sm md:text-base text-gray-300">Minutos</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm border border-white border-opacity-20">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {countdown.seconds.toString().padStart(2, "0")}
              </div>
              <div className="text-sm md:text-base text-gray-300">Segundos</div>
            </div>
          </div>

          {/* Mensagem especial quando faltam poucos dias */}
          {countdown.days <= 7 && countdown.days > 0 && (
            <div className="mt-8 p-4 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm border border-white border-opacity-20">
              <p className="text-lg font-semibold">
                🎉 Quase lá! Estamos muito ansiosos!
              </p>
            </div>
          )}

          {/* Mensagem quando o casamento já aconteceu */}
          {countdown.days === 0 &&
            countdown.hours === 0 &&
            countdown.minutes === 0 &&
            countdown.seconds === 0 && (
              <div className="mt-8 p-4 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm border border-white border-opacity-20">
                <p className="text-lg font-semibold">
                  💕 Obrigado por celebrar conosco!
                </p>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
