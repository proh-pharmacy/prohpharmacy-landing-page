import React from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { WholesaleActions } from "./wholesale-actions";

export function WholesaleContent() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Pharmacy Supply"
          title="Reliable supply for pharmacies across Ghana"
          description="Proh Pharmacy supports pharmacies with convenient access to wholesale medicine supplies. Send us your requirements, request a quotation and arrange delivery to your location anywhere in Ghana."
        />

        {/* 3 Actions */}
        <WholesaleActions />

        <p className="text-xs text-center text-muted-text max-w-xl mx-auto mt-4">
          Wholesale price lists, commercial terms, and credit arrangements are confirmed directly
          upon receipt of your facility requirements.
        </p>
      </div>
    </section>
  );
}
