import type { Metadata } from "next";
import { ContactSection } from "@/features/contact/contact";
import { BranchesSection } from "@/features/branches/branches-section";
import { FaqSection } from "@/features/faq/faq-section";

export const metadata: Metadata = {
  title: "Contact Us | Request Quote & Medicine Enquiries",
  description:
    "Get in touch with Proh Pharmacy. Send your medicine list, request a wholesale supply quotation, or reach any of our 8 pharmacy branches directly.",
  keywords: [
    "Contact Proh Pharmacy",
    "Pharmacy phone number Ghana",
    "Wholesale medicine quote",
    "Pharmacy WhatsApp Ghana",
    "Proh Pharmacy branch numbers",
  ],
  alternates: {
    canonical: "https://prohpharmacy.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div>
      <ContactSection />
      <BranchesSection
        title="Direct Branch Lines & Locations"
        subtitle="Need to speak with a pharmacist at a specific location? Call or WhatsApp any of our 8 branches across Greater Accra."
        limit={6}
        showViewAll={true}
      />
      <FaqSection />
    </div>
  );
}

