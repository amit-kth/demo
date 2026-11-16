import type { Metadata } from "next";

type PageMetadataOptions = {
  title: string;
  description: string;
  canonical: string;
  openGraphType?: "website" | "article";
};

export function pageMetadata({
  title,
  description,
  canonical,
  openGraphType = "website",
}: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      type: openGraphType,
      locale: "en_IN",
      siteName: "Slash Logic",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}
