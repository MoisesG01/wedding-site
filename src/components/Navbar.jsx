import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-slate-800 to-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">💕</span>
            <h1 className="font-bold text-xl text-white">Wilson & Erica</h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className={`text-white hover:text-gray-300 transition-colors font-medium ${
                isActive("/") ? "border-b-2 border-white" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/historia"
              className={`text-white hover:text-gray-300 transition-colors font-medium ${
                isActive("/historia") ? "border-b-2 border-white" : ""
              }`}
            >
              História
            </Link>
            <Link
              to="/cerimonia"
              className={`text-white hover:text-gray-300 transition-colors font-medium ${
                isActive("/cerimonia") ? "border-b-2 border-white" : ""
              }`}
            >
              Cerimônia
            </Link>
            <Link
              to="/confirmacao"
              className={`text-white hover:text-gray-300 transition-colors font-medium ${
                isActive("/confirmacao") ? "border-b-2 border-white" : ""
              }`}
            >
              Confirmação
            </Link>
            <Link
              to="/presentes"
              className={`text-white hover:text-gray-300 transition-colors font-medium ${
                isActive("/presentes") ? "border-b-2 border-white" : ""
              }`}
            >
              Presentes
            </Link>
            <Link
              to="/contato"
              className={`text-white hover:text-gray-300 transition-colors font-medium ${
                isActive("/contato") ? "border-b-2 border-white" : ""
              }`}
            >
              Contato
            </Link>
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
              <Link
                to="/"
                className={`text-white hover:text-gray-300 transition-colors font-medium py-2 ${
                  isActive("/") ? "bg-slate-700 rounded px-3" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/historia"
                className={`text-white hover:text-gray-300 transition-colors font-medium py-2 ${
                  isActive("/historia") ? "bg-slate-700 rounded px-3" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                História
              </Link>
              <Link
                to="/cerimonia"
                className={`text-white hover:text-gray-300 transition-colors font-medium py-2 ${
                  isActive("/cerimonia") ? "bg-slate-700 rounded px-3" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Cerimônia
              </Link>
              <Link
                to="/confirmacao"
                className={`text-white hover:text-gray-300 transition-colors font-medium py-2 ${
                  isActive("/confirmacao") ? "bg-slate-700 rounded px-3" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Confirmação
              </Link>
              <Link
                to="/presentes"
                className={`text-white hover:text-gray-300 transition-colors font-medium py-2 ${
                  isActive("/presentes") ? "bg-slate-700 rounded px-3" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Presentes
              </Link>
              <Link
                to="/contato"
                className={`text-white hover:text-gray-300 transition-colors font-medium py-2 ${
                  isActive("/contato") ? "bg-slate-700 rounded px-3" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
