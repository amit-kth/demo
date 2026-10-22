const rawWhatsAppNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";
const whatsAppNumber = rawWhatsAppNumber.replace(/\D/g, "");

export const whatsappHref = whatsAppNumber
  ? `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent("Hi Slash Logic, I'd like to know more about your services.")}`
  : null;
