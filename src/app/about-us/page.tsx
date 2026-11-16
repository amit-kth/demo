import { pageMetadata } from "@/lib/page-metadata";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Eye, Lightbulb, MessageSquareText } from "lucide-react";
import { ActionLink } from "@/components/action-link";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { techAreas } from "@/lib/site-content";

export const metadata = pageMetadata({
  title: "About Slash Logic | A Practical Technology Partner",
  description: "Learn how Slash Logic approaches websites, software, mobile apps, AI chatbots and digital growth.",
  canonical: "/about-us",
});

const principles = [
  {
    number: "01",
    title: "Understand first.",
    detail: "Begin with the people, process and business need. The right solution depends on that context.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Keep decisions clear.",
    detail: "Make decisions, open questions and the next review visible as the project moves forward.",
    icon: MessageSquareText,
  },
  {
    number: "03",
    title: "Plan for what comes next.",
    detail: "Consider how people will use and maintain a product beyond launch.",
    icon: Lightbulb,
  },
];

const principleSpans = ["lg:col-span-5", "lg:col-span-4", "lg:col-span-3"];

const projectSteps = [
  { title: "Discover", detail: "Discuss goals, users, current tools and constraints." },
  { title: "Define", detail: "Agree on priorities, scope and the questions still to resolve." },
  { title: "Design & develop", detail: "Create the structure, build the experience and review it together." },
  { title: "Test & launch", detail: "Check the agreed work and plan any next phase or support." },
];

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      <PageIntro
        eyebrow="About / Slash Logic"
        title="Technology that fits your work."
        description="We connect websites, software, apps, focused chatbots and marketing to the needs behind the work."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About us" }]}
        sideNote={{ label: "The starting point", text: "Understand the business need before recommending tools." }}
        image={{ src: "/workspace-hero.jpg", alt: "A designer sketching a digital layout beside a laptop", position: "right" }}
        imageLayout="background"
      />

      <section className="py-12 sm:py-16 lg:py-20 2xl:py-24">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">01 / Who we are</p>
            <h2 className="mt-4 max-w-xl font-display text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">Bring your digital work together.</h2>
          </Reveal>
          <Reveal className="space-y-5 lg:col-span-7">
            <p className="text-lg leading-relaxed text-foreground sm:text-xl">Websites, internal tools and customer discovery all shape the same digital experience.</p>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">We bring design, development and digital marketing into one conversation. Work can start with a page or process challenge, then grow when needed.</p>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">The focus: clear content, considered interfaces and a scope shaped around the people who use the result.</p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-secondary py-12 sm:py-16 lg:py-20 2xl:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="02 / What guides the work"
              title="Start with the right questions."
              description="Principles to guide the work, not promises about a particular result."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 lg:mt-14 lg:grid-cols-12">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <Reveal className={principleSpans[index]} key={principle.number}>
                  <article className={`flex h-full min-h-64 flex-col rounded-3xl p-5 sm:min-h-72 sm:p-8 ${index === 0 ? "bg-primary text-primary-foreground" : index === 1 ? "border border-border bg-card" : "bg-hero text-hero-foreground"}`}>
                    <div className="flex items-start justify-between gap-4">
                      <span className="grid size-11 place-items-center rounded-2xl bg-background/15"><Icon className="size-5" aria-hidden="true" /></span>
                      <span className="font-display text-lg font-semibold opacity-65">{principle.number}</span>
                    </div>
                    <h3 className="mt-9 font-display text-2xl font-semibold leading-tight">{principle.title}</h3>
                    <p className={`mt-3 text-sm leading-relaxed sm:text-base ${index === 0 ? "text-primary-foreground/80" : index === 2 ? "text-hero-muted" : "text-muted-foreground"}`}>{principle.detail}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 2xl:py-24">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">03 / How we work</p>
            <h2 className="mt-4 max-w-xl font-display text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">A process that fits the project.</h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">The project plan should reflect its size and uncertainty. A straightforward website and a custom product do not need the same process.</p>
            <Link className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:gap-3" href="/services">Explore the service areas <ArrowRight className="size-4" aria-hidden="true" /></Link>
          </Reveal>
          <Reveal className="lg:col-span-7">
            <ol className="border-y border-border">
              {projectSteps.map((step, index) => (
                <li className="flex gap-5 border-b border-border py-5 last:border-0 sm:py-6" key={step.title}>
                  <span className="w-16 shrink-0 font-display text-2xl font-semibold text-primary">{String(index + 1).padStart(2, "0")}</span>
                  <div className="min-w-0 flex-1"><h3 className="font-display text-xl font-semibold">{step.title}</h3><p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">{step.detail}</p></div>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden bg-hero py-12 text-hero-foreground sm:py-16 lg:py-20" id="technology">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20">
          <Image src="/blue-glass-atmosphere.jpg" alt="" fill sizes="100vw" className="object-cover object-right opacity-80" />
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-r from-hero/95 via-hero/85 to-hero/65" />
        <div aria-hidden="true" className="site-noise pointer-events-none absolute inset-0 z-0 opacity-15 mix-blend-soft-light" />
        <Container className="relative z-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <span className="grid size-12 place-items-center rounded-2xl bg-primary text-primary-foreground"><Eye className="size-6" aria-hidden="true" /></span>
              <p className="mt-7 text-xs font-bold uppercase tracking-widest text-accent sm:text-sm">04 / Technology examples</p>
              <h2 className="mt-4 max-w-xl font-display text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">Choose tools that fit.</h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-hero-muted sm:text-lg">Examples, not a fixed stack. Capability, licensing, privacy and ongoing support all matter.</p>
            </Reveal>
            <div className="lg:col-span-7">
              <dl className="divide-y divide-hero-border border-y border-hero-border">
                {techAreas.map((area) => (
                  <div className="grid grid-cols-12 gap-3 py-5 sm:gap-6 sm:py-6" key={area.name}>
                    <dt className="col-span-12 font-display text-base font-semibold text-hero-foreground sm:col-span-4">{area.name}</dt>
                    <dd className="col-span-12 flex flex-wrap gap-2 sm:col-span-8">
                      {area.tools.map((tool) => <span className="rounded-full border border-hero-border bg-hero-surface/70 px-3 py-1.5 text-sm text-hero-muted" key={tool}>{tool}</span>)}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-background py-12 sm:py-16 lg:py-20">
        <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Ready to talk through an idea?</p>
            <h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold sm:text-3xl">Start with your challenge.</h2>
          </div>
          <ActionLink href="/contact-us">Get in touch</ActionLink>
        </Container>
      </section>
    </main>
  );
}
