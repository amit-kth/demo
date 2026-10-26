import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteUrl } from "@/lib/site-config";

const metadataBase = siteUrl ? new URL(siteUrl) : undefined;

export const metadata: Metadata = {
  metadataBase,
  title: "Slash Logic | Web, App & Digital Marketing in India",
  description:
    "Mobile-friendly website development, e-commerce, custom software, Android and iOS apps, SEO and digital marketing for businesses across India.",
  applicationName: "Slash Logic",
  keywords: [
    "web development services India",
    "website design India",
    "website development for small businesses India",
    "e-commerce website development India",
    "mobile app development India",
    "Android app development India",
    "iOS app development India",
    "custom software development India",
    "SEO services India",
    "digital marketing for Indian businesses",
    "social media marketing India",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: metadataBase ? { canonical: "/" } : undefined,
  openGraph: {
    title: "Slash Logic | Web, App & Digital Marketing in India",
    description:
      "Website development, e-commerce, Android and iOS apps, SEO and digital marketing for businesses across India.",
    type: "website",
    locale: "en_IN",
    siteName: "Slash Logic",
  },
  twitter: {
    card: "summary",
    title: "Slash Logic | Web, App & Digital Marketing in India",
    description:
      "Website development, e-commerce, mobile apps, SEO and digital marketing for Indian businesses.",
  },
  icons: {
    icon: "/slash-logic-logo-mark.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@100..1000&family=Sora:wght@100..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
