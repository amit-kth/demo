import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/container";

type Breadcrumb = { label: string; href?: string };

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs?: Breadcrumb[];
  sideNote?: { label: string; text: string };
};

export function PageIntro({
  eyebrow,
  title,
  description,
  breadcrumbs = [],
  sideNote,
}: PageIntroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-secondary pb-14 pt-28 sm:pb-18 sm:pt-36 lg:pb-20 lg:pt-40">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 -z-10 size-96 rounded-full border border-primary/10" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 -z-10 size-80 rounded-full border border-dashed border-primary/15" />
      <Container>
        {breadcrumbs.length > 0 ? (
          <nav aria-label="Breadcrumb" className="mb-9">
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
        <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">
              <span className="h-px w-8 bg-primary" aria-hidden="true" />
              {eyebrow}
            </p>
            <h1 className="mt-5 max-w-5xl font-display text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl 2xl:text-7xl">
              {title}
            </h1>
          </div>
          <div className="space-y-5 lg:col-span-4">
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
              {description}
            </p>
            {sideNote ? (
              <div className="border-l-2 border-primary pl-4">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">{sideNote.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground sm:text-base">{sideNote.text}</p>
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
