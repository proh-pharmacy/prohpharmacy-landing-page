import type { Metadata } from "next";
import { WholesaleContent } from "@/features/wholesale/wholesale-content";
import { HowItWorks } from "@/features/how-it-works/how-it-works";

export const metadata: Metadata = {
  title: "Wholesale Pharmacy Supply | Bulk Medicine Restocking in Ghana",
  description:
    "Proh Pharmacy provides dependable wholesale medicine supply to pharmacies across Ghana. Request a wholesale quotation or submit your pharmacy medicine list today.",
  keywords: [
    "Wholesale pharmacy Ghana",
    "Pharmacy restocking Accra",
    "Bulk medicine supply Ghana",
    "Pharmaceutical distributor",
  ],
  alternates: {
    canonical: "https://prohpharmacy.com/wholesale",
  },
};

export default function WholesalePage() {
  return (
    <div>
      <WholesaleContent />
      <HowItWorks />
    </div>
  );
}
