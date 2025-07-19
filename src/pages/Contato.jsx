import { useState } from "react";
import { sendContactEmail } from "../config/emailjs";

export default function Contato() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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
          email: "",
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
    <div className="min-h-screen elegant-gradient">
      <div className="max-w-6xl mx-auto px-4 py-24">
        {/* Header */}
        <div className="text-center mb-20 elegant-animation">
          <h1 className="text-6xl text-elegant mb-6 elegant-text-gradient">
            Entre em Contato
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-slate-300 to-gray-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-body text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Tem alguma dúvida, sugestão ou quer apenas conversar? Adoraríamos
            ouvir de você! Entre em contato conosco através dos canais abaixo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="elegant-animation-delay-1">
            <h2 className="text-3xl text-elegant mb-12 elegant-text-gradient">
              Informações de Contato
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-slate-300 to-gray-400 mb-8 rounded-full"></div>

            <div className="space-y-8">
              <div className="elegant-card p-8 elegant-card-hover">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
                    📞
                  </div>
                  <div>
                    <h3 className="text-xl text-elegant mb-3 elegant-text-gradient">
                      Telefone
                    </h3>
                    <p className="text-body text-slate-600 mb-2">
                      (11) 99999-9999
                    </p>
                    <p className="text-body-light text-slate-500">
                      Segunda a Sexta, 9h às 18h
                    </p>
                  </div>
                </div>
              </div>

              <div className="elegant-card p-8 elegant-card-hover">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
                    💬
                  </div>
                  <div>
                    <h3 className="text-xl text-elegant mb-3 elegant-text-gradient">
                      WhatsApp
                    </h3>
                    <p className="text-body text-slate-600 mb-2">
                      (11) 99999-9999
                    </p>
                    <p className="text-body-light text-slate-500">
                      Resposta rápida via mensagem
                    </p>
                  </div>
                </div>
              </div>

              <div className="elegant-card p-8 elegant-card-hover">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
                    📧
                  </div>
                  <div>
                    <h3 className="text-xl text-elegant mb-3 elegant-text-gradient">
                      Email
                    </h3>
                    <p className="text-body text-slate-600 mb-2">
                      wilson.erica@email.com
                    </p>
                    <p className="text-body-light text-slate-500">
                      Resposta em até 24 horas
                    </p>
                  </div>
                </div>
              </div>

              <div className="elegant-card p-8 elegant-card-hover">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
                    📍
                  </div>
                  <div>
                    <h3 className="text-xl text-elegant mb-3 elegant-text-gradient">
                      Endereço
                    </h3>
                    <p className="text-body text-slate-600 mb-2">
                      Rua das Flores, 123
                    </p>
                    <p className="text-body-light text-slate-500">
                      Jardim Europa - São Paulo, SP
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="elegant-animation-delay-2">
            <div className="elegant-card p-12">
              <div className="text-center mb-12">
                <div
                  className="text-6xl mb-6 animate-bounce"
                  style={{ animationDuration: "3s" }}
                >
                  💌
                </div>
                <h2 className="text-3xl text-elegant mb-6 elegant-text-gradient">
                  Envie uma Mensagem
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-slate-300 to-gray-400 mx-auto mb-6 rounded-full"></div>
                <p className="text-body text-slate-600">
                  Preencha o formulário abaixo e entraremos em contato em breve.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
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
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-transparent elegant-transition text-body"
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
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-transparent elegant-transition text-body"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-body-medium text-slate-700 mb-3"
                  >
                    Assunto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-transparent elegant-transition text-body"
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

                <div>
                  <label
                    htmlFor="message"
                    className="block text-body-medium text-slate-700 mb-3"
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
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-transparent elegant-transition text-body resize-none"
                    placeholder="Digite sua mensagem aqui..."
                  ></textarea>
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
                      "Enviar Mensagem"
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
                        Mensagem Enviada!
                      </h3>
                      <p className="text-body text-green-700">
                        Obrigado por entrar em contato! Sua mensagem foi enviada
                        com sucesso. Responderemos em breve.
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
                        Houve um problema ao enviar sua mensagem. Por favor,
                        tente novamente ou use um dos outros canais de contato.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="elegant-card p-12 mt-20 elegant-animation-delay-3">
          <h2 className="text-4xl text-elegant text-center mb-12 elegant-text-gradient">
            Perguntas Frequentes
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-slate-300 to-gray-400 mx-auto mb-12 rounded-full"></div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="elegant-card p-8 elegant-card-hover">
              <h3 className="text-xl text-elegant mb-4 elegant-text-gradient">
                Posso levar acompanhante?
              </h3>
              <p className="text-body text-slate-600">
                Sim! Basta confirmar no formulário de confirmação de presença
                quantas pessoas irão acompanhá-lo.
              </p>
            </div>

            <div className="elegant-card p-8 elegant-card-hover">
              <h3 className="text-xl text-elegant mb-4 elegant-text-gradient">
                Há estacionamento no local?
              </h3>
              <p className="text-body text-slate-600">
                Sim! O Espaço de Eventos Flores oferece estacionamento gratuito
                com capacidade para 200 veículos.
              </p>
            </div>

            <div className="elegant-card p-8 elegant-card-hover">
              <h3 className="text-xl text-elegant mb-4 elegant-text-gradient">
                Posso levar crianças?
              </h3>
              <p className="text-body text-slate-600">
                Claro! É um evento familiar e as crianças são muito bem-vindas.
                Teremos atividades especiais para elas.
              </p>
            </div>

            <div className="elegant-card p-8 elegant-card-hover">
              <h3 className="text-xl text-elegant mb-4 elegant-text-gradient">
                Qual o dress code?
              </h3>
              <p className="text-body text-slate-600">
                Elegante Esportivo. Para mulheres: vestidos ou conjuntos
                elegantes. Para homens: terno ou camisa social com calça.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
