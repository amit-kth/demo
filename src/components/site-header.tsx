"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { Container } from "@/components/container";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { serviceGroups, services } from "@/lib/site-content";
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
  const [servicesOpen, setServicesOpen] = useState(false);
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
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen && !servicesOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen, servicesOpen]);

  const navSurface = overHero && !menuOpen
    ? "text-hero-muted hover:bg-hero-surface/70 hover:text-hero-foreground"
    : "text-muted-foreground hover:bg-secondary hover:text-foreground";
  const navLinkClass = `inline-flex min-h-10 items-center rounded-full px-2.5 text-sm font-semibold transition motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring xl:px-3 ${navSurface}`;
  const activeNavClass = overHero && !menuOpen ? "text-hero-foreground" : "text-primary";

  const closeNavigation = () => {
    setMenuOpen(false);
    setServicesOpen(false);
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

            <div className="hidden lg:relative lg:block">
              <div className="flex items-center">
                <Link
                  aria-current={linkIsActive(pathname, "/services") ? "page" : undefined}
                  className={`${navLinkClass} ${linkIsActive(pathname, "/services") ? activeNavClass : ""}`}
                  href="/services"
                  onClick={closeNavigation}
                >
                  Services
                </Link>
                <button
                  aria-label="Toggle services menu"
                  aria-expanded={servicesOpen}
                  aria-controls="services-menu-desktop"
                  className={`-ml-2 grid size-8 place-items-center rounded-full transition hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${navSurface}`}
                  type="button"
                  onClick={() => setServicesOpen((open) => !open)}
                >
                  <ChevronDown className={`size-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                </button>
              </div>
              {servicesOpen ? (
                <div id="services-menu-desktop" className="absolute left-1/2 top-full z-50 mt-4 w-[min(44rem,calc(100vw-2rem))] -translate-x-1/2 rounded-3xl border border-border bg-background p-6 text-foreground shadow-2xl">
                  <div className="grid gap-7 sm:grid-cols-3">
                    {serviceGroups.map((group) => (
                      <div key={group.title}>
                        <p className="text-xs font-bold uppercase tracking-widest text-primary">{group.title}</p>
                        <ul className="mt-3 space-y-1">
                          {group.slugs.map((slug) => {
                            const service = services.find((entry) => entry.slug === slug);
                            if (!service) return null;
                            return (
                              <li key={service.slug}>
                                <Link className="block rounded-lg px-2 py-2 text-sm font-medium text-foreground transition hover:bg-secondary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" href={`/services/${service.slug}`} onClick={closeNavigation}>
                                  {service.label}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <Link className="mt-6 inline-flex items-center gap-2 border-t border-border pt-4 text-sm font-semibold text-primary transition hover:gap-3" href="/services" onClick={closeNavigation}>
                    Explore all services <ArrowUpRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              ) : null}
            </div>

            <div className="lg:hidden">
              <div className="flex items-center gap-1">
                <Link className="inline-flex min-h-11 flex-1 items-center rounded-full px-3 text-sm font-semibold text-foreground transition hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" href="/services" onClick={closeNavigation}>
                  Services
                </Link>
                <button
                  aria-label="Toggle service links"
                  aria-expanded={servicesOpen}
                  aria-controls="services-menu-mobile"
                  className="grid size-10 place-items-center rounded-full text-muted-foreground transition hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  type="button"
                  onClick={() => setServicesOpen((open) => !open)}
                >
                  <ChevronDown className={`size-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                </button>
              </div>
              {servicesOpen ? (
                <div id="services-menu-mobile" className="grid gap-4 rounded-xl bg-secondary/70 p-4 sm:grid-cols-2">
                  {serviceGroups.map((group) => (
                    <div key={group.title}>
                      <p className="text-xs font-bold uppercase tracking-widest text-primary">{group.title}</p>
                      <ul className="mt-2 space-y-1">
                        {group.slugs.map((slug) => {
                          const service = services.find((entry) => entry.slug === slug);
                          if (!service) return null;
                          return (
                            <li key={service.slug}>
                              <Link className="block rounded-md py-2 text-sm font-medium text-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" href={`/services/${service.slug}`} onClick={closeNavigation}>
                                {service.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : null}
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
              aria-controls="primary-navigation"
              onClick={() => {
                setMenuOpen((open) => !open);
                setServicesOpen(false);
              }}
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </Container>
      </div>
    </header>
  );
}
