import React from "react";
import { Pill, Building2, Truck } from "lucide-react";
import { ServiceCard } from "./service-card";
import { SectionHeader } from "@/components/ui/section-header";

export function ServicesGrid() {
  const services = [
    {
      id: "retail",
      title: "Retail Medicine Supply",
      description:
        "Convenient access to medicines and pharmaceutical products for individual customers.",
      features: [
        "Prescription and OTC medicine sourcing",
        "Assistance with personal medicine requirements",
        "Direct delivery to your residence or pickup location",
      ],
      icon: Pill,
      badge: "For Individuals",
      isRedAccent: false,
      ctaText: "Retail Medicine Enquiry",
      ctaHref: "/contact?type=retail",
    },
    {
      id: "wholesale",
      title: "Wholesale Pharmacy Supply",
      description:
        "Reliable wholesale medicine supply for pharmacies looking to restock and serve their customers.",
      features: [
        "Comprehensive medicine lists for pharmacy restocking",
        "Quotation support for bulk pharmacy orders",
        "Reliable supplier partnership for Ghanaian pharmacies",
      ],
      icon: Building2,
      badge: "Core Service",
      isRedAccent: true, // Specific red accent for important element
      ctaText: "Request Wholesale Quotation",
      ctaHref: "/wholesale",
    },
    {
      id: "delivery",
      title: "Nationwide Delivery",
      description:
        "Delivery to individuals and pharmacy businesses anywhere in Ghana.",
      features: [
        "Coverage across all 16 regions of Ghana",
        "Protected packaging for medicine safety",
        "Fast dispatch and reliable delivery tracking support",
      ],
      icon: Truck,
      badge: "Ghana-Wide",
      isRedAccent: false,
      ctaText: "Explore Delivery Coverage",
      ctaHref: "/delivery",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F8FCFA] border-y border-light-border/60">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Comprehensive Pharmaceutical Supply"
          title="Designed for Individuals and Pharmacy Businesses"
          description="Whether you need essential prescription medication for your home or wholesale restocking for your pharmacy, Proh Pharmacy delivers dependable healthcare supply nationwide."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
