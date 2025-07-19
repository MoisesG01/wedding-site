import { useState } from "react";
import { sendRSVPEmail } from "../config/emailjs";

export default function Confirmacao() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    attending: "yes",
    dietaryRestrictions: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          guests: "",
          attending: "yes",
          dietaryRestrictions: "",
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
    <div className="min-h-screen elegant-gradient-rose">
      <div className="max-w-4xl mx-auto px-4 py-24">
        {/* Header */}
        <div className="text-center mb-20 elegant-animation">
          <h1 className="text-6xl text-elegant mb-6 elegant-text-gradient">
            Confirme sua Presença
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-300 to-rose-300 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-body text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Sua presença é muito importante para nós! Por favor, confirme sua
            participação preenchendo o formulário abaixo.
          </p>
        </div>

        {/* Form */}
        <div className="elegant-card p-12 elegant-animation-delay-1">
          <div className="text-center mb-12">
            <div
              className="text-6xl mb-6 animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              💌
            </div>
            <h2 className="text-3xl text-elegant mb-6 elegant-text-gradient">
              Formulário de Confirmação
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-pink-200 to-rose-200 mx-auto mb-6 rounded-full"></div>
            <p className="text-body text-slate-600">
              Preencha os dados abaixo para confirmar sua presença em nosso
              casamento.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="elegant-card p-8 mb-8">
              <h3 className="text-xl text-elegant mb-6 elegant-text-gradient">
                📝 Informações Pessoais
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-body-medium text-slate-700 mb-3"
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
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent elegant-transition text-body"
                    placeholder="Digite seu nome completo"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-body-medium text-slate-700 mb-3"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent elegant-transition text-body"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-body-medium text-slate-700 mb-3"
                  >
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent elegant-transition text-body"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label
                    htmlFor="guests"
                    className="block text-body-medium text-slate-700 mb-3"
                  >
                    Número de Convidados *
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent elegant-transition text-body"
                  >
                    <option value="">Selecione...</option>
                    <option value="1">1 pessoa</option>
                    <option value="2">2 pessoas</option>
                    <option value="3">3 pessoas</option>
                    <option value="4">4 pessoas</option>
                    <option value="5">5 pessoas</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Confirmation */}
            <div className="elegant-card p-8 mb-8">
              <h3 className="text-xl text-elegant mb-6 elegant-text-gradient">
                ✅ Confirmação de Presença
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-body-medium text-slate-700 mb-4">
                    Você irá comparecer ao nosso casamento? *
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 p-4 border border-slate-200 rounded-lg hover:bg-pink-50 elegant-transition cursor-pointer">
                      <input
                        type="radio"
                        name="attending"
                        value="yes"
                        checked={formData.attending === "yes"}
                        onChange={handleChange}
                        className="w-4 h-4 text-pink-600 focus:ring-pink-500"
                      />
                      <div>
                        <span className="text-lg text-elegant font-medium">
                          Sim, estarei presente!
                        </span>
                        <p className="text-body text-slate-600">
                          Mal posso esperar para celebrar com vocês!
                        </p>
                      </div>
                    </label>
                    <label className="flex items-center gap-3 p-4 border border-slate-200 rounded-lg hover:bg-pink-50 elegant-transition cursor-pointer">
                      <input
                        type="radio"
                        name="attending"
                        value="no"
                        checked={formData.attending === "no"}
                        onChange={handleChange}
                        className="w-4 h-4 text-pink-600 focus:ring-pink-500"
                      />
                      <div>
                        <span className="text-lg text-elegant font-medium">
                          Infelizmente não poderei ir
                        </span>
                        <p className="text-body text-slate-600">
                          Entendo, mas ficaremos com saudades!
                        </p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Dietary Restrictions */}
            {formData.attending === "yes" && (
              <div className="elegant-card p-8 mb-8">
                <h3 className="text-xl text-elegant mb-6 elegant-text-gradient">
                  🍽️ Restrições Alimentares
                </h3>
                <div>
                  <label
                    htmlFor="dietaryRestrictions"
                    className="block text-body-medium text-slate-700 mb-3"
                  >
                    Você ou seus acompanhantes têm alguma restrição alimentar?
                  </label>
                  <textarea
                    id="dietaryRestrictions"
                    name="dietaryRestrictions"
                    value={formData.dietaryRestrictions}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent elegant-transition text-body resize-none"
                    placeholder="Ex: Vegetariano, alérgico a frutos do mar, celíaco, etc. (Deixe em branco se não houver restrições)"
                  ></textarea>
                  <p className="text-sm text-slate-500 mt-2">
                    Isso nos ajudará a preparar um menu adequado para todos os
                    convidados.
                  </p>
                </div>
              </div>
            )}

            {/* Message */}
            <div className="elegant-card p-8 mb-8">
              <h3 className="text-xl text-elegant mb-6 elegant-text-gradient">
                💝 Mensagem para os Noivos
              </h3>
              <div>
                <label
                  htmlFor="message"
                  className="block text-body-medium text-slate-700 mb-3"
                >
                  Deixe uma mensagem especial (opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent elegant-transition text-body resize-none"
                  placeholder="Deixe uma mensagem especial para Wilson e Erica..."
                ></textarea>
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`elegant-button text-lg px-12 py-4 font-medium ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Enviando...
                  </div>
                ) : (
                  "Confirmar Presença"
                )}
              </button>
            </div>
          </form>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-xl elegant-animation">
              <div className="flex items-center gap-4">
                <div className="text-3xl">✅</div>
                <div>
                  <h3 className="text-lg text-elegant mb-2 elegant-text-gradient">
                    Confirmação Enviada!
                  </h3>
                  <p className="text-body text-green-700">
                    Obrigado por confirmar sua presença! Entraremos em contato
                    em breve com mais detalhes sobre o evento.
                  </p>
                </div>
              </div>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mt-8 p-6 bg-red-50 border border-red-200 rounded-xl elegant-animation">
              <div className="flex items-center gap-4">
                <div className="text-3xl">❌</div>
                <div>
                  <h3 className="text-lg text-elegant mb-2 elegant-text-gradient">
                    Erro ao Enviar
                  </h3>
                  <p className="text-body text-red-700">
                    Houve um problema ao enviar sua confirmação. Por favor,
                    tente novamente ou entre em contato conosco diretamente.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Additional Information */}
        <div className="elegant-card p-12 mt-20 elegant-animation-delay-2">
          <h2 className="text-3xl text-elegant text-center mb-12 elegant-text-gradient">
            Informações Importantes
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-200 to-rose-200 mx-auto mb-12 rounded-full"></div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="elegant-card p-8 elegant-card-hover">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">📅</div>
                <h3 className="text-xl text-elegant mb-4 elegant-text-gradient">
                  Data e Horário
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                  <span className="text-body text-slate-600">
                    22 de Novembro de 2025
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                  <span className="text-body text-slate-600">
                    Cerimônia: 18:00
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                  <span className="text-body text-slate-600">
                    Recepção: 20:00
                  </span>
                </div>
              </div>
            </div>

            <div className="elegant-card p-8 elegant-card-hover">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">📍</div>
                <h3 className="text-xl text-elegant mb-4 elegant-text-gradient">
                  Local
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                  <span className="text-body text-slate-600">
                    Espaço de Eventos Flores
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                  <span className="text-body text-slate-600">
                    Rua das Flores, 123
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                  <span className="text-body text-slate-600">
                    São Paulo, SP
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="elegant-gradient-pink p-12 rounded-3xl text-gray-600 mt-20 elegant-animation-delay-3">
          <div className="text-center">
            <h2 className="text-3xl text-elegant mb-8">Precisa de Ajuda?</h2>
            <div className="w-16 h-1 bg-white/30 mx-auto mb-8 rounded-full"></div>
            <p className="text-body-light mb-8 max-w-2xl mx-auto">
              Se você tem alguma dúvida ou dificuldade para confirmar sua
              presença, entre em contato conosco através dos canais abaixo.
            </p>

            <div className="flex flex-wrap justify-center gap-8">
              <div className="elegant-glass p-6 rounded-2xl">
                <div className="text-4xl mb-3">📞</div>
                <h3 className="text-lg text-elegant mb-2">Telefone</h3>
                <p className="text-body-light">(11) 99999-9999</p>
              </div>
              <div className="elegant-glass p-6 rounded-2xl">
                <div className="text-4xl mb-3">💬</div>
                <h3 className="text-lg text-elegant mb-2">WhatsApp</h3>
                <p className="text-body-light">(11) 99999-9999</p>
              </div>
              <div className="elegant-glass p-6 rounded-2xl">
                <div className="text-4xl mb-3">📧</div>
                <h3 className="text-lg text-elegant mb-2">Email</h3>
                <p className="text-body-light">wilson.erica@email.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
