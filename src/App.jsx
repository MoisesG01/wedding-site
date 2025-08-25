import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Historia from "./pages/Historia";
import Cerimonia from "./pages/Cerimonia";
import Recepcao from "./pages/Recepcao";
import Confirmacao from "./pages/Confirmacao";
import Presentes from "./pages/Presentes";
import Contato from "./pages/Contato";
import MaintenancePage from "./components/MaintenancePage";
import { initEmailJS } from "./config/emailjs";

export default function App() {
  // Controle para modo de manutenção - mude para false quando o site estiver pronto
  const isMaintenanceMode = true;
  const [activeSection, setActiveSection] = useState("home");
  const [devMode, setDevMode] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState("");

  // Sistema de modo desenvolvedor - ativar com Ctrl+Shift+D (desktop) ou toques (mobile)
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === "D") {
        e.preventDefault();
        setDevMode((prev) => !prev);
        console.log("Modo desenvolvedor:", !devMode ? "ativado" : "desativado");
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [devMode]);

  // Função para verificar senha
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === "dev2024") {
      setDevMode(true);
      setShowPasswordModal(false);
      setPassword("");
      console.log("Modo desenvolvedor ativado via senha!");
    } else {
      alert("Senha incorreta!");
      setPassword("");
    }
  };

  // Initialize EmailJS
  useEffect(() => {
    initEmailJS();
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "historia",
        "cerimonia",
        "recepcao",
        "presentes",
        "confirmacao",
        "contato",
      ];

      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Se estiver em modo de manutenção, mostrar apenas a página de manutenção
  if (isMaintenanceMode && !devMode) {
    return (
      <div>
        <MaintenancePage />
        {/* Botão de acesso desenvolvedor - sempre visível */}
        <button
          onClick={() => setShowPasswordModal(true)}
          className="fixed bottom-4 right-4 z-40 w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center text-lg transition-all duration-300 hover:scale-110"
          title="Acesso Desenvolvedor"
        >
          🔐
        </button>

        {/* Modal de senha para modo desenvolvedor */}
        {showPasswordModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-2xl">
              <h3 className="text-lg font-bold text-slate-800 mb-4 text-center">
                🔐 Acesso Desenvolvedor
              </h3>
              <form onSubmit={handlePasswordSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Senha:
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Digite a senha"
                    autoFocus
                  />
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setShowPasswordModal(false);
                      setPassword("");
                    }}
                    className="flex-1 px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Acessar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="App">
      {/* Indicador de modo desenvolvedor */}
      {devMode && (
        <div className="fixed top-4 right-4 z-50 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg">
          🛠️ DEV MODE
        </div>
      )}

      {/* Botão de acesso desenvolvedor - sempre visível */}
      <button
        onClick={() => setShowPasswordModal(true)}
        className="fixed bottom-4 right-4 z-40 w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center text-lg transition-all duration-300 hover:scale-110"
        title="Acesso Desenvolvedor"
      >
        🔐
      </button>

      {/* Modal de senha para modo desenvolvedor */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-2xl">
            <h3 className="text-lg font-bold text-slate-800 mb-4 text-center">
              🔐 Acesso Desenvolvedor
            </h3>
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Senha:
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Digite a senha"
                  autoFocus
                />
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowPasswordModal(false);
                    setPassword("");
                  }}
                  className="flex-1 px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Acessar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#fff",
            color: "#333",
            border: "1px solid #e5e7eb",
            borderRadius: "12px",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
            fontSize: "14px",
            padding: "16px",
          },
          success: {
            iconTheme: {
              primary: "#10b981",
              secondary: "#fff",
            },
            style: {
              background: "#f0fdf4",
              color: "#065f46",
              border: "1px solid #bbf7d0",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
            style: {
              background: "#fef2f2",
              color: "#991b1b",
              border: "1px solid #fecaca",
            },
          },
        }}
      />

      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

      <main>
        <section id="home">
          <Home scrollToSection={scrollToSection} />
        </section>

        <section id="historia">
          <Historia />
        </section>

        <section id="cerimonia">
          <Cerimonia />
        </section>

        <section id="recepcao">
          <Recepcao />
        </section>

        <section id="presentes">
          <Presentes />
        </section>

        <section id="confirmacao">
          <Confirmacao />
        </section>

        <section id="contato">
          <Contato />
        </section>
      </main>

      <Footer />
    </div>
  );
}
