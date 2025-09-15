import igreja from "../assets/igreja.png";
import { useState, useEffect } from "react";
import Divisor from "../components/Divisor";

export default function Cerimonia() {
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
              Cerimônia
            </h1>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-pink-300 to-rose-300 mx-auto mb-6 sm:mb-8 rounded-full"></div>
          </div>

          {/* Church Photo */}
          <div
            className={`mb-8 sm:mb-12 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl font-serif text-slate-800 mb-3 sm:mb-4 elegant-text-gradient">
                Igreja Nossa Senhora da Conceição
              </h2>
            </div>

            {/* Church Image */}
            <div className="mb-8 sm:mb-12">
              <div className="max-w-3xl mx-auto">
                <img
                  src={igreja}
                  alt="Igreja Nossa Senhora da Conceição"
                  className="w-full h-72 sm:h-96 md:h-[28rem] lg:h-[32rem] object-cover object-center rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Special Text */}
            <div className="text-center space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-4xl mx-auto px-4">
                O verdadeiro sentido de tudo isso, está aqui. Mais do que uma
                celebração, o que realmente importa é ver nossa união sendo
                selada e abençoada diante de Deus. E nada será mais especial do
                que viver esse momento único ao lado de cada um de vocês.
              </p>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-4xl mx-auto px-4">
                Contamos com sua presença, e que chegue com antecedência!
              </p>

              <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl mx-4">
                <p className="text-lg sm:text-xl font-medium text-slate-800 mb-2">
                  22 de novembro de 2025, às 16h
                </p>
                <p className="text-sm sm:text-base md:text-lg text-slate-700">
                  Rua Nossa Sra. da Conceição, 117 – Jaraguá, São Paulo – SP,
                  05181-280
                </p>
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
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Rua+Nossa+Sra.+da+Conceição,+117+-+Jaraguá,+São+Paulo+-+SP,+05181-280"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl sm:rounded-2xl shadow-lg"
              title="Localização da Igreja Nossa Senhora da Conceição"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
