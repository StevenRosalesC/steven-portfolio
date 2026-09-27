import type { MetadataRoute } from "next";

export const dynamic = "force-dynamic";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = (
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.stevenrocaiche.space"
  )
    .trim()
    .replace(/\/+$/, "");

  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/politica-de-privacidad`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/politica-de-cookies`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
