import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ActionLink } from "@/components/action-link";
import { BrandMark } from "@/components/brand-mark";
import { Container } from "@/components/container";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { whatsappHref } from "@/lib/site-config";

const footerGroups = [
  {
    title: "Explore",
    links: [
      { label: "About us", href: "/about-us" },
      { label: "Services", href: "/services" },
      { label: "Industries", href: "/industries" },
      { label: "Our work", href: "/portfolio" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "Insights", href: "/blog" },
      { label: "Careers", href: "/career" },
      { label: "Frequently asked questions", href: "/faq" },
      { label: "Contact", href: "/contact-us" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-hero text-hero-foreground">
      <Container className="py-14 sm:py-18 lg:py-20">
        <div className="grid gap-10 border-b border-hero-border pb-12 lg:grid-cols-12 lg:items-end lg:gap-12 lg:pb-16">
          <div className="lg:col-span-8">
            <p className="text-xs font-bold uppercase tracking-widest text-accent sm:text-sm">A good place to begin</p>
            <h2 className="mt-4 max-w-3xl font-display text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Have a project taking shape?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-hero-muted sm:text-lg">
              Start with the challenge, the idea or simply the question you are trying to answer.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
            <ActionLink href="/get-a-quote" variant="light">Plan a project</ActionLink>
            <a
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-hero-border bg-hero-surface px-5 py-3 text-sm font-semibold text-hero-foreground transition hover:border-primary/60 hover:bg-hero-surface/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon className="size-5 text-whatsapp" />
              WhatsApp
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 motion-reduce:group-hover:translate-y-0 group-hover:translate-x-0.5 motion-reduce:group-hover:translate-x-0" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="grid gap-10 py-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-12">
          <div className="sm:col-span-2 lg:col-span-5">
            <BrandMark tone="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-hero-muted">
              Websites, software, mobile apps, focused AI chatbots and digital marketing for businesses.
            </p>
          </div>
          {footerGroups.map((group) => (
            <div className="lg:col-span-3" key={group.title}>
              <h3 className="text-sm font-bold uppercase tracking-widest text-hero-foreground">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link className="inline-flex rounded-sm text-sm text-hero-muted transition hover:text-hero-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 border-t border-hero-border pt-5 text-sm text-hero-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Slash Logic</p>
          <Link className="inline-flex items-center gap-1 rounded-sm hover:text-hero-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" href="/services">
            Explore what we do <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </footer>
  );
}
