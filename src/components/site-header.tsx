"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, BriefcaseBusiness, Code2, Menu, MessageCircle, Workflow, X } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { Container } from "@/components/container";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { whatsappHref } from "@/lib/site-config";

const links = [
  { label: "Services", href: "#services", icon: Code2 },
  { label: "How we work", href: "#process", icon: Workflow },
  { label: "Work", href: "#work", icon: BriefcaseBusiness },
  { label: "Contact", href: "#contact", icon: MessageCircle },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [overHero, setOverHero] = useState(true);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const updateHeader = () => {
      const hero = document.getElementById("top");
      setOverHero(Boolean(hero && hero.getBoundingClientRect().bottom > 72));
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("resize", updateHeader);
    return () => {
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("resize", updateHeader);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className={`transition-colors duration-300 ${overHero ? "bg-transparent" : "border-b border-border bg-background shadow-md"}`}>
        <Container className={`relative flex items-center justify-between gap-4 transition-[height] duration-300 ${overHero ? "h-16" : "h-14"}`}>
          <BrandMark tone={overHero ? "light" : "dark"} />

          <nav
            id="primary-navigation"
            aria-label="Main navigation"
            className={`${menuOpen ? "flex" : "hidden"} absolute left-4 right-4 top-full mt-2 flex-col rounded-2xl border border-border bg-background p-3 text-foreground shadow-xl lg:static lg:ml-auto lg:mr-5 lg:flex lg:flex-row lg:items-center lg:gap-1 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
          >
            {links.map((link) => {
              const Icon = link.icon;
              const isOverHero = overHero && !menuOpen;
              const linkColors = isOverHero
                ? "text-hero-muted hover:bg-hero-surface/70 hover:text-hero-foreground"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground";
              const iconColor = isOverHero ? "text-hero-foreground" : "text-primary";

              return (
                <a
                  className={`group inline-flex items-center gap-2 rounded-full px-3 py-2.5 text-sm font-semibold transition focus-visible:ring-2 focus-visible:ring-ring ${linkColors}`}
                  href={link.href}
                  key={link.href}
                  onClick={closeMenu}
                >
                  <Icon className={`size-4 ${iconColor} transition-transform group-hover:-translate-y-0.5`} strokeWidth={1.8} aria-hidden="true" />
                  {link.label}
                </a>
              );
            })}
            <a
              className="mt-2 inline-flex min-h-11 items-center justify-between gap-3 rounded-full bg-whatsapp px-4 py-2.5 text-sm font-bold text-whatsapp-foreground transition hover:brightness-110 lg:hidden"
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              <span className="inline-flex items-center gap-2"><WhatsAppIcon className="size-5" /> WhatsApp us</span>
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              className="group hidden min-h-11 items-center gap-2 rounded-full bg-whatsapp px-4 py-2.5 text-sm font-bold text-whatsapp-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-md lg:inline-flex"
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon className="size-5" />
              Start a conversation
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>

            <button
              className={`grid size-10 place-items-center rounded-full border transition focus-visible:ring-2 focus-visible:ring-ring lg:hidden ${overHero ? "border-hero-border bg-hero-surface/70 text-hero-foreground hover:bg-hero-surface" : "border-border bg-secondary text-foreground hover:bg-accent hover:text-accent-foreground"}`}
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
