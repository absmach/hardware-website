import FooterSection from "@/components/footer";
import S0ContentSection from "@/components/s0/content-section";
import S0FeaturesSection from "@/components/s0/features-section";
import S0HeroSection from "@/components/s0/hero-section";

export default function S0Page() {
  return (
    <>
      <S0HeroSection />
      <S0ContentSection />
      <S0FeaturesSection />
      <FooterSection />
    </>
  );
}
