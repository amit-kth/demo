"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { Container } from "@/components/container";
import { ServiceMenu } from "@/components/service-menu";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { whatsappHref } from "@/lib/site-config";

const primaryLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Industries", href: "/industries" },
  { label: "Work", href: "/portfolio" },
  { label: "Insights", href: "/blog" },
  { label: "Careers", href: "/career" },
  { label: "Contact", href: "/contact-us" },
];

function linkIsActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [overHero, setOverHero] = useState(pathname === "/");
  const isHome = pathname === "/";

  useEffect(() => {
    const updateHeader = () => {
      const hero = document.getElementById("top");
      setOverHero(Boolean(isHome && hero && hero.getBoundingClientRect().bottom > 76));
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("resize", updateHeader);
    return () => {
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("resize", updateHeader);
    };
  }, [isHome, pathname]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        window.requestAnimationFrame(() => menuButtonRef.current?.focus());
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const navSurface = overHero && !menuOpen
    ? "text-hero-muted hover:bg-hero-surface/70 hover:text-hero-foreground"
    : "text-muted-foreground hover:bg-secondary hover:text-foreground";
  const navLinkClass = `inline-flex min-h-10 items-center rounded-full px-2.5 text-sm font-semibold transition motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring xl:px-3 ${navSurface}`;
  const activeNavClass = overHero && !menuOpen ? "text-hero-foreground" : "text-primary";

  const closeNavigation = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className={`transition-colors duration-300 motion-reduce:transition-none ${overHero && !menuOpen ? "bg-transparent" : "border-b border-border/80 bg-background/95 shadow-sm backdrop-blur-md"}`}>
        <Container className={`relative flex items-center justify-between gap-3 transition-all duration-300 motion-reduce:transition-none ${overHero && !menuOpen ? "h-16 lg:h-20" : "h-16"}`}>
          <BrandMark tone={overHero && !menuOpen ? "light" : "dark"} />

          <nav
            id="primary-navigation"
            aria-label="Main navigation"
            className={`${menuOpen ? "flex" : "hidden"} absolute left-3 right-3 top-full mt-2 max-h-svh flex-col gap-1 overflow-y-auto rounded-2xl border border-border bg-background p-3 text-foreground shadow-xl lg:static lg:ml-auto lg:mr-2 lg:flex lg:max-h-none lg:flex-row lg:items-center lg:gap-0 lg:overflow-visible lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:text-inherit lg:shadow-none xl:gap-0`}
          >
            {primaryLinks.slice(0, 2).map((link) => (
              <Link
                aria-current={linkIsActive(pathname, link.href) ? "page" : undefined}
                className={`${navLinkClass} ${linkIsActive(pathname, link.href) ? activeNavClass : ""}`}
                href={link.href}
                key={link.href}
                onClick={closeNavigation}
              >
                {link.label}
              </Link>
            ))}

            <div className="hidden lg:block">
              <ServiceMenu overHero={overHero && !menuOpen} onNavigate={closeNavigation} />
            </div>

            <div className="lg:hidden">
              <ServiceMenu mobile navigationOpen={menuOpen} onNavigate={closeNavigation} />
            </div>

            {primaryLinks.slice(2).map((link) => (
              <Link
                aria-current={linkIsActive(pathname, link.href) ? "page" : undefined}
                className={`${navLinkClass} ${linkIsActive(pathname, link.href) ? activeNavClass : ""}`}
                href={link.href}
                key={link.href}
                onClick={closeNavigation}
              >
                {link.label}
              </Link>
            ))}

            <Link
              className="mt-2 inline-flex min-h-11 items-center justify-between gap-3 rounded-full bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground transition motion-reduce:transition-none hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
              href="/get-a-quote"
              onClick={closeNavigation}
            >
              Get a free quote <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>

            <a
              className="mt-2 inline-flex min-h-11 items-center justify-between gap-3 rounded-full bg-whatsapp px-4 py-2.5 text-sm font-bold text-whatsapp-foreground transition motion-reduce:transition-none hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              onClick={closeNavigation}
            >
              <span className="inline-flex items-center gap-2"><WhatsAppIcon className="size-5" /> WhatsApp</span>
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <Link className="hidden min-h-10 items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:inline-flex" href="/get-a-quote">
              Get a free quote <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
            <a className={`hidden size-10 place-items-center rounded-full border transition motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:grid ${overHero && !menuOpen ? "border-hero-border bg-hero-surface/60 text-hero-foreground hover:bg-hero-surface" : "border-border bg-background text-foreground hover:bg-secondary"}`} href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Start a conversation on WhatsApp">
              <WhatsAppIcon className="size-5 text-whatsapp" />
            </a>
            <button
              className={`grid size-10 place-items-center rounded-full border transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden ${overHero && !menuOpen ? "border-hero-border bg-hero-surface/70 text-hero-foreground hover:bg-hero-surface" : "border-border bg-background text-foreground hover:bg-secondary"}`}
              type="button"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              ref={menuButtonRef}
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
