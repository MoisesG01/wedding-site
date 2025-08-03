import { useState, useEffect } from "react";
import {
  downloadCalendarEvent,
  addToGoogleCalendar,
  addToOutlookCalendar,
} from "../utils/calendar";

export default function CalendarModal({ isOpen, onClose }) {
  const [isVisible, setIsVisible] = useState(false);

  // Show modal with animation
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // Wait for animation
  };

  const calendarOptions = [
    {
      name: "Download (.ics)",
      description: "Arquivo universal que funciona em qualquer calendário",
      icon: "📥",
      color: "bg-blue-500 hover:bg-blue-600",
      action: () => {
        console.log("Clicou em Download (.ics)");
        downloadCalendarEvent();
      },
    },
    {
      name: "Google Calendar",
      description: "Adicionar diretamente ao Google Calendar",
      icon: "📅",
      color: "bg-red-500 hover:bg-red-600",
      action: () => {
        console.log("Clicou em Google Calendar");
        addToGoogleCalendar();
      },
    },
    {
      name: "Outlook",
      description: "Adicionar ao Outlook/Office 365",
      icon: "📅",
      color: "bg-blue-600 hover:bg-blue-700",
      action: () => {
        console.log("Clicou em Outlook");
        addToOutlookCalendar();
      },
    },
    {
      name: "Apple Calendar",
      description: "Importar arquivo .ics no Apple Calendar",
      icon: "📅",
      color: "bg-gray-500 hover:bg-gray-600",
      action: () => {
        console.log("Clicou em Apple Calendar");
        downloadCalendarEvent();
      },
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
      ></div>

      {/* Modal */}
      <div
        className={`relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 transition-all duration-300 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-6">
          <div className="text-4xl mb-3">📅</div>
          <h3 className="text-xl font-serif text-slate-800 mb-2 elegant-text-gradient">
            Adicionar ao Calendário
          </h3>
          <p className="text-sm text-slate-600">
            Escolha como deseja adicionar o evento do casamento ao seu
            calendário
          </p>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {calendarOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => {
                option.action();
                handleClose();
              }}
              className={`w-full ${option.color} text-white p-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3`}
            >
              <span className="text-xl">{option.icon}</span>
              <div className="text-left">
                <div className="font-medium">{option.name}</div>
                <div className="text-xs opacity-90">{option.description}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Event Details */}
        <div className="bg-slate-50 rounded-xl p-4 mb-6">
          <h4 className="font-medium text-slate-800 mb-2">
            📋 Detalhes do Evento
          </h4>
          <div className="text-sm text-slate-600 space-y-1">
            <div>
              <strong>Evento:</strong> Casamento Erica & Junior
            </div>
            <div>
              <strong>Data:</strong> 22 de Novembro de 2025
            </div>
            <div>
              <strong>Horário:</strong> 14:00 - 23:00
            </div>
            <div>
              <strong>Local:</strong> Igreja e Mansão Jaraguá, São Paulo - SP
            </div>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="w-full bg-slate-200 hover:bg-slate-300 text-slate-700 py-3 rounded-xl transition-all duration-300"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
