"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { containerClass } from "@/lib/styles";

const links = [
  { label: "Services", href: "#services" },
  { label: "Our work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className={`${containerClass} nav-shell`}>
        <BrandMark />

        <nav
          className={`nav-links${menuOpen ? " is-open" : ""}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <a className="nav-link" href={link.href} key={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a className="mobile-nav-cta" href="#contact" onClick={closeMenu}>
            Start a conversation <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </nav>

        <a className="nav-cta" href="#contact">
          <span>Start a conversation</span>
          <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
        </a>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}
