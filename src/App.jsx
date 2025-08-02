import { useState, useEffect } from "react";
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
