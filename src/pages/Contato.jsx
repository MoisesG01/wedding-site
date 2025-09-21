import { useState, useEffect } from "react";
import { sendContactEmail } from "../config/emailjs";
import Divisor from "../components/Divisor";

export default function Contato() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Enviar email via EmailJS
      const emailResult = await sendContactEmail(formData);

      // Save to localStorage as backup
      const submissions = JSON.parse(
        localStorage.getItem("contact_submissions") || "[]"
      );
      submissions.push({
        ...formData,
        timestamp: new Date().toISOString(),
        emailSent: emailResult.success,
      });
      localStorage.setItem("contact_submissions", JSON.stringify(submissions));

      if (emailResult.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error saving message:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Divisor />

      <div className="py-2 sm:py-4 md:py-6">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div
            className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-800 mb-4 sm:mb-6 elegant-text-gradient">
              Entre em Contato
            </h1>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-pink-300 to-rose-300 mx-auto mb-6 sm:mb-8 rounded-full"></div>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
              Tem alguma dúvida ou quer nos enviar uma mensagem especial?
              <br />
              Estamos aqui para você!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Contact Information */}
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-2xl sm:text-3xl font-serif text-slate-800 mb-6 sm:mb-8 elegant-text-gradient">
                Informações de Contato
              </h2>
              <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-pink-200 to-rose-200 mb-6 sm:mb-8 rounded-full"></div>

              <div className="space-y-4 sm:space-y-6">
                <div className="bg-white/80 backdrop-blur-sm border border-white/20 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white text-lg sm:text-2xl shadow-lg">
                      💬
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-serif text-slate-800 mb-2 sm:mb-3 elegant-text-gradient">
                        WhatsApp
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 mb-1 sm:mb-2">
                        (11) 98912-3506 - Junior
                      </p>
                      <p className="text-sm sm:text-base text-slate-600 mb-1 sm:mb-2">
                        (11) 99172-0657 - Érica
                      </p>
                      <p className="text-xs sm:text-sm text-slate-500">
                        Resposta rápida via mensagem
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm border border-white/20 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full flex items-center justify-center text-white text-lg sm:text-2xl shadow-lg">
                      📍
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-serif text-slate-800 mb-2 sm:mb-3 elegant-text-gradient">
                        Local da Cerimônia
                      </h3>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Rua+Nossa+Sra.+da+Conceição,+117+–+Jaraguá,+São+Paulo+–+SP,+05181-280"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block hover:text-pink-600 transition-colors duration-300"
                      >
                        <p className="text-sm sm:text-base text-slate-600 mb-1 sm:mb-2 hover:underline">
                          Igreja Nossa Senhora da Conceição
                        </p>
                        <p className="text-xs sm:text-sm text-slate-500">
                          Rua Nossa Sra. da Conceição, 117 – Jaraguá, São Paulo
                          – SP, 05181-280
                        </p>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm border border-white/20 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center text-white text-lg sm:text-2xl shadow-lg">
                      🎉
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-serif text-slate-800 mb-2 sm:mb-3 elegant-text-gradient">
                        Local da Recepção
                      </h3>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Rua+Comendador+J.+de+Matos,+429+-+Vila+Clarice,+São+Paulo+-+SP,+05177-100"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block hover:text-pink-600 transition-colors duration-300"
                      >
                        <p className="text-sm sm:text-base text-slate-600 mb-1 sm:mb-2 hover:underline">
                          Mansão Jaraguá
                        </p>
                        <p className="text-xs sm:text-sm text-slate-500">
                          Rua Comendador J. de Matos, 429 – Vila Clarice, São
                          Paulo – SP, 05177-100
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg shadow-slate-200/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12">
                <div className="text-center mb-6 sm:mb-8 md:mb-12">
                  <div
                    className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 animate-bounce"
                    style={{ animationDuration: "3s" }}
                  >
                    💌
                  </div>
                  <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-pink-200 to-rose-200 mx-auto mb-4 sm:mb-6 rounded-full"></div>
                  <p className="text-sm sm:text-base text-slate-600">
                    Preencha o formulário abaixo e entraremos em contato em
                    breve.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="grid grid-cols-1 gap-4 sm:gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm sm:text-base font-medium text-slate-700 mb-2 sm:mb-3"
                      >
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                        placeholder="Digite seu nome completo"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm sm:text-base font-medium text-slate-700 mb-2 sm:mb-3"
                      >
                        Assunto *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                      >
                        <option value="">Selecione um assunto...</option>
                        <option value="Dúvida sobre o casamento">
                          Dúvida sobre o casamento
                        </option>
                        <option value="Confirmação de presença">
                          Confirmação de presença
                        </option>
                        <option value="Informações sobre presentes">
                          Informações sobre presentes
                        </option>
                        <option value="Sugestões">Sugestões</option>
                        <option value="Outro">Outro</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm sm:text-base font-medium text-slate-700 mb-2 sm:mb-3"
                    >
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-300 text-sm sm:text-base resize-none"
                      placeholder="Digite sua mensagem aqui..."
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 text-sm sm:text-base md:text-lg ${
                        isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      style={{
                        background:
                          "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)",
                        color: "white",
                        boxShadow: "0 4px 15px rgba(236, 72, 153, 0.3)",
                      }}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Enviando...
                        </div>
                      ) : (
                        "Enviar Mensagem"
                      )}
                    </button>
                  </div>
                </form>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-green-50 border border-green-200 rounded-xl transition-all duration-1000">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="text-2xl sm:text-3xl">✅</div>
                      <div>
                        <h3 className="text-base sm:text-lg font-serif text-slate-800 mb-1 sm:mb-2 elegant-text-gradient">
                          Mensagem Enviada!
                        </h3>
                        <p className="text-sm sm:text-base text-green-700">
                          Obrigado por entrar em contato! Sua mensagem foi
                          enviada com sucesso. Responderemos em breve.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-red-50 border border-red-200 rounded-xl transition-all duration-1000">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="text-2xl sm:text-3xl">❌</div>
                      <div>
                        <h3 className="text-base sm:text-lg font-serif text-slate-800 mb-1 sm:mb-2 elegant-text-gradient">
                          Erro ao Enviar
                        </h3>
                        <p className="text-sm sm:text-base text-red-700">
                          Houve um problema ao enviar sua mensagem. Por favor,
                          tente novamente ou use um dos outros canais de
                          contato.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
