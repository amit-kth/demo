import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, ShieldCheck } from "lucide-react";
import { pageMetadata } from "@/lib/page-metadata";
import { ActionLink } from "@/components/action-link";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/site-content";

type ServiceRouteProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServiceRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((entry) => entry.slug === slug);
  if (!service) return { title: "Service not found | Slash Logic" };
  return pageMetadata({
    title: `${service.label} | Slash Logic`,
    description: service.intro,
    canonical: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: ServiceRouteProps) {
  const { slug } = await params;
  const service = services.find((entry) => entry.slug === slug);
  if (!service) notFound();

  const Icon = service.icon;
  const related = services.filter((item) => item.group === service.group && item.slug !== service.slug).slice(0, 3);

  return (
    <main className="bg-background text-foreground">
      <PageIntro
        eyebrow={`${service.group} / ${service.label}`}
        title={service.title}
        description={service.intro}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.label },
        ]}
        sideNote={service.group === "AI"
          ? { label: "Designed with boundaries", text: "AI output can be incomplete or incorrect. Define the use case, approved information and human handoff before choosing an implementation." }
          : service.group === "Growth"
            ? { label: "No guaranteed outcomes", text: "Search and campaign outcomes depend on many factors. Start with a clear audience, relevant work and measurement with context." }
            : { label: "A useful first release", text: "Begin with the work that matters now. Scope can grow as the product, audience and needs become clearer." }}
      />

      <section className="py-16 sm:py-20 lg:py-24 2xl:py-32">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-16">
            <Reveal className="lg:col-span-7">
              <p className="text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">01 / The opportunity</p>
              <h2 className="mt-4 max-w-3xl font-display text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">Start with the task. Then choose the tool.</h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{service.overview}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ActionLink href="/get-a-quote">Talk through a project</ActionLink>
                <ActionLink href="/services" variant="outline" icon="right">All services</ActionLink>
              </div>
            </Reveal>
            <Reveal className="lg:col-span-5">
              <aside className="relative isolate overflow-hidden rounded-3xl bg-hero p-7 text-hero-foreground sm:p-9">
                <div aria-hidden="true" className="absolute -right-12 -top-14 -z-10 size-56 rounded-full border border-hero-border" />
                <div className="grid size-12 place-items-center rounded-2xl bg-primary text-primary-foreground"><Icon className="size-6" aria-hidden="true" /></div>
                <p className="mt-8 text-xs font-bold uppercase tracking-widest text-accent">A useful question</p>
                <p className="mt-3 max-w-sm font-display text-2xl font-semibold leading-tight">What should be easier for the people using it?</p>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-hero-muted">That answer helps shape the scope, interface and technical choices around the actual need.</p>
              </aside>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-secondary py-16 sm:py-20 lg:py-24 2xl:py-32">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={`02 / ${service.label}`}
              title="What this work can include."
              description="The right scope depends on your current setup, audience and goals. These are common areas to explore—not a fixed package."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 sm:mt-12 lg:grid-cols-12">
            {service.capabilities.map((capability, index) => (
              <Reveal className={`h-full ${index === 0 ? "lg:col-span-7" : index === 1 ? "lg:col-span-5" : index === 2 ? "lg:col-span-5" : "lg:col-span-7"}`} key={capability.title}>
                <article className={`flex h-full min-h-52 flex-col rounded-3xl border border-border p-6 sm:p-8 ${index === 0 ? "bg-primary text-primary-foreground" : index === 2 ? "bg-hero text-hero-foreground" : "bg-card text-card-foreground"}`}>
                  <div className="flex items-start justify-between gap-5">
                    <h3 className="max-w-lg font-display text-2xl font-semibold leading-tight sm:text-3xl">{capability.title}</h3>
                    <span className={`font-display text-3xl font-semibold ${index === 0 ? "text-primary-foreground/50" : index === 2 ? "text-hero-muted/50" : "text-primary/50"}`}>{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <p className={`mt-auto max-w-2xl pt-8 text-base leading-relaxed ${index === 0 ? "text-primary-foreground/80" : index === 2 ? "text-hero-muted" : "text-muted-foreground"}`}>{capability.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">03 / A considered process</p>
            <h2 className="mt-4 max-w-xl font-display text-balance text-3xl font-semibold leading-tight sm:text-4xl">From a useful question to a reviewed release.</h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">The exact sequence changes with the project. These checkpoints help keep decisions and feedback visible.</p>
          </Reveal>
          <div className="lg:col-span-7">
            <ol className="border-y border-border">
              {service.approach.map((step, index) => (
                <li className="flex items-center gap-4 border-b border-border py-4 last:border-0 sm:py-5" key={step}>
                  <span className="w-12 shrink-0 font-display text-xl font-semibold text-primary">{String(index + 1).padStart(2, "0")}</span>
                  <p className="min-w-0 flex-1 font-display text-lg font-semibold sm:text-xl">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {service.group === "AI" ? (
        <section className="bg-hero py-14 text-hero-foreground sm:py-16">
          <Container className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-5">
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground"><ShieldCheck className="size-6" aria-hidden="true" /></span>
            <div className="min-w-0 flex-1">
              <h2 className="font-display text-2xl font-semibold">Privacy, review and limitations belong in the design.</h2>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-hero-muted">Before connecting AI to business information, agree which sources are approved, who can access them, how uncertain answers are handled and when a person needs to step in. AI output should not be treated as professional or consequential decision-making advice.</p>
            </div>
          </Container>
        </section>
      ) : null}

      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <p className="text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">04 / Questions</p>
            <h2 className="mt-4 font-display text-balance text-3xl font-semibold leading-tight sm:text-4xl">A few things to consider.</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">If a question is not covered here, bring it into a project conversation.</p>
          </Reveal>
          <div className="space-y-3 lg:col-span-8">
            {service.questions.map((item, index) => (
              <Reveal key={item.question}>
                <details className="group rounded-2xl border border-border bg-card p-5 open:bg-secondary sm:p-6" open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-lg font-semibold sm:text-xl">
                    {item.question}
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition-transform group-open:rotate-45"><span aria-hidden="true">+</span></span>
                  </summary>
                  <p className="mt-4 max-w-2xl pr-10 text-base leading-relaxed text-muted-foreground">{item.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {related.length > 0 ? (
        <section className="bg-secondary py-14 sm:py-16">
          <Container>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary">Keep exploring</p>
                <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">Related services</h2>
              </div>
              <Link className="inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:gap-3" href="/services">Full service list <ArrowRight className="size-4" aria-hidden="true" /></Link>
            </div>
            <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <Link className="group flex min-h-24 items-center justify-between gap-4 rounded-2xl border border-border bg-background p-5 transition hover:border-primary/40 hover:shadow-sm" href={`/services/${item.slug}`} key={item.slug}>
                  <span><span className="block font-display font-semibold">{item.label}</span><span className="mt-1 block text-sm text-muted-foreground">{item.short}</span></span>
                  <ArrowUpRight className="size-5 shrink-0 text-primary transition-transform group-hover:-translate-y-0.5 motion-reduce:group-hover:translate-y-0 group-hover:translate-x-0.5 motion-reduce:group-hover:translate-x-0" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <section className="bg-primary py-14 text-primary-foreground sm:py-16">
        <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary-foreground/75">Ready to explore the scope?</p>
            <h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold sm:text-3xl">Tell us what you want to make easier.</h2>
          </div>
          <ActionLink href="/get-a-quote" variant="light" className="self-start sm:self-auto">Start a conversation</ActionLink>
        </Container>
      </section>
    </main>
  );
}
