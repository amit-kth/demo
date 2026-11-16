import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ActionLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "light" | "text" | "hero-outline";
  external?: boolean;
  className?: string;
  icon?: "right" | "up" | "none";
  ariaLabel?: string;
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
  rel?: AnchorHTMLAttributes<HTMLAnchorElement>["rel"];
};

const variants = {
  primary:
    "bg-primary text-primary-foreground shadow-sm hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 hover:shadow-lg",
  outline:
    "border border-border bg-background text-foreground hover:border-primary/40 hover:bg-secondary",
  light:
    "bg-background text-foreground shadow-sm hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 hover:shadow-lg",
  text: "px-0 text-primary hover:gap-3",
  "hero-outline": "border border-hero-border bg-hero-surface/55 text-hero-foreground hover:bg-hero-surface",
};

export function ActionLink({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
  icon = "up",
  ariaLabel,
  target,
  rel,
}: ActionLinkProps) {
  const classes = `group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${variants[variant]} ${className}`;
  const iconElement =
    icon === "right" ? (
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
    ) : icon === "up" ? (
      <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 motion-reduce:group-hover:translate-y-0 group-hover:translate-x-0.5 motion-reduce:group-hover:translate-x-0" aria-hidden="true" />
    ) : null;

  if (external || href.startsWith("https://") || href.startsWith("mailto:")) {
    return (
      <a
        aria-label={ariaLabel}
        className={classes}
        href={href}
        target={target}
        rel={rel ?? (target === "_blank" ? "noreferrer" : undefined)}
      >
        {children}
        {iconElement}
      </a>
    );
  }

  return (
    <Link aria-label={ariaLabel} className={classes} href={href}>
      {children}
      {iconElement}
    </Link>
  );
}
