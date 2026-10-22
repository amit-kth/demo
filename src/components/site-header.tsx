"use client";

import { useState } from "react";
import { ArrowUpRight, Briefcase, Code2, Menu, MessageCircle, X } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { Container } from "@/components/container";
import { whatsappHref } from "@/lib/site-config";

const links = [
  { label: "Services", href: "#services", icon: Code2 },
  { label: "Our work", href: "#work", icon: Briefcase },
  { label: "Contact", href: "#contact", icon: MessageCircle },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3">
      <Container>
        <div className="relative flex h-12 items-center justify-between gap-3 rounded-full border border-border bg-background px-3 text-foreground shadow-lg sm:h-14 sm:px-4">
          <BrandMark tone="dark" />

          <nav
            id="primary-navigation"
            aria-label="Main navigation"
            className={`${menuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full mt-2 flex-col rounded-3xl border border-border bg-background p-3 text-foreground shadow-xl md:static md:mx-auto md:mt-0 md:flex md:flex-row md:items-center md:gap-1 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
          >
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  className="inline-flex items-center gap-2 rounded-full px-3 py-2.5 text-sm font-medium text-muted-foreground transition hover:bg-secondary hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
                  href={link.href}
                  key={link.href}
                  onClick={closeMenu}
                >
                  <Icon className="size-4 text-primary" strokeWidth={1.8} aria-hidden="true" />
                  {link.label}
                </a>
              );
            })}
            <a
              className="mt-2 inline-flex min-h-10 items-center justify-between gap-3 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-whatsapp-foreground transition hover:brightness-110 md:hidden"
              href={whatsappHref ?? "#contact"}
              target={whatsappHref ? "_blank" : undefined}
              rel={whatsappHref ? "noreferrer" : undefined}
              onClick={closeMenu}
            >
              WhatsApp us <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </nav>

          <a
            className="hidden min-h-10 items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-whatsapp-foreground shadow-sm transition hover:-translate-y-0.5 hover:brightness-110 md:inline-flex"
            href={whatsappHref ?? "#contact"}
            target={whatsappHref ? "_blank" : undefined}
            rel={whatsappHref ? "noreferrer" : undefined}
          >
            WhatsApp <ArrowUpRight className="size-4" strokeWidth={1.8} aria-hidden="true" />
          </a>

          <button
            className="grid size-9 place-items-center rounded-full border border-border bg-secondary text-foreground transition hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring md:hidden"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </Container>
    </header>
  );
}
