import FooterSection from "@/components/footer";
import S0ContentSection from "@/components/s0/content-section";
import S0FeaturesSection from "@/components/s0/features-section";
import S0HeroSection from "@/components/s0/hero-section";

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
  },
};

export default function S0Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(s0Schema) }}
      />
      <S0HeroSection />
      <S0ContentSection />
      <S0FeaturesSection />
      <FooterSection />
    </>
  );
}
