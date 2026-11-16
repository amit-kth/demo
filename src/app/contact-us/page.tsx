import { pageMetadata } from "@/lib/page-metadata";
import Link from "next/link";
import { ArrowUpRight, MessageCircle, ShieldCheck } from "lucide-react";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { whatsappHref } from "@/lib/site-config";

export const metadata = pageMetadata({
  title: "Contact Slash Logic | Start a Conversation",
  description: "Talk with Slash Logic about a website, software, mobile app, AI chatbot or digital marketing project.",
  canonical: "/contact-us",
});

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground">
      <PageIntro
        eyebrow="Contact / Start with a conversation"
        title="Tell us what you are trying to make easier."
        description="Share the challenge, the idea or the question you are working through. A first conversation can help clarify what to explore next."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        sideNote={{ label: "No long brief needed", text: "A short outline is enough to begin. Scope and details can be discussed after the first conversation." }}
      />

      <section className="py-14 sm:py-18 lg:py-24 2xl:py-32">
        <Container className="grid gap-6 lg:grid-cols-12 lg:gap-10">
          <div className="relative isolate flex min-h-96 flex-col overflow-hidden rounded-3xl bg-primary p-7 text-primary-foreground sm:p-10 lg:col-span-7 lg:p-12">
            <div aria-hidden="true" className="absolute -right-20 -top-20 -z-10 size-96 rounded-full border border-primary-foreground/20" />
            <span className="grid size-12 place-items-center rounded-2xl bg-primary-foreground/15"><MessageCircle className="size-6" aria-hidden="true" /></span>
            <div className="mt-auto max-w-xl pt-12">
              <p className="text-xs font-bold uppercase tracking-widest text-primary-foreground/70">A direct way to begin</p>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">Let&apos;s talk about the project.</h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-primary-foreground/85 sm:text-lg">Use WhatsApp to share a brief note or ask a first question. You can include a relevant public link if it helps explain the idea.</p>
              <a className="group mt-7 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-whatsapp px-6 py-3 text-base font-bold text-whatsapp-foreground shadow-md transition hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 hover:brightness-110 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-primary" href={whatsappHref} target="_blank" rel="noreferrer">
                <WhatsAppIcon className="size-5" /> Message on WhatsApp <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 motion-reduce:group-hover:translate-y-0 group-hover:translate-x-0.5 motion-reduce:group-hover:translate-x-0" aria-hidden="true" />
              </a>
            </div>
          </div>

          <aside className="flex flex-col justify-between rounded-3xl border border-border bg-secondary p-7 sm:p-9 lg:col-span-5 lg:p-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary">A useful first note</p>
              <h2 className="mt-4 max-w-sm font-display text-2xl font-semibold leading-tight sm:text-3xl">A little context goes a long way.</h2>
              <ul className="mt-7 space-y-4">
                {[
                  "What you are trying to build or improve",
                  "Who needs to use it and what they need to do",
                  "Any relevant public pages, examples or references",
                ].map((item, index) => (
                  <li className="flex items-start gap-3" key={item}>
                    <span className="mt-0.5 font-display text-sm font-semibold text-primary">0{index + 1}</span>
                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 border-t border-border pt-5">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <p className="text-xs leading-relaxed text-muted-foreground">Please avoid sending sensitive personal, financial or confidential information in an initial message.</p>
              </div>
            </div>
          </aside>
        </Container>
        <Container className="mt-7">
          <Link className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3" href="/get-a-quote">Prefer a project outline? Visit the quote page <ArrowUpRight className="size-4" aria-hidden="true" /></Link>
        </Container>
      </section>
    </main>
  );
}
