"use client";

import { useState } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";

type WhatsAppButtonProps = {
  href: string | null;
};

const buttonClasses =
  "group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-whatsapp px-6 py-3 text-base font-semibold text-whatsapp-foreground shadow-lg transition hover:-translate-y-0.5 hover:brightness-110 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-ring active:scale-95";

function ButtonContent() {
  return (
    <>
      <MessageCircle className="size-5" strokeWidth={1.8} aria-hidden="true" />
      <span>Chat on WhatsApp</span>
      <ArrowUpRight className="size-5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.8} aria-hidden="true" />
    </>
  );
}

export function WhatsAppButton({ href }: WhatsAppButtonProps) {
  const [notice, setNotice] = useState(false);

  if (href) {
    return (
      <a className={buttonClasses} href={href} target="_blank" rel="noreferrer">
        <ButtonContent />
      </a>
    );
  }

  return (
    <div className="flex flex-col items-start gap-3">
      <button className={buttonClasses} type="button" onClick={() => setNotice(true)}>
        <ButtonContent />
      </button>
      <p className="min-h-5 text-sm text-hero-muted" role="status" aria-live="polite">
        {notice
          ? "The chat link will be connected when your WhatsApp number is added."
          : "WhatsApp number to be added before launch."}
      </p>
    </div>
  );
}
