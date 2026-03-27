import fs from "fs";
import path from "path";
import type { MetadataRoute } from "next";
import { source } from "@/lib/source";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://hardware.absmach.eu";

export const dynamic = "force-static";

function generateDocsSitemap(): MetadataRoute.Sitemap {
  const pages = source.getPages();
  const sitemap: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    let lastModified = "2026-03-24";
    try {
      const absPath = page.absolutePath
        ? path.resolve(page.absolutePath)
        : null;
      if (absPath) {
        lastModified = fs.statSync(absPath).mtime.toISOString();
      }
    } catch {
      // fall back to static date
    }
    sitemap.push({
      url: `${baseUrl}${page.url}`,
      lastModified,
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
      lastModified: "2026-03-24",
      changeFrequency: "weekly",
      priority: 1,
    },
    ...generateDocsSitemap(),
  ];
}
