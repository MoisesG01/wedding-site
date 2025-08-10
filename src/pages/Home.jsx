import logo from "../assets/logo2.png";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative min-h-screen flex items-center justify-center px-2 sm:px-6 hero-section"
        style={{
          backgroundImage:
            "url('https://odebate.com.br/wp-content/uploads/2019/03/08032019casal.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-2 sm:px-4 md:px-6">
          {/* Floating decorative elements - hidden on mobile */}
          <div className="hidden sm:block absolute -top-8 -left-8 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="hidden sm:block absolute -bottom-8 -right-8 w-20 h-20 bg-pink-300/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="hidden sm:block absolute top-1/2 -left-12 w-8 h-8 bg-rose-300/30 rounded-full blur-md animate-bounce"></div>
          <div className="hidden sm:block absolute top-1/4 -right-8 w-12 h-12 bg-pink-200/40 rounded-full blur-lg animate-pulse delay-500"></div>

          {/* Logo do casal */}
          <div className="mb-6 sm:mb-8 relative group">
            <img
              src={logo}
              alt="Logo Erica & Junior"
              className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 group-hover:scale-105 transition-all duration-500 transform-gpu"
              style={{
                filter: "brightness(0) invert(1) contrast(1.1)",
                opacity: 1,
              }}
            />
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 font-light tracking-widest text-white drop-shadow-2xl leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 300,
              letterSpacing: "0.1em",
              textShadow:
                "0 0 10px rgba(93, 0, 255, 0.36), 0 0 20px rgba(255, 215, 0, 0.2)",
              filter: "drop-shadow(0 0 5px rgba(255, 217, 0, 0.18))",
            }}
          >
            Erica & Junior
          </h1>

          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-pink-300 to-rose-300 mx-auto mb-6 sm:mb-8 rounded-full"></div>

          <div className="text-lg sm:text-xl md:text-2xl text-body-light mb-8 sm:mb-12 space-y-2">
            <p
              className="font-medium text-white"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 500,
                letterSpacing: "0.02em",
                textShadow:
                  "0 0 8px rgba(255, 255, 255, 0.3), 0 0 15px rgba(255, 255, 255, 0.1)",
                filter: "drop-shadow(0 0 3px rgba(255, 255, 255, 0.2))",
              }}
            >
              22 de Novembro de 2025
            </p>
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
              className="group relative px-0 sm:px-3 md:px-5 py-2 sm:py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-medium text-xs sm:text-sm overflow-hidden transition-all duration-500 hover:bg-white/20 hover:scale-105 hover:shadow-2xl transform-gpu w-48 sm:w-auto"
              style={{
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
              }}
            >
              {/* Efeito 3D interno */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Texto do botão */}
              <span className="relative z-10">Confirmar Presença</span>

              {/* Efeito de brilho */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
