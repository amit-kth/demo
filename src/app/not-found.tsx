import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ActionLink } from "@/components/action-link";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Page Not Found | Slash Logic",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="grid min-h-svh place-items-center bg-secondary px-4 py-20 text-foreground">
      <Container className="max-w-4xl">
        <div className="relative isolate overflow-hidden rounded-3xl bg-hero p-7 text-hero-foreground sm:p-12 lg:p-16">
          <div aria-hidden="true" className="absolute -right-16 -top-20 -z-10 size-72 rounded-full border border-hero-border sm:size-96" />
          <p className="text-xs font-bold uppercase tracking-widest text-accent">404 / Page not found</p>
          <h1 className="mt-5 max-w-3xl font-display text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">This page took a different route.</h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-hero-muted sm:text-lg">The address may have changed, or the page may not be available. Start again from the homepage or browse the service directory.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ActionLink href="/" icon="none">Back to home <ArrowLeft className="size-4" aria-hidden="true" /></ActionLink>
            <Link className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-hero-border px-5 py-3 text-sm font-semibold text-hero-foreground transition hover:bg-hero-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" href="/services">Browse services <ArrowUpRight className="size-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
