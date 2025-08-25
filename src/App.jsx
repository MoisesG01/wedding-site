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
  const [showDevButton, setShowDevButton] = useState(false);

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

  // Sistema de toques para mobile - 5 toques no canto superior esquerdo
  useEffect(() => {
    let tapCount = 0;

    const handleTap = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      // Verifica se o toque foi no canto superior esquerdo (área de 50x50px)
      if (x <= 50 && y <= 50) {
        tapCount += 1;
        if (tapCount >= 5) {
          setShowDevButton(true);
          setTimeout(() => setShowDevButton(false), 3000); // Esconde após 3 segundos
          tapCount = 0;
        }
      }
    };

    document.addEventListener("click", handleTap);
    return () => document.removeEventListener("click", handleTap);
  }, []);

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
    return <MaintenancePage />;
  }

  return (
    <div className="App">
      {/* Indicador de modo desenvolvedor */}
      {devMode && (
        <div className="fixed top-4 right-4 z-50 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg">
          🛠️ DEV MODE
        </div>
      )}

      {/* Botão de modo desenvolvedor para mobile */}
      {showDevButton && (
        <div className="fixed top-4 left-4 z-50 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg">
          <button
            onClick={() => {
              setDevMode((prev) => !prev);
              setShowDevButton(false);
            }}
            className="flex items-center gap-2"
          >
            🛠️ {devMode ? "Desativar" : "Ativar"} Dev Mode
          </button>
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
