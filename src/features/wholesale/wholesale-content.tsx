import React from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { WholesaleActions } from "./wholesale-actions";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WholesaleContent() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Pharmacy Restocking & B2B Solutions"
          title="Reliable supply for pharmacies across Ghana"
          description="Proh Pharmacy supports pharmacies with convenient access to wholesale medicine supplies. Send us your requirements, request a quotation and arrange delivery to your location anywhere in Ghana."
        />

        {/* 3 Actions */}
        <WholesaleActions />

        {/* Informative Note regarding Commercial Terms & MOQs */}
        <div className="mt-8 bg-light-green/30 border border-light-border rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-3 max-w-2xl">
            <AlertCircle className="w-5 h-5 text-primary-green flex-shrink-0 mt-0.5" />
            <div className="text-xs text-muted-text space-y-1">
              <span className="font-semibold text-main-text block">
                Wholesale Pricing & Account Setup Notice
              </span>
              <p>
                To provide tailored support for licensed pharmacy facilities, wholesale pricing,
                minimum order thresholds, credit arrangements, and exact delivery schedules are
                confirmed directly upon receipt of your verified medicine list or quotation request.
              </p>
            </div>
          </div>

          <Button href="/contact?type=wholesale#contact-form" variant="primary" size="md" className="flex-shrink-0">
            Submit Wholesale Enquiry
          </Button>
        </div>
      </div>
    </section>
  );
}
