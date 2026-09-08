import { Hero } from "@/features/hero/hero";
import { ServicesGrid } from "@/features/services/services-grid";
import { BranchesSection } from "@/features/branches/branches-section";
import { DeliveryContent } from "@/features/delivery/delivery-content";
import { FaqSection } from "@/features/faq/faq-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <BranchesSection
        title="Our Pharmacy Branches & Marts"
        subtitle="Visit any of our 8 strategically located pharmacy branches across Greater Accra for 24/7 retail dispensing, wholesale supply, and diagnostic testing."
        limit={3}
        showViewAll={true}
      />
      <DeliveryContent />
      <FaqSection />
    </>
  );
}

