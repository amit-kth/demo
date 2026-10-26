import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Code2 } from "lucide-react";
import { Container } from "@/components/container";

export function HeroSection() {
  return (
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
          <div className="relative z-20 max-w-3xl lg:col-span-7">
            <h1
              className="font-display text-balance text-2xl font-semibold leading-none tracking-tight sm:text-3xl md:text-4xl lg:text-4xl xl:text-6xl 2xl:text-7xl"
              id="hero-title"
            >
              <span className="hero-enter hero-enter-delay-1 block">Digital development</span>
              <span className="hero-enter hero-enter-delay-2 block text-accent">for growing businesses.</span>
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
              <a
                className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full border border-hero-border bg-hero-surface/40 px-6 py-3 text-base font-semibold text-hero-foreground backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-hero-surface/75 focus-visible:ring-2 focus-visible:ring-ring sm:w-auto"
                href="#work"
              >
                See our work
                <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="relative hidden min-h-96 lg:col-span-5 lg:block" aria-hidden="true">
            <div className="absolute inset-8 rounded-full bg-primary/15 blur-3xl" />
            <div className="hero-orbit absolute inset-3 rounded-full border border-primary-foreground/15" />
            <div className="hero-orbit hero-orbit-reverse absolute inset-12 rounded-full border border-dashed border-accent/35" />

            <div className="absolute left-0 top-8 z-10 w-full max-w-lg -rotate-2 transition-transform duration-500 motion-reduce:transition-none hover:-rotate-1">
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-hero-border bg-card shadow-2xl shadow-primary/20">
                <Image
                  src="/concept-juniper.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 1279px) 36vw, 560px"
                  className="object-cover"
                />
                <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-background/95 px-3 py-2 text-xs font-bold text-foreground shadow-md">
                  <span className="size-2 rounded-full bg-primary" />
                  Website concept
                </span>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 z-20 w-40 rotate-3 rounded-3xl border border-hero-border bg-card p-2 shadow-2xl transition-transform duration-500 motion-reduce:transition-none hover:rotate-1 sm:w-44 xl:w-48">
              <div className="relative h-64 overflow-hidden rounded-2xl sm:h-72 xl:h-80">
                <Image
                  src="/concept-forma.jpg"
                  alt=""
                  fill
                  sizes="192px"
                  className="object-cover"
                />
              </div>
              <span className="absolute -left-6 bottom-6 inline-flex items-center gap-2 rounded-full border border-hero-border bg-hero-surface/95 px-4 py-3 text-xs font-bold text-hero-foreground shadow-xl">
                <Code2 className="size-4 text-accent" /> App concept
              </span>
            </div>

            <div className="absolute bottom-8 left-0 z-30 inline-flex items-center gap-3 rounded-2xl border border-hero-border bg-hero-surface/90 p-3 shadow-xl backdrop-blur-sm">
              <span className="grid size-10 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Code2 className="size-5" strokeWidth={1.8} />
              </span>
              <span className="pr-2">
                <span className="block text-xs font-bold uppercase tracking-widest text-hero-muted">From idea</span>
                <span className="mt-1 block font-display text-sm font-semibold">to live product</span>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
