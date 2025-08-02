import emailjs from "@emailjs/browser";

export const EMAILJS_CONFIG = {
  // Service ID - ID do serviço de email configurado no EmailJS
  SERVICE_ID: "service_gvf7pkf", // Substitua pelo seu Service ID real

  // Template IDs - IDs dos templates criados no EmailJS
  RSVP_TEMPLATE_ID: "template_4dmzovs", // Template para confirmação de presença
  CONTACT_TEMPLATE_ID: "template_y4m5ijg", // Template para mensagens de contato

  // Public Key - Chave pública da sua conta EmailJS
  PUBLIC_KEY: "3nsjjxziUMy949J-v", // Substitua pela sua Public Key real
};

// Função para inicializar o EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  console.log("EmailJS configurado com sucesso!");
};

// Função para enviar confirmação de presença
export const sendRSVPEmail = async (formData) => {
  const templateParams = {
    to_name: "Erica & Junior",
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone || "Não informado",
    guests: formData.guests,
    attending: formData.attending === "yes" ? "Sim" : "Não",
    dietary_restrictions: formData.dietaryRestrictions || "Nenhuma",
    message: formData.message || "Nenhuma mensagem",
    reply_to: formData.email,
  };

  try {
    const result = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.RSVP_TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    console.log("Email de confirmação enviado com sucesso:", result);
    return { success: true, result };
  } catch (error) {
    console.error("Erro ao enviar email de confirmação:", error);
    return { success: false, error };
  }
};

// Função para enviar mensagem de contato
export const sendContactEmail = async (formData) => {
  const templateParams = {
    to_name: "Erica & Junior",
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    reply_to: formData.email,
  };

  try {
    const result = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.CONTACT_TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    console.log("Email de contato enviado com sucesso:", result);
    return { success: true, result };
  } catch (error) {
    console.error("Erro ao enviar email de contato:", error);
    return { success: false, error };
  }
};
