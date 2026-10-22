import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUpRight, Megaphone, Monitor, Smartphone } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { whatsappHref } from "@/lib/site-config";

const services = [
  {
    number: "01",
    title: "Websites & online stores",
    description: "Business websites, e-commerce stores, and web apps.",
    icon: Monitor,
  },
  {
    number: "02",
    title: "Mobile apps",
    description: "Apps for Android and iPhone.",
    icon: Smartphone,
  },
  {
    number: "03",
    title: "Digital marketing",
    description: "SEO, social media, paid ads, and content marketing.",
    icon: Megaphone,
  },
];

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <section className="relative isolate overflow-hidden bg-hero text-hero-foreground" id="top">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-hero to-hero-surface" />
        <div className="pointer-events-none absolute -right-24 top-1/4 -z-10 size-96 rounded-full bg-primary/15 blur-3xl" />
        <SiteHeader />

        <Container className="grid min-h-screen items-center gap-12 pb-16 pt-36 lg:grid-cols-2 lg:gap-16 lg:pb-20">
          <Reveal className="max-w-2xl">
            <p className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-hero-muted">
              <span className="size-2 rounded-full bg-primary" />
              Slash Logic <span className="text-primary">/</span> Digital services
            </p>
            <h1 className="text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
              Websites, apps &amp; marketing for your business.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-hero-muted sm:text-xl">
              From local businesses to established companies, we help you choose the digital services that fit your needs.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                className="group inline-flex min-h-14 items-center gap-3 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-ring"
                href="#services"
              >
                View our services
                <ArrowDown className="size-5 transition group-hover:translate-y-1" aria-hidden="true" />
              </a>
              <a
                className="group inline-flex min-h-14 items-center gap-2 rounded-full px-5 py-3 text-base font-medium text-hero-foreground transition hover:bg-hero-surface"
                href="#contact"
              >
                Talk to us
                <ArrowUpRight className="size-5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            </div>
            <p className="mt-8 text-sm text-hero-muted">
              Websites <span className="px-2 text-primary">/</span> Apps <span className="px-2 text-primary">/</span> Digital marketing
            </p>
          </Reveal>

          <Reveal className="group relative mx-auto w-full max-w-2xl" >
            <div className="overflow-hidden rounded-3xl border border-hero-border bg-hero-surface shadow-2xl">
              <Image
                src="/slash-logic-hero.png"
                alt="A sculptural blue glass slash with fine orbital lines"
                width={1264}
                height={848}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full object-cover transition duration-700 group-hover:scale-105 motion-reduce:transition-none"
              />
            </div>
            <div className="mt-4 flex items-center justify-between gap-4 text-sm text-hero-muted">
              <span>One team for your digital needs.</span>
              <span className="hidden font-medium text-hero-foreground sm:inline">Slash Logic</span>
            </div>
          </Reveal>

          <a className="col-span-full mx-auto mt-4 inline-flex items-center gap-3 text-sm text-hero-muted transition hover:text-hero-foreground lg:hidden" href="#services">
            Scroll to explore <ArrowDown className="size-4" aria-hidden="true" />
          </a>
        </Container>
      </section>

      <section className="bg-background py-24 sm:py-32" id="services">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <Reveal className="lg:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our services</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                What can we help you build?
              </h2>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
                Choose one service or bring us the whole project. We can help with the website, the app, and the marketing.
              </p>
            </Reveal>

            <div className="lg:col-span-3">
              <div className="divide-y divide-border border-y border-border">
                {services.map(({ number, title, description, icon: Icon }) => (
                  <Reveal key={number}>
                    <article className="group flex items-start gap-5 py-7 sm:items-center sm:gap-6 sm:py-8">
                      <span className="grid size-14 place-items-center rounded-2xl bg-accent text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="size-6" strokeWidth={1.8} aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{title}</h3>
                        <p className="mt-2 text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
                      </div>
                      <span className="hidden shrink-0 text-sm font-semibold text-primary sm:ml-auto sm:block">{number}</span>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-secondary/60 py-24 sm:py-32" id="work">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 md:items-end md:gap-12">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our work</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Client projects, coming soon.</h2>
            </Reveal>
            <Reveal>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                This space is ready for past clients and project details. We’ll add the real work when you share it.
              </p>
            </Reveal>
          </div>

          <Reveal className="mt-10">
            <div className="grid overflow-hidden rounded-3xl border border-border bg-card shadow-xl md:grid-cols-2">
              <div className="relative flex min-h-72 items-center justify-center overflow-hidden bg-hero text-hero-foreground sm:min-h-96">
                <div className="absolute inset-0 bg-linear-to-br from-hero to-hero-surface" />
                <span className="relative text-9xl font-light leading-none text-primary/50">/</span>
                <span className="absolute bottom-6 left-6 text-sm font-medium text-hero-muted">Slash Logic / Work archive</span>
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">Portfolio space</p>
                <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Your work goes here.</h3>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Past clients, project images, and case studies can be added to this section later.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-hero py-24 text-hero-foreground sm:py-32" id="contact">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Get in touch</p>
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
                <span className="grid size-12 place-items-center rounded-full bg-primary text-primary-foreground">
                  <ArrowRight className="size-5" aria-hidden="true" />
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
          <p className="text-sm text-muted-foreground">Websites · Apps · Digital marketing</p>
          <span className="text-sm text-muted-foreground">© {new Date().getFullYear()} Slash Logic</span>
        </Container>
      </footer>
    </main>
  );
}
