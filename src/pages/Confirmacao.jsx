import { useState, useEffect } from "react";
import { sendRSVPEmail } from "../config/emailjs";
import CalendarModal from "../components/CalendarModal";
import Divisor from "../components/Divisor";

export default function Confirmacao() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guests: "",
    bringingGuests: "no",
    guestNames: [],
    guestRelations: [],
    guestRelationOthers: [],
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
    setFormData((previous) => {
      // Base update
      let updated = { ...previous, [name]: value };

      // If attendance changed to "no", clear guests data
      if (name === "attending" && value === "no") {
        updated = {
          ...updated,
          bringingGuests: "no",
          guests: "",
          guestNames: [],
          guestRelations: [],
          guestRelationOthers: [],
        };
      }

      // Bringing guests toggle
      if (name === "bringingGuests") {
        if (value === "no") {
          updated.guests = "";
          updated.guestNames = [];
          updated.guestRelations = [];
          updated.guestRelationOthers = [];
        } else if (value === "yes") {
          const hasGuests = parseInt(previous.guests || "0", 10) > 0;
          updated.guests = hasGuests ? previous.guests : "1";
          updated.guestNames = hasGuests
            ? previous.guestNames && previous.guestNames.length > 0
              ? previous.guestNames
              : [""]
            : [""];
          updated.guestRelations = hasGuests
            ? previous.guestRelations && previous.guestRelations.length > 0
              ? previous.guestRelations
              : [""]
            : [""];
          updated.guestRelationOthers = hasGuests
            ? previous.guestRelationOthers &&
              previous.guestRelationOthers.length > 0
              ? previous.guestRelationOthers
              : [""]
            : [""];
        }
      }

      // Guests count changed: adjust guestNames array length
      if (name === "guests") {
        const desiredCount = parseInt(value || "0", 10);
        const currentNames = Array.isArray(previous.guestNames)
          ? [...previous.guestNames]
          : [];
        const currentRelations = Array.isArray(previous.guestRelations)
          ? [...previous.guestRelations]
          : [];
        const currentRelationOthers = Array.isArray(
          previous.guestRelationOthers
        )
          ? [...previous.guestRelationOthers]
          : [];
        if (desiredCount <= 0) {
          updated.guestNames = [];
          updated.guestRelations = [];
          updated.guestRelationOthers = [];
        } else if (currentNames.length > desiredCount) {
          updated.guestNames = currentNames.slice(0, desiredCount);
          updated.guestRelations = currentRelations.slice(0, desiredCount);
          updated.guestRelationOthers = currentRelationOthers.slice(
            0,
            desiredCount
          );
        } else if (currentNames.length < desiredCount) {
          updated.guestNames = [
            ...currentNames,
            ...Array.from(
              { length: desiredCount - currentNames.length },
              () => ""
            ),
          ];
          updated.guestRelations = [
            ...currentRelations,
            ...Array.from(
              { length: desiredCount - currentRelations.length },
              () => ""
            ),
          ];
          updated.guestRelationOthers = [
            ...currentRelationOthers,
            ...Array.from(
              { length: desiredCount - currentRelationOthers.length },
              () => ""
            ),
          ];
        }
      }

      return updated;
    });
  };

  const handleGuestNameChange = (index, value) => {
    setFormData((previous) => {
      const names = Array.isArray(previous.guestNames)
        ? [...previous.guestNames]
        : [];
      names[index] = value;
      return { ...previous, guestNames: names };
    });
  };

  const handleGuestRelationChange = (index, value) => {
    setFormData((previous) => {
      const relations = Array.isArray(previous.guestRelations)
        ? [...previous.guestRelations]
        : [];
      relations[index] = value;
      // If relation is not "Outro", clear the corresponding other value
      const relationOthers = Array.isArray(previous.guestRelationOthers)
        ? [...previous.guestRelationOthers]
        : [];
      if (value !== "Outro") {
        relationOthers[index] = "";
      }
      return {
        ...previous,
        guestRelations: relations,
        guestRelationOthers: relationOthers,
      };
    });
  };

  const handleGuestRelationOtherChange = (index, value) => {
    setFormData((previous) => {
      const relationOthers = Array.isArray(previous.guestRelationOthers)
        ? [...previous.guestRelationOthers]
        : [];
      relationOthers[index] = value;
      return { ...previous, guestRelationOthers: relationOthers };
    });
  };

  const setGuestsCount = (count) => {
    const bounded = Math.max(1, Math.min(5, parseInt(count || "0", 10)));
    setFormData((previous) => {
      const currentNames = Array.isArray(previous.guestNames)
        ? [...previous.guestNames]
        : [];
      const currentRelations = Array.isArray(previous.guestRelations)
        ? [...previous.guestRelations]
        : [];
      const currentRelationOthers = Array.isArray(previous.guestRelationOthers)
        ? [...previous.guestRelationOthers]
        : [];
      let nextNames = currentNames;
      let nextRelations = currentRelations;
      let nextRelationOthers = currentRelationOthers;
      if (bounded <= 0) {
        nextNames = [];
        nextRelations = [];
        nextRelationOthers = [];
      } else if (currentNames.length > bounded) {
        nextNames = currentNames.slice(0, bounded);
        nextRelations = currentRelations.slice(0, bounded);
        nextRelationOthers = currentRelationOthers.slice(0, bounded);
      } else if (currentNames.length < bounded) {
        nextNames = [
          ...currentNames,
          ...Array.from({ length: bounded - currentNames.length }, () => ""),
        ];
        nextRelations = [
          ...currentRelations,
          ...Array.from(
            { length: bounded - currentRelations.length },
            () => ""
          ),
        ];
        nextRelationOthers = [
          ...currentRelationOthers,
          ...Array.from(
            { length: bounded - currentRelationOthers.length },
            () => ""
          ),
        ];
      }
      return {
        ...previous,
        guests: String(bounded),
        guestNames: nextNames,
        guestRelations: nextRelations,
        guestRelationOthers: nextRelationOthers,
      };
    });
  };

  const incrementGuests = () => {
    setGuestsCount((parseInt(formData.guests || "0", 10) || 0) + 1);
  };

  const decrementGuests = () => {
    setGuestsCount((parseInt(formData.guests || "0", 10) || 1) - 1);
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
          bringingGuests: "no",
          guestNames: [],
          guestRelations: [],
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
            className={`bg-white/90 backdrop-blur-md border border-white/30 shadow-xl shadow-slate-200/40 rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-10 sm:mb-12">
              <div
                className="text-5xl sm:text-6xl md:text-7xl mb-6 sm:mb-8 animate-bounce"
                style={{ animationDuration: "3s" }}
              >
                💌
              </div>

              <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-pink-300 to-rose-300 mx-auto mb-6 sm:mb-8 rounded-full"></div>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Preencha os dados abaixo para confirmar sua presença em nosso
                casamento. Sua resposta é muito importante para nós!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10">
              {/* Personal Information */}
              <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200/50 p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg shadow-slate-200/20 hover:shadow-xl transition-all duration-500">
                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-serif text-slate-800 elegant-text-gradient">
                    Informações Pessoais
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-slate-700 uppercase tracking-wide"
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
                      className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-pink-300 focus:border-pink-300 transition-all duration-300 text-base bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md"
                      placeholder="Digite seu nome completo"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-slate-700 uppercase tracking-wide"
                    >
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-pink-300 focus:border-pink-300 transition-all duration-300 text-base bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>
              </div>

              {/* Confirmation */}
              <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200/50 p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg shadow-slate-200/20 hover:shadow-xl transition-all duration-500">
                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-serif text-slate-800 elegant-text-gradient">
                    Confirmação de Presença
                  </h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-4 uppercase tracking-wide">
                      Você irá comparecer ao nosso casamento? *
                    </label>
                    <div className="space-y-4">
                      <label className="flex items-start gap-4 p-6 border-2 border-slate-200 rounded-xl hover:border-pink-300 hover:bg-pink-50/50 transition-all duration-300 cursor-pointer group">
                        <input
                          type="radio"
                          name="attending"
                          value="yes"
                          checked={formData.attending === "yes"}
                          onChange={handleChange}
                          className="w-5 h-5 text-pink-600 focus:ring-pink-500 mt-1"
                        />
                        <div className="flex-1">
                          <span className="text-lg sm:text-xl font-serif font-semibold text-slate-800 group-hover:text-pink-700 transition-colors">
                            Sim, estarei presente! 🎉
                          </span>
                          <p className="text-sm sm:text-base text-slate-600 mt-1">
                            Mal posso esperar para celebrar com vocês neste dia
                            tão especial!
                          </p>
                        </div>
                      </label>
                      <label className="flex items-start gap-4 p-6 border-2 border-slate-200 rounded-xl hover:border-slate-300 hover:bg-slate-50/50 transition-all duration-300 cursor-pointer group">
                        <input
                          type="radio"
                          name="attending"
                          value="no"
                          checked={formData.attending === "no"}
                          onChange={handleChange}
                          className="w-5 h-5 text-slate-600 focus:ring-slate-500 mt-1"
                        />
                        <div className="flex-1">
                          <span className="text-lg sm:text-xl font-serif font-semibold text-slate-800 group-hover:text-slate-700 transition-colors">
                            Infelizmente não poderei ir 💝
                          </span>
                          <p className="text-sm sm:text-base text-slate-600 mt-1">
                            Entendo, mas ficaremos com saudades! Sua presença em
                            nossos corações é o que mais importa.
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>

                  {formData.attending === "yes" && (
                    <div className="mt-8">
                      <div className="bg-white/80 backdrop-blur-sm border border-white/30 shadow-lg shadow-slate-200/30 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-xl">
                        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                          <div className="flex items-center gap-3">
                            <div>
                              <h4 className="text-lg sm:text-xl font-serif font-medium text-slate-800">
                                Acompanhantes
                              </h4>
                              <p className="text-sm text-slate-600">
                                Informe se levará acompanhantes e seus detalhes
                              </p>
                            </div>
                          </div>
                          <div className="inline-flex rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                            <button
                              type="button"
                              onClick={() =>
                                handleChange({
                                  target: {
                                    name: "bringingGuests",
                                    value: "no",
                                  },
                                })
                              }
                              className={`px-6 py-3 text-sm font-medium transition-all duration-300 ${
                                formData.bringingGuests === "no"
                                  ? "bg-slate-700 text-white shadow-lg"
                                  : "bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-800"
                              }`}
                              aria-pressed={formData.bringingGuests === "no"}
                            >
                              Não
                            </button>
                            <button
                              type="button"
                              onClick={() =>
                                handleChange({
                                  target: {
                                    name: "bringingGuests",
                                    value: "yes",
                                  },
                                })
                              }
                              className={`px-6 py-3 text-sm font-medium border-l border-slate-200 transition-all duration-300 ${
                                formData.bringingGuests === "yes"
                                  ? "bg-slate-700 text-white shadow-lg"
                                  : "bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-800"
                              }`}
                              aria-pressed={formData.bringingGuests === "yes"}
                            >
                              Sim
                            </button>
                          </div>
                        </div>

                        {formData.bringingGuests === "yes" && (
                          <div className="space-y-6">
                            <div className="bg-slate-50 rounded-xl p-6">
                              <label className="block text-sm font-semibold text-slate-700 mb-4 uppercase tracking-wide">
                                Quantos acompanhantes? *
                              </label>
                              <div className="flex items-center justify-center gap-4">
                                <button
                                  type="button"
                                  onClick={decrementGuests}
                                  className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-slate-300 bg-white text-slate-600 hover:bg-slate-50 hover:border-slate-400 transition-all duration-300 shadow-sm hover:shadow-md"
                                  aria-label="Diminuir"
                                >
                                  <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M20 12H4"
                                    />
                                  </svg>
                                </button>
                                <div className="w-20 h-12 bg-white border-2 border-slate-200 rounded-xl flex items-center justify-center">
                                  <span className="text-xl font-bold text-slate-800">
                                    {parseInt(formData.guests || "1", 10)}
                                  </span>
                                </div>
                                <button
                                  type="button"
                                  onClick={incrementGuests}
                                  className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-slate-300 bg-white text-slate-600 hover:bg-slate-50 hover:border-slate-400 transition-all duration-300 shadow-sm hover:shadow-md"
                                  aria-label="Aumentar"
                                >
                                  <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M12 4v16m8-8H4"
                                    />
                                  </svg>
                                </button>
                              </div>
                              <p className="text-xs text-slate-500 text-center mt-3">
                                Máximo de 5 acompanhantes
                              </p>
                            </div>

                            {formData.guests &&
                              parseInt(formData.guests, 10) > 0 && (
                                <div className="space-y-4">
                                  <div className="flex items-center gap-2 mb-4">
                                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                                    <label className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                                      Detalhes dos acompanhantes *
                                    </label>
                                  </div>
                                  <div className="space-y-4">
                                    {Array.from({
                                      length: parseInt(
                                        formData.guests || "0",
                                        10
                                      ),
                                    }).map((_, index) => (
                                      <div
                                        key={index}
                                        className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300"
                                      >
                                        <div className="flex items-center gap-2 mb-3">
                                          <div className="w-6 h-6 bg-slate-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                            {index + 1}
                                          </div>
                                          <span className="text-sm font-medium text-slate-700">
                                            Acompanhante {index + 1}
                                          </span>
                                        </div>
                                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                                          <div className="lg:col-span-7">
                                            <input
                                              type="text"
                                              value={
                                                formData.guestNames[index] || ""
                                              }
                                              onChange={(e) =>
                                                handleGuestNameChange(
                                                  index,
                                                  e.target.value
                                                )
                                              }
                                              required
                                              className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-300 focus:border-transparent transition-all duration-300 text-sm bg-white/80 backdrop-blur-sm"
                                              placeholder="Nome completo"
                                            />
                                          </div>
                                          <div className="lg:col-span-5">
                                            <div className="relative">
                                              <select
                                                value={
                                                  formData.guestRelations?.[
                                                    index
                                                  ] || ""
                                                }
                                                onChange={(e) =>
                                                  handleGuestRelationChange(
                                                    index,
                                                    e.target.value
                                                  )
                                                }
                                                required
                                                className="appearance-none w-full px-4 py-3 pr-10 border border-slate-200 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm focus:ring-2 focus:ring-slate-300 focus:border-transparent transition-all duration-300 text-sm"
                                              >
                                                <option value="" disabled>
                                                  Selecione a relação
                                                </option>
                                                <option>Parceiro(a)</option>
                                                <option>Filho(a)</option>
                                                <option>Pai</option>
                                                <option>Mãe</option>
                                              </select>
                                              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
                                                <svg
                                                  className="h-4 w-4"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  viewBox="0 0 24 24"
                                                >
                                                  <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 9l-7 7-7-7"
                                                  />
                                                </svg>
                                              </div>
                                            </div>
                                          </div>
                                          {formData.guestRelations?.[index] ===
                                            "Outro" && (
                                            <div className="lg:col-span-3">
                                              <input
                                                type="text"
                                                value={
                                                  formData
                                                    .guestRelationOthers?.[
                                                    index
                                                  ] || ""
                                                }
                                                onChange={(e) =>
                                                  handleGuestRelationOtherChange(
                                                    index,
                                                    e.target.value
                                                  )
                                                }
                                                required
                                                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-300 focus:border-transparent transition-all duration-300 text-sm bg-white/80 backdrop-blur-sm"
                                                placeholder="Especifique"
                                              />
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200/50 p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg shadow-slate-200/20 hover:shadow-xl transition-all duration-500">
                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-serif text-slate-800 elegant-text-gradient">
                    Mensagem para os Noivos
                  </h3>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-slate-700 uppercase tracking-wide"
                  >
                    Deixe uma mensagem especial (opcional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-pink-300 focus:border-pink-300 transition-all duration-300 text-base bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md resize-none"
                    placeholder="Deixe uma mensagem especial para Erica e Junior..."
                  ></textarea>
                </div>
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-10 sm:px-12 md:px-16 py-4 sm:py-5 rounded-3xl font-semibold transition-all duration-300 transform hover:scale-105 text-base sm:text-lg md:text-xl shadow-lg hover:shadow-xl ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  style={{
                    background:
                      "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)",
                    color: "white",
                    boxShadow: "0 8px 25px rgba(236, 72, 153, 0.4)",
                  }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Enviando...
                    </div>
                  ) : formData.attending === "yes" ? (
                    "✨ Confirmar Presença"
                  ) : (
                    "💝 Enviar Resposta"
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
    </div>
  );
}
