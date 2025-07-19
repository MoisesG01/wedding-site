export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="elegant-gradient-dark text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Couple Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl text-elegant mb-3 oklch(95.6% 0.045 203.388)">
              Wilson & Erica
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-pink-300 to-rose-300 mx-auto md:mx-0 mb-4 rounded-full"></div>
            <p className="text-body-light text-gray-300">
              Unidos pelo amor, celebrando a vida juntos.
            </p>
          </div>

          {/* Event Details */}
          <div className="text-center">
            <h3 className="text-xl text-elegant mb-3 oklch(95.6% 0.045 203.388)">
              Nosso Casamento
            </h3>
            <div className="w-8 h-1 bg-gradient-to-r from-pink-300 to-rose-300 mx-auto mb-4 rounded-full"></div>
            <div className="space-y-2 text-gray-300">
              <p>📅 22 de Novembro, 2025</p>
              <p>📍 Espaço de Eventos Flores</p>
              <p>👗 Dress Code: Elegante</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right">
            <h3 className="text-xl text-elegant mb-3 oklch(95.6% 0.045 203.388)">
              Links Rápidos
            </h3>
            <div className="w-8 h-1 bg-gradient-to-r from-pink-300 to-rose-300 mx-auto md:ml-auto md:mr-0 mb-4 rounded-full"></div>
            <div className="space-y-2">
              <a
                href="#confirmacao"
                className="block text-gray-300 hover:text-white elegant-transition"
              >
                ✅ Confirmar Presença
              </a>
              <a
                href="#presentes"
                className="block text-gray-300 hover:text-white elegant-transition"
              >
                🎁 Lista de Presentes
              </a>
              <a
                href="#contato"
                className="block text-gray-300 hover:text-white elegant-transition"
              >
                📞 Entre em Contato
              </a>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="elegant-glass p-6 rounded-2xl mb-8">
          <div className="text-center">
            <h3 className="text-xl text-elegant mb-4">Entre em Contato</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl mb-2">📞</div>
                <p className="text-body-light">(11) 99999-9999</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">💬</div>
                <p className="text-body-light">WhatsApp</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">📧</div>
                <p className="text-body-light">wilson.erica@email.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-body text-gray-300 mb-3">
            © {currentYear} Wilson & Erica. Feito com 💕 para celebrar nosso
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
