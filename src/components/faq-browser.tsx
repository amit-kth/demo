"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { commonQuestions } from "@/lib/site-content";

export function FaqBrowser() {
  const categories = Array.from(new Set(commonQuestions.map((item) => item.category)));
  const [activeCategory, setActiveCategory] = useState("All questions");
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return commonQuestions.filter((item) => {
      const inCategory = activeCategory === "All questions" || item.category === activeCategory;
      const matches = !normalized || `${item.question} ${item.answer} ${item.category}`.toLowerCase().includes(normalized);
      return inCategory && matches;
    });
  }, [activeCategory, query]);

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
      <aside className="lg:col-span-4">
        <label className="grid gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
          Search answers
          <span className="relative block">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <input className="min-h-12 w-full rounded-xl border border-input bg-background pl-11 pr-4 text-sm font-medium normal-case tracking-normal text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Type a question" />
          </span>
        </label>
        <div className="mt-6">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Browse by topic</p>
          <div className="mt-3 flex flex-wrap gap-2 lg:flex-col lg:items-start">
            {["All questions", ...categories].map((category) => (
              <button className={`min-h-10 rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-accent"}`} aria-pressed={activeCategory === category} key={category} type="button" onClick={() => setActiveCategory(category)}>
                {category}
              </button>
            ))}
          </div>
        </div>
        <p className="mt-7 text-sm leading-relaxed text-muted-foreground">These answers are general. Project details, provider terms and data requirements should be confirmed for each situation.</p>
      </aside>

      <div className="lg:col-span-8">
        <p className="mb-4 text-sm text-muted-foreground" aria-live="polite">{filtered.length} {filtered.length === 1 ? "answer" : "answers"}</p>
        {filtered.length ? (
          <div className="space-y-3">
            {filtered.map((item, index) => (
              <details className="group rounded-2xl border border-border bg-card p-5 open:bg-secondary sm:p-6" key={item.question} open={index === 0 && !query && activeCategory === "All questions"}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-lg font-semibold sm:text-xl">
                  {item.question}
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition-transform group-open:rotate-45"><span aria-hidden="true">+</span></span>
                </summary>
                <p className="mt-4 max-w-2xl pr-10 text-base leading-relaxed text-muted-foreground">{item.answer}</p>
              </details>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-border bg-card px-6 py-12 text-center">
            <p className="font-display text-xl font-semibold">No answers found.</p>
            <p className="mt-2 text-sm text-muted-foreground">Try another search or clear the current filter.</p>
            <button className="mt-5 min-h-11 rounded-full bg-secondary px-5 py-2 text-sm font-semibold transition hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" type="button" onClick={() => { setQuery(""); setActiveCategory("All questions"); }}>Clear filters</button>
          </div>
        )}
      </div>
    </div>
  );
}
