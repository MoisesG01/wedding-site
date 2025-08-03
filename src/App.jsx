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
import { initEmailJS } from "./config/emailjs";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

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

  return (
    <div className="App">
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
