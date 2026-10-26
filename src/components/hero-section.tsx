import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Monitor } from "lucide-react";
import { Container } from "@/components/container";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate min-h-svh overflow-hidden bg-background text-foreground"
      id="top"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-background via-background to-secondary/60" />
      <div className="pointer-events-none absolute -left-32 top-12 -z-10 size-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-0 -z-10 size-80 rounded-full bg-accent/50 blur-3xl" />

      <Container className="flex min-h-svh items-center pb-10 pt-24 sm:pb-12 sm:pt-28 lg:pb-16 lg:pt-20">
        <div className="grid w-full items-center gap-5 md:grid-cols-12 lg:gap-6 2xl:gap-8">
          <div className="relative z-10 max-w-2xl md:col-span-7 lg:col-span-6">
            <p className="mb-5 inline-flex items-center gap-3 rounded-full border border-border bg-card/90 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary shadow-sm sm:mb-6 sm:text-sm">
              <span className="size-2 rounded-full bg-primary" />
              Websites · apps · digital marketing
            </p>
            <h1
              className="font-display text-balance text-2xl font-semibold leading-none tracking-tight sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
              id="hero-title"
            >
              <span className="block">Make your business</span>
              <span className="block text-primary">work better online.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg xl:text-xl">
              We build websites, online stores and apps, then help the right customers find you through SEO and digital marketing.
            </p>
            <div className="mt-7 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-primary px-6 py-3 text-base font-bold text-primary-foreground shadow-lg transition motion-reduce:transition-none hover:-translate-y-1 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-ring sm:w-auto"
                href="#contact"
              >
                Start a project
                <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
              <a
                className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full border border-border bg-card/80 px-6 py-3 text-base font-semibold text-foreground shadow-sm transition motion-reduce:transition-none hover:-translate-y-0.5 hover:bg-card hover:shadow-md focus-visible:ring-2 focus-visible:ring-ring sm:w-auto"
                href="#services"
              >
                Explore services
                <ArrowDownRight className="size-5 transition-transform group-hover:translate-y-1 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto hidden w-full max-w-sm md:col-span-5 md:block lg:col-span-6 lg:max-w-none" aria-hidden="true">
            <Image
              src="/hero-interface-art.webp"
              alt=""
              width={650}
              height={560}
              priority
              sizes="(max-width: 1023px) 40vw, 50vw"
              className="block h-auto w-full"
            />
            <span className="absolute bottom-4 right-2 inline-flex items-center gap-2 rounded-full border border-border bg-card/95 px-3 py-2 text-xs font-semibold text-muted-foreground shadow-md sm:bottom-6 sm:right-4">
              <Monitor className="size-4 text-primary" />
              Illustrative interface
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
