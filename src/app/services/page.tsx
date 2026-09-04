import type { Metadata } from "next";
import { ServicesGrid } from "@/features/services/services-grid";
import { HowItWorks } from "@/features/how-it-works/how-it-works";
import { CtaBanner } from "@/features/cta/cta-banner";

export const metadata: Metadata = {
  title: "Pharmaceutical Services | Retail, Wholesale & Delivery",
  description:
    "Explore Proh Pharmacy services: Retail medicine supply for individual patients, bulk wholesale restocking for pharmacies, and nationwide delivery across Ghana.",
  keywords: [
    "Pharmacy services Ghana",
    "Retail medicine supply",
    "Wholesale pharmacy supply",
    "Prescription delivery Ghana",
  ],
};

export default function ServicesPage() {
  return (
    <div className="pt-6">
      <ServicesGrid />
      <HowItWorks />
      <CtaBanner />
    </div>
  );
}
