import React from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { ContactInfo } from "./contact-info";
import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-[#F8FCFA] border-t border-light-border/60">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Communication & Intake"
          title="Contact Proh Pharmacy"
          description="Send your medicine request, request a wholesale price list, or enquire about nationwide delivery to your region."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Verified contact & placeholders */}
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
