import { useState } from "react";

export default function Navbar({ activeSection, scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
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
            className="flex items-center space-x-3 hover:opacity-80 elegant-transition group"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden shadow-lg group-hover:scale-110 elegant-transition">
              <img
                src="/src/assets/logo.jpg"
                alt="Logo Erica & Junior"
                className="w-full h-full object-cover"
              />
            </div>
            <h1
              className={`text-2xl font-light tracking-wide ${
                activeSection === "home"
                  ? "text-white drop-shadow-lg"
                  : "text-gray-800"
              }`}
            >
              Erica & Junior
            </h1>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`text-body-medium transition-all duration-300 transform hover:scale-105 ${
                activeSection === "home"
                  ? "text-white drop-shadow-lg border-b-2 border-white/50 font-medium"
                  : "text-gray-600 hover:text-pink-600"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("historia")}
              className={`text-body-medium transition-all duration-300 transform hover:scale-105 ${
                activeSection === "historia"
                  ? "text-pink-600 border-b-2 border-pink-400 font-medium"
                  : activeSection === "home"
                  ? "text-white/80 hover:text-white drop-shadow-lg"
                  : "text-gray-600 hover:text-pink-600"
              }`}
            >
              O Casal
            </button>
            <button
              onClick={() => scrollToSection("cerimonia")}
              className={`text-body-medium transition-all duration-300 transform hover:scale-105 ${
                activeSection === "cerimonia"
                  ? "text-pink-600 border-b-2 border-pink-400 font-medium"
                  : activeSection === "home"
                  ? "text-white/80 hover:text-white drop-shadow-lg"
                  : "text-gray-600 hover:text-pink-600"
              }`}
            >
              Cerimônia
            </button>
            <button
              onClick={() => scrollToSection("recepcao")}
              className={`text-body-medium transition-all duration-300 transform hover:scale-105 ${
                activeSection === "recepcao"
                  ? "text-pink-600 border-b-2 border-pink-400 font-medium"
                  : activeSection === "home"
                  ? "text-white/80 hover:text-white drop-shadow-lg"
                  : "text-gray-600 hover:text-pink-600"
              }`}
            >
              Recepção
            </button>
            <button
              onClick={() => scrollToSection("presentes")}
              className={`text-body-medium transition-all duration-300 transform hover:scale-105 ${
                activeSection === "presentes"
                  ? "text-pink-600 border-b-2 border-pink-400 font-medium"
                  : activeSection === "home"
                  ? "text-white/80 hover:text-white drop-shadow-lg"
                  : "text-gray-600 hover:text-pink-600"
              }`}
            >
              Presentes
            </button>
            <button
              onClick={() => scrollToSection("confirmacao")}
              className={`text-body-medium transition-all duration-300 transform hover:scale-105 ${
                activeSection === "confirmacao"
                  ? "text-pink-600 border-b-2 border-pink-400 font-medium"
                  : activeSection === "home"
                  ? "text-white/80 hover:text-white drop-shadow-lg"
                  : "text-gray-600 hover:text-pink-600"
              }`}
            >
              Confirmação
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className={`text-body-medium transition-all duration-300 transform hover:scale-105 ${
                activeSection === "contato"
                  ? "text-pink-600 border-b-2 border-pink-400 font-medium"
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
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg elegant-transition ${
              activeSection === "home"
                ? "text-white hover:bg-white/10"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden transition-all duration-300 ${
              activeSection === "home"
                ? "bg-black/20 backdrop-blur-md"
                : "bg-white/95 backdrop-blur-xl"
            } rounded-lg mt-2 shadow-xl`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => {
                  scrollToSection("home");
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-body-medium transition-all duration-300 ${
                  activeSection === "home"
                    ? "text-white bg-white/10"
                    : "text-gray-600 hover:text-pink-600 hover:bg-gray-50"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => {
                  scrollToSection("historia");
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-body-medium transition-all duration-300 ${
                  activeSection === "historia"
                    ? "text-pink-600 bg-pink-50"
                    : activeSection === "home"
                    ? "text-white/80 hover:text-white hover:bg-white/10"
                    : "text-gray-600 hover:text-pink-600 hover:bg-gray-50"
                }`}
              >
                O Casal
              </button>
              <button
                onClick={() => {
                  scrollToSection("cerimonia");
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-body-medium transition-all duration-300 ${
                  activeSection === "cerimonia"
                    ? "text-pink-600 bg-pink-50"
                    : activeSection === "home"
                    ? "text-white/80 hover:text-white hover:bg-white/10"
                    : "text-gray-600 hover:text-pink-600 hover:bg-gray-50"
                }`}
              >
                Cerimônia
              </button>
              <button
                onClick={() => {
                  scrollToSection("recepcao");
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-body-medium transition-all duration-300 ${
                  activeSection === "recepcao"
                    ? "text-pink-600 bg-pink-50"
                    : activeSection === "home"
                    ? "text-white/80 hover:text-white hover:bg-white/10"
                    : "text-gray-600 hover:text-pink-600 hover:bg-gray-50"
                }`}
              >
                Recepção
              </button>
              <button
                onClick={() => {
                  scrollToSection("presentes");
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-body-medium transition-all duration-300 ${
                  activeSection === "presentes"
                    ? "text-pink-600 bg-pink-50"
                    : activeSection === "home"
                    ? "text-white/80 hover:text-white hover:bg-white/10"
                    : "text-gray-600 hover:text-pink-600 hover:bg-gray-50"
                }`}
              >
                Presentes
              </button>
              <button
                onClick={() => {
                  scrollToSection("confirmacao");
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-body-medium transition-all duration-300 ${
                  activeSection === "confirmacao"
                    ? "text-pink-600 bg-pink-50"
                    : activeSection === "home"
                    ? "text-white/80 hover:text-white hover:bg-white/10"
                    : "text-gray-600 hover:text-pink-600 hover:bg-gray-50"
                }`}
              >
                Confirmação
              </button>
              <button
                onClick={() => {
                  scrollToSection("contato");
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-body-medium transition-all duration-300 ${
                  activeSection === "contato"
                    ? "text-pink-600 bg-pink-50"
                    : activeSection === "home"
                    ? "text-white/80 hover:text-white hover:bg-white/10"
                    : "text-gray-600 hover:text-pink-600 hover:bg-gray-50"
                }`}
              >
                Contato
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
