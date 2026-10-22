import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Slash Logic | Web, App Development & Digital Marketing",
  description:
    "Websites, e-commerce, web apps, Android and iOS development, plus SEO, social media, paid ads and content marketing for businesses.",
  applicationName: "Slash Logic",
  openGraph: {
    title: "Slash Logic — Web & App Development for Business",
    description:
      "Websites, e-commerce, apps, and digital marketing services from Slash Logic.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
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
