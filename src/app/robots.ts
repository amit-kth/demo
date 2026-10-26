import type { MetadataRoute } from "next";
import { getRequestSiteOrigin } from "@/lib/request-site-url";

export const dynamic = "force-dynamic";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const siteOrigin = await getRequestSiteOrigin();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    ...(siteOrigin ? { sitemap: `${siteOrigin}/sitemap.xml` } : {}),
  };
}
