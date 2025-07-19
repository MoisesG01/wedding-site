import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contato() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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
    if (!formData.subject) {
      setSubmitError("Por favor, selecione um assunto.");
      return false;
    }
    if (!formData.message.trim()) {
      setSubmitError("Por favor, escreva sua mensagem.");
      return false;
    }
    return true;
  };

  const saveToLocalStorage = (data) => {
    try {
      const existingData = JSON.parse(
        localStorage.getItem("weddingContact") || "[]"
      );
      const newEntry = {
        ...data,
        id: Date.now(),
        submittedAt: new Date().toISOString(),
      };
      existingData.push(newEntry);
      localStorage.setItem("weddingContact", JSON.stringify(existingData));
    } catch (error) {
      console.error("Erro ao salvar localmente:", error);
    }
  };

  const sendEmail = async (data) => {
    const subjectLabels = {
      confirmacao: "Confirmação de Presença",
      presentes: "Lista de Presentes",
      cerimonia: "Informações sobre a Cerimônia",
      duvida: "Dúvida Geral",
      outro: "Outro",
    };

    const templateParams = {
      to_name: "Wilson & Erica",
      from_name: data.name,
      from_email: data.email,
      subject: subjectLabels[data.subject] || data.subject,
      message: data.message,
      reply_to: data.email,
    };

    try {
      const result = await emailjs.send(
        "service_gvf7pkf",
        "template_y4m5ijg",
        templateParams,
        "3nsjjxziUMy949J-v"
      );

      console.log("Email de contato enviado com sucesso:", result);
      return true;
    } catch (error) {
      console.error("Erro ao enviar email de contato:", error);
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

      console.log("Formulário de contato enviado:", formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setSubmitError("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-16">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white p-12 rounded-lg shadow-lg text-center">
            <div className="text-6xl mb-6">💌</div>
            <h1 className="text-4xl font-serif text-gray-800 mb-4">
              Mensagem Enviada!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Obrigado por entrar em contato conosco. Responderemos em breve!
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: "",
                  email: "",
                  subject: "",
                  message: "",
                });
              }}
              className="bg-slate-600 text-white px-8 py-3 rounded-full hover:bg-slate-700 transition-colors"
            >
              Enviar Nova Mensagem
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif text-gray-800 mb-4">
            Entre em Contato
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tem alguma dúvida sobre nosso casamento? Quer conversar conosco?
            Estamos aqui para você!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-serif text-gray-800 mb-6">
              Envie uma Mensagem
            </h2>

            {submitError && (
              <div className="mb-6 p-4 border border-red-200 rounded-md bg-red-50">
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
                  Assunto *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                  disabled={isSubmitting}
                >
                  <option value="">Selecione um assunto</option>
                  <option value="confirmacao">Confirmação de Presença</option>
                  <option value="presentes">Lista de Presentes</option>
                  <option value="cerimonia">
                    Informações sobre a Cerimônia
                  </option>
                  <option value="duvida">Dúvida Geral</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Mensagem *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                  placeholder="Escreva sua mensagem aqui..."
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200
                  ${
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
                  "Enviar Mensagem"
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Couple Info */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-serif text-gray-800 mb-4">
                👰 Erica Silva
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-slate-500">📱</span>
                  <span className="text-gray-600">
                    WhatsApp: (11) 99999-9999
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-500">📧</span>
                  <span className="text-gray-600">
                    Email: erica.silva@email.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-500">📸</span>
                  <span className="text-gray-600">Instagram: @erica_silva</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-serif text-gray-800 mb-4">
                🤵 Wilson Santos
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-slate-500">📱</span>
                  <span className="text-gray-600">
                    WhatsApp: (11) 88888-8888
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-500">📧</span>
                  <span className="text-gray-600">
                    Email: wilson.santos@email.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-500">📸</span>
                  <span className="text-gray-600">
                    Instagram: @wilson_santos
                  </span>
                </div>
              </div>
            </div>

            {/* Wedding Coordinators */}
            <div className="bg-gradient-to-r from-slate-50 to-gray-600 p-6 rounded-lg text-white">
              <h3 className="text-xl font-serif mb-4">🎉 Cerimonialistas</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold">Ana Costa</h4>
                  <p className="text-sm">WhatsApp: (11) 77777-7777</p>
                </div>
                <div>
                  <h4 className="font-semibold">Carlos Lima</h4>
                  <p className="text-sm">WhatsApp: (11) 66666-6666</p>
                </div>
              </div>
            </div>

            {/* Venue Contact */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-serif text-gray-800 mb-4">
                📍 Local do Evento
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-slate-500">🏢</span>
                  <span className="text-gray-600">
                    Espaço de Eventos Flores
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-500">📞</span>
                  <span className="text-gray-600">(11) 55555-5555</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-500">📍</span>
                  <span className="text-gray-600">
                    Av. Pedro Álvares Cabral - Vila Mariana
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-serif text-center text-gray-800 mb-8">
            Perguntas Frequentes
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Posso levar acompanhante?
                </h3>
                <p className="text-gray-600">
                  Sim, mas confirme no formulário de confirmação de presença.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Há estacionamento no local?
                </h3>
                <p className="text-gray-600">
                  Sim, o local oferece estacionamento gratuito.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Posso levar crianças?
                </h3>
                <p className="text-gray-600">
                  Sim, é um evento familiar e as crianças são bem-vindas!
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Qual o dress code?
                </h3>
                <p className="text-gray-600">
                  Elegante Esportivo. Cores sugeridas: rosa e dourado.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Posso trazer presente no dia?
                </h3>
                <p className="text-gray-600">
                  Sim, teremos uma mesa especial para receber os presentes.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Até quando posso confirmar presença?
                </h3>
                <p className="text-gray-600">Até 30 de outubro de 2025.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
