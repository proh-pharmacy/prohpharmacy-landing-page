import React from "react";
import { ServiceCard } from "./service-card";
import { ServicesBackgroundAccents } from "./services-background-accents";
import { Reveal } from "@/components/ui/reveal";
import {
  MedicinePillIcon,
  LayeredSupplyIcon,
  DeliveryBoxIcon,
  PrescriptionBookIcon,
  QualityCheckIcon,
  ServiceChatIcon,
} from "./service-icons";

export function ServicesGrid() {
  const services = [
    {
      id: "retail",
      title: "Retail Medicine Supply",
      description:
        "Direct access to genuine prescription drugs and OTC healthcare essentials for individuals and families across Ghana.",
      icon: MedicinePillIcon,
      isRedAccent: false,
      ctaText: "Learn more",
      ctaHref: "/contact?type=retail",
    },
    {
      id: "wholesale",
      title: "Wholesale Pharmacy Supply",
      description:
        "Consistent bulk pharmaceutical supply, commercial lines, and tiered restocking discounts for registered community pharmacies.",
      icon: LayeredSupplyIcon,
      isRedAccent: true,
      ctaText: "Request supply",
      ctaHref: "/wholesale",
    },
    {
      id: "delivery",
      title: "Nationwide Medicine Delivery",
      description:
        "Temperature-monitored courier transit ensuring timely and secure doorstep delivery anywhere within Greater Accra and nationwide.",
      icon: DeliveryBoxIcon,
      isRedAccent: false,
      ctaText: "Learn more",
      ctaHref: "/delivery",
    },
    {
      id: "refills",
      title: "Prescription Refill Service",
      description:
        "Seamless digital prescription uploads and scheduled automatic refills for chronic disease and ongoing wellness management.",
      icon: PrescriptionBookIcon,
      isRedAccent: false,
      ctaText: "Learn more",
      ctaHref: "/contact?type=prescription",
    },
    {
      id: "institutional",
      title: "Institutional & Clinic Supply",
      description:
        "Contracted pharmaceutical procurement, emergency supplies, and inventory replenishment for clinics, hospitals, and maternity centers.",
      icon: QualityCheckIcon,
      isRedAccent: false,
      ctaText: "Learn more",
      ctaHref: "/contact?type=institutional",
    },
    {
      id: "emergency",
      title: "24/7 Emergency Pharmacy",
      description:
        "Round-the-clock urgent medication dispatch, essential injectables, and critical care support when you need it most.",
      icon: ServiceChatIcon,
      isRedAccent: true,
      ctaText: "Emergency line",
      ctaHref: "/contact?type=emergency",
    },
  ];

  return (
    <section className="relative overflow-hidden pt-8 md:pt-12 pb-16 md:pb-24 bg-[#F0F7F3] border-b border-light-border/60">
      <div className="container-custom relative">
        {/* Subtle Pharmacy Background Accents flanking cards */}
        <ServicesBackgroundAccents />

        {/* Ambient Glowing Green Lights Behind Glass Container */}
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-80 h-80 rounded-full bg-[#05C075]/16 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-80 h-80 rounded-full bg-[#087A2D]/12 blur-3xl pointer-events-none" />

        {/* Clean Minimal Section Header */}
        <Reveal direction="up" distance={20} duration={500}>
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12 relative z-10">
            <div className="inline-flex items-center gap-2.5">
              <span className="w-6 h-0.5 bg-primary-green rounded-full" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-main-text">
                Our Services
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 font-normal mt-2 leading-relaxed">
              Explore our range of pharmaceutical services tailored for Ghana
            </p>
          </div>
        </Reveal>

        {/* Frosted Glass Monolithic Grid Card with Glowing Green Tint Lines */}
        <div className="bg-white/85 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-[#05C075]/25 shadow-[0_4px_24px_rgba(4,94,31,0.04)] overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10">
          {services.map((service, idx) => (
            <ServiceCard
              key={service.id}
              {...service}
              index={idx}
              total={services.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
