import { Hero } from "@/features/hero/hero";
import { ServicesGrid } from "@/features/services/services-grid";
import { DeliveryContent } from "@/features/delivery/delivery-content";
import { FaqSection } from "@/features/faq/faq-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <DeliveryContent />
      <FaqSection />
    </>
  );
}
