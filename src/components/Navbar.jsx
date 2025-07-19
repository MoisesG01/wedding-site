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
    <nav className="bg-gradient-to-r from-slate-800 to-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <span className="text-2xl">💕</span>
            <h1 className="font-bold text-xl text-white">Wilson & Erica</h1>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection("home")}
              className={`text-white hover:text-gray-300 transition-colors font-medium ${
                activeSection === "home" ? "border-b-2 border-white" : ""
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("historia")}
              className={`text-white hover:text-gray-300 transition-colors font-medium ${
                activeSection === "historia" ? "border-b-2 border-white" : ""
              }`}
            >
              História
            </button>
            <button
              onClick={() => scrollToSection("cerimonia")}
              className={`text-white hover:text-gray-300 transition-colors font-medium ${
                activeSection === "cerimonia" ? "border-b-2 border-white" : ""
              }`}
            >
              Cerimônia
            </button>
            <button
              onClick={() => scrollToSection("presentes")}
              className={`text-white hover:text-gray-300 transition-colors font-medium ${
                activeSection === "presentes" ? "border-b-2 border-white" : ""
              }`}
            >
              Presentes
            </button>
            <button
              onClick={() => scrollToSection("confirmacao")}
              className={`text-white hover:text-gray-300 transition-colors font-medium ${
                activeSection === "confirmacao" ? "border-b-2 border-white" : ""
              }`}
            >
              Confirmação
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className={`text-white hover:text-gray-300 transition-colors font-medium ${
                activeSection === "contato" ? "border-b-2 border-white" : ""
              }`}
            >
              Contato
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-gray-300 focus:outline-none"
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
          <div className="md:hidden py-4 border-t border-slate-600">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToSection("home");
                }}
                className={`text-white hover:text-gray-300 transition-colors font-medium py-2 text-left ${
                  activeSection === "home" ? "bg-slate-700 rounded px-3" : ""
                }`}
              >
                Home
              </button>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToSection("historia");
                }}
                className={`text-white hover:text-gray-300 transition-colors font-medium py-2 text-left ${
                  activeSection === "historia"
                    ? "bg-slate-700 rounded px-3"
                    : ""
                }`}
              >
                História
              </button>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToSection("cerimonia");
                }}
                className={`text-white hover:text-gray-300 transition-colors font-medium py-2 text-left ${
                  activeSection === "cerimonia"
                    ? "bg-slate-700 rounded px-3"
                    : ""
                }`}
              >
                Cerimônia
              </button>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToSection("presentes");
                }}
                className={`text-white hover:text-gray-300 transition-colors font-medium py-2 text-left ${
                  activeSection === "presentes"
                    ? "bg-slate-700 rounded px-3"
                    : ""
                }`}
              >
                Presentes
              </button>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToSection("confirmacao");
                }}
                className={`text-white hover:text-gray-300 transition-colors font-medium py-2 text-left ${
                  activeSection === "confirmacao"
                    ? "bg-slate-700 rounded px-3"
                    : ""
                }`}
              >
                Confirmação
              </button>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToSection("contato");
                }}
                className={`text-white hover:text-gray-300 transition-colors font-medium py-2 text-left ${
                  activeSection === "contato" ? "bg-slate-700 rounded px-3" : ""
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
