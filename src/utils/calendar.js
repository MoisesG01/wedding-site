import toast from "react-hot-toast";

// Utility functions for calendar integration
export const generateCalendarEvent = () => {
  const title = "Casamento Erica & Junior";
  const description = "Celebração do casamento de Erica & Junior";
  const location = "Igreja e Mansão Jaraguá, São Paulo - SP";
  const startDate = "2025-11-22T14:00:00";
  const endDate = "2025-11-22T23:00:00";
  const organizer = "Erica & Junior";
  const organizerEmail = "casamento@example.com";

  // Format dates for iCal (YYYYMMDDTHHMMSSZ)
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  };

  // Generate unique identifier
  const uid = `casamento-erica-junior-${Date.now()}@wedding-site.com`;

  // Create iCal content
  const icalContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Erica & Junior//Wedding Site//PT-BR",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTART:${formatDate(startDate)}`,
    `DTEND:${formatDate(endDate)}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${location}`,
    `ORGANIZER;CN=${organizer}:mailto:${organizerEmail}`,
    "STATUS:CONFIRMED",
    "SEQUENCE:0",
    "BEGIN:VALARM",
    "TRIGGER:-PT1H",
    "ACTION:DISPLAY",
    "DESCRIPTION:Lembrete: Casamento Erica & Junior em 1 hora",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  return icalContent;
};

export const downloadCalendarEvent = () => {
  try {
    console.log("Gerando arquivo de calendário...");
    const icalContent = generateCalendarEvent();
    console.log("Conteúdo iCal gerado:", icalContent);

    // Create blob and download
    const blob = new Blob([icalContent], {
      type: "text/calendar;charset=utf-8",
    });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "casamento-erica-junior.ics";
    link.style.display = "none";

    document.body.appendChild(link);
    link.click();

    // Cleanup
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    console.log("Download iniciado com sucesso!");

    toast.success(
      "Arquivo de calendário baixado com sucesso! Abra o arquivo .ics para adicionar ao seu calendário."
    );
  } catch (error) {
    console.error("Erro ao gerar arquivo de calendário:", error);
    toast.error("Erro ao gerar arquivo de calendário. Tente novamente.");
  }
};

// Google Calendar integration
export const addToGoogleCalendar = () => {
  try {
    console.log("Abrindo Google Calendar...");

    const title = "Casamento Erica & Junior";
    const description = "Celebração do casamento de Erica & Junior";
    const location = "Igreja e Mansão Jaraguá, São Paulo - SP";

    // Format dates for Google Calendar (YYYYMMDDTHHMMSSZ)
    const startDate = new Date("2025-11-22T14:00:00");
    const endDate = new Date("2025-11-22T23:00:00");

    const formatDate = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");

      return `${year}${month}${day}T${hours}${minutes}${seconds}Z`;
    };

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      title
    )}&dates=${formatDate(startDate)}/${formatDate(
      endDate
    )}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(
      location
    )}`;

    console.log("URL do Google Calendar:", googleCalendarUrl);
    window.open(googleCalendarUrl, "_blank");
    console.log("Google Calendar aberto!");

    toast.success(
      "Google Calendar aberto! O evento foi pré-preenchido. Clique em 'Salvar' para adicionar ao seu calendário."
    );
  } catch (error) {
    console.error("Erro ao abrir Google Calendar:", error);
    toast.error("Erro ao abrir Google Calendar. Tente novamente.");
  }
};

// Outlook Calendar integration
export const addToOutlookCalendar = () => {
  try {
    console.log("Abrindo Outlook Calendar...");

    const title = "Casamento Erica & Junior";
    const description = "Celebração do casamento de Erica & Junior";
    const location = "Igreja e Mansão Jaraguá, São Paulo - SP";
    const startDate = "2025-11-22T14:00:00";
    const endDate = "2025-11-22T23:00:00";

    const outlookUrl = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(
      title
    )}&startdt=${startDate}&enddt=${endDate}&body=${encodeURIComponent(
      description
    )}&location=${encodeURIComponent(location)}`;

    console.log("URL do Outlook:", outlookUrl);
    window.open(outlookUrl, "_blank");
    console.log("Outlook Calendar aberto!");

    toast.success(
      "Outlook Calendar aberto! O evento foi pré-preenchido. Clique em 'Salvar' para adicionar ao seu calendário."
    );
  } catch (error) {
    console.error("Erro ao abrir Outlook Calendar:", error);
    toast.error("Erro ao abrir Outlook Calendar. Tente novamente.");
  }
};
