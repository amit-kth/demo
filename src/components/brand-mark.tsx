type BrandMarkProps = {
  href?: string;
  tone?: "light" | "dark";
};

export function BrandMark({ href = "#top", tone = "light" }: BrandMarkProps) {
  return (
    <a className={`brand-lockup brand-lockup--${tone}`} href={href} aria-label="Slash Logic home">
      <svg className="brand-symbol" viewBox="0 0 44 44" fill="none" aria-hidden="true">
        <path
          className="brand-frame"
          d="M15.2 5.5H7.7a2.2 2.2 0 0 0-2.2 2.2v7.5M28.8 5.5h7.5a2.2 2.2 0 0 1 2.2 2.2v7.5M38.5 28.8v7.5a2.2 2.2 0 0 1-2.2 2.2h-7.5M15.2 38.5H7.7a2.2 2.2 0 0 1-2.2-2.2v-7.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path d="M26.5 8.8 17.5 35.2" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
        <circle cx="27.1" cy="8.6" r="2.1" fill="currentColor" />
        <circle cx="16.9" cy="35.4" r="2.1" fill="currentColor" />
      </svg>
      <span className="brand-name">
        SLASH<span className="brand-name-gap">/</span>LOGIC
      </span>
    </a>
  );
}
