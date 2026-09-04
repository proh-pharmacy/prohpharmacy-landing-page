import type { Metadata } from "next";
import { DeliveryContent } from "@/features/delivery/delivery-content";
import { HowItWorks } from "@/features/how-it-works/how-it-works";

export const metadata: Metadata = {
  title: "Nationwide Medicine Delivery | All 16 Regions of Ghana",
  description:
    "Proh Pharmacy arranges safe, reliable medicine delivery to individuals and pharmacies anywhere in Ghana. Learn about our nationwide courier logistics and dispatch.",
  keywords: [
    "Medicine delivery Ghana",
    "Pharmacy delivery Accra Kumasi",
    "Prescription delivery nationwide",
    "Ghana pharmaceutical transport",
  ],
};

export default function DeliveryPage() {
  return (
    <div>
      <DeliveryContent />
      <HowItWorks />
    </div>
  );
}
