import React from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { AboutPlaceholders } from "./about-placeholders";
import { ShieldCheck, Truck, Store, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutContent({ isStandalonePage = false }: { isStandalonePage?: boolean }) {
  const highlights = [
    {
      title: "Individual Retail Medicine Supply",
      desc: "Convenient, dependable access to vital medicines for personal and family healthcare needs across Ghana.",
      icon: Store,
    },
    {
      title: "Pharmacy Restocking & Wholesale",
      desc: "Structured distribution assisting retail pharmacies and healthcare centres with steady medicine supplies.",
      icon: ShieldCheck,
    },
    {
      title: "Nationwide Courier Logistics",
      desc: "Careful packaging and swift nationwide delivery from our central distribution channel to all 16 regions.",
      icon: Truck,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <SectionHeader
          eyebrow="About Proh Pharmacy"
          title="Your trusted pharmaceutical supply partner"
          description="Proh Pharmacy is a retail and wholesale pharmaceutical business serving individuals and pharmacies across Ghana. We make it easier for customers and pharmacy businesses to access and restock medicines through dependable service and nationwide delivery."
        />

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-light-border p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-light-green text-deep-green flex items-center justify-center mb-4 border border-light-border">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-main-text">{item.title}</h3>
                  <p className="text-sm text-muted-text mt-2 leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-primary-green">
                  <CheckCircle className="w-4 h-4" />
                  <span>Quality Assured</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verified placeholders section */}
        <div className="mt-16 bg-light-green/40 rounded-3xl p-6 sm:p-10 border border-light-border">
          <div className="max-w-2xl">
            <h3 className="text-xl font-bold text-main-text">
              Corporate Governance & Verified Information
            </h3>
            <p className="text-sm text-muted-text mt-2">
              Proh Pharmacy maintains strict compliance with national healthcare regulatory
              standards. As certified documents and official photographs are approved by the
              management team, they will appear below.
            </p>
          </div>

          <div className="mt-6">
            <AboutPlaceholders />
          </div>

          {!isStandalonePage && (
            <div className="mt-8 flex justify-center">
              <Button href="/about" variant="outline" size="md">
                Read More About Our Background
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
