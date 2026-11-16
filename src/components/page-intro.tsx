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

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs?: Breadcrumb[];
  sideNote?: { label: string; text: string };
  image?: IntroImage;
};

const tintColors = {
  warm: "bg-tone-warm",
  mint: "bg-tone-mint",
  lilac: "bg-tone-lilac",
} as const;

function DescriptionBlock({
  description,
  sideNote,
}: Pick<PageIntroProps, "description" | "sideNote">) {
  return (
    <div className="space-y-5">
      <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        {description}
      </p>
      {sideNote ? (
        <div className="border-l-2 border-primary pl-4">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">{sideNote.label}</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground sm:text-base">{sideNote.text}</p>
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
}: PageIntroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-secondary pb-14 pt-28 sm:pb-18 sm:pt-36 lg:pb-20 lg:pt-40">
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-32 -z-10 size-96 rounded-full bg-tone-lilac/30 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 right-1/4 -z-10 size-80 rounded-full bg-tone-warm/20 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 -z-10 size-80 rounded-full border border-dashed border-primary/15" />
      <Container>
        {breadcrumbs.length > 0 ? (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm font-medium text-muted-foreground">
              {breadcrumbs.map((crumb, index) => (
                <li className="inline-flex items-center gap-2" key={`${crumb.label}-${index}`}>
                  {index > 0 ? <ChevronRight className="size-3.5" aria-hidden="true" /> : null}
                  {crumb.href ? (
                    <Link className="rounded-sm transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" href={crumb.href}>
                      {crumb.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-foreground">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        <div className={`grid items-center gap-8 lg:gap-12 ${image ? "lg:grid-cols-12" : "lg:grid-cols-12 lg:items-end"}`}>
          <div className={image ? "lg:col-span-7" : "lg:col-span-8"}>
            <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">
              <span className="h-px w-8 bg-primary" aria-hidden="true" />
              {eyebrow}
            </p>
            <h1 className="mt-5 max-w-5xl font-display text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl 2xl:text-7xl">
              {title}
            </h1>
            {image ? (
              <div className="mt-5 max-w-2xl">
                <DescriptionBlock description={description} sideNote={sideNote} />
              </div>
            ) : null}
          </div>

          {image ? (
            <figure className="relative isolate aspect-video overflow-hidden rounded-3xl border border-border/70 bg-card shadow-xl lg:col-span-5">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 42vw, 34vw"
                className="object-cover"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-linear-to-tr from-hero/35 via-transparent to-tone-warm/10" />
              <figcaption className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-background/95 px-3.5 py-2 text-xs font-semibold text-foreground shadow-sm">
                <span className={`size-2 rounded-full ${tintColors[image.tint ?? "warm"]}`} aria-hidden="true" />
                {image.label}
              </figcaption>
            </figure>
          ) : (
            <div className="space-y-5 lg:col-span-4">
              <DescriptionBlock description={description} sideNote={sideNote} />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
