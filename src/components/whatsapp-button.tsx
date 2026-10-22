"use client";

import { useState } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";

type WhatsAppButtonProps = {
  href: string | null;
};

export function WhatsAppButton({ href }: WhatsAppButtonProps) {
  const [notice, setNotice] = useState(false);

  if (href) {
    return (
      <a className="whatsapp-button" href={href} target="_blank" rel="noreferrer">
        <MessageCircle size={18} strokeWidth={1.8} aria-hidden="true" />
        <span>Chat on WhatsApp</span>
        <ArrowUpRight size={17} strokeWidth={1.8} aria-hidden="true" />
      </a>
    );
  }

  return (
    <div className="whatsapp-action-wrap">
      <button className="whatsapp-button" type="button" onClick={() => setNotice(true)}>
        <MessageCircle size={18} strokeWidth={1.8} aria-hidden="true" />
        <span>WhatsApp chat</span>
        <ArrowUpRight size={17} strokeWidth={1.8} aria-hidden="true" />
      </button>
      <p className="whatsapp-note" role="status" aria-live="polite">
        {notice
          ? "The chat link will be connected when your WhatsApp number is added."
          : "WhatsApp number to be added before launch."}
      </p>
    </div>
  );
}
