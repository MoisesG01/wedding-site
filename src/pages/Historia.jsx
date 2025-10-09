import { useState, useEffect, useRef, useCallback } from "react";
import Divisor from "../components/Divisor";
import casal from "../assets/casal.jpg";
import inicio from "../assets/inicio.jpg";
import primeiraViagem from "../assets/primeiraViagem.jpg";
import pedidoCasamento from "../assets/pedidoCasamento.jpg";
import decada from "../assets/decada.jpg";
import padrinhos from "../assets/padrinhos.jpg";
import grandeDia from "../assets/grandeDia.jpg";

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

  // Carousel images data (momentos especiais do casal)
  const carouselImages = [
    {
      title: "O início de tudo",
      date: "04/2014",
      img: inicio,
    },
    {
      title: "Primeira viagem juntos",
      date: "03/2017",
      img: primeiraViagem,
    },
    {
      title: "Pedido de casamento",
      date: "04/2023",
      img: pedidoCasamento,
    },
    {
      title: "Um marco importante, uma década de namoro",
      date: "04/2024",
      img: decada,
    },
    {
      title:
        "Nossos padrinhos, escolhidos com o coração, parte essencial da nossa história",
      date: "08/2025",
      img: padrinhos,
    },
    {
      title: "A espera do grande dia",
      date: "11/2025",
      img: grandeDia,
    },
  ];

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % carouselImages.length);
  }, [carouselImages.length]);

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

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
  }, [isHovered, currentImage, nextImage]);

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
      <div className="bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 py-8 sm:py-16 px-4 text-slate-800 relative overflow-hidden w-full">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 sm:w-64 h-32 sm:h-64 bg-gray-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 sm:w-80 h-40 sm:h-80 bg-slate-200/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-16 sm:w-32 h-16 sm:h-32 bg-gray-200/20 rounded-full blur-2xl"></div>
        </div>

        <div className="w-full text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-slate-800 mb-3 elegant-text-gradient">
            Contagem Regressiva
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-gray-400 to-slate-500 mx-auto mb-6 sm:mb-8 rounded-full"></div>
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
              <div className="w-4 sm:w-6 md:w-8 h-1 bg-gradient-to-r from-gray-400 to-slate-500 mx-auto mt-1 sm:mt-2 md:mt-3 rounded-full"></div>
            </div>
            <div className="elegant-card rounded-xl sm:rounded-2xl p-2 sm:p-4 md:p-6 elegant-card-hover elegant-animation-delay-2 border border-white/50 shadow-xl">
              <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 md:mb-3 elegant-text-gradient">
                {countdown.hours.toString().padStart(2, "0")}
              </div>
              <div className="text-xs sm:text-sm md:text-base text-slate-600 font-medium">
                Horas
              </div>
              <div className="w-4 sm:w-6 md:w-8 h-1 bg-gradient-to-r from-gray-400 to-slate-500 mx-auto mt-1 sm:mt-2 md:mt-3 rounded-full"></div>
            </div>
            <div className="elegant-card rounded-xl sm:rounded-2xl p-2 sm:p-4 md:p-6 elegant-card-hover elegant-animation-delay-3 border border-white/50 shadow-xl">
              <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 md:mb-3 elegant-text-gradient">
                {countdown.minutes.toString().padStart(2, "0")}
              </div>
              <div className="text-xs sm:text-sm md:text-base text-slate-600 font-medium">
                Min
              </div>
              <div className="w-4 sm:w-6 md:w-8 h-1 bg-gradient-to-r from-gray-400 to-slate-500 mx-auto mt-1 sm:mt-2 md:mt-3 rounded-full"></div>
            </div>
            <div className="elegant-card rounded-xl sm:rounded-2xl p-2 sm:p-4 md:p-6 elegant-card-hover elegant-animation-delay-4 border border-white/50 shadow-xl">
              <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 md:mb-3 elegant-text-gradient">
                {countdown.seconds.toString().padStart(2, "0")}
              </div>
              <div className="text-xs sm:text-sm md:text-base text-slate-600 font-medium">
                Seg
              </div>
              <div className="w-4 sm:w-6 md:w-8 h-1 bg-gradient-to-r from-gray-400 to-slate-500 mx-auto mt-1 sm:mt-2 md:mt-3 rounded-full"></div>
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
            {/* Photo */}
            <div className="text-center mb-10 sm:mb-14 md:mb-18">
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[450px] lg:w-[450px] lg:h-[550px] mx-auto mb-6 sm:mb-8">
                {/* Decorative frame */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-100/40 via-rose-100/40 to-pink-200/40 rounded-[40px] rotate-3"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-pink-100/30 via-rose-100/30 to-pink-200/30 rounded-[40px] -rotate-2"></div>

                {/* Main image container */}
                <div
                  className="relative elegant-card overflow-hidden shadow-2xl h-full"
                  style={{
                    borderRadius: "40px 40px 40px 40px",
                    clipPath:
                      "polygon(0% 8%, 8% 0%, 92% 0%, 100% 8%, 100% 92%, 92% 100%, 8% 100%, 0% 92%)",
                  }}
                >
                  <img
                    src={casal}
                    alt="Erica & Junior"
                    className="w-full h-full object-contain"
                    style={{ objectPosition: "center center" }}
                  />
                  {/* Elegant overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-white/5 pointer-events-none"></div>
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
          <div className="text-center mb-1 sm:mb-2">
            <h3 className="text-2xl sm:text-3xl font-serif text-slate-800 mb-1 elegant-text-gradient">
              Nossos Momentos Especiais
            </h3>
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-slate-300 to-gray-400 mx-auto mb-1 sm:mb-2 rounded-full"></div>
          </div>

          {/* Elegant Modern Carousel */}
          <div
            className="relative max-w-4xl mx-auto select-none px-4 py-8 sm:py-12"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            ref={carouselRef}
          >
            {/* Main Image Display with Fade Effect */}
            <div className="relative mb-10 sm:mb-12">
              <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
                {carouselImages.map((img, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      currentImage === idx ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={img.img}
                      alt={img.title}
                      className="object-contain w-full h-full bg-gradient-to-br from-slate-50 to-gray-100"
                      style={{ objectPosition: "center center" }}
                      draggable={false}
                    />
                  </div>
                ))}

                {/* Gradient Overlay with Fade Effect */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 sm:p-8 transition-all duration-800">
                  <h3 className="text-white text-lg sm:text-xl md:text-2xl font-serif mb-2 transition-all duration-800">
                    {carouselImages[currentImage].title}
                  </h3>
                  <p className="text-gray-200 text-sm sm:text-base transition-all duration-800">
                    {carouselImages[currentImage].date}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              aria-label="Imagem anterior"
              className="absolute left-6 top-1/3 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/30 text-gray-400 hover:text-gray-600 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-none hover:shadow-sm transition-all duration-300 z-10 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <svg
                className="w-5 h-5"
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
              className="absolute right-6 top-1/3 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/30 text-gray-400 hover:text-gray-600 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-none hover:shadow-sm transition-all duration-300 z-10 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <svg
                className="w-5 h-5"
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

            {/* Elegant Thumbnail Navigation */}
            <div className="flex justify-center gap-3 sm:gap-4 overflow-x-auto pb-2 px-4 pt-4 sm:pt-6">
              {carouselImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  aria-label={`Miniatura ${img.title}`}
                  className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all duration-300 bg-white shadow-md hover:shadow-lg overflow-hidden ${
                    currentImage === idx
                      ? "border-pink-500 scale-105 ring-2 ring-pink-200 shadow-lg opacity-100"
                      : "border-gray-200 hover:border-pink-300 hover:scale-105 opacity-40 hover:opacity-70"
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

            {/* Progress Indicators */}
            <div className="flex justify-center mt-4 gap-2">
              {carouselImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentImage === idx
                      ? "bg-pink-500 w-6"
                      : "bg-gray-300 hover:bg-pink-300"
                  }`}
                  aria-label={`Ir para imagem ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
