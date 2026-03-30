import type { Metadata } from "next";
import FooterSection from "@/components/footer";
import S1ContentSection from "@/components/s1/content-section";
import S1FeaturesSection from "@/components/s1/features-section";
import S1HeroSection from "@/components/s1/hero-section";

export const metadata: Metadata = {
  title: "S1 Gateway – Linux Edge Computing | Abstract Machines",
  description:
    "Linux-based IoT gateway combining S0 with BeagleV-Fire RISC-V. For industrial automation, edge AI, and container workloads. Built by Abstract Machines.",
  alternates: { canonical: "/s1" },
  openGraph: {
    type: "website",
    title: "S1 Gateway – Linux Edge Computing | Abstract Machines",
    description:
      "Linux-based IoT gateway combining S0 with BeagleV-Fire RISC-V. For industrial automation, edge AI, and container workloads. Built by Abstract Machines.",
    url: "https://hardware.absmach.eu/s1",
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
    title: "S1 Gateway – Linux Edge Computing | Abstract Machines",
    description:
      "Linux-based IoT gateway combining S0 with BeagleV-Fire RISC-V. For industrial automation, edge AI, and container workloads.",
    images: ["/opengraph-image.png"],
  },
};

const s1Schema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "S1 IoT Gateway",
  image: "https://hardware.absmach.eu/beaglev-fire.webp",
  description:
    "Linux-based IoT gateway built on BeagleV-Fire RISC-V. Supports Wireless M-Bus, NB-IoT, LTE-M, WiFi, and BLE. Designed for industrial IoT and edge AI workloads.",
  brand: { "@type": "Brand", name: "Abstract Machines" },
  category: "IoT Gateway Hardware",
  url: "https://hardware.absmach.eu/s1",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "EUR",
    seller: {
      "@type": "Organization",
      name: "Abstract Machines",
      url: "https://absmach.eu",
    },
  },
};

const s1Breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hardware.absmach.eu" },
    { "@type": "ListItem", position: 2, name: "S1 Gateway", item: "https://hardware.absmach.eu/s1" },
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
