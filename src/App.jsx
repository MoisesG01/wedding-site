import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Historia from "./pages/Historia";
import Cerimonia from "./pages/Cerimonia";
import Confirmacao from "./pages/Confirmacao";
import Presentes from "./pages/Presentes";
import Contato from "./pages/Contato";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

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
        "presentes",
        "confirmacao",
        "contato",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

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
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Home Section */}
      <section id="home">
        <Home />
      </section>

      {/* Historia Section */}
      <section id="historia">
        <Historia />
      </section>

      {/* Cerimonia Section */}
      <section id="cerimonia">
        <Cerimonia />
      </section>

      {/* Presentes Section */}
      <section id="presentes">
        <Presentes />
      </section>

      {/* Confirmacao Section */}
      <section id="confirmacao">
        <Confirmacao />
      </section>

      {/* Contato Section */}
      <section id="contato">
        <Contato />
      </section>

      <Footer />
    </div>
  );
}
