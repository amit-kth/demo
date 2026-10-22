"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { Container } from "@/components/container";

const links = [
  { label: "Services", href: "#services" },
  { label: "Our work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-4">
      <Container>
        <div className="relative flex items-center justify-between gap-4 rounded-full border border-hero-border bg-hero/90 px-4 py-3 text-hero-foreground shadow-xl backdrop-blur-xl sm:px-6">
          <BrandMark />

          <nav
            id="primary-navigation"
            aria-label="Main navigation"
            className={`${menuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full mt-3 flex-col rounded-3xl border border-hero-border bg-hero p-4 shadow-xl md:static md:mx-auto md:mt-0 md:flex md:flex-row md:items-center md:gap-2 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
          >
            {links.map((link) => (
              <a
                className="rounded-full px-4 py-3 text-base text-hero-muted transition hover:bg-hero-surface hover:text-hero-foreground md:py-2 md:text-sm"
                href={link.href}
                key={link.href}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <a
              className="mt-2 inline-flex items-center justify-between gap-4 rounded-full bg-primary px-5 py-3 text-base font-semibold text-primary-foreground transition hover:brightness-110 md:hidden"
              href="#contact"
              onClick={closeMenu}
            >
              WhatsApp us <ArrowUpRight className="size-5" aria-hidden="true" />
            </a>
          </nav>

          <a
            className="hidden items-center gap-3 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:-translate-y-0.5 hover:brightness-110 md:inline-flex"
            href="#contact"
          >
            WhatsApp us <ArrowUpRight className="size-4" strokeWidth={1.8} aria-hidden="true" />
          </a>

          <button
            className="grid size-11 place-items-center rounded-full border border-hero-border bg-hero-surface text-hero-foreground transition hover:bg-primary hover:text-primary-foreground md:hidden"
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
    </header>
  );
}
