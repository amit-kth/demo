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
    <header className="absolute inset-x-0 top-4 z-50 pointer-events-none md:top-[22px]">
      <Container>
        <div className="pointer-events-auto relative flex min-h-[62px] items-center justify-between rounded-full border border-white/15 bg-slate-950/65 px-3 py-2 shadow-[0_16px_48px_rgba(0,0,0,.16)] backdrop-blur-2xl md:min-h-[70px] md:pl-[18px]">
          <BrandMark />

          <nav
            id="primary-navigation"
            aria-label="Main navigation"
            className={`${menuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-[calc(100%+8px)] flex-col rounded-[20px] border border-white/15 bg-slate-950/95 px-4 pb-4 pt-2 shadow-2xl backdrop-blur-2xl md:static md:mx-auto md:flex md:flex-row md:items-center md:gap-[clamp(24px,3.1vw,48px)] md:border-0 md:bg-transparent md:px-8 md:py-0 md:shadow-none md:backdrop-blur-none`}
          >
            {links.map((link) => (
              <a
                className="border-b border-white/10 py-3 text-sm text-slate-200/75 transition hover:text-white md:border-0 md:py-2 md:text-xs"
                href={link.href}
                key={link.href}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <a
              className="mt-3 inline-flex min-h-11 items-center justify-between gap-4 rounded-full border border-white/15 bg-white/10 px-4 text-sm text-white transition hover:bg-blue-300/15 md:hidden"
              href="#contact"
              onClick={closeMenu}
            >
              Start a conversation <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </nav>

          <a
            className="hidden min-h-[46px] items-center justify-center gap-4 rounded-full border border-white/15 bg-white/10 px-5 text-xs text-white transition hover:-translate-y-px hover:border-cyan-100/50 hover:bg-blue-300/15 md:inline-flex"
            href="#contact"
          >
            Start a conversation <ArrowUpRight className="size-4" strokeWidth={1.8} aria-hidden="true" />
          </a>

          <button
            className="grid size-10 place-items-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-blue-300/15 md:hidden"
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
