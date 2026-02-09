import type { MetadataRoute } from "next";
import { blogs, source } from "@/lib/source";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://hardware.absmach.eu";

export const dynamic = "force-static";

function generateBlogsSitemap(): MetadataRoute.Sitemap {
  const posts = blogs.getPages();
  const sitemap: MetadataRoute.Sitemap = [];

  for (const post of posts) {
    sitemap.push({
      url: `${baseUrl}${post.url}`,
      lastModified: new Date(post.data.date).toISOString(),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  return sitemap;
}

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
      url: `${baseUrl}/blogs`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...generateBlogsSitemap(),
    ...generateDocsSitemap(),
  ];
}
