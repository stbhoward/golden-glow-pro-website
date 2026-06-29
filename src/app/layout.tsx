import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { siteConfig } from "@/data/site";

import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://goldenglowpro.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.companyName} | Houston Luxury Cleaning`,
    template: `%s | ${siteConfig.companyName}`
  },
  description:
    "Premium residential and specialty cleaning for Houston homes, apartments, penthouses, high-rises, and luxury residences.",
  openGraph: {
    title: `${siteConfig.companyName} | Houston Luxury Cleaning`,
    description:
      "Elevated residential cleaning, recurring home care, deep cleaning, move-in and move-out service, and specialty cleaning for Houston homes.",
    images: [siteConfig.heroImage],
    siteName: siteConfig.companyName,
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
