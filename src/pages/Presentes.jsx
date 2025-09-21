import { useState, useEffect } from "react";
import { giftsData } from "../data/gifts";
import Divisor from "../components/Divisor";

export default function Presentes() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedGift, setSelectedGift] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [gifts, setGifts] = useState(giftsData);
  const [reservationData, setReservationData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    setIsVisible(true);
    // Load reserved gifts from localStorage
    const savedGifts = localStorage.getItem("reservedGifts");
    if (savedGifts) {
      const reservedIds = JSON.parse(savedGifts);
      setGifts((prevGifts) =>
        prevGifts.map((gift) => ({
          ...gift,
          reserved: reservedIds.includes(gift.id),
          reservedBy: reservedIds.includes(gift.id)
            ? localStorage.getItem(`gift_${gift.id}_reservedBy`) || "Alguém"
            : null,
        }))
      );
    }
  }, []);

  const handleGiftClick = (gift) => {
    setSelectedGift(gift);
    setShowModal(true);
  };

  const handleReserveGift = (e) => {
    e.preventDefault();
    if (selectedGift && reservationData.name && reservationData.phone) {
      // Update gift status
      setGifts((prevGifts) =>
        prevGifts.map((gift) =>
          gift.id === selectedGift.id
            ? { ...gift, reserved: true, reservedBy: reservationData.name }
            : gift
        )
      );

      // Save to localStorage
      const reservedGifts = JSON.parse(
        localStorage.getItem("reservedGifts") || "[]"
      );
      reservedGifts.push(selectedGift.id);
      localStorage.setItem("reservedGifts", JSON.stringify(reservedGifts));
      localStorage.setItem(
        `gift_${selectedGift.id}_reservedBy`,
        reservationData.name
      );
      localStorage.setItem(
        `gift_${selectedGift.id}_phone`,
        reservationData.phone
      );
      localStorage.setItem(
        `gift_${selectedGift.id}_email`,
        reservationData.email
      );

      // Close modal and reset form
      setShowModal(false);
      setSelectedGift(null);
      setReservationData({ name: "", phone: "", email: "" });
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Divisor />

      <div className="py-2 sm:py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div
            className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-800 mb-4 sm:mb-6 elegant-text-gradient">
              🎁 Lista de Presentes
            </h1>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-pink-300 to-rose-300 mx-auto mb-6 sm:mb-8 rounded-full"></div>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-4">
              Uma lista divertida e descontraída para celebrar nosso casamento!
              <br />
              Escolha um presente que faça você sorrir e nos ajude a começar
              nossa vida juntos. 😄
            </p>
          </div>

          {/* Gift Grid */}
          <div
            className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {gifts.map((gift, index) => (
              <div
                key={gift.id}
                className={`group cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  gift.reserved ? "opacity-60" : "hover:shadow-lg"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => !gift.reserved && handleGiftClick(gift)}
              >
                <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                  {/* Gift Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={`/src/assets/presentes/${gift.image}`}
                      alt={gift.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src =
                          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAgNzBMMTMwIDEzMEg3MEwxMDAgNzBaIiBmaWxsPSIjRUM0ODk5Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTYwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNkI3MjgwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCI+🎁</text+Cjwvc3ZnPgo=";
                      }}
                    />

                    {/* Reserved Overlay */}
                    {gift.reserved && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="text-2xl mb-2">✅</div>
                          <div className="text-sm font-medium">Reservado</div>
                          <div className="text-xs opacity-80">
                            por {gift.reservedBy}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Price Badge */}
                    <div className="absolute top-2 right-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-2 py-1 rounded-full text-xs font-medium shadow-lg">
                      {formatPrice(gift.price)}
                    </div>
                  </div>

                  {/* Gift Info */}
                  <div className="p-3 sm:p-4">
                    <h3 className="text-xs sm:text-sm font-medium text-slate-800 line-clamp-2 leading-tight">
                      {gift.title}
                    </h3>

                    {!gift.reserved && (
                      <div className="mt-2 text-xs text-pink-600 font-medium">
                        Clique para reservar
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Info */}
          <div
            className={`text-center mt-8 sm:mt-12 md:mt-16 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 max-w-4xl mx-auto">
              <h3 className="text-lg sm:text-xl md:text-2xl font-serif text-slate-800 mb-4 elegant-text-gradient">
                💕 Como Funciona
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-sm sm:text-base text-slate-600">
                <div className="text-center">
                  <div className="text-2xl mb-2">🎯</div>
                  <p>Escolha o presente que mais combina com você</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">📝</div>
                  <p>Preencha seus dados para reservar</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🎉</div>
                  <p>Presenteie os noivos de forma divertida!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reservation Modal */}
      {showModal && selectedGift && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl p-6 mx-4 max-w-md w-full shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                🎁
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Reservar Presente
              </h3>
              <p className="text-gray-600 text-sm mb-4">{selectedGift.title}</p>
              <div className="text-lg font-bold text-pink-600">
                {formatPrice(selectedGift.price)}
              </div>
            </div>

            <form onSubmit={handleReserveGift} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Seu Nome *
                </label>
                <input
                  type="text"
                  required
                  value={reservationData.name}
                  onChange={(e) =>
                    setReservationData({
                      ...reservationData,
                      name: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent"
                  placeholder="Digite seu nome completo"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={reservationData.phone}
                  onChange={(e) =>
                    setReservationData({
                      ...reservationData,
                      phone: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email (opcional)
                </label>
                <input
                  type="email"
                  value={reservationData.email}
                  onChange={(e) =>
                    setReservationData({
                      ...reservationData,
                      email: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 bg-gray-100 text-gray-600 py-3 px-4 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 px-4 rounded-xl font-medium hover:from-pink-600 hover:to-rose-600 transition-all transform hover:scale-105"
                >
                  Reservar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
