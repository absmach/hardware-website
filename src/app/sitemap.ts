import type { MetadataRoute } from "next";
import { source } from "@/lib/source";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://hardware.absmach.eu";

export const dynamic = "force-static";

function generateDocsSitemap(): MetadataRoute.Sitemap {
  const pages = source.getPages();
  const sitemap: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    sitemap.push({
      url: `${baseUrl}${page.url}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.7,
    });
  }

  return sitemap;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...generateDocsSitemap(),
  ];
}
