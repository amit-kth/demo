import "@fontsource-variable/space-grotesk";
import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Slash Logic — Web & App Development, Digital Marketing",
  description:
    "Web and app development for businesses: websites, online stores, mobile apps, and digital marketing services.",
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
      <body>{children}</body>
    </html>
  );
}
