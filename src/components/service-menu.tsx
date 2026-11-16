"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { serviceGroups, services } from "@/lib/site-content";

type ServiceMenuProps = {
  mobile?: boolean;
  navigationOpen?: boolean;
  overHero?: boolean;
  onNavigate?: () => void;
};

export function ServiceMenu({
  mobile = false,
  navigationOpen,
  overHero = false,
  onNavigate,
}: ServiceMenuProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuId = mobile ? "services-menu-mobile" : "services-menu-desktop";
  const isActive = pathname === "/services" || pathname.startsWith("/services/");
  const triggerTone = isActive
    ? "text-primary"
    : mobile
      ? "text-foreground hover:bg-secondary hover:text-primary"
      : overHero
        ? "text-hero-muted hover:bg-hero-surface/70 hover:text-hero-foreground"
        : "text-muted-foreground hover:bg-card hover:text-primary";

  useEffect(() => {
    setOpen(false);
  }, [pathname, navigationOpen]);

  const close = () => setOpen(false);
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      close();
      triggerRef.current?.focus();
    }
    if (event.key === "ArrowDown" && !open) {
      event.preventDefault();
      setOpen(true);
      window.setTimeout(() => menuRef.current?.querySelector("a")?.focus(), 0);
    }
  };
  const handleNavigate = () => {
    close();
    onNavigate?.();
  };

  return (
    <div
      className={mobile ? "rounded-2xl border border-border bg-card" : "group relative"}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) close();
      }}
      onKeyDown={handleKeyDown}
      onMouseEnter={mobile ? undefined : () => setOpen(true)}
      onMouseLeave={mobile ? undefined : close}
    >
      <button
        aria-controls={menuId}
        aria-expanded={open}
        className={`flex min-h-11 w-full items-center justify-between gap-2 rounded-xl px-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${triggerTone}`}
        onClick={() => setOpen((current) => !current)}
        ref={triggerRef}
        type="button"
      >
        <span>Services</span>
        <ChevronDown aria-hidden="true" className={`size-3.5 transition-transform duration-200 motion-reduce:transition-none ${open ? "rotate-180" : ""}`} />
      </button>

      <div
        aria-label="Services submenu"
        className={mobile
          ? `${open ? "block" : "hidden"} border-t border-border p-3`
          : `invisible absolute left-1/2 top-full z-50 w-[min(44rem,calc(100vw-2rem))] -translate-x-1/2 pt-3 opacity-0 transition duration-150 motion-reduce:transition-none ${open ? "visible translate-y-0 opacity-100" : "-translate-y-1"}`}
        id={menuId}
        ref={menuRef}
        role="group"
      >
        <div className={mobile ? "grid gap-4 sm:grid-cols-2" : "grid gap-7 rounded-3xl border border-border bg-background p-6 text-foreground shadow-2xl shadow-foreground/10 sm:grid-cols-3"}>
          {serviceGroups.map((group) => (
            <div key={group.title}>
              <p className="text-xs font-bold uppercase tracking-widest text-primary">{group.title}</p>
              <ul className="mt-2 space-y-1">
                {group.slugs.map((slug) => {
                  const service = services.find((entry) => entry.slug === slug);
                  if (!service) return null;
                  return (
                    <li key={service.slug}>
                      <Link
                        className="block rounded-lg px-2 py-2 text-sm font-medium text-foreground transition hover:bg-secondary hover:text-primary focus-visible:bg-secondary focus-visible:text-primary focus-visible:outline-none"
                        href={`/services/${service.slug}`}
                        onClick={handleNavigate}
                      >
                        {service.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <Link
          className="mt-4 inline-flex items-center gap-2 border-t border-border pt-4 text-sm font-semibold text-primary transition hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          href="/services"
          onClick={handleNavigate}
        >
          All Services <ArrowUpRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
    </div>
  );
}
