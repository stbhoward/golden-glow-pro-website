import type { MetadataRoute } from "next";

const routes = [
  "",
  "/services",
  "/membership",
  "/about",
  "/contact",
  "/booking",
  "/sign-in",
  "/sign-up",
  "/account",
  "/admin"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://goldenglowpro.com";

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7
  }));
}
