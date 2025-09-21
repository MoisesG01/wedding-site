export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-800 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-6 sm:py-12">
        {/* Mobile Version - Compact */}
        <div className="block md:hidden">
          {/* Couple Info - Mobile */}
          <div className="text-center mb-4">
            <h3 className="text-lg font-serif text-white mb-2 font-semibold">
              Erica & Junior
            </h3>
            <div className="w-8 h-1 bg-gradient-to-r from-pink-300 to-rose-300 mx-auto mb-2 rounded-full"></div>
            <p className="text-xs text-gray-300">
              Unidos pelo amor, celebrando a vida juntos.
            </p>
          </div>

          {/* Quick Links - Mobile */}
          <div className="text-center mb-4">
            <div className="flex justify-center gap-4">
              <a
                href="#confirmacao"
                className="text-xs text-gray-300 hover:text-white transition-all duration-300 bg-white/10 px-3 py-2 rounded-lg"
              >
                ✅ Confirmar
              </a>
              <a
                href="#presentes"
                className="text-xs text-gray-300 hover:text-white transition-all duration-300 bg-white/10 px-3 py-2 rounded-lg"
              >
                🎁 Presentes
              </a>
              <a
                href="#contato"
                className="text-xs text-gray-300 hover:text-white transition-all duration-300 bg-white/10 px-3 py-2 rounded-lg"
              >
                📞 Contato
              </a>
            </div>
          </div>

          {/* Contact - Mobile */}
          <div className="text-center mb-4">
            <div className="text-center">
              <div className="text-lg mb-1">💬</div>
              <p className="text-xs text-gray-300">WhatsApp: (11) 98912-3506</p>
            </div>
          </div>

          {/* Copyright - Mobile */}
          <div className="border-t border-white/20 pt-3 text-center">
            <p className="text-xs text-gray-300">
              © {currentYear} Erica & Junior. Feito com 💕
            </p>
          </div>
        </div>

        {/* Desktop Version - Full */}
        <div className="hidden md:block">
          {/* Main Content */}
          <div className="grid grid-cols-3 gap-8 mb-8">
            {/* Couple Info */}
            <div className="text-left">
              <h3 className="text-2xl font-serif text-white mb-3 font-semibold">
                Erica & Junior
              </h3>
              <div className="w-12 h-1 bg-gradient-to-r from-pink-300 to-rose-300 mb-4 rounded-full"></div>
              <p className="text-base text-gray-300">
                Unidos pelo amor, celebrando a vida juntos.
              </p>
            </div>

            {/* Event Details */}
            <div className="text-center">
              <h3 className="text-xl font-serif text-white mb-3 font-semibold">
                Nosso Casamento
              </h3>
              <div className="w-8 h-1 bg-gradient-to-r from-pink-300 to-rose-300 mx-auto mb-4 rounded-full"></div>
              <div className="space-y-2 text-base text-gray-300">
                <p>📅 22 de Novembro, 2025</p>
                <p>📍 Igreja Nossa Senhora da Conceição</p>
                <p>🎉 Mansão Jaraguá (Recepção)</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-right">
              <h3 className="text-xl font-serif text-white mb-3 font-semibold">
                Links Rápidos
              </h3>
              <div className="w-8 h-1 bg-gradient-to-r from-pink-300 to-rose-300 ml-auto mr-0 mb-4 rounded-full"></div>
              <div className="space-y-2">
                <a
                  href="#confirmacao"
                  className="block text-base text-gray-300 hover:text-white transition-all duration-300"
                >
                  ✅ Confirmar Presença
                </a>
                <a
                  href="#presentes"
                  className="block text-base text-gray-300 hover:text-white transition-all duration-300"
                >
                  🎁 Lista de Presentes
                </a>
                <a
                  href="#contato"
                  className="block text-base text-gray-300 hover:text-white transition-all duration-300"
                >
                  📞 Entre em Contato
                </a>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl mb-8">
            <div className="text-center">
              <h3 className="text-xl font-serif text-white mb-4 font-semibold">
                Entre em Contato
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl mb-2">💬</div>
                  <p className="text-sm text-gray-300">WhatsApp</p>
                  <p className="text-sm text-gray-300">(11) 98912-3506</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">📧</div>
                  <p className="text-sm text-gray-300">Email</p>
                  <p className="text-sm text-gray-300">
                    erica.junior@email.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-6 text-center">
            <p className="text-base text-gray-300 mb-3">
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
      </div>
    </footer>
  );
}
