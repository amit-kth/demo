import Image from "next/image";
import { ActionLink } from "@/components/action-link";
import { Container } from "@/components/container";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate min-h-svh overflow-hidden bg-hero text-hero-foreground"
      id="top"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-hero via-hero to-primary/20" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-12 -z-10 size-96 rounded-full bg-primary/25 blur-3xl" />
      <div className="absolute inset-y-0 right-0 -z-10 hidden w-1/2 overflow-hidden lg:block">
        <Image
          src="/hero-creative-bg.webp"
          alt=""
          fill
          priority
          sizes="50vw"
          className="hero-backdrop object-cover object-right"
        />
        <div className="absolute inset-0 bg-linear-to-r from-hero/75 via-hero/20 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-hero/50 via-transparent to-hero/15" />
      </div>
      <div aria-hidden="true" className="site-noise pointer-events-none absolute inset-0 z-0 opacity-10 mix-blend-soft-light" />

      <Container className="relative z-10 flex min-h-svh items-center pb-12 pt-24 sm:pb-16 sm:pt-28 lg:pt-20 2xl:pb-20 2xl:pt-24">
        <div className="grid w-full items-center gap-8 md:grid-cols-12 lg:gap-6 2xl:gap-10">
          <div className="relative z-10 max-w-2xl md:col-span-8 lg:col-span-6">
            <p className="hero-enter mb-5 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-hero-muted sm:mb-6 sm:text-sm">
              <span className="h-px w-8 bg-primary" aria-hidden="true" />
              Web / software / apps / growth
            </p>
            <h1
              className="font-display text-balance text-3xl font-semibold leading-none tracking-tight sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
              id="hero-title"
            >
              <span className="hero-enter hero-enter-delay-1 block">Websites to apps.</span>
              <span className="hero-enter hero-enter-delay-2 block text-accent">Built for business.</span>
            </h1>
            <p className="hero-enter hero-enter-delay-3 mt-5 max-w-xl text-base leading-relaxed text-hero-muted sm:mt-6 sm:text-lg lg:text-xl">
              Websites, software, mobile apps, focused AI chatbots and digital marketing for businesses.
            </p>
            <div className="hero-enter hero-enter-delay-4 mt-7 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
              <ActionLink className="min-h-14 w-full px-6 text-base sm:w-auto" href="/get-a-quote">
                Start a project
              </ActionLink>
              <ActionLink className="min-h-14 w-full px-6 text-base sm:w-auto" href="/services" variant="hero-outline" icon="right">
                Explore services
              </ActionLink>
            </div>
          </div>
          <div aria-hidden="true" className="relative -mx-4 mt-1 h-48 overflow-hidden border-y border-hero-border sm:mx-0 sm:h-64 sm:rounded-3xl sm:border md:col-span-12 lg:hidden">
            <Image
              src="/hero-creative-bg.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-right"
            />
            <div className="absolute inset-0 bg-linear-to-t from-hero/30 via-transparent to-hero/10" />
          </div>
        </div>
      </Container>
    </section>
  );
}
