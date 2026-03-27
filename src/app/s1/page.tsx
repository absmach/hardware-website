import FooterSection from "@/components/footer";
import S1ContentSection from "@/components/s1/content-section";
import S1FeaturesSection from "@/components/s1/features-section";
import S1HeroSection from "@/components/s1/hero-section";

const s1Schema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "S1 IoT Gateway",
  description:
    "Linux-based IoT gateway built on BeagleV-Fire RISC-V. Supports Wireless M-Bus, NB-IoT, LTE-M, WiFi, and BLE. Designed for industrial IoT and edge AI workloads.",
  brand: { "@type": "Brand", name: "Abstract Machines" },
  category: "IoT Gateway Hardware",
  url: "https://hardware.absmach.eu/s1",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "EUR",
  },
};

export default function S1Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(s1Schema) }}
      />
      <S1HeroSection />
      <S1ContentSection />
      <S1FeaturesSection />
      <FooterSection />
    </>
  );
}
