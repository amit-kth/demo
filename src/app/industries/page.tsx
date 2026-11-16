import { pageMetadata } from "@/lib/page-metadata";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ActionLink } from "@/components/action-link";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { industries } from "@/lib/site-content";

export const metadata = pageMetadata({
  title: "Industries | Slash Logic",
  description: "Explore digital product and service ideas for education, healthcare, retail, manufacturing, logistics and more.",
  canonical: "/industries",
});

export default function IndustriesPage() {
  const [featured, ...remaining] = industries;

  return (
    <main className="bg-background text-foreground">
      <PageIntro
        eyebrow="Industries / Different work, different needs"
        title="Digital ideas for different industries."
        description="Explore possible digital approaches for different kinds of work. The right scope depends on each organisation."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
        sideNote={{ label: "Starting points, not case studies", text: "Examples describe possibilities, not client engagements or results." }}
        image={{ src: "/learning-context-hero.jpg", alt: "A teacher and adult learner reviewing a tablet in a classroom", position: "right" }}
        imageLayout="background"
      />

      <section className="py-12 sm:py-16 lg:py-20 2xl:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="01 / Consider the context"
              title="Understand the work before choosing tools."
              description="The same kind of website or application can serve very different needs. Begin with the audience, process and information involved."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 lg:mt-14 lg:grid-cols-12">
            <Reveal className="h-full lg:col-span-7">
              <article className="relative isolate flex h-full min-h-72 flex-col overflow-hidden rounded-3xl bg-primary p-5 text-primary-foreground sm:min-h-96 sm:p-10">
                <div aria-hidden="true" className="absolute -right-12 -top-16 -z-10 size-72 rounded-full border border-primary-foreground/20" />
                <div className="flex items-center justify-between gap-4">
                  <span className="grid size-12 place-items-center rounded-2xl bg-primary-foreground/15"><featured.icon className="size-6" aria-hidden="true" /></span>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary-foreground/75">01 / Featured context</span>
                </div>
                <div className="mt-auto max-w-2xl pt-16">
                  <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">{featured.name}</h2>
                  <p className="mt-5 text-xs font-bold uppercase tracking-widest text-primary-foreground/65">A common challenge</p>
                  <p className="mt-2 max-w-xl text-base leading-relaxed text-primary-foreground/90 sm:text-lg">{featured.challenge}</p>
                  <div className="mt-6 border-t border-primary-foreground/20 pt-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary-foreground/65">Possible digital approaches</p>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-primary-foreground/85 sm:text-base">{featured.possibilities}</p>
                  </div>
                </div>
              </article>
            </Reveal>
            <div className="grid gap-4 lg:col-span-5">
              {remaining.slice(0, 2).map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <Reveal className="h-full" key={industry.name}>
                    <article className={`flex h-full min-h-64 flex-col rounded-3xl p-6 sm:p-8 ${index === 0 ? "bg-hero text-hero-foreground" : "border border-border bg-secondary text-foreground"}`}>
                      <div className="flex items-center justify-between gap-4">
                        <span className={`grid size-11 place-items-center rounded-2xl ${index === 0 ? "bg-hero-surface text-accent" : "bg-background text-primary"}`}><Icon className="size-5" aria-hidden="true" /></span>
                        <span className={`text-xs font-bold uppercase tracking-widest ${index === 0 ? "text-hero-muted" : "text-muted-foreground"}`}>0{index + 2} / Industry</span>
                      </div>
                      <h2 className="mt-7 font-display text-2xl font-semibold">{industry.name}</h2>
                      <p className={`mt-3 text-sm leading-relaxed ${index === 0 ? "text-hero-muted" : "text-muted-foreground"}`}>{industry.possibilities}</p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-secondary py-12 sm:py-16 lg:py-20 2xl:py-24">
        <Container>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">02 / More contexts</p>
              <h2 className="mt-4 max-w-3xl font-display text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">Find the tool that fits.</h2>
            </div>
            <p className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">Browse the remaining areas and the kinds of digital work worth exploring.</p>
          </div>
          <div className="mt-9 overflow-hidden rounded-3xl border border-border bg-background">
            <div className="hidden gap-5 border-b border-border bg-card px-6 py-4 text-xs font-bold uppercase tracking-widest text-muted-foreground lg:grid lg:grid-cols-12">
              <span className="lg:col-span-1">No.</span><span className="lg:col-span-3">Industry</span><span className="lg:col-span-4">Common challenge</span><span className="lg:col-span-4">Possible approaches</span>
            </div>
            <ol className="divide-y divide-border">
              {remaining.slice(2).map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <li className="grid gap-4 px-5 py-5 sm:px-7 lg:grid-cols-12 lg:items-start lg:gap-5 lg:px-6 lg:py-6" key={industry.name}>
                    <span className="hidden font-display text-sm font-semibold text-primary lg:col-span-1 lg:block">{String(index + 4).padStart(2, "0")}</span>
                    <div className="flex items-center gap-3 lg:col-span-3">
                      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-secondary text-primary lg:hidden"><Icon className="size-5" aria-hidden="true" /></span>
                      <h3 className="font-display text-lg font-semibold">{industry.name}</h3>
                    </div>
                    <div className="lg:col-span-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-primary lg:hidden">Challenge</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground lg:mt-0">{industry.challenge}</p>
                    </div>
                    <div className="lg:col-span-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-primary lg:hidden">Possible approaches</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground lg:mt-0">{industry.possibilities}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">Examples are discussion points. Any use involving sensitive information, regulated services or automated decisions requires project-specific review.</p>
        </Container>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <Container className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          <div><p className="text-xs font-bold uppercase tracking-widest text-primary">Find the right next step</p><h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold sm:text-3xl">Find the right service.</h2></div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ActionLink href="/services">Explore services</ActionLink>
            <Link className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold transition hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" href="/get-a-quote">Talk through a need <ArrowUpRight className="size-4" aria-hidden="true" /></Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
