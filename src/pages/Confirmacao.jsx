import { useState } from "react";
import emailjs from "emailjs-com";

export default function Confirmacao() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: 1,
    attending: "yes",
    dietaryRestrictions: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setSubmitError("Por favor, insira seu nome.");
      return false;
    }
    if (!formData.email.trim()) {
      setSubmitError("Por favor, insira seu email.");
      return false;
    }
    if (!formData.email.includes("@")) {
      setSubmitError("Por favor, insira um email válido.");
      return false;
    }
    if (!formData.attending) {
      setSubmitError("Por favor, confirme se irá comparecer.");
      return false;
    }
    return true;
  };

  const saveToLocalStorage = (data) => {
    try {
      const existingData = JSON.parse(
        localStorage.getItem("weddingRSVP") || "[]"
      );
      const newEntry = {
        ...data,
        id: Date.now(),
        submittedAt: new Date().toISOString(),
      };
      existingData.push(newEntry);
      localStorage.setItem("weddingRSVP", JSON.stringify(existingData));
    } catch (error) {
      console.error("Erro ao salvar localmente:", error);
    }
  };

  const sendEmail = async (data) => {
    const templateParams = {
      to_name: "Wilson & Erica",
      from_name: data.name,
      from_email: data.email,
      phone: data.phone || "Não informado",
      guests: data.guests,
      attending: data.attending === "yes" ? "Sim" : "Não",
      dietary_restrictions: data.dietaryRestrictions || "Nenhuma",
      message: data.message || "Nenhuma mensagem",
      reply_to: data.email,
    };

    try {
      const result = await emailjs.send(
        "service_gvf7pkf", // Service ID fornecido
        "template_4dmzovs", // Template ID fornecido
        templateParams,
        "3nsjjxziUMy949J-v" // Public Key fornecida
      );

      console.log("Email enviado com sucesso:", result);
      return true;
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Salva localmente primeiro
      saveToLocalStorage(formData);

      // Tenta enviar email
      const emailSent = await sendEmail(formData);

      if (!emailSent) {
        console.warn(
          "Email não foi enviado, mas dados foram salvos localmente"
        );
      }

      console.log("Formulário enviado:", formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setSubmitError("Erro ao enviar formulário. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-16">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white p-12 rounded-lg shadow-lg text-center">
            <div className="text-6xl mb-6">🎉</div>
            <h1 className="text-4xl font-serif text-gray-800 mb-4">
              Obrigado!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Sua confirmação foi recebida com sucesso. Estamos muito felizes em
              saber que você virá celebrar conosco!
            </p>
            <div className="bg-slate-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Próximos Passos
              </h2>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• Você receberá um email de confirmação</li>
                <li>• Lembre-se do dress code: Elegante Esportivo</li>
                <li>• Chegue 30 minutos antes da cerimônia</li>
                <li>• Não esqueça de trazer alegria e amor!</li>
              </ul>
            </div>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  guests: 1,
                  attending: "yes",
                  dietaryRestrictions: "",
                  message: "",
                });
              }}
              className="mt-8 bg-slate-600 text-white px-8 py-3 rounded-full hover:bg-slate-700 transition-colors"
            >
              Confirmar Outro Convidado
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif text-gray-800 mb-4">
            Confirmação de Presença
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sua presença é muito importante para nós! Por favor, confirme sua
            participação até 30 de outubro de 2025.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-serif text-gray-800 mb-6">
              Formulário de Confirmação
            </h2>

            {submitError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600">{submitError}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                  placeholder="Seu nome completo"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                  placeholder="seu@email.com"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                  placeholder="(11) 99999-9999"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Número de Convidados *
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                  disabled={isSubmitting}
                >
                  <option value={1}>1 pessoa</option>
                  <option value={2}>2 pessoas</option>
                  <option value={3}>3 pessoas</option>
                  <option value={4}>4 pessoas</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Confirma Presença? *
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="attending"
                      value="yes"
                      checked={formData.attending === "yes"}
                      onChange={handleChange}
                      className="mr-2"
                      disabled={isSubmitting}
                    />
                    <span>Sim, estarei presente!</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="attending"
                      value="no"
                      checked={formData.attending === "no"}
                      onChange={handleChange}
                      className="mr-2"
                      disabled={isSubmitting}
                    />
                    <span>Infelizmente não poderei ir</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Restrições Alimentares
                </label>
                <textarea
                  name="dietaryRestrictions"
                  value={formData.dietaryRestrictions}
                  onChange={handleChange}
                  rows="3"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                  placeholder="Ex: Vegetariano, alérgico a frutos do mar, etc."
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Mensagem para os Noivos
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                  placeholder="Deixe uma mensagem especial para Wilson e Erica..."
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 transform ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-slate-600 to-gray-700 text-white hover:from-slate-700 hover:to-gray-800 hover:scale-105"
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Enviando...
                  </div>
                ) : (
                  "Confirmar Presença"
                )}
              </button>
            </form>
          </div>

          {/* Info Sidebar */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-serif text-gray-800 mb-4">
                📅 Informações Importantes
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-slate-500">📅</span>
                  <span className="text-gray-600">
                    Data: 22 de Novembro de 2025
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-500">⏰</span>
                  <span className="text-gray-600">Horário: 18:00</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-500">📍</span>
                  <span className="text-gray-600">
                    Local: Espaço de Eventos Flores
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-500">👗</span>
                  <span className="text-gray-600">
                    Dress Code: Elegante Esportivo
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-500 to-gray-600 p-6 rounded-lg text-white">
              <h3 className="text-xl font-serif mb-4">💝 O que Esperar</h3>
              <ul className="space-y-2">
                <li>• Cerimônia religiosa emocionante</li>
                <li>• Cocktail com drinks especiais</li>
                <li>• Jantar gourmet</li>
                <li>• Música ao vivo e DJ</li>
                <li>• Muitas surpresas especiais!</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-serif text-gray-800 mb-4">
                ❓ Dúvidas Frequentes
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Posso levar acompanhante?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Sim, mas confirme no formulário acima.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Há estacionamento?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Sim, gratuito no local.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Posso levar crianças?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Sim, é um evento familiar!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
