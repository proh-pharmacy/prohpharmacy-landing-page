import React from "react";
import { FaqAccordion } from "./faq-accordion";
import { Reveal } from "@/components/ui/reveal";

export function FaqSection() {
  return (
    <section className="py-14 md:py-20 bg-[#F4F8F5] border-b border-light-border/60">
      <div className="container-custom">
        {/* Clean Subtle Section Header Matching Services & Branches */}
        <Reveal direction="up" distance={20} duration={500}>
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-[28px] font-medium tracking-normal text-[#2C3338]">
              Common Questions About Our Supply
            </h2>
            <p className="text-xs sm:text-[13px] text-[#787C82] font-normal mt-2 leading-relaxed">
              Clear answers regarding our retail and wholesale medicine distribution and courier delivery services across Ghana.
            </p>
          </div>
        </Reveal>

        <Reveal direction="up" distance={22} duration={550} delay={100}>
          <FaqAccordion />
        </Reveal>
      </div>
    </section>
  );
}
