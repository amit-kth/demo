"use client";

import { useState } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";

type WhatsAppButtonProps = {
  href: string | null;
};

const buttonClasses =
  "inline-flex min-h-[58px] items-center justify-center gap-3 rounded-full border border-white/10 bg-slate-50 px-5 text-[13px] font-semibold text-slate-950 transition duration-200 hover:-translate-y-0.5 hover:bg-blue-100 hover:shadow-[0_10px_34px_rgba(71,135,255,.24)] active:scale-[.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200";

export function WhatsAppButton({ href }: WhatsAppButtonProps) {
  const [notice, setNotice] = useState(false);
  const content = (
    <>
      <MessageCircle className="size-[18px] text-blue-600" strokeWidth={1.8} aria-hidden="true" />
      <span>Chat on WhatsApp</span>
      <ArrowUpRight className="ml-1 size-[17px] text-slate-500 transition duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.8} aria-hidden="true" />
    </>
  );

  if (href) {
    return (
      <a className={`${buttonClasses} group`} href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <div className="inline-flex flex-col items-start gap-2.5">
      <button className={`${buttonClasses} group`} type="button" onClick={() => setNotice(true)}>
        {content}
      </button>
      <p className="min-h-4 text-[10px] leading-relaxed text-blue-100/50" role="status" aria-live="polite">
        {notice
          ? "The chat link will be connected when your WhatsApp number is added."
          : "WhatsApp number to be added before launch."}
      </p>
    </div>
  );
}
