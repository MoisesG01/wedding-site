export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-800 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Couple Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-serif text-white mb-3 font-semibold">
              Erica & Junior
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-pink-300 to-rose-300 mx-auto md:mx-0 mb-3 sm:mb-4 rounded-full"></div>
            <p className="text-sm sm:text-base text-gray-300">
              Unidos pelo amor, celebrando a vida juntos.
            </p>
          </div>

          {/* Event Details */}
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-serif text-white mb-3 font-semibold">
              Nosso Casamento
            </h3>
            <div className="w-8 h-1 bg-gradient-to-r from-pink-300 to-rose-300 mx-auto mb-3 sm:mb-4 rounded-full"></div>
            <div className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-300">
              <p>📅 22 de Novembro, 2025</p>
              <p>📍 Igreja Nossa Senhora da Conceição</p>
              <p>👗 Dress Code: Elegante Esportivo</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right">
            <h3 className="text-lg sm:text-xl font-serif text-white mb-3 font-semibold">
              Links Rápidos
            </h3>
            <div className="w-8 h-1 bg-gradient-to-r from-pink-300 to-rose-300 mx-auto md:ml-auto md:mr-0 mb-3 sm:mb-4 rounded-full"></div>
            <div className="space-y-1 sm:space-y-2">
              <a
                href="#confirmacao"
                className="block text-sm sm:text-base text-gray-300 hover:text-white transition-all duration-300"
              >
                ✅ Confirmar Presença
              </a>
              <a
                href="#presentes"
                className="block text-sm sm:text-base text-gray-300 hover:text-white transition-all duration-300"
              >
                🎁 Lista de Presentes
              </a>
              <a
                href="#contato"
                className="block text-sm sm:text-base text-gray-300 hover:text-white transition-all duration-300"
              >
                📞 Entre em Contato
              </a>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 sm:p-6 rounded-xl sm:rounded-2xl mb-6 sm:mb-8">
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-serif text-white mb-3 sm:mb-4 font-semibold">
              Entre em Contato
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="text-center">
                <div className="text-xl sm:text-2xl mb-1 sm:mb-2">📞</div>
                <p className="text-xs sm:text-sm text-gray-300">
                  (11) 99999-9999
                </p>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl mb-1 sm:mb-2">💬</div>
                <p className="text-xs sm:text-sm text-gray-300">WhatsApp</p>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl mb-1 sm:mb-2">📧</div>
                <p className="text-xs sm:text-sm text-gray-300">
                  erica.junior@email.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-4 sm:pt-6 text-center">
          <p className="text-sm sm:text-base text-gray-300 mb-2 sm:mb-3">
            © {currentYear} Erica & Junior. Feito com 💕 para celebrar nosso
            amor.
          </p>
          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
            <div
              className="w-2 h-2 bg-rose-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
