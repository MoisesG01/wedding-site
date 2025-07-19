export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-400 to-gray-700 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Couple Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif mb-4">Wilson & Erica</h3>
            <p className="text-gray-300 mb-4">
              Unidos pelo amor, celebrando a vida juntos.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <span className="text-xl">📸</span>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <span className="text-xl">📘</span>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <span className="text-xl">📱</span>
              </a>
            </div>
          </div>

          {/* Wedding Info */}
          <div className="text-center">
            <h3 className="text-xl font-serif mb-4">Nosso Casamento</h3>
            <div className="space-y-2 text-gray-300">
              <p>📅 22 de Novembro de 2025</p>
              <p>⏰ 18:00</p>
              <p>📍 Espaço de Eventos Flores</p>
              <p>🌹 São Paulo, Brasil</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-serif mb-4">Links Rápidos</h3>
            <div className="space-y-2">
              <a
                href="/confirmacao"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Confirmar Presença
              </a>
              <a
                href="/presentes"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Lista de Presentes
              </a>
              <a
                href="/cerimonia"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Informações da Cerimônia
              </a>
              <a
                href="/contato"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Entre em Contato
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Wilson & Erica. Feito com 💕 para celebrar nosso amor.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Sua presença é nosso maior presente!
          </p>
        </div>
      </div>
    </footer>
  );
}
