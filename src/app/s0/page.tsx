import type { Metadata } from "next";
import FooterSection from "@/components/footer";
import S0ContentSection from "@/components/s0/content-section";
import S0FeaturesSection from "@/components/s0/features-section";
import S0HeroSection from "@/components/s0/hero-section";

export const metadata: Metadata = {
  title: "S0 Gateway – Wireless IoT Hardware | Abstract Machines",
  description:
    "ESP32-C6 IoT gateway with Wireless M-Bus, NB-IoT, LTE-M, WiFi and BLE. Open-source, Zephyr RTOS, DIN-rail ready. Built by Abstract Machines.",
  alternates: { canonical: "/s0" },
  openGraph: {
    type: "website",
    title: "S0 Gateway – Wireless IoT Hardware | Abstract Machines",
    description:
      "ESP32-C6 IoT gateway with Wireless M-Bus, NB-IoT, LTE-M, WiFi and BLE. Open-source, Zephyr RTOS, DIN-rail ready. Built by Abstract Machines.",
    url: "https://hardware.absmach.eu/s0",
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
    title: "S0 Gateway – Wireless IoT Hardware | Abstract Machines",
    description:
      "ESP32-C6 IoT gateway with Wireless M-Bus, NB-IoT, LTE-M, WiFi and BLE. Open-source, Zephyr RTOS, DIN-rail ready.",
    images: ["/opengraph-image.png"],
  },
};

const s0Schema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "S0 IoT Gateway",
  description:
    "Modular IoT gateway powered by ESP32-C6 RISC-V. Supports Wireless M-Bus, NB-IoT, LTE-M, WiFi, and BLE. Runs Zephyr RTOS.",
  brand: { "@type": "Brand", name: "Abstract Machines" },
  category: "IoT Gateway Hardware",
  url: "https://hardware.absmach.eu/s0",
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

export default function S0Page() {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD schema markup, not user input
        dangerouslySetInnerHTML={{ __html: JSON.stringify(s0Schema) }}
      />
      <S0HeroSection />
      <S0ContentSection />
      <S0FeaturesSection />
      <FooterSection />
    </>
  );
}
