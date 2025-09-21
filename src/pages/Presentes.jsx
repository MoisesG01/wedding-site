import { useState, useEffect } from "react";
import { giftsData } from "../data/gifts";
import Divisor from "../components/Divisor";
import reservationService from "../services/reservationService";

export default function Presentes() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedGift, setSelectedGift] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [gifts, setGifts] = useState(giftsData);
  const [filteredGifts, setFilteredGifts] = useState(giftsData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // 10 presentes por página

  // Filter states
  const [sortBy, setSortBy] = useState("name"); // name, price-asc, price-desc
  const [priceRange, setPriceRange] = useState([0, 1000]);

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

  const formatPrice = (price) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  // Get price range
  const maxPrice = Math.max(...gifts.map((gift) => gift.price));
  const minPrice = Math.min(...gifts.map((gift) => gift.price));

  // Filter and sort gifts
  useEffect(() => {
    let filtered = [...gifts];

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
      default:
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    setFilteredGifts(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [gifts, priceRange, sortBy]);

  const handlePriceRangeChange = (index, value) => {
    const newRange = [...priceRange];
    newRange[index] = parseInt(value);
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

          {/* Elegant Filters */}
          <div
            className={`mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-md border border-white/40 rounded-2xl shadow-xl shadow-pink-500/10 p-6 sm:p-8">
              <div className="text-center mb-6">
                <h3 className="text-xl font-serif text-slate-800 mb-2 elegant-text-gradient">
                  ✨ Filtros Elegantes
                </h3>
                <p className="text-sm text-slate-600">
                  Encontre o presente perfeito
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                {/* Price Range Section */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    💰 Faixa de preço
                  </label>
                  <div className="bg-white/80 border border-slate-200 rounded-xl p-4 shadow-sm">
                    <div className="text-center mb-3">
                      <span className="text-lg font-semibold text-slate-800">
                        {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
                      </span>
                    </div>
                    <div className="space-y-4">
                      <div className="relative">
                        <input
                          type="range"
                          min={minPrice}
                          max={maxPrice}
                          value={priceRange[0]}
                          onChange={(e) => handlePriceRangeChange(0, e.target.value)}
                          className="w-full h-2 bg-gradient-to-r from-pink-200 to-rose-200 rounded-lg appearance-none cursor-pointer slider-thumb"
                          style={{
                            background: `linear-gradient(to right, #fbb6ce 0%, #fbb6ce ${((priceRange[0] - minPrice) / (maxPrice - minPrice)) * 100}%, #e5e7eb ${((priceRange[0] - minPrice) / (maxPrice - minPrice)) * 100}%, #e5e7eb 100%)`
                          }}
                        />
                        <div className="absolute top-3 left-0 text-xs text-slate-500">
                          Min: {formatPrice(minPrice)}
                        </div>
                      </div>
                      <div className="relative">
                        <input
                          type="range"
                          min={minPrice}
                          max={maxPrice}
                          value={priceRange[1]}
                          onChange={(e) => handlePriceRangeChange(1, e.target.value)}
                          className="w-full h-2 bg-gradient-to-r from-rose-200 to-pink-200 rounded-lg appearance-none cursor-pointer slider-thumb"
                          style={{
                            background: `linear-gradient(to right, #e5e7eb 0%, #e5e7eb ${((priceRange[1] - minPrice) / (maxPrice - minPrice)) * 100}%, #fbb6ce ${((priceRange[1] - minPrice) / (maxPrice - minPrice)) * 100}%, #fbb6ce 100%)`
                          }}
                        />
                        <div className="absolute top-3 right-0 text-xs text-slate-500">
                          Max: {formatPrice(maxPrice)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results Summary */}
              <div className="mt-6 pt-4 border-t border-slate-200">
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-600">
                      {filteredGifts.length}
                    </div>
                    <div className="text-xs text-slate-600">Presentes encontrados</div>
                  </div>
                  <div className="w-px h-8 bg-slate-300"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-600">
                      {gifts.length}
                    </div>
                    <div className="text-xs text-slate-600">Total disponível</div>
                  </div>
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
                className={`group cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  gift.reserved ? "opacity-60" : "hover:shadow-lg"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => !gift.reserved && handleGiftClick(gift)}
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
                    <div className="absolute top-2 right-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-2 py-1 rounded-full text-xs font-medium shadow-lg">
                      {formatPrice(gift.price)}
                    </div>
                  </div>

                  {/* Gift Info */}
                  <div className="p-3 sm:p-4 flex-1 flex flex-col justify-center">
                    <h3 className="text-xs sm:text-sm font-medium text-slate-800 line-clamp-3 leading-tight">
                      {gift.title}
                    </h3>
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

              {/* QR Code Placeholder */}
              <div className="bg-white rounded-lg p-4 mb-4 border-2 border-dashed border-gray-300">
                <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📱</div>
                    <p className="text-sm text-gray-500">QR Code do PIX</p>
                    <p className="text-xs text-gray-400 mt-1">
                      Chave: (11) 98912-3506
                    </p>
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
                <li>• Seu presente será reservado automaticamente</li>
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
