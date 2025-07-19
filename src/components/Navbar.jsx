import { useState } from "react";

export default function Navbar({ activeSection, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para scroll suave para uma seção
  const scrollToSection = (sectionId) => {
    if (onNavigate) {
      onNavigate(sectionId);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center space-x-3 hover:opacity-80 elegant-transition group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 elegant-transition">
              💕
            </div>
            <h1 className="text-2xl text-gray-800 font-light tracking-wide">
              Wilson & Erica
            </h1>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`text-body-medium transition-all duration-300 transform hover:scale-105 ${
                activeSection === "home"
                  ? "text-pink-600 border-b-2 border-pink-400 font-medium"
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
                  : "text-gray-600 hover:text-pink-600"
              }`}
            >
              História
            </button>
            <button
              onClick={() => scrollToSection("cerimonia")}
              className={`text-body-medium transition-all duration-300 transform hover:scale-105 ${
                activeSection === "cerimonia"
                  ? "text-pink-600 border-b-2 border-pink-400 font-medium"
                  : "text-gray-600 hover:text-pink-600"
              }`}
            >
              Cerimônia
            </button>
            <button
              onClick={() => scrollToSection("presentes")}
              className={`text-body-medium transition-all duration-300 transform hover:scale-105 ${
                activeSection === "presentes"
                  ? "text-pink-600 border-b-2 border-pink-400 font-medium"
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
                  : "text-gray-600 hover:text-pink-600"
              }`}
            >
              Contato
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 p-2 rounded-lg hover:bg-gray-100 elegant-transition"
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
          <div className="md:hidden py-6 border-t border-gray-200 elegant-animation bg-white/95">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToSection("home");
                }}
                className={`text-left py-3 px-4 rounded-lg elegant-transition ${
                  activeSection === "home"
                    ? "bg-pink-50 text-pink-600 border-l-4 border-pink-400"
                    : "text-gray-600 hover:bg-gray-50 hover:text-pink-600"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToSection("historia");
                }}
                className={`text-left py-3 px-4 rounded-lg elegant-transition ${
                  activeSection === "historia"
                    ? "bg-pink-50 text-pink-600 border-l-4 border-pink-400"
                    : "text-gray-600 hover:bg-gray-50 hover:text-pink-600"
                }`}
              >
                História
              </button>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToSection("cerimonia");
                }}
                className={`text-left py-3 px-4 rounded-lg elegant-transition ${
                  activeSection === "cerimonia"
                    ? "bg-pink-50 text-pink-600 border-l-4 border-pink-400"
                    : "text-gray-600 hover:bg-gray-50 hover:text-pink-600"
                }`}
              >
                Cerimônia
              </button>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToSection("presentes");
                }}
                className={`text-left py-3 px-4 rounded-lg elegant-transition ${
                  activeSection === "presentes"
                    ? "bg-pink-50 text-pink-600 border-l-4 border-pink-400"
                    : "text-gray-600 hover:bg-gray-50 hover:text-pink-600"
                }`}
              >
                Presentes
              </button>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToSection("confirmacao");
                }}
                className={`text-left py-3 px-4 rounded-lg elegant-transition ${
                  activeSection === "confirmacao"
                    ? "bg-pink-50 text-pink-600 border-l-4 border-pink-400"
                    : "text-gray-600 hover:bg-gray-50 hover:text-pink-600"
                }`}
              >
                Confirmação
              </button>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToSection("contato");
                }}
                className={`text-left py-3 px-4 rounded-lg elegant-transition ${
                  activeSection === "contato"
                    ? "bg-pink-50 text-pink-600 border-l-4 border-pink-400"
                    : "text-gray-600 hover:bg-gray-50 hover:text-pink-600"
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
