import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { ActionLink } from "@/components/action-link";
import { Container } from "@/components/container";
import { HeroSection } from "@/components/hero-section";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { services, industries, projectConcepts, commonQuestions } from "@/lib/site-content";
import { blogArticles } from "@/lib/blog-content";
import { siteUrl } from "@/lib/site-config";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Slash Logic",
  description:
    "Website, software, mobile app, focused AI chatbot and digital marketing services for businesses across India.",
  ...(siteUrl ? { url: siteUrl } : {}),
  areaServed: { "@type": "Country", name: "India" },
  knowsAbout: [
    "Website development",
    "E-commerce development",
    "Custom software development",
    "Android and iOS app development",
    "AI chatbot development",
    "Search engine optimization",
    "Digital marketing",
  ],
};

const processSteps = [
  { number: "01", title: "Discover", detail: "Understand the people, purpose and current process." },
  { number: "02", title: "Plan", detail: "Agree on scope, priorities and open questions." },
  { number: "03", title: "Design", detail: "Shape the structure and review the experience." },
  { number: "04", title: "Develop", detail: "Build in clear, reviewable steps." },
  { number: "05", title: "Launch", detail: "Test the work and plan what comes next." },
];

const toneStyles = {
  blue: {
    shell: "bg-primary text-primary-foreground",
    icon: "bg-primary-foreground/15 text-primary-foreground",
    sub: "text-primary-foreground/80",
    link: "text-primary-foreground",
    ring: "border-primary-foreground/20",
    number: "text-primary-foreground/15",
  },
  accent: {
    shell: "bg-accent text-accent-foreground",
    icon: "bg-background/70 text-primary",
    sub: "text-accent-foreground/80",
    link: "text-accent-foreground",
    ring: "border-accent-foreground/15",
    number: "text-accent-foreground/10",
  },
  paper: {
    shell: "border border-border bg-card text-card-foreground",
    icon: "bg-secondary text-primary",
    sub: "text-muted-foreground",
    link: "text-primary",
    ring: "border-primary/15",
    number: "text-primary/10",
  },
  dark: {
    shell: "bg-hero text-hero-foreground",
    icon: "bg-hero-surface text-accent",
    sub: "text-hero-muted",
    link: "text-accent",
    ring: "border-hero-border",
    number: "text-hero-foreground/10",
  },
  mist: {
    shell: "bg-secondary text-foreground",
    icon: "bg-background text-primary",
    sub: "text-muted-foreground",
    link: "text-primary",
    ring: "border-primary/15",
    number: "text-primary/10",
  },
} as const;

type Tone = keyof typeof toneStyles;

function ServiceTile({ slug, number, tone, className = "" }: { slug: string; number: string; tone: Tone; className?: string }) {
  const service = services.find((item) => item.slug === slug);
  if (!service) return null;
  const Icon = service.icon;
  const style = toneStyles[tone];

  return (
    <Reveal className={`h-full ${className}`}>
      <article className={`group relative isolate flex h-full min-h-72 flex-col overflow-hidden rounded-3xl p-6 shadow-sm transition duration-300 motion-reduce:transition-none hover:-translate-y-1 motion-reduce:hover:translate-y-0 hover:shadow-xl sm:p-8 ${style.shell}`}>
        <div aria-hidden="true" className={`absolute -right-14 -top-16 size-56 rounded-full border ${style.ring} transition-transform duration-700 group-hover:scale-110 motion-reduce:transition-none`} />
        <span aria-hidden="true" className={`absolute -bottom-7 right-5 font-display text-8xl font-semibold leading-none ${style.number}`}>{number}</span>
        <div className="relative z-10 flex items-start justify-between gap-4">
          <span className={`grid size-12 place-items-center rounded-2xl ${style.icon}`}>
            <Icon className="size-6" strokeWidth={1.7} aria-hidden="true" />
          </span>
          <span className="text-xs font-bold uppercase tracking-widest opacity-70">{number} / {service.group}</span>
        </div>
        <div className="relative z-10 mt-auto max-w-xl pt-12">
          <h3 className="font-display text-balance text-2xl font-semibold leading-tight sm:text-3xl">{service.label}</h3>
          <p className={`mt-3 max-w-lg text-base leading-relaxed ${style.sub}`}>{service.short}</p>
          <Link className={`mt-6 inline-flex min-h-10 items-center gap-2 rounded-sm text-sm font-bold transition hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${style.link}`} href={`/services/${service.slug}`}>
            Explore service <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}

function ConceptCard({ project, className = "" }: { project: (typeof projectConcepts)[number]; className?: string }) {
  return (
    <Reveal className={`h-full ${className}`}>
      <Link className="project-card group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition duration-300 motion-reduce:transition-none hover:-translate-y-1 motion-reduce:hover:translate-y-0 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" href={`/portfolio/${project.slug}`}>
        <div className="relative h-64 overflow-hidden sm:h-72">
          <Image src={project.image} alt={project.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 58vw, 48vw" className="project-art object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-foreground/70 via-foreground/5 to-transparent" />
          <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-background/95 px-4 py-2 text-xs font-bold uppercase tracking-wider text-foreground shadow-md">
            <Sparkles className="size-4 text-primary" aria-hidden="true" /> Concept
          </span>
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-background">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-background/80">{project.category}</p>
              <p className="mt-2 font-display text-2xl font-semibold sm:text-3xl">{project.name}</p>
            </div>
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground transition-transform duration-300 group-hover:rotate-45 motion-reduce:group-hover:rotate-0 motion-reduce:transition-none">
              <ArrowUpRight className="size-5" aria-hidden="true" />
            </span>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">{project.type}</p>
          <h3 className="mt-3 font-display text-balance text-xl font-semibold leading-tight sm:text-2xl">{project.title}</h3>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">{project.description}</p>
        </div>
      </Link>
    </Reveal>
  );
}

export default function Home() {
  const homeConcepts = projectConcepts.slice(0, 2);
  const homeIndustries = industries.slice(0, 6);
  const homeArticles = blogArticles.slice(0, 2);
  const technologyTags = ["Next.js", "React", "Python", "FastAPI", "n8n", "AWS", "PostgreSQL", "OpenAI"];

  return (
    <main className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c") }}
      />
      <HeroSection />

      <section className="bg-secondary py-14 sm:py-18 lg:py-20" aria-labelledby="home-intro-title">
        <Container className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-14">
          <Reveal className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">Slash Logic / A connected view</p>
            <h2 className="mt-4 max-w-xl font-display text-balance text-3xl font-semibold leading-tight sm:text-4xl" id="home-intro-title">Make the work clearer before choosing what to build.</h2>
          </Reveal>
          <Reveal className="lg:col-span-7">
            <p className="max-w-3xl text-base leading-relaxed text-foreground sm:text-lg">Slash Logic works across websites, software, mobile apps, focused AI chatbots and digital marketing. Each project starts with the people and process behind the business need.</p>
            <div className="mt-6 flex flex-wrap gap-x-7 gap-y-3">
              <Link className="inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:gap-3 motion-reduce:transition-none" href="/about-us">About Slash Logic <ArrowRight className="size-4" aria-hidden="true" /></Link>
              <Link className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition hover:text-primary motion-reduce:transition-none" href="/services">Explore services <ArrowUpRight className="size-4" aria-hidden="true" /></Link>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-background py-16 sm:py-20 lg:py-24 2xl:py-32" id="services">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="01 / What we do"
              title="Digital foundations, from the first page to the next big step."
              description="Build a useful presence, bring a process into focus or make it easier for customers to find you. Start with one need and shape the next step from there."
            />
          </Reveal>

          <div className="mt-10 grid items-stretch gap-4 sm:mt-12 lg:grid-cols-12">
            <ServiceTile className="lg:col-span-7" slug="website-development" number="01" tone="blue" />
            <ServiceTile className="lg:col-span-5" slug="mobile-app-development" number="02" tone="accent" />
            <ServiceTile className="lg:col-span-5" slug="software-development" number="03" tone="paper" />
            <ServiceTile className="lg:col-span-7" slug="ai-solutions" number="04" tone="dark" />
            <ServiceTile className="lg:col-span-8" slug="digital-marketing" number="05" tone="mist" />
            <Reveal className="h-full lg:col-span-4">
              <aside className="flex h-full min-h-72 flex-col justify-between rounded-3xl border border-border bg-background p-6 sm:p-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">A closer look</p>
                  <h3 className="mt-4 max-w-xs font-display text-2xl font-semibold leading-tight">More ways to make the digital work fit.</h3>
                </div>
                <ul className="mt-8 divide-y divide-border">
                  {["E-commerce development", "SEO services"].map((label) => {
                    const item = services.find((service) => service.label === label);
                    return item ? (
                      <li key={item.slug}>
                        <Link className="group flex min-h-12 items-center justify-between gap-3 py-3 text-sm font-semibold transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" href={`/services/${item.slug}`}>
                          {item.label}
                          <ArrowUpRight className="size-4 shrink-0 transition-transform group-hover:-translate-y-0.5 motion-reduce:group-hover:translate-y-0 group-hover:translate-x-0.5 motion-reduce:group-hover:translate-x-0" aria-hidden="true" />
                        </Link>
                      </li>
                    ) : null;
                  })}
                </ul>
                <Link className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:gap-3" href="/services">
                  View all services <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </aside>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-secondary py-16 sm:py-20 lg:py-24 2xl:py-32" id="approach">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="02 / How we work"
              title="Make the next decision clearer."
              description="A project moves better when the people, priorities and open questions are visible. The work begins with understanding the problem—not assuming the solution."
            />
          </Reveal>
          <ol className="mt-10 grid gap-0 border-t border-border sm:mt-14 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <li className={`relative border-b border-border py-6 sm:px-5 lg:border-b-0 lg:border-l lg:py-7 ${index === 0 ? "lg:border-l-0 lg:pl-0" : ""}`} key={step.number}>
                <span className="font-display text-4xl font-semibold leading-none text-primary/70">{step.number}</span>
                <h3 className="mt-5 font-display text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">{step.detail}</p>
              </li>
            ))}
          </ol>
          <div className="mt-9 flex flex-col gap-4 border-l-2 border-primary pl-5 sm:flex-row sm:items-center sm:justify-between sm:pl-6">
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Reviews and next steps are agreed around the scope, so the project stays easy to understand as it grows.
            </p>
            <ActionLink href="/about-us" variant="outline" icon="right" className="self-start sm:self-auto">Our approach</ActionLink>
          </div>
        </Container>
      </section>

      <section className="bg-background py-16 sm:py-20 lg:py-24 2xl:py-32" id="industries">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <Reveal className="lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">03 / Where we work</p>
              <h2 className="mt-4 max-w-xl font-display text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl 2xl:text-6xl">Different industries. Different day-to-day.</h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
                The useful solution depends on the work behind the business. Explore the kinds of challenges digital tools can help make clearer.
              </p>
              <Link className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:gap-3" href="/industries">
                Explore industries <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Reveal>
            <div className="lg:col-span-7">
              <ul className="divide-y divide-border border-y border-border">
                {homeIndustries.map((industry, index) => {
                  const Icon = industry.icon;
                  return (
                    <li className="group flex items-center gap-4 py-4 sm:py-5" key={industry.name}>
                      <span className="grid size-10 place-items-center rounded-full bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="size-5" strokeWidth={1.7} aria-hidden="true" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="font-display text-base font-semibold sm:text-lg">{industry.name}</p>
                        <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{industry.possibilities}</p>
                      </div>
                      <span className="ml-auto font-display text-sm font-semibold text-primary/60">{String(index + 1).padStart(2, "0")}</span>
                    </li>
                  );
                })}
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">Examples are starting points; the fit depends on each organisation’s needs and context.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-secondary py-16 sm:py-20 lg:py-24 2xl:py-32" id="work">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="04 / Concept work"
              title="A few ways a digital idea can take shape."
              description="These are illustrative concepts created to explore structure and interface—not completed client projects, testimonials or performance results."
            />
          </Reveal>
          <div className="mt-9 grid items-stretch gap-5 lg:mt-12 lg:grid-cols-12">
            <ConceptCard className="lg:col-span-7" project={homeConcepts[0]} />
            <ConceptCard className="lg:col-span-5" project={homeConcepts[1]} />
          </div>
          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">Concept names and screens are illustrative; they do not represent client engagements.</p>
            <ActionLink href="/portfolio" variant="outline" icon="right">View all concepts</ActionLink>
          </div>
        </Container>
      </section>

      <section className="bg-hero py-16 text-hero-foreground sm:py-20 lg:py-24 2xl:py-32" id="technology">
        <Container className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-widest text-accent sm:text-sm">05 / Technology</p>
            <h2 className="mt-4 max-w-xl font-display text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">Tools should fit the job.</h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-hero-muted sm:text-lg">
              The technology is a choice made around the brief, the team and long-term support—not a checklist to apply to every project.
            </p>
            <Link className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-accent transition hover:gap-3" href="/about-us#technology">
              See technology examples <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal className="lg:col-span-7">
            <div className="rounded-3xl border border-hero-border bg-hero-surface/80 p-6 sm:p-8 lg:p-10">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-hero-muted">A flexible toolset</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">Choose with purpose.</h3>
                </div>
                <span className="hidden size-12 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground sm:grid">
                  <Check className="size-6" aria-hidden="true" />
                </span>
              </div>
              <ul className="mt-7 flex flex-wrap gap-2.5">
                {technologyTags.map((tag) => (
                  <li className="rounded-full border border-hero-border bg-background/5 px-4 py-2 text-sm font-medium text-hero-foreground" key={tag}>{tag}</li>
                ))}
              </ul>
              <p className="mt-6 text-xs leading-relaxed text-hero-muted">Examples only. The actual stack depends on project requirements, capability, licensing and ongoing support.</p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-background py-16 sm:py-20 lg:py-24 2xl:py-32" id="insights">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">06 / Notes & guides</p>
              <h2 className="mt-4 max-w-3xl font-display text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">Thoughtful starting points.</h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">Practical notes on planning websites, digital products and focused AI experiences.</p>
            </Reveal>
            <ActionLink href="/blog" variant="outline" icon="right" className="self-start md:self-auto">Browse insights</ActionLink>
          </div>
          <div className="mt-9 grid gap-4 lg:mt-12 lg:grid-cols-12">
            {homeArticles.map((article, index) => (
              <Reveal className={`lg:col-span-6 ${index === 1 ? "lg:translate-y-8" : ""}`} key={article.slug}>
                <article className="h-full border-t-2 border-border pt-5 transition-colors hover:border-primary">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">{article.category} <span className="px-1 text-muted-foreground">/</span> {article.readingTime}</p>
                  <h3 className="mt-4 max-w-xl font-display text-2xl font-semibold leading-tight sm:text-3xl">
                    <Link className="rounded-sm transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" href={`/blog/${article.slug}`}>{article.title}</Link>
                  </h3>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">{article.excerpt}</p>
                  <Link className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:gap-3" href={`/blog/${article.slug}`}>Read guide <ArrowRight className="size-4" aria-hidden="true" /></Link>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-hero py-16 text-hero-foreground sm:py-20 lg:py-24" id="faq">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <p className="text-xs font-bold uppercase tracking-widest text-accent sm:text-sm">07 / Good to know</p>
            <h2 className="mt-4 font-display text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">Before we begin.</h2>
            <p className="mt-5 text-base leading-relaxed text-hero-muted sm:text-lg">A few answers to common questions about working together and choosing a useful next step.</p>
            <Link className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-accent transition hover:gap-3" href="/faq">Browse all answers <ArrowRight className="size-4" aria-hidden="true" /></Link>
          </Reveal>
          <div className="space-y-3 lg:col-span-8">
            {commonQuestions.slice(0, 3).map((item, index) => (
              <Reveal key={item.question}>
                <details className="group rounded-2xl border border-hero-border bg-hero-surface/80 p-5 open:bg-hero-surface sm:p-6" open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-lg font-semibold sm:text-xl">
                    {item.question}
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-open:rotate-45 motion-reduce:transition-none"><span aria-hidden="true">+</span></span>
                  </summary>
                  <p className="mt-4 max-w-2xl pr-10 text-base leading-relaxed text-hero-muted">{item.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden bg-primary py-16 text-primary-foreground sm:py-20 lg:py-24 2xl:py-32" id="contact">
        <div aria-hidden="true" className="absolute -right-24 -top-32 size-96 rounded-full border border-primary-foreground/20" />
        <div aria-hidden="true" className="absolute -right-12 -top-20 size-72 rounded-full border border-dashed border-accent/65" />
        <Container className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-8">
            <p className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-2 text-xs font-bold uppercase tracking-widest">A project starts with a conversation</p>
            <h2 className="mt-5 max-w-4xl font-display text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl 2xl:text-6xl">Let&apos;s make the next step useful.</h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">Tell us what you are working on, what feels difficult or what you would like to explore.</p>
          </Reveal>
          <Reveal className="flex flex-col items-start gap-3 lg:col-span-4 lg:items-end lg:justify-self-end">
            <ActionLink href="/contact-us" variant="light" className="w-full sm:w-auto">Get in touch</ActionLink>
            <Link className="inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-primary-foreground/85 transition hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" href="/get-a-quote">Share a project outline <ChevronRight className="size-4" aria-hidden="true" /></Link>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
