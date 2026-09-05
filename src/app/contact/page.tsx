import type { Metadata } from "next";
import { ContactSection } from "@/features/contact/contact";
import { FaqSection } from "@/features/faq/faq-section";

export const metadata: Metadata = {
  title: "Contact Us | Request Quote & Medicine Enquiries",
  description:
    "Get in touch with Proh Pharmacy. Send your medicine list, request a wholesale supply quotation, or contact our team via phone, email, or WhatsApp.",
  keywords: [
    "Contact Proh Pharmacy",
    "Pharmacy phone number Ghana",
    "Wholesale medicine quote",
    "Pharmacy WhatsApp Ghana",
  ],
  alternates: {
    canonical: "https://prohpharmacy.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div>
      <ContactSection />
      <FaqSection />
    </div>
  );
}
