import Image from "next/image";
import { Activity, ArrowDownRight, ArrowUpRight, Coffee, Code2, Leaf, Megaphone, Mountain, Smartphone } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { whatsappHref } from "@/lib/site-config";

const webServices = ["Business websites", "Online stores", "Web apps"];
const appServices = ["Android apps", "iOS apps"];
const marketingServices = ["SEO", "Social media", "Paid ads", "Content marketing"];

const sampleBrands = [
  { name: "JUNIPER & CO.", icon: Leaf },
  { name: "MORROW", icon: Coffee },
  { name: "FORMA", icon: Activity },
  { name: "NORTHLINE", icon: Mountain },
];

const conceptProjects = [
  { brand: "Juniper & Co.", category: "E-commerce / Home", kind: "store", title: "A thoughtful homewares store." },
  { brand: "Morrow Coffee", category: "Website / Hospitality", kind: "site", title: "A warmer welcome online." },
  { brand: "Forma", category: "Mobile app / Wellness", kind: "app", title: "Movement made easy to return to." },
] as const;

type ProjectKind = "store" | "site" | "app";

function ProjectPreview({ kind, brand }: { kind: ProjectKind; brand: string }) {
  return (
    <div
      aria-hidden="true"
      className={`relative h-64 overflow-hidden p-5 sm:h-72 ${kind === "site" ? "bg-hero" : "bg-accent"}`}
    >
      {kind === "store" && (
        <>
          <span className="absolute -right-5 -top-8 size-40 rounded-full bg-primary/15" />
          <div className="relative mx-auto flex h-full max-w-72 flex-col rounded-t-2xl border border-border bg-background p-4 shadow-xl">
            <div className="flex items-center justify-between gap-2">
              <span className="grid size-7 place-items-center rounded-full bg-secondary text-primary">
                <Leaf className="size-4" />
              </span>
              <span className="text-xs font-bold tracking-wide text-foreground">{brand}</span>
              <span className="ml-auto flex gap-1">
                <span className="size-2 rounded-full bg-border" />
                <span className="size-2 rounded-full bg-border" />
              </span>
            </div>
            <div className="mt-4 rounded-xl bg-secondary p-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">The everyday edit</p>
              <p className="mt-1 text-lg font-semibold leading-tight text-foreground">Objects for a slower home.</p>
              <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground">
                Explore collection <ArrowUpRight className="size-3" />
              </span>
            </div>
            <div className="mt-3 grid flex-1 grid-cols-2 gap-2">
              <span className="rounded-xl bg-accent" />
              <span className="rounded-xl bg-muted" />
            </div>
          </div>
        </>
      )}

      {kind === "site" && (
        <>
          <span className="absolute right-5 top-5 size-36 rounded-full bg-primary/20" />
          <div className="relative mx-auto flex h-full max-w-72 flex-col rounded-t-2xl border border-hero-border bg-hero-surface p-4 text-hero-foreground shadow-xl">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-bold tracking-wide">{brand}</span>
              <span className="rounded-full border border-hero-border px-2 py-1 text-xs text-hero-muted">MENU</span>
            </div>
            <div className="my-auto py-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">Coffee, made slowly</p>
              <p className="mt-2 text-3xl font-semibold leading-none tracking-tight">Good days<br />start here.</p>
              <span className="mt-3 inline-flex rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground">Find your cup</span>
            </div>
            <div className="flex justify-between border-t border-hero-border pt-3 text-xs text-hero-muted">
              <span>Visit</span><span>Menu</span><span>Our story</span>
            </div>
          </div>
        </>
      )}

      {kind === "app" && (
        <>
          <span className="absolute left-6 top-8 size-24 rounded-full bg-primary/15" />
          <div className="relative mx-auto flex h-full w-44 flex-col rounded-3xl border-4 border-border bg-background p-3 shadow-xl">
            <span className="mx-auto h-1 w-12 rounded-full bg-border" />
            <div className="mt-3 flex items-center justify-between gap-2">
              <span className="grid size-8 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Activity className="size-4" />
              </span>
              <span className="text-xs font-bold tracking-wide text-foreground">{brand}</span>
            </div>
            <p className="mt-3 text-sm font-semibold text-foreground">Today&apos;s movement</p>
            <div className="mt-2 rounded-xl bg-accent p-3">
              <p className="text-xs font-medium text-accent-foreground">Move at your pace</p>
              <div className="mt-3 flex h-12 items-end gap-1.5">
                <span className="h-5 flex-1 rounded-t-full bg-primary/30" />
                <span className="h-9 flex-1 rounded-t-full bg-primary/50" />
                <span className="h-7 flex-1 rounded-t-full bg-primary/40" />
                <span className="h-11 flex-1 rounded-t-full bg-primary/70" />
                <span className="h-6 flex-1 rounded-t-full bg-primary/40" />
              </div>
            </div>
            <div className="mt-2 grid flex-1 grid-cols-2 gap-2">
              <span className="rounded-xl bg-secondary" />
              <span className="rounded-xl bg-muted" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <SiteHeader />
      <section className="relative isolate min-h-svh overflow-hidden bg-hero text-hero-foreground" id="top">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/slash-logic-backdrop.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-r from-hero via-hero/85 to-hero/35" />
          <div className="absolute inset-0 bg-linear-to-t from-hero/80 via-transparent to-hero/20" />
        </div>

        <Container className="flex min-h-svh items-center pt-24 pb-8 sm:pt-28 lg:pt-24">
          <Reveal className="max-w-5xl">
            <p className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-hero-muted sm:text-base">
              <span className="size-2 rounded-full bg-primary" />
              Slash Logic <span className="text-primary">/</span> Development &amp; digital marketing
            </p>
            <h1 className="text-4xl font-semibold leading-none tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="block">Web &amp; app</span>
              <span className="block">development</span>
              <span className="block text-primary">for your business.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-hero-muted sm:mt-8 sm:text-xl">
              Websites, online stores, mobile apps, and digital marketing for local businesses and large companies alike.
            </p>
            <div className="mt-8 flex flex-wrap items-start gap-4 sm:mt-10">
              <a
                className="group inline-flex min-h-14 items-center gap-3 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-ring"
                href="#services"
              >
                Explore services
                <ArrowDownRight className="size-5 transition group-hover:translate-y-1" aria-hidden="true" />
              </a>
              <WhatsAppButton href={whatsappHref} />
            </div>
            <p className="mt-7 text-sm text-hero-muted sm:text-base">
              Website development <span className="px-2 text-primary">/</span> App development <span className="px-2 text-primary">/</span> Digital marketing
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-background py-24 sm:py-32" id="services">
        <Container>
          <Reveal className="mb-12 max-w-3xl sm:mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary sm:text-base">Our services</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Web, app &amp; marketing services.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Choose web development, app development, or digital marketing for your business.
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <article className="group relative isolate h-full min-h-80 overflow-hidden rounded-3xl bg-hero p-8 text-hero-foreground shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-10">
                <Code2 className="pointer-events-none absolute right-8 top-8 z-0 size-24 text-primary/35 transition duration-500 group-hover:rotate-6 group-hover:scale-105 sm:size-32" strokeWidth={1.2} aria-hidden="true" />
                <div className="relative z-10 flex h-full flex-col items-start">
                  <p className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-base font-bold text-primary-foreground shadow-sm sm:text-lg">
                    <span className="size-2 rounded-full bg-primary-foreground" />
                    01 / Web development
                  </p>
                  <h3 className="mt-8 text-3xl font-semibold tracking-tight sm:mt-10 sm:text-4xl lg:text-5xl">Build your online presence.</h3>
                  <ul className="mt-6 flex flex-wrap gap-3">
                    {webServices.map((service) => (
                      <li className="rounded-full border border-hero-border bg-hero-surface px-4 py-2 text-base text-hero-foreground" key={service}>{service}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>

            <Reveal className="md:col-span-5">
              <article className="group relative isolate h-full min-h-80 overflow-hidden rounded-3xl bg-accent p-8 text-accent-foreground shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-10">
                <Smartphone className="pointer-events-none absolute right-8 top-8 z-0 size-24 text-primary/25 transition duration-500 group-hover:-rotate-6 group-hover:scale-105 sm:size-32" strokeWidth={1.2} aria-hidden="true" />
                <div className="relative z-10 flex h-full flex-col items-start">
                  <p className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-base font-bold text-primary-foreground shadow-sm sm:text-lg">
                    <span className="size-2 rounded-full bg-primary-foreground" />
                    02 / App development
                  </p>
                  <h3 className="mt-8 text-3xl font-semibold tracking-tight sm:mt-10 sm:text-4xl">Apps for Android &amp; iOS.</h3>
                  <ul className="mt-6 flex flex-wrap gap-3">
                    {appServices.map((service) => (
                      <li className="rounded-full border border-accent-foreground/20 bg-background/50 px-4 py-2 text-base" key={service}>{service}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>

            <Reveal className="md:col-span-12">
              <article className="group relative isolate grid gap-8 overflow-hidden rounded-3xl border border-border bg-secondary p-8 text-secondary-foreground shadow-lg transition duration-300 hover:shadow-xl sm:p-10 lg:grid-cols-12 lg:items-center">
                <div className="relative z-10 lg:col-span-5">
                  <p className="text-sm font-semibold uppercase tracking-wider text-primary sm:text-base">03 / Digital marketing</p>
                  <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Help more people find you.</h3>
                </div>
                <div className="relative z-10 flex flex-wrap gap-3 lg:col-span-7 lg:justify-end">
                  {marketingServices.map((service) => (
                    <span className="rounded-full border border-border bg-card px-5 py-3 text-base font-medium text-card-foreground shadow-sm sm:text-lg" key={service}>{service}</span>
                  ))}
                </div>
                <Megaphone className="pointer-events-none absolute -bottom-8 right-8 z-0 size-32 text-primary/10 transition duration-500 group-hover:-rotate-6 group-hover:scale-105 sm:size-40" strokeWidth={1} aria-hidden="true" />
              </article>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-secondary/60 py-24 sm:py-32" id="work">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 md:items-end md:gap-12">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary sm:text-base">Portfolio</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Sample brands.<br className="hidden sm:block" /> Project concepts.
              </h2>
            </Reveal>
            <Reveal>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                A few example directions across online stores, business websites, and mobile apps.
              </p>
            </Reveal>
          </div>

          <Reveal className="mt-10">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <p className="mb-5 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Sample client logos</p>
              <ul className="grid grid-cols-2 gap-3 md:grid-cols-4" aria-label="Sample client logo concepts">
                {sampleBrands.map(({ name, icon: Icon }) => (
                  <li className="flex min-h-16 items-center gap-3 rounded-2xl border border-border bg-background px-4 py-3" key={name}>
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                      <Icon className="size-5" strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <span className="text-sm font-bold tracking-wide text-foreground sm:text-base">{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {conceptProjects.map((project) => (
              <Reveal className="h-full" key={project.brand}>
                <article className="group h-full overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <ProjectPreview kind={project.kind} brand={project.brand} />
                  <div className="p-6 sm:p-7">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary">{project.category}</p>
                      <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">Concept</span>
                    </div>
                    <h3 className="mt-4 text-xl font-semibold leading-tight tracking-tight text-card-foreground sm:text-2xl">{project.title}</h3>
                    <p className="mt-3 text-sm font-medium text-muted-foreground">{project.brand}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-hero py-24 text-hero-foreground sm:py-32" id="contact">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary sm:text-base">Get in touch</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Tell us what your business needs.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-hero-muted">
              Send us a message about a website, app, online store, or marketing service.
            </p>
          </Reveal>
          <Reveal>
            <div className="rounded-3xl border border-hero-border bg-hero-surface p-8 shadow-xl sm:p-10">
              <div className="flex items-center gap-3 text-hero-foreground">
                <span className="grid size-12 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground">
                  <ArrowUpRight className="size-5" aria-hidden="true" />
                </span>
                <p className="text-lg font-semibold">Start with a WhatsApp message.</p>
              </div>
              <div className="mt-6">
                <WhatsAppButton href={whatsappHref} />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <footer className="bg-background py-8">
        <Container className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <BrandMark tone="dark" />
          <p className="text-sm text-muted-foreground">Website development · App development · Digital marketing</p>
          <span className="text-sm text-muted-foreground">© {new Date().getFullYear()} Slash Logic</span>
        </Container>
      </footer>
    </main>
  );
}
