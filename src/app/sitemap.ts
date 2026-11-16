import type { MetadataRoute } from "next";
import { blogArticles } from "@/lib/blog-content";
import { getRequestSiteOrigin } from "@/lib/request-site-url";
import { projectConcepts, services } from "@/lib/site-content";

export const dynamic = "force-dynamic";

const staticRoutes = [
  "/",
  "/about-us",
  "/services",
  "/industries",
  "/portfolio",
  "/blog",
  "/career",
  "/contact-us",
  "/get-a-quote",
  "/faq",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteOrigin = await getRequestSiteOrigin();
  if (!siteOrigin) return [];

  const routes = [
    ...staticRoutes,
    ...services.map((service) => `/services/${service.slug}`),
    ...projectConcepts.map((project) => `/portfolio/${project.slug}`),
    ...blogArticles.map((article) => `/blog/${article.slug}`),
  ];

  return routes.map((route) => ({
    url: route === "/" ? siteOrigin : `${siteOrigin}${route}`,
    changeFrequency: route === "/" ? "monthly" : "yearly",
    priority: route === "/" ? 1 : route === "/services" || route === "/portfolio" ? 0.8 : 0.6,
  }));
}
