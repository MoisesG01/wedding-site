import { useState, useEffect, useRef } from "react";
import Divisor from "../components/Divisor";

export default function Historia() {
  const [isVisible, setIsVisible] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef();

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

  // Auto-play carousel (pausa ao passar mouse)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, currentImage]);

  // Carousel images data (com imagens reais de exemplo)
  const carouselImages = [
    {
      title: "Nosso Primeiro Encontro",
      date: "Janeiro 2020",
      icon: "☕",
      img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Primeiro Teatro Juntos",
      date: "Março 2020",
      icon: "🎭",
      img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Morando Juntos",
      date: "Setembro 2021",
      icon: "🏠",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Viagem para Paris",
      date: "Janeiro 2022",
      icon: "✈️",
      img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "O Pedido de Casamento",
      date: "Dezembro 2023",
      icon: "💍",
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Ensaio de Casamento",
      date: "Janeiro 2024",
      icon: "📸",
      img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % carouselImages.length);
  };
  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Divisor />

      <div className="py-2 sm:py-4 md:py-6">
        <div className="max-w-6xl mx-auto px-4 mb-8 sm:mb-16">
          {/* Welcome Message */}
          <div
            className={`text-center mb-8 sm:mb-16 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-800 mb-4 sm:mb-8">
              Bem-vindos ao nosso site de casamento!
            </h1>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-pink-300 to-rose-300 mx-auto mb-4 sm:mb-8 rounded-full"></div>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-4">
              Criamos este espaço com carinho para compartilhar os detalhes do
              nosso grande dia.
              <br />
              Aqui você encontra tudo sobre a cerimônia, recepção, lista de
              presentes e confirmação de presença.
              <br />
              <span className="font-medium text-slate-700">
                Sua presença tornará esse momento ainda mais inesquecível!
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Countdown Section - Full Width */}
      <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 py-8 sm:py-16 px-4 text-slate-800 relative overflow-hidden w-full">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 sm:w-64 h-32 sm:h-64 bg-amber-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 sm:w-80 h-40 sm:h-80 bg-yellow-200/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-16 sm:w-32 h-16 sm:h-32 bg-orange-200/20 rounded-full blur-2xl"></div>
        </div>

        <div className="w-full text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-slate-800 mb-3 elegant-text-gradient">
            Contagem Regressiva
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mb-6 sm:mb-8 rounded-full"></div>
          <p className="text-base sm:text-lg text-slate-600 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Estamos ansiosos para celebrar esse momento especial com vocês!
          </p>

          <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-6 sm:mb-8 max-w-4xl mx-auto px-2">
            <div className="elegant-card rounded-xl sm:rounded-2xl p-2 sm:p-4 md:p-6 elegant-card-hover elegant-animation-delay-1 border border-white/50 shadow-xl">
              <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 md:mb-3 elegant-text-gradient">
                {countdown.days}
              </div>
              <div className="text-xs sm:text-sm md:text-base text-slate-600 font-medium">
                Dias
              </div>
              <div className="w-4 sm:w-6 md:w-8 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mt-1 sm:mt-2 md:mt-3 rounded-full"></div>
            </div>
            <div className="elegant-card rounded-xl sm:rounded-2xl p-2 sm:p-4 md:p-6 elegant-card-hover elegant-animation-delay-2 border border-white/50 shadow-xl">
              <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 md:mb-3 elegant-text-gradient">
                {countdown.hours.toString().padStart(2, "0")}
              </div>
              <div className="text-xs sm:text-sm md:text-base text-slate-600 font-medium">
                Horas
              </div>
              <div className="w-4 sm:w-6 md:w-8 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mt-1 sm:mt-2 md:mt-3 rounded-full"></div>
            </div>
            <div className="elegant-card rounded-xl sm:rounded-2xl p-2 sm:p-4 md:p-6 elegant-card-hover elegant-animation-delay-3 border border-white/50 shadow-xl">
              <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 md:mb-3 elegant-text-gradient">
                {countdown.minutes.toString().padStart(2, "0")}
              </div>
              <div className="text-xs sm:text-sm md:text-base text-slate-600 font-medium">
                Min
              </div>
              <div className="w-4 sm:w-6 md:w-8 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mt-1 sm:mt-2 md:mt-3 rounded-full"></div>
            </div>
            <div className="elegant-card rounded-xl sm:rounded-2xl p-2 sm:p-4 md:p-6 elegant-card-hover elegant-animation-delay-4 border border-white/50 shadow-xl">
              <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 md:mb-3 elegant-text-gradient">
                {countdown.seconds.toString().padStart(2, "0")}
              </div>
              <div className="text-xs sm:text-sm md:text-base text-slate-600 font-medium">
                Seg
              </div>
              <div className="w-4 sm:w-6 md:w-8 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mt-1 sm:mt-2 md:mt-3 rounded-full"></div>
            </div>
          </div>

          {/* Mensagem especial quando faltam poucos dias */}
          {countdown.days <= 7 && countdown.days > 0 && (
            <div className="elegant-card rounded-xl p-3 sm:p-4 elegant-animation border border-pink-200/50 shadow-lg max-w-xl mx-auto">
              <div className="text-xl sm:text-2xl mb-2">🎉</div>
              <p className="text-sm sm:text-base text-slate-700 font-medium">
                Quase lá! Estamos muito ansiosos!
              </p>
            </div>
          )}

          {/* Mensagem quando o casamento já aconteceu */}
          {countdown.days === 0 &&
            countdown.hours === 0 &&
            countdown.minutes === 0 &&
            countdown.seconds === 0 && (
              <div className="elegant-card rounded-xl p-3 sm:p-4 elegant-animation border border-pink-200/50 shadow-lg max-w-xl mx-auto">
                <div className="text-xl sm:text-2xl mb-2">💕</div>
                <p className="text-sm sm:text-base text-slate-700 font-medium">
                  Obrigado por celebrar conosco!
                </p>
              </div>
            )}
        </div>
      </div>

      {/* O Casal Section */}
      <div className="py-4 sm:py-8 md:py-12 px-4">
        <Divisor />

        <div className="max-w-6xl mx-auto mt-4 sm:mt-6 md:mt-8">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-800 mb-4 sm:mb-6 elegant-text-gradient">
              O Casal
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-pink-300 to-rose-300 mx-auto mb-6 sm:mb-8 rounded-full"></div>
          </div>

          {/* Couple Photo and Text */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            {/* Photos */}
            <div className="grid grid-cols-2 gap-4 sm:gap-8 md:gap-12 mb-8 sm:mb-12 md:mb-16">
              {/* Noiva */}
              <div className="text-center">
                <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 mx-auto elegant-card rounded-full flex items-center justify-center mb-4 sm:mb-6 elegant-card-hover shadow-2xl overflow-hidden">
                  <img
                    src="/src/assets/logo.jpg"
                    alt="Erica"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Noivo */}
              <div className="text-center">
                <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 mx-auto elegant-card rounded-full flex items-center justify-center mb-4 sm:mb-6 elegant-card-hover shadow-2xl overflow-hidden">
                  <img
                    src="/src/assets/logo.jpg"
                    alt="Junior"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="text-center max-w-4xl mx-auto px-4">
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                <span className="font-serif text-xl sm:text-2xl text-slate-800 italic font-medium elegant-text-gradient">
                  Nossa história é feita de amor, cumplicidade e um propósito.
                </span>
                <br />
                <br />
                Depois de tantos momentos vividos ao longo desses 11 anos,
                chegou a hora de celebrar um novo capítulo em nossas vidas:{" "}
                <strong>O nosso casamento!</strong> Cada detalhe está sendo
                preparado com muito carinho para vivermos esse dia ao lado de
                quem fez parte da nossa caminhada.
                <br />
                <br />
                <span className="font-medium text-slate-700">
                  Sua presença tornará tudo ainda mais especial.
                </span>
                <div className="w-20 sm:w-28 h-1 bg-gradient-to-r from-pink-300 to-rose-300 mx-auto mt-6 sm:mt-8 rounded-full"></div>
              </p>
            </div>
          </div>

          {/* Photo Gallery Carousel */}
          <div className="text-center mb-2 sm:mb-3">
            <h3 className="text-2xl sm:text-3xl font-serif text-slate-800 mb-1 sm:mb-2 elegant-text-gradient">
              Nossos Momentos Especiais
            </h3>
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-slate-300 to-gray-400 mx-auto mb-2 sm:mb-3 rounded-full"></div>
          </div>

          {/* Modern 3D Carousel */}
          <div
            className="relative max-w-4xl mx-auto select-none px-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            ref={carouselRef}
          >
            {/* 3D Carousel Track */}
            <div className="flex items-center justify-center h-80 sm:h-96 md:h-[500px] lg:h-[600px] relative overflow-hidden mb-4 sm:mb-6">
              {carouselImages.map((img, idx) => {
                // Calcula a posição relativa ao item central
                const offset = idx - currentImage;
                let style =
                  "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out ";
                if (offset === 0) {
                  style +=
                    "z-20 scale-100 shadow-2xl bg-white/90 border-4 border-pink-200 w-72 h-60 sm:w-96 sm:h-80 md:w-[400px] md:h-[320px] lg:w-[500px] lg:h-[400px] ";
                } else if (
                  offset === -1 ||
                  (offset === carouselImages.length - 1 && currentImage === 0)
                ) {
                  style +=
                    "z-10 scale-75 -translate-x-[90%] opacity-60 blur-sm rotate-y-6 bg-white/60 w-72 h-60 sm:w-96 sm:h-80 md:w-[400px] md:h-[320px] lg:w-[500px] lg:h-[400px] ";
                } else if (
                  offset === 1 ||
                  (offset === -(carouselImages.length - 1) &&
                    currentImage === carouselImages.length - 1)
                ) {
                  style +=
                    "z-10 scale-75 translate-x-[90%] opacity-60 blur-sm -rotate-y-6 bg-white/60 w-72 h-60 sm:w-96 sm:h-80 md:w-[400px] md:h-[320px] lg:w-[500px] lg:h-[400px] ";
                } else {
                  style +=
                    "z-0 opacity-0 pointer-events-none w-72 h-60 sm:w-96 sm:h-80 md:w-[400px] md:h-[320px] lg:w-[500px] lg:h-[400px]";
                }
                return (
                  <div
                    key={idx}
                    className={
                      style +
                      " rounded-2xl sm:rounded-3xl flex flex-col items-center justify-center cursor-pointer overflow-hidden"
                    }
                    aria-hidden={offset !== 0}
                  >
                    <div className="relative w-full h-full">
                      <img
                        src={img.img}
                        alt={img.title}
                        className="object-cover w-full h-full rounded-2xl sm:rounded-3xl transition-all duration-700 shadow-lg"
                        draggable={false}
                      />
                      {/* Ícone sobreposto */}
                      <span className="absolute left-3 sm:left-4 bottom-3 sm:bottom-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-white/80 rounded-full px-2 sm:px-3 py-1 shadow-md">
                        {img.icon}
                      </span>
                      {/* Gradiente para texto */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 sm:p-4 md:p-5 rounded-b-2xl sm:rounded-b-3xl">
                        <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-serif mb-1 text-left">
                          {img.title}
                        </h3>
                        <p className="text-gray-200 text-xs sm:text-sm text-left">
                          {img.date}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Glassmorphism Navigation Buttons */}
            <button
              onClick={prevImage}
              aria-label="Imagem anterior"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-lg hover:bg-pink-100 text-pink-600 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-30 focus:outline-none focus:ring-2 focus:ring-pink-400 border border-pink-200"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextImage}
              aria-label="Próxima imagem"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-lg hover:bg-pink-100 text-pink-600 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-30 focus:outline-none focus:ring-2 focus:ring-pink-400 border border-pink-200"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Miniaturas circulares animadas com imagens */}
            <div className="flex justify-center gap-3 sm:gap-4 overflow-x-auto pb-2 sm:pb-4 px-4 py-1">
              {carouselImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  aria-label={`Miniatura ${img.title}`}
                  className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all duration-300 bg-gradient-to-br from-white to-pink-50 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 overflow-hidden ${
                    currentImage === idx
                      ? "border-pink-500 scale-110 ring-2 ring-pink-300"
                      : "border-pink-100 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img.img}
                    alt={img.title}
                    className="object-cover w-full h-full rounded-full"
                    draggable={false}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
