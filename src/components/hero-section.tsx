import Image from "next/image";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/container";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate min-h-svh overflow-hidden bg-hero text-hero-foreground"
      id="top"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-hero via-hero to-primary/20" />
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

      <Container className="flex min-h-svh items-center pb-12 pt-24 sm:pb-16 sm:pt-28 lg:pt-20 2xl:pb-20 2xl:pt-24">
        <div className="grid w-full items-center gap-8 md:grid-cols-12 lg:gap-6 2xl:gap-10">
          <div className="relative z-10 max-w-2xl md:col-span-8 lg:col-span-6">
            <p className="hero-enter mb-5 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-hero-muted sm:mb-6 sm:text-sm">
              <span className="h-px w-8 bg-primary" />
              Websites / apps / digital marketing
            </p>
            <h1
              className="font-display text-balance text-3xl font-semibold leading-none tracking-tight sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
              id="hero-title"
            >
              <span className="hero-enter hero-enter-delay-1 block">Websites to apps.</span>
              <span className="hero-enter hero-enter-delay-2 block text-accent">Built for business.</span>
            </h1>
            <p className="hero-enter hero-enter-delay-3 mt-5 max-w-xl text-base leading-relaxed text-hero-muted sm:mt-6 sm:text-lg lg:text-xl">
              Websites, online stores, custom software, mobile apps and digital marketing for businesses across India.
            </p>
            <div className="hero-enter hero-enter-delay-4 mt-7 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-primary px-6 py-3 text-base font-bold text-primary-foreground shadow-lg shadow-primary/20 transition motion-reduce:transition-none hover:-translate-y-1 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-ring sm:w-auto"
                href="#contact"
              >
                Start a project
                <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
              <a
                className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full border border-hero-border bg-hero-surface/55 px-6 py-3 text-base font-semibold text-hero-foreground shadow-lg shadow-hero/10 backdrop-blur-md transition motion-reduce:transition-none hover:-translate-y-0.5 hover:bg-hero-surface focus-visible:ring-2 focus-visible:ring-ring sm:w-auto"
                href="#services"
              >
                Explore services
                <ArrowDownRight className="size-5 transition-transform group-hover:translate-y-1 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
