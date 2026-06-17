import type { Metadata } from "next";
import FooterSection from "@/components/footer";
import S0ContentSection from "@/components/s0/content-section";
import S0FeaturesSection from "@/components/s0/features-section";
import S0HeroSection from "@/components/s0/hero-section";
import { SITE_URL } from "@/lib/site";

const pageTitle = "S0 Gateway – Wireless IoT Hardware | Abstract Machines";
const pageDescription =
  "ESP32-C6 IoT gateway with Wireless M-Bus, NB-IoT, LTE-M, WiFi and BLE. Open-source, Zephyr RTOS, DIN-rail ready. Built by Abstract Machines.";
const twitterDescription =
  "ESP32-C6 IoT gateway with Wireless M-Bus, NB-IoT, LTE-M, WiFi and BLE. Open-source, Zephyr RTOS, DIN-rail ready.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/s0" },
  keywords: [
    "S0 Gateway",
    "ESP32-C6",
    "Wireless M-Bus",
    "NB-IoT",
    "LTE-M",
    "IoT Gateway",
    "Zephyr RTOS",
    "DIN-rail",
    "Open Source Hardware",
    "Smart Metering",
  ],
  openGraph: {
    type: "website",
    title: pageTitle,
    description: pageDescription,
    url: `${SITE_URL}/s0`,
    siteName: "Abstract Machines Hardware",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "S0 IoT Gateway – Abstract Machines Hardware",
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

const s0Schema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": `${SITE_URL}/s0/#product`,
  name: "S0 IoT Gateway",
  image: `${SITE_URL}/s0.webp`,
  description:
    "Modular IoT gateway powered by ESP32-C6 RISC-V. Supports Wireless M-Bus, NB-IoT, LTE-M, WiFi, and BLE. Runs Zephyr RTOS.",
  brand: {
    "@type": "Brand",
    name: "Abstract Machines",
    url: "https://absmach.eu",
  },
  category: "IoT Gateway Hardware",
  url: `${SITE_URL}/s0`,
  manufacturer: { "@id": `${SITE_URL}/#organization` },
};

const s0Breadcrumb = {
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
      name: "S0 Gateway",
      item: `${SITE_URL}/s0`,
    },
  ],
};

export default function S0Page() {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD schema markup, not user input
        dangerouslySetInnerHTML={{ __html: JSON.stringify(s0Schema) }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD schema markup, not user input
        dangerouslySetInnerHTML={{ __html: JSON.stringify(s0Breadcrumb) }}
      />
      <S0HeroSection />
      <S0ContentSection />
      <S0FeaturesSection />
      <FooterSection />
    </>
  );
}
