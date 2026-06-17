import type { Metadata } from "next";
import FooterSection from "@/components/footer";
import S1ContentSection from "@/components/s1/content-section";
import S1FeaturesSection from "@/components/s1/features-section";
import S1HeroSection from "@/components/s1/hero-section";
import { SITE_URL } from "@/lib/site";

const pageTitle = "S1 Gateway – Linux Edge Computing | Abstract Machines";
const pageDescription =
  "Linux-based IoT gateway combining S0 with BeagleV-Fire RISC-V. For industrial automation, edge AI, and container workloads. Built by Abstract Machines.";
const twitterDescription =
  "Linux-based IoT gateway combining S0 with BeagleV-Fire RISC-V. For industrial automation, edge AI, and container workloads.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/s1" },
  keywords: [
    "S1 Gateway",
    "BeagleV-Fire",
    "RISC-V",
    "Linux IoT Gateway",
    "Edge AI",
    "Industrial Automation",
    "Container Workloads",
    "Edge Computing",
    "Open Source Hardware",
  ],
  openGraph: {
    type: "website",
    title: pageTitle,
    description: pageDescription,
    url: `${SITE_URL}/s1`,
    siteName: "Abstract Machines Hardware",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "S1 IoT Gateway – Abstract Machines Hardware",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: twitterDescription,
    images: ["/opengraph-image.png"],
  },
};

const s1Schema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": `${SITE_URL}/s1/#product`,
  name: "S1 IoT Gateway",
  image: `${SITE_URL}/beaglev-fire.webp`,
  description:
    "Linux-based IoT gateway built on BeagleV-Fire RISC-V. Supports Wireless M-Bus, NB-IoT, LTE-M, WiFi, and BLE. Designed for industrial IoT and edge AI workloads.",
  brand: {
    "@type": "Brand",
    name: "Abstract Machines",
    url: "https://absmach.eu",
  },
  category: "IoT Gateway Hardware",
  url: `${SITE_URL}/s1`,
  manufacturer: { "@id": `${SITE_URL}/#organization` },
};

const s1Breadcrumb = {
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
      name: "S1 Gateway",
      item: `${SITE_URL}/s1`,
    },
  ],
};

export default function S1Page() {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD schema markup, not user input
        dangerouslySetInnerHTML={{ __html: JSON.stringify(s1Schema) }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD schema markup, not user input
        dangerouslySetInnerHTML={{ __html: JSON.stringify(s1Breadcrumb) }}
      />
      <S1HeroSection />
      <S1ContentSection />
      <S1FeaturesSection />
      <FooterSection />
    </>
  );
}
