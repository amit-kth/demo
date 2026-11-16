import Image from "next/image";
import Link from "next/link";

type BrandMarkProps = {
  tone?: "light" | "dark";
};

export function BrandMark({ tone = "light" }: BrandMarkProps) {
  const wordColor = tone === "dark" ? "text-foreground" : "text-hero-foreground";
  const markTone = tone === "light" ? "grayscale brightness-0 invert" : "";

  return (
    <Link
      className={`group inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-md ${wordColor} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:gap-3`}
      href="/"
      aria-label="Slash Logic home"
    >
      <Image
        src="/slash-logic-logo-mark.png"
        alt=""
        width={509}
        height={379}
        sizes="48px"
        className={`h-8 w-11 shrink-0 object-contain transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none sm:h-9 sm:w-12 ${markTone}`}
      />
      <span className="font-display text-base font-semibold tracking-tight sm:text-lg">
        Slash Logic
      </span>
    </Link>
  );
}
