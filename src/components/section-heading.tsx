type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className="grid gap-6 md:grid-cols-12 md:items-end md:gap-8">
      <div className={description ? "md:col-span-7" : "md:col-span-12"}>
        <p className={`text-xs font-bold uppercase tracking-widest sm:text-sm ${light ? "text-accent" : "text-primary"}`}>
          {eyebrow}
        </p>
        <h2 className={`mt-4 max-w-4xl font-display text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl 2xl:text-6xl ${light ? "text-hero-foreground" : "text-foreground"}`}>
          {title}
        </h2>
      </div>
      {description ? (
        <p className={`max-w-xl text-base leading-relaxed sm:text-lg md:col-span-5 ${light ? "text-hero-muted" : "text-muted-foreground"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
