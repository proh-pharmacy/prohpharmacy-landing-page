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
        "Convenient access to medicines and pharmaceutical products for individual customers across Ghana.",
      icon: Pill,
      isRedAccent: false,
      ctaText: "Retail Enquiry",
      ctaHref: "/contact?type=retail",
    },
    {
      id: "wholesale",
      title: "Wholesale Pharmacy Supply",
      description:
        "Reliable wholesale medicine supply for pharmacies looking to restock and serve their customers.",
      icon: Building2,
      isRedAccent: true, // Specific red accent for important element per brand guideline
      ctaText: "Request Wholesale Supply",
      ctaHref: "/wholesale",
    },
    {
      id: "delivery",
      title: "Nationwide Delivery",
      description:
        "Carefully coordinated delivery to individuals and pharmacy businesses anywhere in Ghana.",
      icon: Truck,
      isRedAccent: false,
      ctaText: "Delivery Details",
      ctaHref: "/delivery",
    },
  ];

  return (
    <section className="py-14 md:py-20 bg-[#F9FBF9] border-y border-light-border">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Our Services"
          title="Pharmaceutical supply for individuals and businesses"
          description="Dependable access to authentic pharmaceutical products, tailored for personal prescription needs and pharmacy restocking."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
