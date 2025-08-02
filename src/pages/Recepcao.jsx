import mansao from "../assets/mansao.jpg";
import { useState, useEffect } from "react";

export default function Recepcao() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-5xl font-serif text-slate-800 mb-6 elegant-text-gradient">
            Recepção
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-300 to-rose-300 mx-auto mb-8 rounded-full"></div>
        </div>

        {/* Reception Venue */}
        <div
          className={`mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-6">
            <h2 className="text-3xl font-serif text-slate-800 mb-4 elegant-text-gradient">
              Mansão Jaraguá
            </h2>
          </div>

          {/* Venue Image */}
          <div className="mb-8">
            <img
              src={mansao}
              alt="Mansão Jaraguá"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Special Text */}
          <div className="text-center space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed max-w-4xl mx-auto">
              Depois de dizer o "sim", é hora de comemorar! Você está super
              convidado(a) para brindar, dançar e celebrar com a gente esse
              momento tão especial!
            </p>

            <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-2xl">
              <p className="text-xl font-medium text-slate-800 mb-2">
                A recepção será no mesmo dia, a partir das 18h
              </p>
              <p className="text-lg text-slate-700 mb-4">
                Rua Comendador J. de Matos, 429 – Vila Clarice, São Paulo – SP,
                05177-100
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <p className="text-slate-700 font-medium">
                  <span className="text-yellow-600">⚠️</span> Taxa de
                  estacionamento/manobrista: R$ 30,00 por veículo
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Map */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-6">
            <h2 className="text-3xl font-serif text-slate-800 mb-4 elegant-text-gradient">
              Como Chegar
            </h2>
          </div>

          <iframe
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Rua+Comendador+J.+de+Matos,+429+-+Vila+Clarice,+São+Paulo+-+SP,+05177-100"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl shadow-lg"
            title="Localização da Mansão Jaraguá"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
