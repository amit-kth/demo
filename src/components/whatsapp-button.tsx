import { ArrowUpRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

type WhatsAppButtonProps = {
  href: string | null;
};

const buttonClasses =
  "group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-whatsapp px-6 py-3 text-base font-semibold text-whatsapp-foreground shadow-lg transition hover:-translate-y-0.5 hover:brightness-110 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-ring active:scale-95 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:brightness-100 disabled:hover:shadow-lg";

function ButtonContent() {
  return (
    <>
      <WhatsAppIcon className="size-5" />
      <span>Chat on WhatsApp</span>
      <ArrowUpRight className="size-5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.8} aria-hidden="true" />
    </>
  );
}

export function WhatsAppButton({ href }: WhatsAppButtonProps) {
  if (href) {
    return (
      <a className={buttonClasses} href={href} target="_blank" rel="noreferrer">
        <ButtonContent />
      </a>
    );
  }

  return (
    <button className={buttonClasses} type="button" disabled>
      <ButtonContent />
    </button>
  );
}
