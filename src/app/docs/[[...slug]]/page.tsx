import { execSync } from "node:child_process";
import { join } from "node:path";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/layouts/docs/page";
import { createRelativeLink } from "fumadocs-ui/mdx";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocAttribution } from "@/components/doc-attribution";
import { LLMCopyButton, ViewOptions } from "@/components/page-actions";
import { resolveAuthors } from "@/lib/authors";
import { SITE_URL } from "@/lib/site";
import { getPageImage, source } from "@/lib/source";
import { getMDXComponents } from "@/mdx-components";

function resolvePageLastModified(
  frontmatterDate: string | undefined,
  filePath: string,
): string | undefined {
  if (frontmatterDate) return frontmatterDate;

  try {
    const date = execSync(`git log -1 --format=%cI -- "${filePath}"`, {
      cwd: process.cwd(),
    })
      .toString()
      .trim();
    return date || undefined;
  } catch {
    return undefined;
  }
}

export default async function Page(props: PageProps<"/docs/[[...slug]]">) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const authors = resolveAuthors(page.data.authors);
  const lastModified = resolvePageLastModified(
    page.data.lastModified,
    join(process.cwd(), "content/docs", page.path),
  );

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <div className="flex flex-row gap-2 items-center border-b pt-2 pb-6">
        <LLMCopyButton markdownUrl={`${page.url}.mdx`} />
        <ViewOptions
          markdownUrl={`${page.url}.mdx`}
          githubUrl={`https://github.com/absmach/hardware-website/blob/main/content/docs/${page.path}`}
        />
      </div>

      <DocAttribution authors={authors} lastModified={lastModified} />

      <DocsBody>
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD schema markup, not user input
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "@id": `${SITE_URL}${page.url}/#article`,
            headline: page.data.title,
            description: page.data.description,
            url: `${SITE_URL}${page.url}`,
            inLanguage: "en",
            isPartOf: { "@id": `${SITE_URL}/#website` },
            publisher: { "@id": `${SITE_URL}/#organization` },
          }),
        }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD schema markup, not user input
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: SITE_URL,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Documentation",
                item: `${SITE_URL}/docs`,
              },
              ...page.slugs.map((slug, i) => ({
                "@type": "ListItem",
                position: i + 3,
                name: slug
                  .split("-")
                  .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                  .join(" "),
                item: `${SITE_URL}/docs/${page.slugs.slice(0, i + 1).join("/")}`,
              })),
            ],
          }),
        }}
      />
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const pageUrl = `${SITE_URL}${page.url}`;
  const ogImage = getPageImage(page).url;

  return {
    title: page.data.title,
    description: page.data.description,
    alternates: { canonical: pageUrl },
    openGraph: {
      type: "article",
      url: pageUrl,
      title: page.data.title,
      description: page.data.description,
      siteName: "Abstract Machines Hardware",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: page.data.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.data.title,
      description: page.data.description,
      images: [ogImage],
    },
  };
}
