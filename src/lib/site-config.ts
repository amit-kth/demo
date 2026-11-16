const configuredNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(/\D/g, "");
const rawNumber = configuredNumber || "9876543210";
const nationalNumber = rawNumber.startsWith("0") && rawNumber.length === 11 ? rawNumber.slice(1) : rawNumber;

export const whatsappNumber =
  nationalNumber.length === 10 ? `91${nationalNumber}` : nationalNumber;

export const whatsappDisplayNumber =
  whatsappNumber.startsWith("91") && whatsappNumber.length === 12
    ? `+91 ${whatsappNumber.slice(2, 7)} ${whatsappNumber.slice(7)}`
    : `+${whatsappNumber}`;

export const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Hi Slash Logic, I would like to know more about your services.",
)}`;

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || undefined;
