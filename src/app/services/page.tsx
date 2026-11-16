import { pageMetadata } from "@/lib/page-metadata";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { ActionLink } from "@/components/action-link";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { services, serviceGroups } from "@/lib/site-content";

export const metadata = pageMetadata({
  title: "Services | Slash Logic",
  description: "Explore website, software, app, e-commerce, AI chatbot and digital marketing services from Slash Logic.",
  canonical: "/services",
});

const workingPrinciples = [
  "Start with the people and the problem.",
  "Agree on a useful first scope.",
  "Review decisions as the work takes shape.",
  "Keep future maintenance in the conversation.",
];

export default function ServicesPage() {
  return (
    <main className="bg-background text-foreground">
      <PageIntro
        eyebrow="Services / A connected set of capabilities"
        title="Build what your business needs next."
        description="Websites, software, apps, focused chatbots and marketing, shaped around one clear need."
        sideNote={{ label: "A practical starting point", text: "A goal or challenge is enough to explore the right scope." }}
        image={{ src: "/blue-glass-atmosphere.jpg", alt: "" }}
        imageLayout="background"
      />

      <section className="py-12 sm:py-16 lg:py-20 2xl:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="01 / Service map"
              title="Find the right service."
              description="Review each service’s scope, common use cases and questions."
            />
          </Reveal>
          <div className="mt-10 space-y-5 sm:mt-14">
            {serviceGroups.map((group, groupIndex) => (
              <Reveal key={group.title}>
                <section className="grid overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-12">
                  <div className={`relative isolate overflow-hidden p-6 sm:p-8 lg:col-span-4 lg:p-10 ${groupIndex === 1 ? "bg-hero text-hero-foreground" : groupIndex === 2 ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"}`}>
                    <span aria-hidden="true" className="absolute -right-14 -top-16 -z-10 size-56 rounded-full border border-current/20" />
                    <p className="text-xs font-bold uppercase tracking-widest opacity-75">{String(groupIndex + 1).padStart(2, "0")} / {group.title.split(" ")[0]}</p>
                    <h2 className="mt-5 max-w-sm font-display text-balance text-2xl font-semibold leading-tight sm:text-3xl">{group.title}</h2>
                    <p className="mt-4 max-w-md text-sm leading-relaxed opacity-80 sm:text-base">{group.description}</p>
                  </div>
                  <div className="lg:col-span-8">
                    <ul className="divide-y divide-border px-5 sm:px-8">
                      {group.slugs.map((slug) => {
                        const service = services.find((entry) => entry.slug === slug);
                        if (!service) return null;
                        const Icon = service.icon;
                        return (
                          <li key={service.slug}>
                            <Link className="group flex min-h-24 items-center gap-4 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:gap-6 sm:py-6" href={`/services/${service.slug}`}>
                              <span className="grid size-11 place-items-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                <Icon className="size-5" strokeWidth={1.7} aria-hidden="true" />
                              </span>
                              <span className="min-w-0 flex-1">
                                <span className="block font-display text-lg font-semibold transition-colors motion-reduce:transition-none group-hover:text-primary sm:text-xl">{service.label}</span>
                                <span className="mt-1 block max-w-2xl text-sm leading-relaxed text-muted-foreground">{service.short}</span>
                              </span>
                              <ArrowUpRight className="size-5 text-primary transition-transform group-hover:-translate-y-0.5 motion-reduce:group-hover:translate-y-0 group-hover:translate-x-0.5 motion-reduce:group-hover:translate-x-0" aria-hidden="true" />
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </section>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-secondary py-12 sm:py-16 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">02 / How to choose</p>
            <h2 className="mt-4 max-w-xl font-display text-balance text-3xl font-semibold leading-tight sm:text-4xl">Start with the need.</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">A conversation can clarify options, trade-offs and the constraints that matter.</p>
            <ActionLink className="mt-7" href="/get-a-quote">Plan a project</ActionLink>
          </Reveal>
          <Reveal className="lg:col-span-7">
            <ul className="divide-y divide-border border-y border-border">
              {workingPrinciples.map((principle, index) => (
                <li className="flex items-center gap-4 py-5 sm:py-6" key={principle}>
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"><Check className="size-4" aria-hidden="true" /></span>
                  <p className="font-display text-lg font-semibold sm:text-xl">{principle}</p>
                  <span className="ml-auto font-display text-sm font-semibold text-primary/60">{String(index + 1).padStart(2, "0")}</span>
                </li>
              ))}
            </ul>
            <Link className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:gap-3" href="/about-us">More about our approach <ArrowRight className="size-4" aria-hidden="true" /></Link>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
