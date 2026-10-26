import type { MetadataRoute } from "next";
import { getRequestSiteOrigin } from "@/lib/request-site-url";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteOrigin = await getRequestSiteOrigin();
  if (!siteOrigin) return [];

  return [
    {
      url: siteOrigin,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
