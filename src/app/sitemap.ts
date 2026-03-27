import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";
import { source } from "@/lib/source";

const baseUrl = "https://hardware.absmach.eu";

export const dynamic = "force-static";

// Top-level docs sections that serve as hub/index pages.
const HUB_SECTIONS = new Set(["s0-gateway", "s1-gateway", "base-board"]);

function docsWeight(slugs: string[]): {
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
} {
  if (slugs.length === 0) return { priority: 0.8, changeFrequency: "weekly" };
  if (slugs.length === 1 && HUB_SECTIONS.has(slugs[0]))
    return { priority: 0.8, changeFrequency: "weekly" };
  if (slugs.length <= 2) return { priority: 0.7, changeFrequency: "monthly" };
  return { priority: 0.5, changeFrequency: "monthly" };
}

function statMtime(filePath: string | undefined): string {
  if (!filePath) return "2026-03-24";
  try {
    return fs.statSync(path.resolve(filePath)).mtime.toISOString();
  } catch {
    return "2026-03-24";
  }
}

function generateDocsSitemap(): MetadataRoute.Sitemap {
  return source.getPages().map((page) => {
    const { priority, changeFrequency } = docsWeight(page.slugs);
    return {
      url: `${baseUrl}${page.url}`,
      lastModified: statMtime(page.absolutePath),
      changeFrequency,
      priority,
    };
  });
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: "2026-03-24",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/s0`,
      lastModified: "2026-03-24",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/s1`,
      lastModified: "2026-03-24",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...generateDocsSitemap(),
  ];
}
