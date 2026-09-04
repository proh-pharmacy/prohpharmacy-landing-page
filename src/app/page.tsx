import { Hero } from "@/features/hero/hero";
import { ServicesGrid } from "@/features/services/services-grid";
import { WholesaleContent } from "@/features/wholesale/wholesale-content";
import { HowItWorks } from "@/features/how-it-works/how-it-works";
import { DeliveryContent } from "@/features/delivery/delivery-content";
import { AboutContent } from "@/features/about/about-content";
import { FaqSection } from "@/features/faq/faq-section";
import { CtaBanner } from "@/features/cta/cta-banner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <WholesaleContent />
      <HowItWorks />
      <DeliveryContent />
      <AboutContent />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
