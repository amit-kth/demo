import { pageMetadata } from "@/lib/page-metadata";
import Link from "next/link";
import { ArrowUpRight, ClipboardList, MessageSquareText } from "lucide-react";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { whatsappHref } from "@/lib/site-config";

export const metadata = pageMetadata({
  title: "Get a Project Quote | Slash Logic",
  description: "Prepare a short project outline for a website, software, app, AI chatbot or digital marketing enquiry.",
  canonical: "/get-a-quote",
});

const outlinePrompts = [
  { title: "The goal", detail: "What would you like the project to help people do?", icon: ClipboardList },
  { title: "The people", detail: "Who will use it, and what do they need from it?", icon: MessageSquareText },
  { title: "The context", detail: "What exists today, and what feels difficult or missing?", icon: ArrowUpRight },
  { title: "The next step", detail: "Are there any timing, access or content considerations to discuss?", icon: MessageSquareText },
];

export default function GetAQuotePage() {
  return (
    <main className="bg-background text-foreground">
      <PageIntro
        eyebrow="Get a quote / Project outline"
        title="A useful estimate begins with a useful brief."
        description="Share the problem, who it affects and the kind of work you have in mind."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Get a quote" }]}
        sideNote={{ label: "A simple start", text: "Use WhatsApp to share a short outline and discuss the next step." }}
        image={{ src: "/commerce-workflow.jpg", alt: "A retailer using a laptop to manage a product order", label: "Illustrative commerce workflow", tint: "mint" }}
      />

      <section className="py-14 sm:py-18 lg:py-24 2xl:py-32">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Helpful context to share</p>
            <h2 className="mt-4 max-w-2xl font-display text-balance text-3xl font-semibold leading-tight sm:text-4xl">You can start with what you know.</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">A complete specification is not required. A short outline can make the first discussion more focused.</p>
            <ol className="mt-8 divide-y divide-border border-y border-border">
              {outlinePrompts.map((prompt, index) => {
                const Icon = prompt.icon;
                return (
                  <li className="flex gap-4 py-5 sm:gap-5 sm:py-6" key={prompt.title}>
                    <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-secondary text-primary"><Icon className="size-5" aria-hidden="true" /></span>
                    <div className="min-w-0 flex-1 flex items-start justify-between gap-4">
                      <div><h3 className="font-display text-lg font-semibold sm:text-xl">{prompt.title}</h3><p className="mt-1 text-sm leading-relaxed text-muted-foreground sm:text-base">{prompt.detail}</p></div>
                      <span className="font-display text-sm font-semibold text-primary/65">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          <aside className="relative isolate flex flex-col justify-between overflow-hidden rounded-3xl bg-hero p-7 text-hero-foreground sm:p-9 lg:col-span-5 lg:p-10">
            <div aria-hidden="true" className="absolute -right-14 -top-20 -z-10 size-72 rounded-full border border-hero-border" />
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-accent">Ready to share the outline?</p>
              <h2 className="mt-4 font-display text-2xl font-semibold leading-tight sm:text-3xl">Choose the conversation that works for you.</h2>
              <p className="mt-4 text-sm leading-relaxed text-hero-muted sm:text-base">Use the existing WhatsApp contact route to send a short description or ask a question. Please avoid sending confidential or sensitive information in an initial message.</p>
            </div>
            <a className="group mt-10 inline-flex min-h-14 items-center justify-center gap-3 self-start rounded-full bg-whatsapp px-6 py-3 text-base font-bold text-whatsapp-foreground shadow-md transition hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 hover:brightness-110 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" href={whatsappHref} target="_blank" rel="noreferrer">
              <WhatsAppIcon className="size-5" /> Start on WhatsApp <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 motion-reduce:group-hover:translate-y-0 group-hover:translate-x-0.5 motion-reduce:group-hover:translate-x-0" aria-hidden="true" />
            </a>
          </aside>
        </Container>
        <Container className="mt-7">
          <Link className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3" href="/services">Not sure which service fits? Explore services <ArrowUpRight className="size-4" aria-hidden="true" /></Link>
        </Container>
      </section>
    </main>
  );
}
