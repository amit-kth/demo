"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, BriefcaseBusiness, Code2, Menu, MessageCircle, Workflow, X } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { Container } from "@/components/container";
import { whatsappHref } from "@/lib/site-config";

const links = [
  { label: "Services", href: "#services", icon: Code2 },
  { label: "How we work", href: "#process", icon: Workflow },
  { label: "Work", href: "#work", icon: BriefcaseBusiness },
  { label: "Contact", href: "#contact", icon: MessageCircle },
];


export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const updateHeader = () => setCompact(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="h-1 bg-primary" aria-hidden="true" />
      <div className={`border-b border-border bg-background transition-shadow duration-300 ${compact ? "shadow-md" : "shadow-sm"}`}>
        <Container className={`relative flex items-center justify-between gap-4 transition-[height] duration-300 ${compact ? "h-14" : "h-16"}`}>
          <div className="flex items-center gap-3">
            <BrandMark tone="dark" />
            <span className="hidden border-l border-border pl-3 text-xs font-semibold uppercase leading-tight tracking-wider text-muted-foreground lg:block">
              Digital<br />studio
            </span>
          </div>

          <nav
            id="primary-navigation"
            aria-label="Main navigation"
            className={`${menuOpen ? "flex" : "hidden"} absolute left-4 right-4 top-full mt-2 flex-col rounded-2xl border border-border bg-background p-3 text-foreground shadow-xl md:static md:ml-auto md:mr-5 md:flex md:flex-row md:items-center md:gap-1 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
          >
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  className="group inline-flex items-center gap-2 rounded-full px-3 py-2.5 text-sm font-semibold text-muted-foreground transition hover:bg-secondary hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
                  href={link.href}
                  key={link.href}
                  onClick={closeMenu}
                >
                  <Icon className="size-4 text-primary transition-transform group-hover:-translate-y-0.5" strokeWidth={1.8} aria-hidden="true" />
                  {link.label}
                </a>
              );
            })}
            <a
              className="mt-2 inline-flex min-h-11 items-center justify-between gap-3 rounded-full bg-whatsapp px-4 py-2.5 text-sm font-bold text-whatsapp-foreground transition hover:brightness-110 md:hidden"
              href={whatsappHref ?? "#contact"}
              target={whatsappHref ? "_blank" : undefined}
              rel={whatsappHref ? "noreferrer" : undefined}
              onClick={closeMenu}
            >
              WhatsApp us <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              className="group hidden min-h-11 items-center gap-2 rounded-full bg-whatsapp px-4 py-2.5 text-sm font-bold text-whatsapp-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-md md:inline-flex"
              href={whatsappHref ?? "#contact"}
              target={whatsappHref ? "_blank" : undefined}
              rel={whatsappHref ? "noreferrer" : undefined}
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Start a conversation
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>

            <button
              className="grid size-10 place-items-center rounded-full border border-border bg-secondary text-foreground transition hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring md:hidden"
              type="button"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              aria-controls="primary-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </Container>
      </div>
    </header>
  );
}
