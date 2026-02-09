import { FAQSection } from "@/components/faq-section";
import FeatureSection from "@/components/feature-section";
import FooterSection from "@/components/footer";
import { HeroSection } from "@/components/hero";
import HowItWorksSection from "@/components/how-it-works-section";
import ProductsSection from "@/components/products-section";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <Separator className="container mx-auto" />
      <ProductsSection />
      <Separator className="container mx-auto" />
      <FeatureSection />
      <Separator className="container mx-auto" />
      <HowItWorksSection />
      <Separator className="container mx-auto" />
      <FAQSection />
      <Separator className="container mx-auto" />
      <FooterSection />
    </div>
  );
}
