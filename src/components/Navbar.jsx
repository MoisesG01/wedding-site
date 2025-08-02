import logo from "../assets/logo.jpg";
import { useState, useEffect } from "react";

export default function Navbar({ activeSection, scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        !event.target.closest("nav") &&
        !event.target.closest(".mobile-sidebar")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleMenuClick = (section) => {
    scrollToSection(section);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          activeSection === "home"
            ? "bg-transparent backdrop-blur-sm"
            : "bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-all duration-300 group"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300">
                <img
                  src={logo}
                  alt="Logo Erica & Junior"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1
                className={`text-lg sm:text-xl md:text-2xl font-light tracking-wide transition-all duration-300 ${
                  activeSection === "home"
                    ? "text-white drop-shadow-lg"
                    : "text-gray-800"
                }`}
              >
                Erica & Junior
              </h1>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className={`text-sm lg:text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeSection === "home"
                    ? "text-white drop-shadow-lg border-b-2 border-white/50"
                    : "text-gray-600 hover:text-pink-600"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("historia")}
                className={`text-sm lg:text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeSection === "historia"
                    ? "text-pink-600 border-b-2 border-pink-400"
                    : activeSection === "home"
                    ? "text-white/80 hover:text-white drop-shadow-lg"
                    : "text-gray-600 hover:text-pink-600"
                }`}
              >
                O Casal
              </button>
              <button
                onClick={() => scrollToSection("cerimonia")}
                className={`text-sm lg:text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeSection === "cerimonia"
                    ? "text-pink-600 border-b-2 border-pink-400"
                    : activeSection === "home"
                    ? "text-white/80 hover:text-white drop-shadow-lg"
                    : "text-gray-600 hover:text-pink-600"
                }`}
              >
                Cerimônia
              </button>
              <button
                onClick={() => scrollToSection("recepcao")}
                className={`text-sm lg:text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeSection === "recepcao"
                    ? "text-pink-600 border-b-2 border-pink-400"
                    : activeSection === "home"
                    ? "text-white/80 hover:text-white drop-shadow-lg"
                    : "text-gray-600 hover:text-pink-600"
                }`}
              >
                Recepção
              </button>
              <button
                onClick={() => scrollToSection("presentes")}
                className={`text-sm lg:text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeSection === "presentes"
                    ? "text-pink-600 border-b-2 border-pink-400"
                    : activeSection === "home"
                    ? "text-white/80 hover:text-white drop-shadow-lg"
                    : "text-gray-600 hover:text-pink-600"
                }`}
              >
                Presentes
              </button>
              <button
                onClick={() => scrollToSection("confirmacao")}
                className={`text-sm lg:text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeSection === "confirmacao"
                    ? "text-pink-600 border-b-2 border-pink-400"
                    : activeSection === "home"
                    ? "text-white/80 hover:text-white drop-shadow-lg"
                    : "text-gray-600 hover:text-pink-600"
                }`}
              >
                Confirmação
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className={`text-sm lg:text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeSection === "contato"
                    ? "text-pink-600 border-b-2 border-pink-400"
                    : activeSection === "home"
                    ? "text-white/80 hover:text-white drop-shadow-lg"
                    : "text-gray-600 hover:text-pink-600"
                }`}
              >
                Contato
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
              className={`md:hidden p-2 rounded-lg transition-all duration-300 z-50 ${
                activeSection === "home"
                  ? "text-white hover:bg-white/10"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute inset-0 transform transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-1"
                  }`}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16"
                    />
                  </svg>
                </span>
                <span
                  className={`absolute inset-0 transform transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 12h16"
                    />
                  </svg>
                </span>
                <span
                  className={`absolute inset-0 transform transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-1"
                  }`}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 18h16"
                    />
                  </svg>
                </span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar Menu */}
      <div
        className={`mobile-sidebar fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-[60] transform transition-transform duration-500 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full overflow-hidden shadow-lg">
              <img
                src={logo}
                alt="Logo Erica & Junior"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-light text-gray-800">Menu</h2>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
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
        </div>

        {/* Sidebar Menu Items */}
        <div
          className="p-6 space-y-4 overflow-y-auto"
          style={{ height: "calc(100vh - 140px)" }}
        >
          <button
            onClick={() => handleMenuClick("home")}
            className={`w-full flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ${
              activeSection === "home"
                ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg"
                : "text-gray-700 hover:bg-gray-50 hover:text-pink-600"
            }`}
          >
            <span className="text-2xl">🏠</span>
            <span className="text-lg font-medium">Home</span>
          </button>

          <button
            onClick={() => handleMenuClick("historia")}
            className={`w-full flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ${
              activeSection === "historia"
                ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg"
                : "text-gray-700 hover:bg-gray-50 hover:text-pink-600"
            }`}
          >
            <span className="text-2xl">💕</span>
            <span className="text-lg font-medium">O Casal</span>
          </button>

          <button
            onClick={() => handleMenuClick("cerimonia")}
            className={`w-full flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ${
              activeSection === "cerimonia"
                ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg"
                : "text-gray-700 hover:bg-gray-50 hover:text-pink-600"
            }`}
          >
            <span className="text-2xl">⛪</span>
            <span className="text-lg font-medium">Cerimônia</span>
          </button>

          <button
            onClick={() => handleMenuClick("recepcao")}
            className={`w-full flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ${
              activeSection === "recepcao"
                ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg"
                : "text-gray-700 hover:bg-gray-50 hover:text-pink-600"
            }`}
          >
            <span className="text-2xl">🎉</span>
            <span className="text-lg font-medium">Recepção</span>
          </button>

          <button
            onClick={() => handleMenuClick("presentes")}
            className={`w-full flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ${
              activeSection === "presentes"
                ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg"
                : "text-gray-700 hover:bg-gray-50 hover:text-pink-600"
            }`}
          >
            <span className="text-2xl">🎁</span>
            <span className="text-lg font-medium">Presentes</span>
          </button>

          <button
            onClick={() => handleMenuClick("confirmacao")}
            className={`w-full flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ${
              activeSection === "confirmacao"
                ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg"
                : "text-gray-700 hover:bg-gray-50 hover:text-pink-600"
            }`}
          >
            <span className="text-2xl">✅</span>
            <span className="text-lg font-medium">Confirmação</span>
          </button>

          <button
            onClick={() => handleMenuClick("contato")}
            className={`w-full flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ${
              activeSection === "contato"
                ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg"
                : "text-gray-700 hover:bg-gray-50 hover:text-pink-600"
            }`}
          >
            <span className="text-2xl">📞</span>
            <span className="text-lg font-medium">Contato</span>
          </button>
        </div>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-white">
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">Erica & Junior</p>
            <p className="text-xs text-gray-400">22 de Novembro de 2025</p>
          </div>
        </div>
      </div>
    </>
  );
}
