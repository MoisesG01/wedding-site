import { useState, useEffect } from "react";
import { sendRSVPEmail } from "../config/emailjs";
import CalendarModal from "../components/CalendarModal";

export default function Confirmacao() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guests: "",
    attending: "yes",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [lastSubmittedData, setLastSubmittedData] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showCalendarModal, setShowCalendarModal] = useState(false);

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
      const emailResult = await sendRSVPEmail(formData);

      // Save to localStorage as backup
      const submissions = JSON.parse(
        localStorage.getItem("rsvp_submissions") || "[]"
      );
      submissions.push({
        ...formData,
        timestamp: new Date().toISOString(),
        emailSent: emailResult.success,
      });
      localStorage.setItem("rsvp_submissions", JSON.stringify(submissions));

      if (emailResult.success) {
        setLastSubmittedData({ ...formData });
        setSubmitStatus("success");
        setFormData({
          name: "",
          phone: "",
          guests: "",
          attending: "yes",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error saving confirmation:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-8 sm:py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div
          className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-slate-800 mb-4 sm:mb-6 elegant-text-gradient">
            Confirme sua Presença
          </h1>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-pink-300 to-rose-300 mx-auto mb-6 sm:mb-8 rounded-full"></div>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
            Sua presença é muito importante para nós! Por favor, confirme sua
            participação preenchendo o formulário abaixo.
          </p>
        </div>

        {/* Form */}
        <div
          className={`bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg shadow-slate-200/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-8 sm:mb-12">
            <div
              className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              💌
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif text-slate-800 mb-4 sm:mb-6 elegant-text-gradient">
              Formulário de Confirmação
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-pink-200 to-rose-200 mx-auto mb-4 sm:mb-6 rounded-full"></div>
            <p className="text-sm sm:text-base text-slate-600">
              Preencha os dados abaixo para confirmar sua presença em nosso
              casamento.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            {/* Personal Information */}
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
              <h3 className="text-lg sm:text-xl font-serif text-slate-800 mb-4 sm:mb-6 elegant-text-gradient">
                📝 Informações Pessoais
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
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
                    htmlFor="phone"
                    className="block text-sm sm:text-base font-medium text-slate-700 mb-2 sm:mb-3"
                  >
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="guests"
                    className="block text-sm sm:text-base font-medium text-slate-700 mb-2 sm:mb-3"
                  >
                    Número de Convidados{" "}
                    {formData.attending === "yes" ? "*" : ""}
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required={formData.attending === "yes"}
                    disabled={formData.attending === "no"}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-300 text-sm sm:text-base ${
                      formData.attending === "no"
                        ? "bg-gray-100 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    <option value="">Selecione...</option>
                    <option value="1">1 pessoa</option>
                    <option value="2">2 pessoas</option>
                    <option value="3">3 pessoas</option>
                    <option value="4">4 pessoas</option>
                    <option value="5">5 pessoas</option>
                  </select>
                  {formData.attending === "no" && (
                    <p className="text-xs sm:text-sm text-gray-500 mt-2">
                      Campo não necessário quando não vai comparecer
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Confirmation */}
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
              <h3 className="text-lg sm:text-xl font-serif text-slate-800 mb-4 sm:mb-6 elegant-text-gradient">
                ✅ Confirmação de Presença
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-sm sm:text-base font-medium text-slate-700 mb-3 sm:mb-4">
                    Você irá comparecer ao nosso casamento? *
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 p-3 sm:p-4 border border-slate-200 rounded-lg hover:bg-pink-50 transition-all duration-300 cursor-pointer">
                      <input
                        type="radio"
                        name="attending"
                        value="yes"
                        checked={formData.attending === "yes"}
                        onChange={handleChange}
                        className="w-4 h-4 text-pink-600 focus:ring-pink-500"
                      />
                      <div>
                        <span className="text-base sm:text-lg font-serif font-medium text-slate-800">
                          Sim, estarei presente!
                        </span>
                        <p className="text-sm sm:text-base text-slate-600">
                          Mal posso esperar para celebrar com vocês!
                        </p>
                      </div>
                    </label>
                    <label className="flex items-center gap-3 p-3 sm:p-4 border border-slate-200 rounded-lg hover:bg-pink-50 transition-all duration-300 cursor-pointer">
                      <input
                        type="radio"
                        name="attending"
                        value="no"
                        checked={formData.attending === "no"}
                        onChange={handleChange}
                        className="w-4 h-4 text-pink-600 focus:ring-pink-500"
                      />
                      <div>
                        <span className="text-base sm:text-lg font-serif font-medium text-slate-800">
                          Infelizmente não poderei ir
                        </span>
                        <p className="text-sm sm:text-base text-slate-600">
                          Entendo, mas ficaremos com saudades!
                        </p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
              <h3 className="text-lg sm:text-xl font-serif text-slate-800 mb-4 sm:mb-6 elegant-text-gradient">
                💝 Mensagem para os Noivos
              </h3>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm sm:text-base font-medium text-slate-700 mb-2 sm:mb-3"
                >
                  Deixe uma mensagem especial (opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-300 text-sm sm:text-base resize-none"
                  placeholder="Deixe uma mensagem especial para Erica e Junior..."
                ></textarea>
              </div>
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
                ) : formData.attending === "yes" ? (
                  "Confirmar Presença"
                ) : (
                  "Enviar Resposta"
                )}
              </button>
            </div>
          </form>

          {/* Status Messages */}
          {submitStatus === "success" && lastSubmittedData && (
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-green-50 border border-green-200 rounded-xl transition-all duration-1000">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="text-2xl sm:text-3xl">
                  {lastSubmittedData.attending === "yes" ? "✅" : "💝"}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-serif text-slate-800 mb-1 sm:mb-2 elegant-text-gradient">
                    {lastSubmittedData.attending === "yes"
                      ? "Presença Confirmada!"
                      : "Resposta Recebida!"}
                  </h3>
                  <p className="text-sm sm:text-base text-green-700">
                    {lastSubmittedData.attending === "yes"
                      ? "Obrigado por confirmar sua presença! Entraremos em contato em breve com mais detalhes sobre o evento."
                      : "Obrigado por nos informar! Entendemos que nem sempre é possível comparecer, mas sua presença em nossos corações é o que mais importa."}
                  </p>
                </div>
              </div>

              {/* Calendar Integration - Only show for confirmed attendees */}
              {lastSubmittedData.attending === "yes" && (
                <div className="border-t border-green-200 pt-4 sm:pt-6">
                  <h4 className="text-sm sm:text-base font-medium text-slate-800 mb-3 sm:mb-4">
                    📅 Adicione o evento ao seu calendário:
                  </h4>
                  <div className="text-center">
                    <button
                      onClick={() => setShowCalendarModal(true)}
                      className="px-6 sm:px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white text-sm sm:text-base rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      📅 Adicionar ao Calendário
                    </button>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 sm:mt-3 text-center">
                    Clique para ver todas as opções de calendário disponíveis
                  </p>
                </div>
              )}
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
                    Houve um problema ao enviar sua confirmação. Por favor,
                    tente novamente ou entre em contato conosco diretamente.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Calendar Modal */}
      <CalendarModal
        isOpen={showCalendarModal}
        onClose={() => setShowCalendarModal(false)}
      />
    </div>
  );
}
