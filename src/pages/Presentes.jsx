import { useState, useEffect } from "react";

export default function Presentes() {
  const [showModal, setShowModal] = useState(false);
  const [selectedGift, setSelectedGift] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const itemsPerPage = 6;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Single consolidated gift list with images
  const gifts = [
    {
      id: 1,
      name: "Jogo de Panelas Tramontina",
      price: "R$ 450,00",
      description: "Conjunto de 5 peças em aço inox",
      category: "Casa e Decoração",
      icon: "🏠",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      name: "Mixer Philips Walita",
      price: "R$ 280,00",
      description: "Processador de alimentos 500W",
      category: "Eletrodomésticos",
      icon: "🔌",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3,
      name: "Jogo de Toalhas",
      price: "R$ 120,00",
      description: "Conjunto de 4 toalhas de banho",
      category: "Casa e Decoração",
      icon: "🏠",
      image:
        "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 4,
      name: "Vaso Decorativo",
      price: "R$ 180,00",
      description: "Vaso de cerâmica artesanal",
      category: "Casa e Decoração",
      icon: "🏠",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 5,
      name: "Air Fryer",
      price: "R$ 350,00",
      description: "Fritadeira elétrica 4L",
      category: "Eletrodomésticos",
      icon: "🔌",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 6,
      name: "Liquidificador",
      price: "R$ 220,00",
      description: "Liquidificador 1000W",
      category: "Eletrodomésticos",
      icon: "🔌",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 7,
      name: "Cafeteira",
      price: "R$ 180,00",
      description: "Cafeteira automática",
      category: "Eletrodomésticos",
      icon: "🔌",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 8,
      name: "Microondas",
      price: "R$ 420,00",
      description: "Microondas 20L",
      category: "Eletrodomésticos",
      icon: "🔌",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 9,
      name: "Mala de Viagem",
      price: "R$ 380,00",
      description: 'Mala com rodinhas 29"',
      category: "Viagem e Lazer",
      icon: "✈️",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 10,
      name: "Jogo de Praia",
      price: "R$ 150,00",
      description: "Toalha, guarda-sol e esteira",
      category: "Viagem e Lazer",
      icon: "✈️",
      image:
        "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 11,
      name: "Câmera Polaroid",
      price: "R$ 320,00",
      description: "Câmera instantânea",
      category: "Viagem e Lazer",
      icon: "✈️",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 12,
      name: "Jogo de Tabuleiro",
      price: "R$ 90,00",
      description: "Coleção de jogos",
      category: "Viagem e Lazer",
      icon: "✈️",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 13,
      name: "Contribuição para Lua de Mel",
      price: "Valor à escolha",
      description: "Ajude-nos a realizar nosso sonho",
      category: "Contribuição",
      icon: "💝",
      image:
        "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 14,
      name: "Contribuição para Casa",
      price: "Valor à escolha",
      description: "Para mobiliar nosso novo lar",
      category: "Contribuição",
      icon: "💝",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 15,
      name: "Contribuição para Investimento",
      price: "Valor à escolha",
      description: "Para nosso futuro juntos",
      category: "Contribuição",
      icon: "💝",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80",
    },
  ];

  // Paginação
  const totalPages = Math.ceil(gifts.length / itemsPerPage);
  const paginatedGifts = gifts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleGiftClick = (gift) => {
    setSelectedGift(gift);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedGift(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-8 sm:py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-800 mb-4 sm:mb-6 elegant-text-gradient">
            Lista de Presentes
          </h1>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-pink-300 to-rose-300 mx-auto mb-6 sm:mb-8 rounded-full"></div>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-4">
            O seu carinho é o que mais importa pra nós.
            <br />
            E caso queira nos ajudar a montar nosso lar com amor, deixamos aqui
            algumas sugestões pensadas com o coração.
            <br />
            Sinta-se à vontade para escolher algo especial ou contribuir da
            forma que quiser, cada gesto será lembrado com muito amor.
          </p>
        </div>

        {/* Gift Items Grid */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif text-slate-800 mb-3 sm:mb-4 elegant-text-gradient">
              Nossos Presentes
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-pink-200 to-rose-200 mx-auto mb-3 sm:mb-4 rounded-full"></div>
            <p className="text-base sm:text-lg text-slate-600">
              {gifts.length} itens disponíveis
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 mb-8 sm:mb-12">
            {paginatedGifts.map((gift) => (
              <div
                key={gift.id}
                className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 overflow-hidden"
                onClick={() => handleGiftClick(gift)}
              >
                {/* Gift Image */}
                <div className="relative h-28 sm:h-40 md:h-48 lg:h-56 overflow-hidden">
                  <img
                    src={gift.image}
                    alt={gift.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  {/* Category Badge Overlay */}
                  <div className="absolute top-1 sm:top-2 md:top-3 left-1 sm:left-2 md:left-3 flex items-center gap-1">
                    <span className="text-sm sm:text-lg md:text-xl lg:text-2xl bg-white/90 rounded-full p-0.5 sm:p-1 shadow-md">
                      {gift.icon}
                    </span>
                    <span className="text-xs bg-white/90 text-pink-800 px-1 sm:px-1.5 md:px-2 lg:px-3 py-0.5 sm:py-1 rounded-full font-medium shadow-md">
                      {gift.category}
                    </span>
                  </div>
                </div>

                {/* Gift Info */}
                <div className="p-2 sm:p-3 md:p-4 lg:p-6">
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-serif text-slate-800 mb-1 sm:mb-1.5 md:mb-2 lg:mb-3 elegant-text-gradient line-clamp-2">
                    {gift.name}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-pink-600 font-semibold mb-1 sm:mb-1.5 md:mb-2 lg:mb-3">
                    {gift.price}
                  </p>
                  <p className="text-xs sm:text-xs md:text-sm lg:text-base text-slate-600 mb-2 sm:mb-3 md:mb-4 lg:mb-6 line-clamp-2">
                    {gift.description}
                  </p>
                  <button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-1.5 sm:py-2 md:py-2.5 lg:py-3 px-2 sm:px-3 md:px-4 lg:px-6 rounded-full text-xs sm:text-xs md:text-sm lg:text-base font-medium hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105">
                    Presentear
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Paginação */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 border border-pink-200 bg-white hover:bg-pink-50 ${
                  currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Anterior
              </button>
              <span className="text-base sm:text-lg font-serif text-slate-800">
                Página {currentPage} de {totalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 border border-pink-200 bg-white hover:bg-pink-50 ${
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                Próxima
              </button>
            </div>
          )}
        </div>
      </div>

      {/* PIX Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 max-w-sm sm:max-w-md w-full mx-2 sm:mx-4 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 text-slate-400 hover:text-slate-600 transition-colors z-10"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-6xl mb-3 sm:mb-4 md:mb-6">
                💝
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-serif text-slate-800 mb-2 sm:mb-3 md:mb-4 elegant-text-gradient">
                Presentear com PIX
              </h3>
              <div className="w-10 sm:w-12 md:w-16 h-1 bg-gradient-to-r from-pink-200 to-rose-200 mx-auto mb-3 sm:mb-4 md:mb-6 rounded-full"></div>

              {selectedGift && (
                <div className="mb-3 sm:mb-4 md:mb-6 p-2 sm:p-3 md:p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg sm:rounded-xl">
                  {/* Gift Image in Modal */}
                  <div className="mb-2 sm:mb-3 md:mb-4">
                    <img
                      src={selectedGift.image}
                      alt={selectedGift.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto rounded-lg object-cover shadow-md"
                    />
                  </div>
                  <h4 className="text-sm sm:text-base md:text-lg font-serif text-slate-800 mb-1 sm:mb-1.5 md:mb-2">
                    {selectedGift.name}
                  </h4>
                  <p className="text-pink-600 font-semibold text-xs sm:text-sm md:text-base">
                    {selectedGift.price}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600">
                    {selectedGift.description}
                  </p>
                </div>
              )}

              {/* QR Code Placeholder */}
              <div className="mb-3 sm:mb-4 md:mb-6 p-3 sm:p-4 md:p-6 bg-white rounded-lg sm:rounded-xl border-2 border-dashed border-pink-200">
                <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 md:mb-4">
                  📱
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mb-2 sm:mb-3 md:mb-4">
                  QR Code do PIX do casal
                </p>
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 mx-auto bg-gradient-to-br from-pink-100 to-rose-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl sm:text-4xl md:text-6xl">📱</span>
                </div>
              </div>

              {/* PIX Info */}
              <div className="space-y-1.5 sm:space-y-2 md:space-y-3 text-left">
                <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
                  <span className="text-pink-500 text-xs sm:text-sm md:text-base">
                    📱
                  </span>
                  <span className="text-xs sm:text-sm text-slate-600">
                    Chave PIX: erica.junior@email.com
                  </span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
                  <span className="text-pink-500 text-xs sm:text-sm md:text-base">
                    👤
                  </span>
                  <span className="text-xs sm:text-sm text-slate-600">
                    Nome: Erica Silva Santos
                  </span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
                  <span className="text-pink-500 text-xs sm:text-sm md:text-base">
                    🏦
                  </span>
                  <span className="text-xs sm:text-sm text-slate-600">
                    Banco: Nubank
                  </span>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 md:mt-8 space-y-2 sm:space-y-3">
                <button
                  onClick={() => {
                    // Copy PIX key to clipboard
                    navigator.clipboard.writeText("erica.junior@email.com");
                    alert("Chave PIX copiada!");
                  }}
                  className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 md:px-6 rounded-full text-xs sm:text-sm md:text-base font-medium hover:from-pink-600 hover:to-rose-600 transition-all duration-300"
                >
                  Copiar Chave PIX
                </button>
                <button
                  onClick={closeModal}
                  className="w-full bg-white border border-pink-200 text-slate-700 py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 md:px-6 rounded-full text-xs sm:text-sm md:text-base font-medium hover:bg-pink-50 transition-all duration-300"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
