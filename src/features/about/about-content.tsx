import React from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { AboutPlaceholders } from "./about-placeholders";
import { Button } from "@/components/ui/button";

export function AboutContent({ isStandalonePage = false }: { isStandalonePage?: boolean }) {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="container-custom">
        <SectionHeader
          eyebrow="About Proh Pharmacy"
          title="Your trusted pharmaceutical supply partner"
          description="Proh Pharmacy is a retail and wholesale pharmaceutical business serving individuals and pharmacies across Ghana. We make it easier for customers and pharmacy businesses to access and restock medicines through dependable service and nationwide delivery."
        />

        {/* Corporate Background & Standards */}
        <div className="mt-8 bg-[#F9FBF9] rounded-2xl p-6 sm:p-8 border border-light-border">
          <div className="max-w-2xl mb-6">
            <h3 className="text-base font-bold text-main-text">
              Standards & Corporate Overview
            </h3>
            <p className="text-xs sm:text-sm text-muted-text mt-1">
              Official company registration and licensing records are maintained in accordance with
              Ghanaian pharmaceutical distribution regulations.
            </p>
          </div>

          <AboutPlaceholders />

          {!isStandalonePage && (
            <div className="mt-8 pt-4 border-t border-light-border/60 flex justify-start">
              <Button href="/about" variant="outline" size="sm">
                Learn More About Us
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
