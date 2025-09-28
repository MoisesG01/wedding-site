import { useState, useEffect } from "react";
import { giftsData } from "../data/gifts";
import Divisor from "../components/Divisor";
import reservationService from "../services/reservationService";
import qrcodeImg from "../assets/qrcode.jpg";

export default function Presentes() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedGift, setSelectedGift] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [gifts, setGifts] = useState(giftsData);
  const [filteredGifts, setFilteredGifts] = useState(giftsData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // 10 presentes por página

  // Filter states
  const [sortBy, setSortBy] = useState("id"); // id, name, price-asc, price-desc
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategory, setSelectedCategory] = useState("all"); // all, descontraído, tradicional
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Load reserved gifts using the reservation service
    const loadReservations = async () => {
      const reservedIds = reservationService.getReservations();
      setGifts((prevGifts) =>
        prevGifts.map((gift) => ({
          ...gift,
          reserved: reservedIds.includes(gift.id),
        }))
      );
    };

    loadReservations();
  }, []);

  const handleGiftClick = (gift) => {
    setSelectedGift(gift);
    setShowPaymentModal(true);
  };

  const handlePaymentComplete = async () => {
    if (selectedGift) {
      // Close payment modal without reserving the gift
      setShowPaymentModal(false);
      setSelectedGift(null);
    }
  };

  const copyPixKey = async () => {
    try {
      await navigator.clipboard.writeText("11989123506");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Erro ao copiar:", err);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  // Get price range
  const maxPrice = Math.max(...gifts.map((gift) => gift.price));
  const minPrice = Math.min(...gifts.map((gift) => gift.price));

  // Initialize price range with actual min/max
  useEffect(() => {
    setPriceRange([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  // Filter and sort gifts
  useEffect(() => {
    let filtered = [...gifts];

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter((gift) => gift.category === selectedCategory);
    }

    // Price range filter
    filtered = filtered.filter(
      (gift) => gift.price >= priceRange[0] && gift.price <= priceRange[1]
    );

    // Sort
    switch (sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "name":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "id":
      default:
        // Mantém a ordem original dos IDs
        filtered.sort((a, b) => a.id - b.id);
        break;
    }

    setFilteredGifts(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [gifts, priceRange, sortBy, selectedCategory]);

  const handlePriceRangeChange = (index, value) => {
    const newRange = [...priceRange];
    const newValue = parseInt(value) || minPrice;
    const minRangeValueGap = 50; // Minimum gap between min and max

    // Round to nearest 50 for better UX
    const roundedValue = Math.round(newValue / 50) * 50;

    if (index === 0) {
      // min slider
      newRange[0] = Math.max(
        minPrice,
        Math.min(roundedValue, priceRange[1] - minRangeValueGap)
      );
    } else if (index === 1) {
      // max slider
      newRange[1] = Math.min(
        maxPrice,
        Math.max(roundedValue, priceRange[0] + minRangeValueGap)
      );
    }

    setPriceRange(newRange);
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredGifts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentGifts = filteredGifts.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 3;

    let start = Math.max(1, currentPage - 1);
    let end = Math.min(totalPages, start + maxVisiblePages - 1);

    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
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
              Lista de Presentes
            </h1>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-pink-300 to-rose-300 mx-auto mb-6 sm:mb-8 rounded-full"></div>
          </div>

          {/* Special Message */}
          <div
            className={`mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl mb-4">💕</div>
                <p className="text-lg sm:text-xl text-slate-800 mb-6 font-medium leading-relaxed">
                  O maior presente é ter você ao nosso lado nesse dia tão
                  especial!
                </p>
                <p className="text-base sm:text-lg text-slate-700 mb-6">
                  Se ainda assim quiser nos mimar, deixamos duas opções com
                  muito carinho:
                </p>
                <div className="space-y-4 text-left max-w-2xl mx-auto">
                  <div className="bg-gradient-to-br from-white to-pink-50/30 rounded-2xl p-6 border border-pink-200/50 shadow-lg backdrop-blur-sm">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-xl flex items-center justify-center shadow-md">
                        <span className="text-2xl">💰</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-800 mb-1">
                          Contribuição via Pix
                        </h3>
                        <p className="text-sm text-slate-600">
                          Contribua com o valor que desejar
                        </p>
                      </div>
                    </div>

                    {/* Main Content - Responsive Layout */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8">
                      {/* Left Side - Pix Key */}
                      <div className="flex-1">
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-pink-200/50 shadow-sm">
                          <div className="flex items-center gap-3">
                            <div className="flex-1">
                              <p className="text-sm font-medium text-slate-700 mb-1">
                                Chave Pix
                              </p>
                              <p className="text-lg font-mono text-slate-800 font-semibold">
                                11989123506
                              </p>
                            </div>
                            <button
                              onClick={copyPixKey}
                              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white p-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                              title={copied ? "Copiado!" : "Copiar chave Pix"}
                            >
                              {copied ? (
                                <span className="text-sm font-medium">
                                  ✅ Copiado
                                </span>
                              ) : (
                                <>
                                  {/* Mobile - Only Icon */}
                                  <div className="flex sm:hidden items-center justify-center">
                                    <svg
                                      className="w-4 h-4"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                      />
                                    </svg>
                                  </div>
                                  {/* Desktop - Icon + Text */}
                                  <div className="hidden sm:flex items-center justify-center gap-2">
                                    <svg
                                      className="w-4 h-4"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                      />
                                    </svg>
                                    <span className="text-sm font-medium">
                                      Copiar
                                    </span>
                                  </div>
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Divider - Hidden on mobile */}
                      <div className="hidden lg:block w-px h-16 bg-gradient-to-b from-transparent via-pink-300 to-transparent"></div>

                      {/* Right Side - QR Code */}
                      <div className="flex-shrink-0">
                        <div className="text-center">
                          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-pink-200/50 shadow-sm inline-block">
                            <img
                              src={qrcodeImg}
                              alt="QR Code Pix"
                              className="w-24 h-24 rounded-lg shadow-sm"
                            />
                          </div>
                          <p className="text-xs text-slate-600 mt-3 font-medium">
                            Ou escaneie com seu app
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Feedback Message */}
                    {copied && (
                      <div className="mt-4 flex items-center justify-center">
                        <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-2">
                          <p className="text-sm text-green-700 font-medium flex items-center gap-2">
                            <span className="text-green-500">✓</span>
                            Chave Pix copiada com sucesso!
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="bg-white/80 rounded-xl p-4 border border-pink-100">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🎁</span>
                      <div>
                        <p className="font-medium text-slate-800">
                          Ou escolher algo em nossa lista de presentes, do
                          jeitinho que preferir.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Elegant Filters */}
          <div
            className={`mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-md border border-white/40 rounded-2xl shadow-xl p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="text-center flex-1">
                  <h3 className="text-xl font-serif text-slate-800 mb-2 elegant-text-gradient">
                    ✨ Filtros
                  </h3>
                  <p className="text-sm text-slate-600">
                    Encontre o presente perfeito
                  </p>
                </div>
                <button
                  onClick={() => {
                    setPriceRange([minPrice, maxPrice]);
                    setSortBy("id");
                    setSelectedCategory("all");
                  }}
                  className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors duration-200 text-sm font-medium"
                >
                  🗑️ Limpar
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Sort Section */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    🎯 Ordenar por
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-3 bg-white/80 border border-slate-200 rounded-xl text-slate-700 focus:ring-2 focus:ring-pink-300 focus:border-pink-300 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    <option value="name">📝 Nome (A-Z)</option>
                    <option value="price-asc">💰 Menor preço</option>
                    <option value="price-desc">💎 Maior preço</option>
                  </select>
                </div>

                {/* Category Section */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    🎭 Categoria
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-white/80 border border-slate-200 rounded-xl text-slate-700 focus:ring-2 focus:ring-pink-300 focus:border-pink-300 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    <option value="all">🎪 Todos</option>
                    <option value="descontraído">😄 Descontraído</option>
                    <option value="tradicional">🎁 Tradicional</option>
                  </select>
                </div>

                {/* Price Range Section */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    💰 Faixa de preço
                  </label>
                  <div className="bg-white/80 border border-slate-200 rounded-xl p-4 shadow-sm">
                    {/* Single Bar Dual Range Slider */}
                    <div className="space-y-4">
                      {/* Current Values Display */}
                      <div className="flex justify-between items-center text-sm font-medium text-slate-700 bg-slate-50 rounded-lg p-3">
                        <span>Mínimo: {formatPrice(priceRange[0])}</span>
                        <span>Máximo: {formatPrice(priceRange[1])}</span>
                      </div>

                      {/* Dual Range Slider */}
                      <div className="double-range-slider">
                        <div 
                          className="range-track"
                          style={{
                            left: `${((priceRange[0] - minPrice) / (maxPrice - minPrice)) * 100}%`,
                            right: `${100 - ((priceRange[1] - minPrice) / (maxPrice - minPrice)) * 100}%`
                          }}
                        ></div>
                        
                        <input
                          type="range"
                          className="dual-range-input"
                          min={minPrice}
                          max={maxPrice}
                          step="50"
                          value={priceRange[0]}
                          onChange={(e) => handlePriceRangeChange(0, e.target.value)}
                        />
                        
                        <input
                          type="range"
                          className="dual-range-input"
                          min={minPrice}
                          max={maxPrice}
                          step="50"
                          value={priceRange[1]}
                          onChange={(e) => handlePriceRangeChange(1, e.target.value)}
                        />

                        {/* Value Bubbles */}
                        <div 
                          className="range-value-bubble min-value"
                          style={{
                            left: `${((priceRange[0] - minPrice) / (maxPrice - minPrice)) * 100}%`,
                            transform: `translate(-${((priceRange[0] - minPrice) / (maxPrice - minPrice)) * 100}%, -100%)`
                          }}
                        >
                          {formatPrice(priceRange[0])}
                        </div>
                        
                        <div 
                          className="range-value-bubble max-value"
                          style={{
                            right: `${100 - ((priceRange[1] - minPrice) / (maxPrice - minPrice)) * 100}%`,
                            transform: `translate(${100 - ((priceRange[1] - minPrice) / (maxPrice - minPrice)) * 100}%, 100%)`
                          }}
                        >
                          {formatPrice(priceRange[1])}
                        </div>
                      </div>

                      {/* Range Labels */}
                      <div className="flex justify-between text-xs text-slate-500 pt-2 border-t border-slate-200">
                        <span>{formatPrice(minPrice)}</span>
                        <span>{formatPrice(maxPrice)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results Summary */}
              <div className="mt-4 pt-3 border-t border-slate-200">
                <div className="text-center">
                  <span className="text-sm text-slate-500">
                    {filteredGifts.length} de {gifts.length} presentes
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Gift Grid */}
          <div
            className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4 sm:gap-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {currentGifts.map((gift, index) => (
              <div
                key={gift.id}
                className={`group transition-all duration-300 transform hover:scale-105 ${
                  gift.reserved ? "opacity-60" : "hover:shadow-lg"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  {/* Gift Image */}
                  <div className="relative aspect-square overflow-hidden flex-shrink-0">
                    <img
                      src={gift.image}
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
                        </div>
                      </div>
                    )}

                    {/* Price Badge */}
                    <div className="absolute top-2 right-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-xl">
                      {formatPrice(gift.price)}
                    </div>
                  </div>

                  {/* Gift Info */}
                  <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
                    <h3 className="text-xs sm:text-sm font-medium text-slate-800 line-clamp-3 leading-tight mb-3">
                      {gift.title}
                    </h3>
                    <button
                      onClick={() => handleGiftClick(gift)}
                      className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-2 px-3 rounded-lg text-xs font-medium hover:from-pink-600 hover:to-rose-600 transition-all duration-200 transform hover:scale-105 shadow-md"
                    >
                      🎁 Presentear
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div
              className={`mt-8 sm:mt-12 md:mt-16 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex flex-col items-center space-y-3">
                {/* Page Info */}
                <div className="text-center">
                  <p className="text-sm text-slate-600">
                    Página {currentPage} de {totalPages} ({filteredGifts.length}{" "}
                    presentes)
                  </p>
                </div>

                {/* Pagination Controls */}
                <div className="flex items-center space-x-2">
                  {/* Previous Button */}
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    ← Anterior
                  </button>

                  {/* Page Numbers */}
                  <div className="flex space-x-1">
                    {getPageNumbers().map((page, index) => (
                      <button
                        key={index}
                        onClick={() => handlePageChange(page)}
                        className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                          page === currentPage
                            ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg"
                            : "text-slate-600 bg-white border border-slate-300 hover:bg-slate-50"
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  {/* Next Button */}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    Próximo →
                  </button>
                </div>
              </div>
            </div>
          )}

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
                  <div className="text-2xl mb-2">💳</div>
                  <p>Pague via PIX usando o QR Code</p>
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

      {/* Payment Modal */}
      {showPaymentModal && selectedGift && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl p-6 mx-4 max-w-md w-full shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                💳
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Pagamento
              </h3>
              <p className="text-gray-600 text-sm mb-4">{selectedGift.title}</p>
              <div className="text-2xl font-bold text-green-600 mb-2">
                {formatPrice(selectedGift.price)}
              </div>
            </div>

            {/* QR Code Section */}
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <div className="text-center mb-4">
                <h4 className="text-lg font-medium text-gray-800 mb-2">
                  Escaneie o QR Code
                </h4>
                <p className="text-sm text-gray-600">
                  Use seu app de pagamento para escanear
                </p>
              </div>

              {/* QR Code */}
              <div className="bg-white rounded-lg p-4 mb-4 border-2 border-dashed border-gray-300">
                <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <img
                      src={qrcodeImg}
                      alt="QR Code Pix"
                      className="w-32 h-32 rounded-lg shadow-sm mx-auto mb-2"
                    />
                    <p className="text-sm text-gray-500">QR Code do PIX</p>
                    <div className="flex items-center justify-center gap-2 mt-1">
                      <p className="text-xs text-gray-400">
                        Chave: (11) 98912-3506
                      </p>
                      <button
                        onClick={copyPixKey}
                        className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                        title={copied ? "Copiado!" : "Copiar chave Pix"}
                      >
                        {copied ? (
                          <span className="text-green-500">✅</span>
                        ) : (
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Info */}
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Valor:</span>
                  <span className="font-semibold text-gray-800">
                    {formatPrice(selectedGift.price)}
                  </span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Método:</span>
                  <span className="text-sm text-gray-800">PIX</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Status:</span>
                  <span className="text-sm text-orange-600 font-medium">
                    Aguardando pagamento
                  </span>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-blue-50 rounded-xl p-4 mb-6">
              <h4 className="text-sm font-medium text-blue-800 mb-2">
                📋 Instruções:
              </h4>
              <ul className="text-xs text-blue-700 space-y-1">
                <li>• Escaneie o QR Code com seu app bancário</li>
                <li>• Confirme o valor: {formatPrice(selectedGift.price)}</li>
                <li>• Após o pagamento, clique em "Pagamento Realizado"</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handlePaymentComplete}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 px-4 rounded-xl font-medium hover:from-green-600 hover:to-emerald-600 transition-all transform hover:scale-105 shadow-lg"
              >
                ✅ Pagamento Realizado
              </button>
              <button
                onClick={() => {
                  setShowPaymentModal(false);
                  setSelectedGift(null);
                }}
                className="w-full bg-red-100 text-red-600 py-3 px-4 rounded-xl font-medium hover:bg-red-200 transition-colors"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
