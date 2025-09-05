import { HeroSection } from "@/components/hero-section";
import { HowItWorks } from "@/components/how-it-works";
import { FeaturesGrid } from "@/components/features-grid";
import { SocialProof } from "@/components/social-proof";
import { PricingTeaser } from "@/components/pricing-teaser";
import { FAQSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <HowItWorks />
      <FeaturesGrid />
      <SocialProof />
      <PricingTeaser />
      <FAQSection />
      <Footer />
    </main>
  );
}