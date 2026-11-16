import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { pageMetadata } from "@/lib/page-metadata";
import { ActionLink } from "@/components/action-link";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { projectConcepts } from "@/lib/site-content";

type ConceptRouteProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projectConcepts.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ConceptRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectConcepts.find((item) => item.slug === slug);
  if (!project) return { title: "Concept not found | Slash Logic" };
  return pageMetadata({
    title: `${project.name} | ${project.type} | Slash Logic`,
    description: project.description,
    canonical: `/portfolio/${project.slug}`,
  });
}

export default async function ConceptDetailPage({ params }: ConceptRouteProps) {
  const { slug } = await params;
  const project = projectConcepts.find((item) => item.slug === slug);
  if (!project) notFound();
  const related = projectConcepts.filter((item) => item.slug !== project.slug);

  return (
    <main className="bg-background text-foreground">
      <PageIntro
        eyebrow={`Concept work / ${project.type}`}
        title={`${project.name}: a ${project.type.toLowerCase()}.`}
        description={project.description}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Concept work", href: "/portfolio" }, { label: project.name }]}
        sideNote={{ label: "Clearly a concept", text: "This is an illustrative exploration, not a client engagement, live deployment or verified business outcome." }}
      />

      <section className="py-14 sm:py-18 lg:py-24">
        <Container>
          <div className="relative aspect-video overflow-hidden rounded-3xl bg-secondary sm:aspect-video">
            <Image src={project.image} alt={project.alt} fill priority sizes="(max-width: 768px) 100vw, 90vw" className="object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-foreground/60 via-transparent to-transparent" />
            <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-background/95 px-4 py-2 text-xs font-bold uppercase tracking-wider text-foreground shadow-md sm:bottom-7 sm:left-7">
              <span className="size-2 rounded-full bg-primary" aria-hidden="true" /> {project.type} / Concept only
            </span>
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20 lg:pb-24">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">01 / Concept brief</p>
            <h2 className="mt-4 font-display text-balance text-3xl font-semibold leading-tight sm:text-4xl">{project.conceptBrief}</h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">This question frames an interface exercise. It is not attributed to a client or described as a completed project request.</p>
            <div className="mt-8 rounded-3xl bg-secondary p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-primary">Design explorations</p>
              <ul className="mt-5 space-y-3">
                {project.designExplorations.map((item) => (
                  <li className="flex items-start gap-3" key={item}>
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"><Check className="size-3.5" aria-hidden="true" /></span>
                    <span className="text-sm leading-relaxed text-foreground sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-hero py-14 text-hero-foreground sm:py-16">
        <Container className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-5">
          <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground"><Check className="size-6" aria-hidden="true" /></span>
          <div className="min-w-0 flex-1">
            <h2 className="font-display text-2xl font-semibold">What this concept does not claim.</h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-hero-muted">It does not represent a customer, a commissioned engagement, a launched product, a client testimonial or measured results. It is here to make a possible interface direction easier to discuss.</p>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-18 lg:py-24">
        <Container>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="text-xs font-bold uppercase tracking-widest text-primary">Continue exploring</p><h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">Other concepts</h2></div>
            <Link className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3" href="/portfolio"><ArrowLeft className="size-4" aria-hidden="true" /> All concepts</Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {related.map((item) => (
              <Link className="group flex min-h-28 items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5 transition hover:border-primary/40 hover:shadow-sm sm:p-6" href={`/portfolio/${item.slug}`} key={item.slug}>
                <span><span className="block text-xs font-bold uppercase tracking-widest text-primary">{item.type}</span><span className="mt-2 block font-display text-lg font-semibold sm:text-xl">{item.name}</span><span className="mt-1 block text-sm text-muted-foreground">{item.title}</span></span>
                <ArrowUpRight className="size-5 shrink-0 text-primary transition-transform group-hover:-translate-y-0.5 motion-reduce:group-hover:translate-y-0 group-hover:translate-x-0.5 motion-reduce:group-hover:translate-x-0" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-primary py-14 text-primary-foreground sm:py-16">
        <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div><p className="text-xs font-bold uppercase tracking-widest text-primary-foreground/75">Have a real brief in mind?</p><h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold sm:text-3xl">Let&apos;s shape the right scope for it.</h2></div>
          <ActionLink href="/get-a-quote" variant="light">Start a conversation</ActionLink>
        </Container>
      </section>
    </main>
  );
}
