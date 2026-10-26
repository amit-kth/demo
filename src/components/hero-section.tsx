import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Monitor, Smartphone } from "lucide-react";
import { Container } from "@/components/container";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate min-h-svh overflow-hidden bg-hero text-hero-foreground"
      id="top"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-hero via-hero to-primary/20" />
      <div className="pointer-events-none absolute -right-24 top-16 -z-10 size-96 rounded-full bg-primary/20 blur-3xl sm:right-0" />
      <div className="pointer-events-none absolute bottom-0 left-0 -z-10 size-80 rounded-full bg-accent/10 blur-3xl" />

      <Container className="flex min-h-svh items-center pb-12 pt-24 sm:pb-16 sm:pt-28 lg:pt-20 2xl:pb-20 2xl:pt-24">
        <div className="grid w-full items-center gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-6 2xl:gap-12">
          <div className="relative z-20 max-w-3xl lg:col-span-7">
            <h1
              className="font-display text-balance text-2xl font-semibold leading-none tracking-tight sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl"
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
            <div className="absolute inset-6 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative ml-auto w-11/12 max-w-2xl pt-6">
              <div className="relative overflow-hidden rounded-3xl border border-hero-border bg-card shadow-2xl shadow-primary/20">
                <Image
                  src="/concept-juniper.jpg"
                  alt=""
                  width={1200}
                  height={896}
                  priority
                  sizes="(max-width: 1279px) 36vw, 560px"
                  className="block h-auto w-full"
                />
                <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-background/95 px-3 py-2 text-xs font-bold text-foreground shadow-md">
                  <Monitor className="size-4 text-primary" />
                  Illustrative website concept
                </span>
              </div>

              <div className="absolute -bottom-6 -left-6 z-20 w-40 rounded-3xl border border-hero-border bg-card p-2 shadow-2xl shadow-primary/20 transition-transform duration-500 motion-reduce:transition-none hover:-translate-y-1 sm:w-44 xl:w-48">
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src="/concept-forma.jpg"
                    alt=""
                    fill
                    sizes="192px"
                    className="object-cover"
                  />
                </div>
                <span className="flex items-center gap-2 px-2 pb-1 pt-3 text-xs font-bold text-card-foreground">
                  <Smartphone className="size-4 text-primary" />
                  Illustrative app concept
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
