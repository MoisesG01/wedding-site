import { useState, useEffect } from "react";
import Divisor from "../components/Divisor";

export default function Contato() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Divisor />

      <div className="py-2 sm:py-4 md:py-6">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div
            className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-800 mb-4 sm:mb-6 elegant-text-gradient">
              Entre em Contato
            </h1>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-pink-300 to-rose-300 mx-auto mb-6 sm:mb-8 rounded-full"></div>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
              Tem alguma dúvida ou quer nos enviar uma mensagem especial?
              <br />
              Estamos aqui para você!
            </p>
          </div>

          {/* Contact Information */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-2xl sm:text-3xl font-serif text-slate-800 mb-6 sm:mb-8 elegant-text-gradient text-center">
              Informações de Contato
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-pink-200 to-rose-200 mb-6 sm:mb-8 rounded-full mx-auto"></div>

            {/* Desktop: 3-column layout, Mobile: 1-column layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {/* WhatsApp Card */}
              <div className="bg-white/80 backdrop-blur-sm border border-white/20 p-6 sm:p-8 rounded-xl sm:rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl shadow-lg mb-4">
                    💬
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif text-slate-800 mb-3 elegant-text-gradient">
                    WhatsApp
                  </h3>
                  <div className="space-y-2">
                    <p className="text-sm sm:text-base text-slate-600">
                      (11) 98912-3506 - Junior
                    </p>
                    <p className="text-sm sm:text-base text-slate-600">
                      (11) 99172-0657 - Érica
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 mt-3">
                    Resposta rápida via mensagem
                  </p>
                </div>
              </div>

              {/* Ceremony Location Card */}
              <div className="bg-white/80 backdrop-blur-sm border border-white/20 p-6 sm:p-8 rounded-xl sm:rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl shadow-lg mb-4">
                    📍
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif text-slate-800 mb-3 elegant-text-gradient">
                    Local da Cerimônia
                  </h3>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Rua+Nossa+Sra.+da+Conceição,+117+–+Jaraguá,+São+Paulo+–+SP,+05181-280"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-pink-600 transition-colors duration-300"
                  >
                    <p className="text-sm sm:text-base text-slate-600 mb-2 hover:underline">
                      Igreja Nossa Senhora da Conceição
                    </p>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Rua Nossa Sra. da Conceição, 117 – Jaraguá, São Paulo – SP
                    </p>
                  </a>
                </div>
              </div>

              {/* Reception Location Card */}
              <div className="bg-white/80 backdrop-blur-sm border border-white/20 p-6 sm:p-8 rounded-xl sm:rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl shadow-lg mb-4">
                    🎉
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif text-slate-800 mb-3 elegant-text-gradient">
                    Local da Recepção
                  </h3>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Rua+Comendador+J.+de+Matos,+429+-+Vila+Clarice,+São+Paulo+-+SP,+05177-100"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-pink-600 transition-colors duration-300"
                  >
                    <p className="text-sm sm:text-base text-slate-600 mb-2 hover:underline">
                      Mansão Jaraguá
                    </p>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Rua Comendador J. de Matos, 429 – Vila Clarice, São Paulo
                      – SP
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
