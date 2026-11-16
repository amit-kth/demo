"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { blogArticles } from "@/lib/blog-content";

export function BlogExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const categories = Array.from(new Set(blogArticles.map((article) => article.category)));
  const articles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return blogArticles.filter((article) => {
      const matchesCategory = category === "all" || article.category === category;
      const matchesQuery = !normalizedQuery || `${article.title} ${article.excerpt} ${article.category}`.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <>
      <div className="grid gap-5 rounded-3xl border border-border bg-card p-5 sm:grid-cols-12 sm:items-end sm:p-6">
        <label className="grid gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground sm:col-span-7">
          Search insights
          <span className="relative block">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <input className="min-h-12 w-full rounded-xl border border-input bg-background pl-11 pr-4 text-sm font-medium normal-case tracking-normal text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:min-w-80" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by topic or question" />
          </span>
        </label>
        <label className="grid gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground sm:col-span-5">
          Category
          <select className="min-h-12 min-w-52 rounded-xl border border-input bg-background px-3 text-sm font-medium normal-case tracking-normal text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" value={category} onChange={(event) => setCategory(event.target.value)}>
            <option value="all">All topics</option>
            {categories.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </label>
      </div>

      <p className="mt-5 text-sm text-muted-foreground" aria-live="polite">{articles.length} {articles.length === 1 ? "guide" : "guides"}</p>
      {articles.length ? (
        <ol className="mt-2 divide-y divide-border border-y border-border">
          {articles.map((article, index) => (
            <li className="grid gap-5 py-7 sm:grid-cols-12 sm:items-start sm:gap-7 sm:py-9" key={article.slug}>
              <span className="font-display text-4xl font-semibold leading-none text-primary/65 sm:col-span-1">{String(index + 1).padStart(2, "0")}</span>
              <article className="sm:col-span-10">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">{article.category} <span className="px-1 text-muted-foreground">/</span> {article.readingTime}</p>
                <h2 className="mt-3 max-w-3xl font-display text-balance text-2xl font-semibold leading-tight sm:text-3xl">
                  <Link className="rounded-sm transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" href={`/blog/${article.slug}`}>{article.title}</Link>
                </h2>
                <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground">{article.excerpt}</p>
              </article>
              <Link aria-label={`Read: ${article.title}`} className="grid size-11 place-items-center rounded-full border border-border text-primary transition hover:rotate-45 motion-reduce:hover:rotate-0 hover:border-primary/50 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:col-span-1 sm:mt-1 sm:justify-self-end" href={`/blog/${article.slug}`}>
                <ArrowUpRight className="size-5" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ol>
      ) : (
        <div className="mt-6 rounded-3xl border border-dashed border-border bg-card px-6 py-12 text-center">
          <p className="font-display text-xl font-semibold">No guides match that search.</p>
          <p className="mt-2 text-sm text-muted-foreground">Try another phrase or choose a different topic.</p>
          <button className="mt-5 min-h-11 rounded-full bg-secondary px-5 py-2 text-sm font-semibold transition hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" type="button" onClick={() => { setQuery(""); setCategory("all"); }}>Clear search</button>
        </div>
      )}
      <p className="mt-8 text-xs leading-relaxed text-muted-foreground">These guides offer general planning information. Every project and technical decision should be reviewed against its specific context.</p>
    </>
  );
}
