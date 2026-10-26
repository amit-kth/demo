import { headers } from "next/headers";
import { siteUrl } from "@/lib/site-config";

export async function getRequestSiteOrigin(): Promise<string | null> {
  if (siteUrl) {
    try {
      return new URL(siteUrl).origin;
    } catch {
      // Fall back to the request host when the optional environment value is invalid.
    }
  }

  const requestHeaders = await headers();
  const forwardedHost = requestHeaders.get("x-forwarded-host")?.split(",")[0].trim();
  const host = forwardedHost || requestHeaders.get("host");
  if (!host) return null;

  const forwardedProtocol = requestHeaders.get("x-forwarded-proto")?.split(",")[0].trim();
  const protocol = forwardedProtocol === "http" ? "http" : "https";

  try {
    return new URL(`${protocol}://${host}`).origin;
  } catch {
    return null;
  }
}
