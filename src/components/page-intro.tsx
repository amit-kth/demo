import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/container";

type Breadcrumb = { label: string; href?: string };
type IntroImage = {
  src: string;
  alt: string;
  label: string;
  tint?: "warm" | "mint" | "lilac";
};
type ImageLayout = "split" | "background";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs?: Breadcrumb[];
  sideNote?: { label: string; text: string };
  image?: IntroImage;
  imageLayout?: ImageLayout;
};

const tintColors = {
  warm: "bg-tone-warm",
  mint: "bg-tone-mint",
  lilac: "bg-tone-lilac",
} as const;

function DescriptionBlock({
  description,
  sideNote,
  inverse = false,
}: Pick<PageIntroProps, "description" | "sideNote"> & { inverse?: boolean }) {
  return (
    <div className="space-y-5">
      <p className={`max-w-2xl text-base leading-relaxed sm:text-lg ${inverse ? "text-hero-muted" : "text-muted-foreground"}`}>
        {description}
      </p>
      {sideNote ? (
        <div className={`border-l-2 pl-4 ${inverse ? "border-accent/70" : "border-primary"}`}>
          <p className={`text-xs font-bold uppercase tracking-widest ${inverse ? "text-accent" : "text-primary"}`}>{sideNote.label}</p>
          <p className={`mt-2 text-sm leading-relaxed sm:text-base ${inverse ? "text-hero-foreground/90" : "text-foreground"}`}>{sideNote.text}</p>
        </div>
      ) : null}
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
  breadcrumbs = [],
  sideNote,
  image,
  imageLayout = "split",
}: PageIntroProps) {
  const immersive = Boolean(image && imageLayout === "background");

  return (
    <section className={`relative isolate overflow-hidden ${immersive ? "min-h-[34rem] bg-hero py-28 text-hero-foreground sm:min-h-[40rem] sm:py-36 lg:min-h-[44rem] lg:py-40" : "bg-secondary pb-14 pt-28 sm:pb-18 sm:pt-36 lg:pb-20 lg:pt-40"}`}>
      {immersive && image ? (
        <>
          <Image
            src={image.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover object-center"
          />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-r from-hero via-hero/90 to-hero/50 lg:to-hero/15" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-t from-hero/70 via-transparent to-hero/20" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 top-1/4 -z-10 size-96 rounded-full bg-primary/25 blur-3xl mix-blend-screen" />
        </>
      ) : (
        <>
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-32 -z-10 size-96 rounded-full bg-tone-lilac/30 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute bottom-0 right-1/4 -z-10 size-80 rounded-full bg-tone-warm/20 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 -z-10 size-80 rounded-full border border-dashed border-primary/15" />
        </>
      )}
      <div aria-hidden="true" className={`site-noise pointer-events-none absolute inset-0 z-0 ${immersive ? "opacity-20 mix-blend-soft-light" : "opacity-[0.07]"}`} />

      <Container className="relative z-10">
        {breadcrumbs.length > 0 ? (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className={`flex flex-wrap items-center gap-2 text-sm font-medium ${immersive ? "text-hero-muted" : "text-muted-foreground"}`}>
              {breadcrumbs.map((crumb, index) => (
                <li className="inline-flex items-center gap-2" key={`${crumb.label}-${index}`}>
                  {index > 0 ? <ChevronRight className="size-3.5" aria-hidden="true" /> : null}
                  {crumb.href ? (
                    <Link className={`rounded-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${immersive ? "hover:text-hero-foreground" : "hover:text-primary"}`} href={crumb.href}>
                      {crumb.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className={immersive ? "text-hero-foreground" : "text-foreground"}>{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        <div className={`grid items-center gap-8 lg:gap-12 ${image && !immersive ? "lg:grid-cols-12" : "lg:grid-cols-12 lg:items-end"}`}>
          <div className={image && !immersive ? "lg:col-span-7" : "lg:col-span-8"}>
            <p className={`inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest sm:text-sm ${immersive ? "text-accent" : "text-primary"}`}>
              <span className={`h-px w-8 ${immersive ? "bg-accent" : "bg-primary"}`} aria-hidden="true" />
              {eyebrow}
            </p>
            <h1 className={`mt-5 max-w-5xl font-display text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl 2xl:text-7xl ${immersive ? "text-hero-foreground" : "text-foreground"}`}>
              {title}
            </h1>
            <div className="mt-5 max-w-2xl">
              <DescriptionBlock description={description} sideNote={sideNote} inverse={immersive} />
            </div>
          </div>

          {image && !immersive ? (
            <figure className="relative isolate aspect-video overflow-hidden rounded-3xl border border-border/70 bg-card shadow-xl lg:col-span-5">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 42vw, 34vw"
                className="object-cover"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-linear-to-tr from-hero/35 via-transparent to-tone-warm/10" />
              <figcaption className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-background/95 px-3.5 py-2 text-xs font-semibold text-foreground shadow-sm">
                <span className={`size-2 rounded-full ${tintColors[image.tint ?? "warm"]}`} aria-hidden="true" />
                {image.label}
              </figcaption>
            </figure>
          ) : null}
        </div>
      </Container>

      {immersive && image ? (
        <p className="absolute bottom-5 right-5 z-20 inline-flex max-w-[calc(100%-2.5rem)] items-center gap-2 rounded-full border border-hero-border bg-hero/75 px-3.5 py-2 text-xs font-medium text-hero-foreground shadow-lg backdrop-blur-md sm:bottom-7 sm:right-8">
          <span className={`size-2 shrink-0 rounded-full ${tintColors[image.tint ?? "warm"]}`} aria-hidden="true" />
          {image.label}
        </p>
      ) : null}
    </section>
  );
}
