import logo from "../assets/logo.jpg";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 hero-section"
        style={{
          backgroundImage:
            "url('https://odebate.com.br/wp-content/uploads/2019/03/08032019casal.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Floating decorative elements - hidden on mobile */}
          <div className="hidden sm:block absolute -top-8 -left-8 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="hidden sm:block absolute -bottom-8 -right-8 w-20 h-20 bg-pink-300/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="hidden sm:block absolute top-1/2 -left-12 w-8 h-8 bg-rose-300/30 rounded-full blur-md animate-bounce"></div>
          <div className="hidden sm:block absolute top-1/4 -right-8 w-12 h-12 bg-pink-200/40 rounded-full blur-lg animate-pulse delay-500"></div>

          {/* Logo do casal */}
          <div className="mb-6 sm:mb-8">
            <img
              src={logo}
              alt="Logo Erica & Junior"
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto rounded-full object-cover border-4 border-white/30 shadow-2xl"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl mb-4 sm:mb-6 text-elegant font-light tracking-wider text-white drop-shadow-2xl leading-tight">
            Erica & Junior
          </h1>

          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-pink-300 to-rose-300 mx-auto mb-6 sm:mb-8 rounded-full"></div>

          <div className="text-base sm:text-lg md:text-xl text-body-light mb-8 sm:mb-12 space-y-2">
            <p className="font-medium text-white">22 de Novembro de 2025</p>
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
              className="group relative px-8 sm:px-10 md:px-12 py-3 sm:py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-medium text-base sm:text-lg overflow-hidden transition-all duration-500 hover:bg-white/20 hover:scale-105 hover:shadow-2xl transform-gpu w-full sm:w-auto"
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
