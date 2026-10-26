import Image from "next/image";
import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  FileText,
  Megaphone,
  MessageCircle,
  PenTool,
  Plus,
  Search,
  Share2,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { siteUrl, whatsappDisplayNumber, whatsappHref, whatsappNumber } from "@/lib/site-config";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Slash Logic",
  description:
    "Website, e-commerce, custom software, mobile app development and digital marketing services for businesses across India.",
  ...(siteUrl ? { url: siteUrl } : {}),
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  knowsAbout: [
    "Website development",
    "E-commerce development",
    "Custom software development",
    "Android and iOS app development",
    "Search engine optimization",
    "Digital marketing",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: `+${whatsappNumber}`,
    contactType: "sales",
    areaServed: "IN",
  },
};

const sampleBrands = [
  { name: "NORTHLINE", icon: Code2 },
  { name: "MORROW", icon: ShoppingBag },
  { name: "FORMA", icon: Smartphone },
  { name: "ORBIT", icon: Workflow },
];

const marketingServices = [
  { title: "SEO", detail: "Be easier to find", icon: Search },
  { title: "Social media", detail: "Build a clear presence", icon: Share2 },
  { title: "Paid ads", detail: "Reach the right audience", icon: Megaphone },
  { title: "Content", detail: "Give people a reason to stay", icon: FileText },
];

const processSteps = [
  { number: "01", title: "Listen", detail: "We learn about your goals, customers and current setup.", icon: MessageCircle },
  { number: "02", title: "Plan", detail: "We agree on scope, priorities and what success should look like.", icon: Workflow },
  { number: "03", title: "Create", detail: "We design, develop and review the work with you.", icon: PenTool },
  { number: "04", title: "Launch & grow", detail: "We get it live and can keep improving it through marketing.", icon: Zap },
];

const projects = [
  {
    brand: "Northline",
    category: "Website · IT services",
    title: "IT services, made clear.",
    description: "A business website concept that introduces digital services, explains capabilities and makes it easy to start a conversation.",
    image: "/concept-morrow.jpg",
    alt: "Desktop website interface concept for a technology services business, with service information and a clear contact path",
    layout: "feature",
  },
  {
    brand: "Morrow",
    category: "E-commerce · Retail",
    title: "A simpler way to shop online.",
    description: "An online store concept with product categories, a browsable catalogue and a straightforward path to checkout.",
    image: "/concept-juniper.jpg",
    alt: "E-commerce website interface with navigation, a retail product grid and shopping controls",
    layout: "side",
  },
  {
    brand: "Forma",
    category: "Mobile app · Productivity",
    title: "A clearer daily plan.",
    description: "A mobile productivity app concept with task planning, priorities and a quick progress overview.",
    image: "/concept-forma.jpg",
    alt: "Smartphone displaying a mobile productivity app interface with task cards and a progress dashboard",
    layout: "wide",
  },
] as const;

const commonQuestions = [
  {
    question: "What can you build?",
    answer: "Business websites, online stores, custom web apps and mobile apps for iOS and Android. We can also plan the digital marketing that supports them.",
  },
  {
    question: "Can I start with one service?",
    answer: "Yes. Start with the service you need now: website development, an app, SEO, social media, paid ads or content marketing. Add more later if useful.",
  },
  {
    question: "Do you work with small and large teams?",
    answer: "Yes. We work with local Indian businesses and larger teams, shaping each project around the people who will use and manage it.",
  },
  {
    question: "What happens after launch?",
    answer: "We can help with updates, new features and ongoing marketing. The next steps depend on your goals and the kind of support you need.",
  },
];

function BrandRail() {
  const loop = [...sampleBrands, ...sampleBrands];

  return (
    <div className="mt-16 border-y border-border py-5 sm:mt-20">
      <div className="flex items-center gap-6">
        <p className="hidden shrink-0 text-xs font-bold uppercase tracking-widest text-muted-foreground lg:block">
          Sample brand identities
        </p>
        <div className="min-w-0 flex-1 overflow-hidden">
          <div className="brand-marquee flex w-max items-center gap-10 sm:gap-14">
            {loop.map(({ name, icon: Icon }, index) => (
              <div
                aria-hidden={index >= sampleBrands.length ? true : undefined}
                className={`flex items-center gap-3 ${index >= sampleBrands.length ? "motion-reduce:hidden" : ""}`}
                key={`${name}-${index}`}
              >
                <span className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Icon className="size-5" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span className="whitespace-nowrap font-display text-base font-semibold tracking-wide text-foreground sm:text-lg">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c") }}
      />
      <SiteHeader />

      <section
        aria-labelledby="hero-title"
        className="relative isolate min-h-svh overflow-hidden bg-hero text-hero-foreground"
        id="top"
      >
        <div className="absolute inset-0 -z-10">
          <Image
            src="/slash-logic-backdrop-v3.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-left md:object-center"
          />
          <div className="absolute inset-0 bg-linear-to-r from-hero via-hero/75 to-hero/35" />
          <div className="absolute inset-0 bg-linear-to-t from-hero/70 via-transparent to-hero/10" />
          <div className="absolute inset-0 bg-linear-to-b from-hero/35 via-transparent to-transparent" />
        </div>

        <Container className="flex min-h-svh items-center pb-12 pt-24 sm:pb-16 sm:pt-28 lg:pt-20 2xl:pb-20 2xl:pt-24">
          <div className="grid w-full items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-6 2xl:gap-12">
            <div className="max-w-3xl lg:col-span-7">
              <h1
                className="font-display text-balance text-4xl font-semibold leading-none tracking-tight sm:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl"
                id="hero-title"
              >
                <span className="hero-enter hero-enter-delay-1 block">Web &amp; app</span>
                <span className="hero-enter hero-enter-delay-2 block text-accent">development</span>
              </h1>
              <p className="hero-enter hero-enter-delay-3 mt-5 max-w-2xl text-base leading-relaxed text-hero-muted sm:mt-6 sm:text-lg lg:text-xl">
                We build mobile-friendly websites, online stores and apps, then help businesses across India reach the right customers with digital marketing.
              </p>
              <div className="hero-enter hero-enter-delay-4 mt-7 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-primary px-6 py-3 text-base font-bold text-primary-foreground shadow-lg transition hover:-translate-y-1 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-ring sm:w-auto"
                  href="#services"
                >
                  Explore services
                  <ArrowDownRight className="size-5 transition-transform group-hover:translate-y-1 group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
                <WhatsAppButton href={whatsappHref} />
              </div>
            </div>

            <div className="relative hidden min-h-96 lg:col-span-5 lg:block" aria-hidden="true">
              <div className="hero-orbit absolute inset-3 rounded-full border border-primary-foreground/20" />
              <div className="hero-orbit hero-orbit-reverse absolute inset-12 rounded-full border border-dashed border-accent/45" />
              <div className="absolute inset-24 rounded-full bg-primary/20 blur-3xl" />
              <div className="hero-float absolute left-1/2 top-1/2 grid size-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-3xl border border-hero-border bg-hero-surface/90 text-primary shadow-2xl backdrop-blur-sm">
                <Code2 className="size-14" strokeWidth={1.2} aria-hidden="true" />
              </div>
              <div className="hero-float absolute left-0 top-12 inline-flex items-center gap-3 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-xl">
                <Code2 className="size-5" aria-hidden="true" /> Web development
              </div>
              <div className="hero-float hero-float-late absolute right-0 top-1/2 inline-flex -translate-y-1/2 items-center gap-3 rounded-full bg-accent px-5 py-3 text-sm font-bold text-accent-foreground shadow-xl">
                <Smartphone className="size-5" aria-hidden="true" /> App development
              </div>
              <div className="hero-float absolute bottom-10 left-4 inline-flex items-center gap-3 rounded-full bg-background px-5 py-3 text-sm font-bold text-foreground shadow-xl">
                <Megaphone className="size-5 text-primary" aria-hidden="true" /> Digital marketing
              </div>
              <span className="absolute right-10 top-6 size-3 rounded-full bg-accent shadow-lg" />
              <span className="absolute bottom-8 right-12 size-2 rounded-full bg-primary shadow-lg" />
            </div>
          </div>
        </Container>

        <a className="absolute bottom-5 right-6 hidden items-center gap-2 text-xs font-semibold uppercase tracking-widest text-hero-muted transition hover:text-hero-foreground sm:inline-flex" href="#services">
          Scroll to explore <ArrowDownRight className="size-4" aria-hidden="true" />
        </a>
      </section>

      <section className="bg-background py-16 sm:py-20 lg:py-24 2xl:py-32" id="services">
        <Container>
          <Reveal className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">01 / What we do</p>
              <h2 className="mt-4 max-w-3xl font-display text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl 2xl:text-6xl">
                Build. Launch. Grow.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground md:col-span-5">
              Practical development and marketing for local businesses and growing teams across India.
            </p>
          </Reveal>

          <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-12">
            <Reveal className="h-full lg:col-span-7">
              <article className="group relative isolate flex h-full min-h-96 flex-col overflow-hidden rounded-3xl bg-primary p-7 text-primary-foreground shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-10 2xl:p-12">
                <div className="absolute -right-20 -top-20 size-80 rounded-full border border-primary-foreground/20 transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute right-10 top-10 size-52 rounded-full border border-dashed border-accent/60 transition-transform duration-700 group-hover:rotate-12" />
                <Code2 className="absolute right-16 top-16 z-0 size-24 text-primary-foreground/20 transition-transform duration-500 group-hover:-rotate-6 sm:size-32" strokeWidth={1} aria-hidden="true" />
                <div className="relative z-10 flex items-center justify-between gap-4">
                  <span className="rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-2 text-xs font-bold uppercase tracking-widest">01 / Build</span>
                  <span className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">Web &amp; e-commerce</span>
                </div>
                <div className="relative z-10 mt-auto max-w-2xl pt-16">
                  <h3 className="font-display text-balance text-3xl font-semibold leading-tight sm:text-4xl 2xl:text-5xl">Web development</h3>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
                    Responsive, accessible websites, online stores and web apps, built around your customers and your day-to-day.
                  </p>
                  <ul className="mt-7 flex flex-wrap gap-2">
                    {["Business websites", "Online stores", "Web apps"].map((item) => (
                      <li className="inline-flex items-center gap-2 rounded-full bg-background/15 px-4 py-2 text-sm font-semibold" key={item}>
                        <Check className="size-4 text-accent" aria-hidden="true" /> {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-7 flex items-center gap-2 text-sm font-semibold text-primary-foreground/80">
                    Plan <ArrowRight className="size-4 text-accent" /> Design <ArrowRight className="size-4 text-accent" /> Develop <ArrowRight className="size-4 text-accent" /> Launch
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal className="h-full lg:col-span-5">
              <article className="group relative isolate flex h-full min-h-96 flex-col overflow-hidden rounded-3xl bg-accent p-7 text-accent-foreground shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9 2xl:p-12">
                <div className="absolute -right-10 -top-10 size-52 rounded-full bg-primary/35 transition-transform duration-700 group-hover:scale-110" />
                <div className="relative z-10 flex items-center justify-between gap-4">
                  <span className="rounded-full border border-accent-foreground/20 bg-background/30 px-4 py-2 text-xs font-bold uppercase tracking-widest">02 / Create</span>
                  <Smartphone className="size-8 text-primary transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <div className="relative z-10 mt-auto pt-16">
                  <h3 className="font-display text-balance text-3xl font-semibold leading-tight sm:text-4xl 2xl:text-5xl">App development</h3>
                  <p className="mt-4 text-base leading-relaxed sm:text-lg">
                    Plan, design and build Android and iOS apps, from the first screen through app store submission.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full bg-accent-foreground px-4 py-2 text-sm font-semibold text-background"><Smartphone className="size-4" /> Android</span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-accent-foreground px-4 py-2 text-sm font-semibold text-background"><Activity className="size-4" /> iOS</span>
                  </div>
                </div>
                <span className="absolute bottom-20 right-5 select-none font-display text-9xl font-bold leading-none text-accent-foreground/10" aria-hidden="true">02</span>
              </article>
            </Reveal>

            <Reveal className="lg:col-span-12">
              <article className="relative isolate overflow-hidden rounded-3xl bg-hero p-7 text-hero-foreground shadow-xl sm:p-10 2xl:p-12">
                <div className="absolute -right-16 -top-20 size-72 rounded-full bg-primary/20 blur-3xl" />
                <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-center">
                  <div className="lg:col-span-4">
                    <span className="inline-flex items-center gap-2 rounded-full border border-hero-border bg-hero-surface px-4 py-2 text-xs font-bold uppercase tracking-widest text-accent">03 / Reach</span>
                    <h3 className="mt-5 font-display text-balance text-3xl font-semibold leading-tight sm:text-4xl 2xl:text-5xl">Digital marketing</h3>
                    <p className="mt-4 max-w-md text-base leading-relaxed text-hero-muted sm:text-lg">
                      Make it easier to find you, understand you and choose you.
                    </p>
                  </div>
                  <div className="grid items-stretch gap-3 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
                    {marketingServices.map(({ title, detail, icon: Icon }) => (
                      <div className="h-full rounded-2xl border border-hero-border bg-hero-surface/70 p-4 transition duration-300 hover:-translate-y-1 hover:border-primary/60" key={title}>
                        <Icon className="size-6 text-primary" strokeWidth={1.8} aria-hidden="true" />
                        <h4 className="mt-5 font-display text-lg font-semibold">{title}</h4>
                        <p className="mt-2 text-sm leading-relaxed text-hero-muted">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-secondary py-16 sm:py-20 lg:py-24 2xl:py-32" id="process">
        <Container>
          <Reveal className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">02 / How we work</p>
              <h2 className="mt-4 max-w-3xl font-display text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl 2xl:text-6xl">
                Idea to launch.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground md:col-span-5">
              You see the steps, share feedback along the way and know what comes next.
            </p>
          </Reveal>

          <ol className="mt-12 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map(({ number, title, detail, icon: Icon }) => (
              <li className="h-full" key={number}>
                <Reveal className="h-full">
                  <div className="group flex h-full min-h-72 flex-col rounded-3xl border border-border bg-card p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7 2xl:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <span className="font-display text-5xl font-semibold leading-none text-primary">{number}</span>
                      <span className="grid size-11 place-items-center rounded-2xl bg-accent text-accent-foreground transition-transform duration-300 group-hover:rotate-6">
                        <Icon className="size-5" strokeWidth={1.8} aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 font-display text-2xl font-semibold">{title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">{detail}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-background py-16 sm:py-20 lg:py-24 2xl:py-32" id="work">
        <Container>
          <Reveal className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">03 / Project examples</p>
              <h2 className="mt-4 max-w-3xl font-display text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl 2xl:text-6xl">
                Websites, stores & apps.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground md:col-span-5">
              Explore examples of a business website, an online store and a mobile app. Each is an illustrative concept, not client work or a case study.
            </p>
          </Reveal>

          <BrandRail />

          <div className="mt-8 grid items-stretch gap-5 lg:grid-cols-12">
            {projects.map((project) => (
              <Reveal
                className={project.layout === "feature" ? "h-full lg:col-span-7" : project.layout === "side" ? "h-full lg:col-span-5" : "h-full lg:col-span-12"}
                key={project.brand}
              >
                <article className={`project-card group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${project.layout === "wide" ? "lg:grid lg:grid-cols-12" : ""}`}>
                  <div className={`relative h-64 overflow-hidden sm:h-72 ${project.layout === "wide" ? "lg:col-span-7 lg:h-80 2xl:h-96" : "2xl:h-80"}`}>
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 55vw"
                      className="project-art object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-foreground/70 via-foreground/5 to-transparent" />
                    <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-background/95 px-4 py-2 text-xs font-bold uppercase tracking-wider text-foreground shadow-md">
                      <Sparkles className="size-4 text-primary" aria-hidden="true" /> Concept project
                    </span>
                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-background">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-background/80">{project.category}</p>
                        <p className="mt-2 font-display text-2xl font-semibold sm:text-3xl">{project.brand}</p>
                      </div>
                      <span className="grid size-11 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground transition-transform duration-300 group-hover:rotate-45">
                        <ArrowUpRight className="size-5" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                  <div className={`flex flex-1 flex-col justify-center p-6 sm:p-7 ${project.layout === "wide" ? "lg:col-span-5 lg:p-10" : ""}`}>
                    <p className="text-xs font-bold uppercase tracking-widest text-primary">{project.category}</p>
                    <h3 className="mt-3 font-display text-balance text-xl font-semibold leading-tight sm:text-2xl lg:text-3xl">{project.title}</h3>
                    <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">{project.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-hero py-16 text-hero-foreground sm:py-20 lg:py-24 2xl:py-32" id="faq">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <p className="text-xs font-bold uppercase tracking-widest text-accent sm:text-sm">04 / Good to know</p>
            <h2 className="mt-4 font-display text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl 2xl:text-6xl">Quick answers.</h2>
            <p className="mt-5 text-lg leading-relaxed text-hero-muted">
              Have a different question? Tell us what you&apos;re planning and we&apos;ll take it from there.
            </p>
            <a className="mt-7 inline-flex items-center gap-2 font-semibold text-accent transition hover:gap-3" href="#contact">
              Start a conversation <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </Reveal>

          <div className="space-y-3 lg:col-span-8">
            {commonQuestions.map(({ question, answer }, index) => (
              <Reveal key={question}>
                <details className="group rounded-2xl border border-hero-border bg-hero-surface/80 p-5 open:bg-hero-surface sm:p-6" open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-lg font-semibold sm:text-xl">
                    {question}
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-open:rotate-45">
                      <Plus className="size-5" aria-hidden="true" />
                    </span>
                  </summary>
                  <p className="mt-4 max-w-2xl pr-10 text-base leading-relaxed text-hero-muted">{answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden bg-primary py-16 text-primary-foreground sm:py-20 lg:py-28 2xl:py-32" id="contact">
        <div className="absolute -right-24 -top-32 size-96 rounded-full border border-primary-foreground/20" />
        <div className="absolute -right-12 -top-20 size-72 rounded-full border border-dashed border-accent/65" />
        <Container className="relative z-10 grid gap-10 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-8">
            <p className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-2 text-xs font-bold uppercase tracking-widest">Ready when you are <span className="size-2 rounded-full bg-accent" /></p>
            <h2 className="mt-5 max-w-4xl font-display text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl 2xl:text-6xl">
              Let&apos;s build something useful.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/85">
              Tell us about the website, app or marketing challenge you&apos;re working on.
            </p>
          </Reveal>
          <Reveal className="flex flex-col items-center gap-3 lg:col-span-4 lg:items-end lg:justify-self-end">
            <WhatsAppButton href={whatsappHref} />
            <p className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/85">
              <WhatsAppIcon className="size-4 text-whatsapp" />
              WhatsApp: {whatsappDisplayNumber}
            </p>
          </Reveal>
        </Container>
      </section>

      <footer className="bg-background py-8 sm:py-10 2xl:py-12">
        <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <BrandMark tone="dark" />
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-muted-foreground">
            <a className="transition hover:text-primary" href="#services">Services</a>
            <a className="transition hover:text-primary" href="#process">How we work</a>
            <a className="transition hover:text-primary" href="#work">Concepts</a>
            <a className="transition hover:text-primary" href="#faq">FAQ</a>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Slash Logic</p>
        </Container>
      </footer>
    </main>
  );
}
