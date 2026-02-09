import FooterSection from "@/components/footer";
import S1ContentSection from "@/components/s1/content-section";
import S1FeaturesSection from "@/components/s1/features-section";
import S1HeroSection from "@/components/s1/hero-section";

export default function S1Page() {
  return (
    <>
      <S1HeroSection />
      <S1ContentSection />
      <S1FeaturesSection />
      <FooterSection />
    </>
  );
}
