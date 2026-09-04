import React from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { FaqAccordion } from "./faq-accordion";

export function FaqSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Frequently Asked Questions"
          title="Common Questions About Our Supply"
          description="Clear answers regarding our retail and wholesale medicine distribution and courier delivery services across Ghana."
        />

        <FaqAccordion />
      </div>
    </section>
  );
}
