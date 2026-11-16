import Image from "next/image";

type BrandMarkProps = {
  tone?: "light" | "dark";
};

export function BrandMark({ tone = "light" }: BrandMarkProps) {
  const wordColor = tone === "dark" ? "text-foreground" : "text-hero-foreground";

  return (
    <a
      className={`group inline-flex shrink-0 items-center gap-3 whitespace-nowrap ${wordColor}`}
      href="#top"
      aria-label="Slash Logic home"
    >
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-card p-1 shadow-sm ring-1 ring-border/70 transition-transform duration-300 group-hover:scale-105 sm:size-11">
        <Image
          src="/slash-logic-logo-mark.png"
          alt=""
          width={509}
          height={379}
          sizes="44px"
          className="h-6 w-8 object-contain sm:h-7 sm:w-9"
        />
      </span>
      <span className="font-display text-base font-semibold tracking-tight sm:text-lg">
        Slash Logic
      </span>
    </a>
  );
}
