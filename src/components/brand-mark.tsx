type BrandMarkProps = {
  href?: string;
  tone?: "light" | "dark";
};

export function BrandMark({ href = "#top", tone = "light" }: BrandMarkProps) {
  const wordColor = tone === "dark" ? "text-foreground" : "text-hero-foreground";

  return (
    <a
      className={`group inline-flex shrink-0 items-center gap-3 whitespace-nowrap ${wordColor}`}
      href={href}
      aria-label="Slash Logic home"
    >
      <svg
        className="size-8 text-primary transition duration-300 group-hover:scale-105 sm:size-9"
        viewBox="0 0 44 44"
        fill="none"
        aria-hidden="true"
      >
        <path d="m15 11-8 11 8 11M29 11l8 11-8 11" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m25 6-7 32" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
      </svg>
      <span className="font-display text-sm font-semibold tracking-tight sm:text-base">
        Slash <span className="mx-1 font-normal text-primary">/</span> Logic
      </span>
    </a>
  );
}
