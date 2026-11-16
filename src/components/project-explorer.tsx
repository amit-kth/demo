"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, RotateCcw, Sparkles } from "lucide-react";
import { projectConcepts } from "@/lib/site-content";

export function ProjectExplorer() {
  const [serviceFilter, setServiceFilter] = useState("all");
  const [industryFilter, setIndustryFilter] = useState("all");

  const serviceOptions = Array.from(new Set(projectConcepts.map((project) => project.service)));
  const industryOptions = Array.from(new Set(projectConcepts.map((project) => project.industry)));
  const filteredProjects = useMemo(
    () => projectConcepts.filter((project) =>
      (serviceFilter === "all" || project.service === serviceFilter) &&
      (industryFilter === "all" || project.industry === industryFilter),
    ),
    [serviceFilter, industryFilter],
  );
  const hasFilters = serviceFilter !== "all" || industryFilter !== "all";

  return (
    <>
      <div className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-5 sm:flex-row sm:items-end sm:justify-between sm:p-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Explore concepts</p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">Filter these illustrative examples by the kind of work or industry context.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="grid gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Service
            <select className="min-h-11 min-w-48 rounded-xl border border-input bg-background px-3 text-sm font-medium normal-case tracking-normal text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" value={serviceFilter} onChange={(event) => setServiceFilter(event.target.value)}>
              <option value="all">All services</option>
              {serviceOptions.map((service) => <option key={service} value={service}>{service}</option>)}
            </select>
          </label>
          <label className="grid gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Industry
            <select className="min-h-11 min-w-48 rounded-xl border border-input bg-background px-3 text-sm font-medium normal-case tracking-normal text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" value={industryFilter} onChange={(event) => setIndustryFilter(event.target.value)}>
              <option value="all">All industries</option>
              {industryOptions.map((industry) => <option key={industry} value={industry}>{industry}</option>)}
            </select>
          </label>
        </div>
      </div>

      <p className="mt-5 text-sm text-muted-foreground" aria-live="polite">Showing {filteredProjects.length} {filteredProjects.length === 1 ? "concept" : "concepts"}.</p>
      {filteredProjects.length > 0 ? (
        <div className="mt-5 grid items-stretch gap-5 lg:grid-cols-12">
          {filteredProjects.map((project, index) => (
            <article className={`project-card group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition duration-300 motion-reduce:transition-none hover:-translate-y-1 motion-reduce:hover:translate-y-0 hover:shadow-xl ${index === 0 && !hasFilters ? "lg:col-span-7" : index === 1 && !hasFilters ? "lg:col-span-5" : "lg:col-span-6"}`} key={project.name}>
              <div className="relative h-64 overflow-hidden sm:h-80">
                <Image src={project.image} alt={project.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 48vw" className="project-art object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-foreground/70 via-foreground/5 to-transparent" />
                <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-background/95 px-4 py-2 text-xs font-bold uppercase tracking-wider text-foreground shadow-md">
                  <Sparkles className="size-4 text-primary" aria-hidden="true" /> Concept project
                </span>
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-background">
                  <div><p className="text-xs font-bold uppercase tracking-widest text-background/80">{project.category}</p><h2 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">{project.name}</h2></div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground transition-transform group-hover:rotate-45 motion-reduce:group-hover:rotate-0 motion-reduce:transition-none"><ArrowUpRight className="size-5" aria-hidden="true" /></span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">{project.type}</p>
                <h3 className="mt-3 font-display text-balance text-xl font-semibold leading-tight sm:text-2xl">{project.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{project.description}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  <span className="rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-secondary-foreground">{project.service}</span>
                  <span className="rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-secondary-foreground">{project.industry}</span>
                </div>
                <Link className="mt-5 inline-flex min-h-10 items-center gap-2 self-start rounded-sm text-sm font-bold text-primary transition hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" href={`/portfolio/${project.slug}`}>
                  Explore concept <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-3xl border border-dashed border-border bg-card px-6 py-12 text-center">
          <p className="font-display text-xl font-semibold">No concepts match those filters.</p>
          <button className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" type="button" onClick={() => { setServiceFilter("all"); setIndustryFilter("all"); }}>
            <RotateCcw className="size-4" aria-hidden="true" /> Clear filters
          </button>
        </div>
      )}

      <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">These examples are conceptual explorations. They are not published client work, case studies or evidence of customer outcomes.</p>
        <Link className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold transition hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" href="/services">Explore services <ArrowUpRight className="size-4" aria-hidden="true" /></Link>
      </div>
    </>
  );
}
