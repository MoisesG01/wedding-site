import { useState, useEffect } from "react";

export default function MaintenancePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-slate-50 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Logo/Imagem dos noivos */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-4xl">💒</span>
            </div>
          </div>

          {/* Título */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-800 mb-6 elegant-text-gradient">
            Erica & Junior
          </h1>

          {/* Divisor decorativo */}
          <div className="w-16 h-1 bg-gradient-to-r from-pink-300 to-rose-300 mx-auto mb-8 rounded-full"></div>

          {/* Mensagem principal */}
          <div className="bg-white/80 backdrop-blur-md border border-white/30 shadow-xl shadow-slate-200/40 rounded-3xl p-8 sm:p-10 mb-8">
            <div
              className="text-6xl sm:text-7xl mb-6 animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              🛠️
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif text-slate-800 mb-4">
              Site em Construção
            </h2>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-6">
              Bem-vindo ao site de casamento da Erica e Junior! Estamos passando
              por alguns ajustes finais para deixar tudo perfeito para vocês.
            </p>

            <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
              Em breve o site estará disponível com todas as informações sobre
              nosso grande dia!
            </p>
          </div>

          {/* Informações adicionais */}
          <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200/50 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-2xl">💝</span>
              <h3 className="text-lg font-serif text-slate-800">
                Aguardem novidades!
              </h3>
              <span className="text-2xl">💝</span>
            </div>

            <p className="text-sm text-slate-600">
              Estamos preparando algo muito especial para compartilhar com
              vocês. Obrigado pela paciência e carinho!
            </p>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-xs text-slate-500">
              © 2025 Erica & Junior - Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
