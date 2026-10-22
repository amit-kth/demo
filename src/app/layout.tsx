import "@fontsource-variable/space-grotesk";
import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Slash Logic — Web, Apps & Digital Marketing",
  description:
    "Websites, e-commerce, web and mobile apps, SEO, social media, paid ads, and content marketing for businesses of every kind.",
  applicationName: "Slash Logic",
  openGraph: {
    title: "Slash Logic — Digital services for every kind of business",
    description:
      "Websites, e-commerce, apps, and digital marketing services from Slash Logic.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
