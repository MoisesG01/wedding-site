import { useState, useEffect } from "react";

export default function Historia() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Carousel images data
  const carouselImages = [
    {
      title: "Nosso Primeiro Encontro",
      date: "Janeiro 2020",
      icon: "☕",
    },
    {
      title: "Primeiro Teatro Juntos",
      date: "Março 2020",
      icon: "🎭",
    },
    {
      title: "Morando Juntos",
      date: "Setembro 2021",
      icon: "🏠",
    },
    {
      title: "Viagem para Paris",
      date: "Janeiro 2022",
      icon: "✈️",
    },
    {
      title: "O Pedido de Casamento",
      date: "Dezembro 2023",
      icon: "💍",
    },
    {
      title: "Ensaio de Casamento",
      date: "Janeiro 2024",
      icon: "📸",
    },
  ];

  // Carousel navigation functions
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  const timelineData = [
    {
      id: 1,
      date: "Janeiro 2020",
      title: "Nosso Primeiro Encontro",
      description:
        "Nos conhecemos em uma cafeteria no centro da cidade. Erica estava desenhando e Wilson, curioso, perguntou sobre seu trabalho. A conversa durou horas e desde então não conseguimos mais nos separar.",
      quote:
        "Foi amor à primeira vista, mas levamos alguns meses para perceber isso",
      author: "Erica",
      icon: "☕",
      color: "from-slate-200 to-gray-300",
      bgColor: "bg-gradient-to-br from-slate-50 to-gray-100",
    },
    {
      id: 2,
      date: "Março 2020",
      title: "Nosso Primeiro Encontro",
      description:
        "Wilson convidou Erica para ir ao teatro. A peça era romântica e durante o intervalo, ele finalmente teve coragem de segurar sua mão pela primeira vez.",
      quote: "Aquele momento mudou tudo. Sabia que ela era a pessoa certa",
      author: "Wilson",
      icon: "🎭",
      color: "from-gray-200 to-slate-300",
      bgColor: "bg-gradient-to-br from-gray-50 to-slate-100",
    },
    {
      id: 3,
      date: "Setembro 2021",
      title: "Morando Juntos",
      description:
        "Decidimos morar juntos. Foi um grande passo que nos aproximou ainda mais. Aprendemos a dividir responsabilidades e a construir uma vida em comum.",
      quote: "Cada dia descobrimos algo novo sobre o outro",
      author: "Erica",
      icon: "🏠",
      color: "from-slate-300 to-gray-400",
      bgColor: "bg-gradient-to-br from-slate-100 to-gray-200",
    },
    {
      id: 4,
      date: "Janeiro 2022",
      title: "Nossa Primeira Viagem",
      description:
        "Viajamos para Paris juntos. Foi nossa primeira viagem internacional e confirmou que somos companheiros perfeitos para aventuras.",
      quote: "Paris nos ensinou que o amor é universal",
      author: "Wilson",
      icon: "✈️",
      color: "from-gray-300 to-slate-400",
      bgColor: "bg-gradient-to-br from-gray-100 to-slate-200",
    },
    {
      id: 5,
      date: "Dezembro 2023",
      title: "O Pedido",
      description:
        "Wilson pediu Erica em casamento na mesma cafeteria onde se conheceram. Foi uma surpresa completa e o momento mais emocionante de nossas vidas.",
      quote: "Sim! Mil vezes sim!",
      author: "Erica",
      icon: "💍",
      color: "from-slate-400 to-gray-500",
      bgColor: "bg-gradient-to-br from-slate-200 to-gray-300",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-5xl font-serif text-slate-800 mb-4">
            Nossa História de Amor
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Uma jornada de amor que começou com um encontro casual e se
            transformou em uma história linda que agora vamos compartilhar com
            vocês.
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-slate-300 to-gray-400 h-full hidden md:block"></div>

          {/* Timeline Steps */}
          <div className="space-y-16">
            {timelineData.map((step, index) => (
              <div
                key={step.id}
                className={`relative transition-all duration-1000 delay-${
                  index * 200
                } ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Timeline Step */}
                <div
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <div
                      className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-slate-400 ${
                        activeStep === index ? "ring-4 ring-slate-200" : ""
                      }`}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-2xl shadow-lg`}
                        >
                          {step.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-serif text-slate-800">
                            {step.title}
                          </h3>
                          <p className="text-slate-600 font-semibold">
                            {step.date}
                          </p>
                        </div>
                      </div>

                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {step.description}
                      </p>

                      <div
                        className={`p-4 rounded-lg ${step.bgColor} border-l-4 border-slate-400`}
                      >
                        <blockquote className="text-slate-700 italic mb-2">
                          "{step.quote}"
                        </blockquote>
                        <p className="text-slate-600 font-semibold">
                          - {step.author}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:block relative z-10">
                    <div
                      className={`w-8 h-8 rounded-full bg-gradient-to-br ${
                        step.color
                      } shadow-lg border-4 border-white transition-all duration-300 ${
                        activeStep === index
                          ? "scale-125 ring-4 ring-slate-200"
                          : ""
                      }`}
                    >
                      <div className="w-full h-full rounded-full bg-white opacity-20"></div>
                    </div>
                  </div>

                  {/* Mobile Timeline Dot */}
                  <div className="md:hidden relative z-10">
                    <div
                      className={`w-6 h-6 rounded-full bg-gradient-to-br ${
                        step.color
                      } shadow-lg border-3 border-white transition-all duration-300 ${
                        activeStep === index
                          ? "scale-125 ring-4 ring-slate-200"
                          : ""
                      }`}
                    >
                      <div className="w-full h-full rounded-full bg-white opacity-20"></div>
                    </div>
                  </div>

                  {/* Image Placeholder */}
                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? "md:pl-8" : "md:pr-8"
                    }`}
                  >
                    <div
                      className={`w-full h-64 rounded-2xl bg-gradient-to-br ${
                        step.color
                      } flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                        activeStep === index ? "ring-4 ring-slate-200" : ""
                      }`}
                    >
                      <span className="text-8xl opacity-80">{step.icon}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div
          className={`mt-20 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-white p-12 rounded-2xl shadow-lg text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-gray-50 opacity-50"></div>
            <div className="relative z-10">
              <div className="text-6xl mb-6">💕</div>
              <blockquote className="text-3xl font-serif text-slate-800 mb-6 leading-relaxed">
                "O amor não é sobre encontrar a pessoa perfeita, mas sobre ver
                uma pessoa imperfeita perfeitamente."
              </blockquote>
              <p className="text-xl text-slate-600">- Wilson & Erica</p>
            </div>
          </div>
        </div>

        {/* Photo Carousel */}
        <div
          className={`mt-20 transition-all duration-1000 delay-1200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl font-serif text-center text-slate-800 mb-12">
            Nossos Momentos Especiais
          </h2>

          {/* Carousel Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Carousel Track */}
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentImage * 100}%)` }}
              >
                {carouselImages.map((image, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-200 to-gray-300">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-8xl opacity-80">
                          {image.icon}
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <h3 className="text-white text-xl font-serif mb-2">
                          {image.title}
                        </h3>
                        <p className="text-gray-200 text-sm">{image.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-10"
            >
              <svg
                className="w-6 h-6"
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
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-10"
            >
              <svg
                className="w-6 h-6"
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

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentImage === index
                      ? "bg-slate-800 scale-125"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
