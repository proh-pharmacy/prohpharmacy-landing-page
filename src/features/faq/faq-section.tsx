import React from "react";
import { FaqAccordion } from "./faq-accordion";

export function FaqSection() {
  return (
    <section className="py-16 md:py-24 bg-[#F0F7F3] border-b border-light-border/60">
      <div className="container-custom">
        {/* Clean Minimal Section Header matching Services & Delivery */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2.5">
            <span className="w-6 h-0.5 bg-primary-green rounded-full" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-main-text">
              Common Questions About Our Supply
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 font-normal mt-2 leading-relaxed">
            Clear answers regarding our retail and wholesale medicine distribution and courier delivery services across Ghana.
          </p>
        </div>

        <FaqAccordion />
      </div>
    </section>
  );
}
