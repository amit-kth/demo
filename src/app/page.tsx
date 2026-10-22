import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Code2, Megaphone, Smartphone } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { whatsappHref } from "@/lib/site-config";

const webServices = ["Business websites", "Online stores", "Web apps"];
const appServices = ["Android apps", "iOS apps"];
const marketingServices = ["SEO", "Social media", "Paid ads", "Content marketing"];

export default function Home() {
  return (
    <main className="bg-background text-foreground">
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
        <SiteHeader />

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
                <Code2 className="absolute right-8 top-8 size-24 text-primary/35 transition duration-500 group-hover:rotate-6 group-hover:scale-105 sm:size-32" strokeWidth={1.2} aria-hidden="true" />
                <div className="relative flex h-full flex-col items-start">
                  <p className="text-sm font-semibold uppercase tracking-wider text-hero-muted sm:text-base">01 / Web development</p>
                  <h3 className="mt-10 text-3xl font-semibold tracking-tight sm:mt-12 sm:text-4xl lg:text-5xl">Build your online presence.</h3>
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
                <Smartphone className="absolute right-8 top-8 size-24 text-primary/40 transition duration-500 group-hover:-rotate-6 group-hover:scale-105 sm:size-32" strokeWidth={1.2} aria-hidden="true" />
                <div className="relative flex h-full flex-col items-start">
                  <p className="text-sm font-semibold uppercase tracking-wider sm:text-base">02 / App development</p>
                  <h3 className="mt-10 text-3xl font-semibold tracking-tight sm:mt-12 sm:text-4xl">Apps for Android &amp; iOS.</h3>
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
                <div className="relative lg:col-span-5">
                  <p className="text-sm font-semibold uppercase tracking-wider text-primary sm:text-base">03 / Digital marketing</p>
                  <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Help more people find you.</h3>
                </div>
                <div className="relative flex flex-wrap gap-3 lg:col-span-7 lg:justify-end">
                  {marketingServices.map((service) => (
                    <span className="rounded-full border border-border bg-card px-5 py-3 text-base font-medium text-card-foreground shadow-sm sm:text-lg" key={service}>{service}</span>
                  ))}
                </div>
                <Megaphone className="pointer-events-none absolute -bottom-8 right-8 size-32 text-primary/10 transition duration-500 group-hover:-rotate-6 group-hover:scale-105 sm:size-40" strokeWidth={1} aria-hidden="true" />
              </article>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-secondary/60 py-24 sm:py-32" id="work">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 md:items-end md:gap-12">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary sm:text-base">Our work</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Client projects, coming soon.</h2>
            </Reveal>
            <Reveal>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                This space is ready for past clients and project details. We’ll add the real work when you share it.
              </p>
            </Reveal>
          </div>

          <Reveal className="mt-10">
            <div className="relative flex min-h-72 flex-col justify-between overflow-hidden rounded-3xl bg-hero p-8 text-hero-foreground shadow-xl sm:min-h-96 sm:p-12 md:flex-row md:items-end">
              <div className="relative z-10">
                <p className="text-sm font-semibold uppercase tracking-wider text-hero-muted sm:text-base">Portfolio space</p>
                <h3 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Your work goes here.</h3>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-hero-muted sm:text-lg">
                  Past clients, project images, and case studies can be added to this section later.
                </p>
              </div>
              <span className="pointer-events-none absolute -right-5 bottom-0 text-9xl font-light leading-none text-primary/30 sm:right-8 sm:text-9xl" aria-hidden="true">/</span>
            </div>
          </Reveal>
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
