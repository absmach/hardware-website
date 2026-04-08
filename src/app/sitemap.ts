import { execSync } from "node:child_process";
import { join } from "node:path";
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { source } from "@/lib/source";

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

function gitLastModified(filePath: string): string | undefined {
  try {
    const iso = execSync(`git log -1 --format=%cI -- "${filePath}"`, {
      cwd: process.cwd(),
    })
      .toString()
      .trim();
    return iso || undefined;
  } catch {
    return undefined;
  }
}

function generateDocsSitemap(): MetadataRoute.Sitemap {
  return source.getPages().map((page) => {
    const { priority, changeFrequency } = docsWeight(page.slugs);
    const lastModified =
      page.data.lastModified ||
      gitLastModified(join(process.cwd(), "content/docs", page.path));

    return {
      url: `${SITE_URL}${page.url}`,
      ...(lastModified ? { lastModified } : {}),
      changeFrequency,
      priority,
    };
  });
}

export default function sitemap(): MetadataRoute.Sitemap {
  const homeLastModified = gitLastModified(
    join(process.cwd(), "src/app/(home)/page.tsx"),
  );
  const s0LastModified = gitLastModified(
    join(process.cwd(), "src/app/s0/page.tsx"),
  );
  const s1LastModified = gitLastModified(
    join(process.cwd(), "src/app/s1/page.tsx"),
  );

  return [
    {
      url: SITE_URL,
      ...(homeLastModified ? { lastModified: homeLastModified } : {}),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/s0`,
      ...(s0LastModified ? { lastModified: s0LastModified } : {}),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/s1`,
      ...(s1LastModified ? { lastModified: s1LastModified } : {}),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...generateDocsSitemap(),
  ];
}
