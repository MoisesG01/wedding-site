import mansao from "../assets/mansao.jpg";
import { useState, useEffect } from "react";
import Divisor from "../components/Divisor";

export default function Recepcao() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Divisor />

      <div className="py-2 sm:py-4 md:py-6">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div
            className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-800 mb-4 sm:mb-6 elegant-text-gradient">
              Recepção
            </h1>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-pink-300 to-rose-300 mx-auto mb-6 sm:mb-8 rounded-full"></div>
          </div>

          {/* Reception Venue */}
          <div
            className={`mb-8 sm:mb-12 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl font-serif text-slate-800 mb-3 sm:mb-4 elegant-text-gradient">
                Mansão Jaraguá
              </h2>
            </div>

            {/* Venue Image */}
            <div className="mb-8 sm:mb-12">
              <div className="max-w-3xl mx-auto">
                <img
                  src={mansao}
                  alt="Mansão Jaraguá"
                  className="w-full h-72 sm:h-96 md:h-[28rem] lg:h-[32rem] object-cover object-center rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Special Text */}
            <div className="text-center space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-4xl mx-auto px-4">
                Depois de dizer o "sim", é hora de comemorar! Você está super
                convidado(a) para brindar, dançar e celebrar com a gente esse
                momento tão especial!
              </p>

              <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl mx-4">
                <p className="text-lg sm:text-xl font-medium text-slate-800 mb-2">
                  A recepção será no mesmo dia, a partir das 18h
                </p>
                <p className="text-sm sm:text-base md:text-lg text-slate-700 mb-3 sm:mb-4">
                  Rua Comendador J. de Matos, 429 – Vila Clarice, São Paulo –
                  SP, 05177-100
                </p>
                <div className="space-y-3">
                  <div className="bg-gray-50 border-l-4 border-gray-400 p-3 sm:p-4 rounded">
                    <p className="text-sm sm:text-base text-slate-700 font-medium">
                      <span className="text-gray-600">⚠️</span> Taxa de
                      estacionamento com manobrista: R$ 30,00 por veículo
                    </p>
                  </div>
                  <div className="bg-gray-50 border-l-4 border-gray-400 p-3 sm:p-4 rounded">
                    <p className="text-sm sm:text-base text-slate-700 font-medium">
                      <span className="text-gray-600">🚗</span> Sugerimos irem
                      de Uber para que possam aproveitar melhor a festa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Map */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl font-serif text-slate-800 mb-3 sm:mb-4 elegant-text-gradient">
                Como Chegar
              </h2>
            </div>

            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Rua+Comendador+J.+de+Matos,+429+-+Vila+Clarice,+São+Paulo+-+SP,+05177-100"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl sm:rounded-2xl shadow-lg"
              title="Localização da Mansão Jaraguá"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
