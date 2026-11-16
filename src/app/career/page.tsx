import { pageMetadata } from "@/lib/page-metadata";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BriefcaseBusiness, CircleHelp } from "lucide-react";
import { ActionLink } from "@/components/action-link";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { whatsappHref } from "@/lib/site-config";

export const metadata = pageMetadata({
  title: "Careers | Slash Logic",
  description: "Career information and future opportunities at Slash Logic.",
  canonical: "/career",
});

export default function CareerPage() {
  return (
    <main className="bg-background text-foreground">
      <PageIntro
        eyebrow="Careers / Work with us"
        title="Interested in future opportunities?"
        description="Confirmed role and application details will be shared here when available."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
        sideNote={{ label: "No active opening", text: "Please check back for confirmed opportunities." }}
        image={{ src: "/blue-glass-atmosphere.jpg", alt: "" }}
        imageLayout="background"
      />

      <section className="py-10 sm:py-16 lg:py-20 2xl:py-24">
        <Container className="grid gap-6 lg:grid-cols-12 lg:gap-10">
          <div className="relative isolate flex min-h-72 flex-col overflow-hidden rounded-3xl bg-hero p-5 text-hero-foreground sm:min-h-96 sm:p-10 lg:col-span-7 lg:p-12">
            <div aria-hidden="true" className="absolute -right-20 -top-20 -z-10 size-96 rounded-full border border-hero-border" />
            <span className="grid size-12 place-items-center rounded-2xl bg-primary text-primary-foreground"><BriefcaseBusiness className="size-6" aria-hidden="true" /></span>
            <div className="mt-auto max-w-xl pt-14">
              <p className="text-xs font-bold uppercase tracking-widest text-accent">Future opportunities</p>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">We’ll share details when roles are confirmed.</h2>
              <p className="mt-4 text-base leading-relaxed text-hero-muted sm:text-lg">When a role is ready to share, its responsibilities, required experience and application steps should be stated here clearly.</p>
            </div>
          </div>

          <aside className="flex flex-col justify-between rounded-3xl border border-border bg-secondary p-7 sm:p-9 lg:col-span-5 lg:p-10">
            <div>
              <span className="grid size-11 place-items-center rounded-2xl bg-background text-primary"><CircleHelp className="size-5" aria-hidden="true" /></span>
              <h2 className="mt-7 font-display text-2xl font-semibold leading-tight sm:text-3xl">Ask about future roles.</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">You can send a brief introduction about the kind of work you are interested in. Avoid sharing sensitive personal documents in an initial message.</p>
            </div>
            <a className="group mt-8 inline-flex min-h-12 items-center justify-center gap-2 self-start rounded-full bg-whatsapp px-5 py-3 text-sm font-bold text-whatsapp-foreground transition hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" href={whatsappHref} target="_blank" rel="noreferrer">
              <WhatsAppIcon className="size-5" /> Ask on WhatsApp <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 motion-reduce:group-hover:translate-y-0 group-hover:translate-x-0.5 motion-reduce:group-hover:translate-x-0" aria-hidden="true" />
            </a>
          </aside>
        </Container>
        <Container className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3" href="/about-us">Learn about our approach <ArrowRight className="size-4" aria-hidden="true" /></Link>
          <ActionLink href="/contact-us" variant="outline">General enquiries</ActionLink>
        </Container>
      </section>
    </main>
  );
}
