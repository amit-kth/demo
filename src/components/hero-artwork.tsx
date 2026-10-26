import { Activity, ArrowUpRight, Check, Code2, Globe2, Search, Smartphone } from "lucide-react";

export function HeroArtwork() {
  return (
    <div className="hero-art group relative isolate mx-auto aspect-square w-full max-w-xl" aria-hidden="true">
      <div className="hero-ambient absolute inset-12 rounded-full bg-primary/20 blur-3xl" />

      <svg className="pointer-events-none absolute inset-0 size-full overflow-visible" viewBox="0 0 600 600" fill="none">
        <path
          d="M478 42 280 558"
          className="text-primary/10"
          stroke="currentColor"
          strokeWidth="72"
          strokeLinecap="round"
        />
        <path
          d="M82 172C196 74 354 116 462 300"
          className="hero-art-route text-primary/70"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="8 10"
        />
        <circle cx="82" cy="172" r="5" className="text-accent" fill="currentColor" />
        <circle cx="462" cy="300" r="5" className="text-primary" fill="currentColor" />
      </svg>

      <div className="hero-art-float absolute left-0 top-10 z-10 w-10/12 transition-transform duration-500 motion-reduce:transition-none group-hover:-translate-y-1 group-hover:-rotate-1">
        <div className="overflow-hidden rounded-3xl border border-hero-border bg-hero-surface/90 shadow-2xl shadow-primary/20 backdrop-blur-xl">
          <div className="flex items-center gap-2 border-b border-hero-border bg-hero-surface/70 px-4 py-3">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="size-2 rounded-full bg-primary/80" />
              <span className="size-2 rounded-full bg-accent/80" />
              <span className="size-2 rounded-full bg-hero-muted/50" />
            </div>
            <div className="ml-3 flex h-6 flex-1 items-center gap-2 rounded-full border border-hero-border bg-hero/40 px-3">
              <Globe2 className="size-3 text-hero-muted" />
              <span className="h-1.5 w-24 rounded-full bg-hero-muted/40" />
            </div>
            <span className="grid size-7 place-items-center rounded-full bg-primary/15 text-primary">
              <ArrowUpRight className="size-4" />
            </span>
          </div>

          <div className="bg-background p-3 sm:p-4">
            <div className="flex items-center gap-2">
              <span className="grid size-8 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Code2 className="size-4" />
              </span>
              <span className="h-2 w-16 rounded-full bg-foreground/70" />
              <div className="ml-auto flex gap-2">
                <span className="h-2 w-8 rounded-full bg-foreground/15" />
                <span className="h-2 w-8 rounded-full bg-foreground/15" />
              </div>
            </div>

            <div className="mt-3 grid grid-cols-5 gap-3">
              <div className="col-span-3 rounded-2xl bg-primary p-3 text-primary-foreground sm:p-4">
                <span className="text-xs font-bold uppercase tracking-widest">Web / commerce</span>
                <div className="mt-4 h-3 w-4/5 rounded-full bg-primary-foreground/90" />
                <div className="mt-2 h-2 w-3/5 rounded-full bg-primary-foreground/60" />
                <div className="mt-4 flex items-end gap-2">
                  <span className="h-10 flex-1 rounded-xl bg-primary-foreground/20" />
                  <span className="h-14 w-12 rounded-xl bg-primary-foreground/30" />
                  <span className="h-8 w-10 rounded-xl bg-hero/25" />
                </div>
              </div>

              <div className="col-span-2 rounded-2xl bg-secondary p-3">
                <div className="flex items-center justify-between">
                  <span className="grid size-8 place-items-center rounded-xl bg-card text-primary">
                    <Search className="size-4" />
                  </span>
                  <span className="text-xs font-semibold text-muted-foreground">Reach</span>
                </div>
                <svg className="mt-3 h-12 w-full text-primary" viewBox="0 0 120 44" fill="none">
                  <path d="M3 36 24 28 42 31 61 14 79 22 101 7 117 11" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 42H117" stroke="currentColor" strokeOpacity=".15" />
                </svg>
              </div>

              <div className="col-span-2 rounded-2xl border border-border bg-card p-3">
                <div className="flex items-center gap-2">
                  <span className="grid size-7 place-items-center rounded-lg bg-secondary text-primary">
                    <Check className="size-4" />
                  </span>
                  <span className="h-2 w-12 rounded-full bg-foreground/30" />
                </div>
                <div className="mt-3 flex gap-1.5">
                  <span className="size-7 rounded-lg bg-primary/10" />
                  <span className="size-7 rounded-lg bg-secondary" />
                  <span className="size-7 rounded-lg bg-accent" />
                </div>
              </div>

              <div className="col-span-3 rounded-2xl border border-border bg-card p-3">
                <div className="flex items-center gap-2">
                  <span className="grid size-7 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Activity className="size-4" />
                  </span>
                  <span className="h-2 w-16 rounded-full bg-foreground/30" />
                  <span className="ml-auto h-2 w-8 rounded-full bg-primary/30" />
                </div>
                <svg className="mt-2 h-8 w-full text-primary" viewBox="0 0 180 32" fill="none">
                  <path d="M2 25C20 24 20 12 38 15S57 29 74 22 95 5 111 12 132 24 146 16 164 5 178 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-art-float-slow absolute bottom-2 right-0 z-30 w-40 transition-transform duration-500 motion-reduce:transition-none group-hover:translate-y-1 group-hover:rotate-1 sm:w-44">
        <div className="rounded-3xl border border-hero-border bg-hero-surface/90 p-2 shadow-2xl shadow-primary/20 backdrop-blur-xl">
          <div className="overflow-hidden rounded-2xl bg-background">
            <div className="bg-primary p-3 text-primary-foreground">
              <div className="flex items-center justify-between">
                <span className="grid size-7 place-items-center rounded-lg bg-primary-foreground/15">
                  <Smartphone className="size-4" />
                </span>
                <span className="h-1.5 w-12 rounded-full bg-primary-foreground/50" />
                <span className="size-2 rounded-full bg-primary-foreground/70" />
              </div>
              <div className="mt-4 h-2 w-14 rounded-full bg-primary-foreground/80" />
              <div className="mt-2 h-2 w-24 rounded-full bg-primary-foreground/45" />
            </div>
            <div className="space-y-2 p-3">
              <div className="flex items-center gap-2 rounded-xl bg-secondary p-2">
                <span className="grid size-8 place-items-center rounded-lg bg-card text-primary">
                  <Check className="size-4" />
                </span>
                <span className="flex-1">
                  <span className="block h-1.5 w-14 rounded-full bg-foreground/35" />
                  <span className="mt-1.5 block h-1.5 w-9 rounded-full bg-foreground/15" />
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <span className="h-12 rounded-xl bg-primary/10" />
                <span className="h-12 rounded-xl bg-accent" />
              </div>
              <div className="h-2 w-3/5 rounded-full bg-foreground/15" />
            </div>
          </div>
        </div>
      </div>

      <div className="hero-art-float-alt absolute right-0 top-12 z-20 hidden w-40 rounded-2xl border border-hero-border bg-hero-surface/80 p-4 shadow-xl backdrop-blur-xl lg:block sm:w-44">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-widest text-hero-muted">Digital reach</span>
          <Search className="size-4 text-accent" />
        </div>
        <div className="mt-4 flex h-12 items-end gap-1.5">
          <span className="h-5 flex-1 rounded-t-md bg-primary/35" />
          <span className="h-8 flex-1 rounded-t-md bg-primary/50" />
          <span className="h-6 flex-1 rounded-t-md bg-primary/70" />
          <span className="h-10 flex-1 rounded-t-md bg-primary" />
          <span className="h-7 flex-1 rounded-t-md bg-accent" />
        </div>
        <div className="mt-3 h-1.5 w-3/4 rounded-full bg-hero-muted/25" />
      </div>

      <div className="absolute bottom-0 left-2 z-40 inline-flex items-center gap-2 rounded-full border border-hero-border bg-hero-surface/75 px-3 py-2 text-xs font-semibold text-hero-muted shadow-lg backdrop-blur-xl">
        <span className="size-2 rounded-full bg-primary" />
        Illustrative interface system
      </div>
    </div>
  );
}
