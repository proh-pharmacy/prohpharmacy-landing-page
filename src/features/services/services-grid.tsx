import React from "react";
import { Pill, Building2, Truck, FileText, Stethoscope, Clock } from "lucide-react";
import { ServiceCard } from "./service-card";
import { ServicesBackgroundAccents } from "./services-background-accents";

export function ServicesGrid() {
  const services = [
    {
      id: "retail",
      title: "Retail Medicine Supply",
      description:
        "Direct access to genuine prescription drugs and OTC healthcare essentials for individuals and families across Ghana.",
      icon: Pill,
      imageUrl:
        "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=800&q=80",
      isRedAccent: false,
      ctaText: "Learn more",
      ctaHref: "/contact?type=retail",
    },
    {
      id: "wholesale",
      title: "Wholesale Pharmacy Supply",
      description:
        "Consistent bulk pharmaceutical supply, commercial lines, and tiered restocking discounts for registered community pharmacies.",
      icon: Building2,
      imageUrl:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      isRedAccent: true,
      ctaText: "Request supply",
      ctaHref: "/wholesale",
    },
    {
      id: "delivery",
      title: "Nationwide Medicine Delivery",
      description:
        "Temperature-monitored courier transit ensuring timely and secure doorstep delivery anywhere within Greater Accra and nationwide.",
      icon: Truck,
      imageUrl:
        "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80",
      isRedAccent: false,
      ctaText: "Learn more",
      ctaHref: "/delivery",
    },
    {
      id: "refills",
      title: "Prescription Refill Service",
      description:
        "Seamless digital prescription uploads and scheduled automatic refills for chronic disease and ongoing wellness management.",
      icon: FileText,
      imageUrl:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
      isRedAccent: false,
      ctaText: "Learn more",
      ctaHref: "/contact?type=prescription",
    },
    {
      id: "institutional",
      title: "Institutional & Clinic Supply",
      description:
        "Contracted pharmaceutical procurement, emergency supplies, and inventory replenishment for clinics, hospitals, and maternity centers.",
      icon: Stethoscope,
      imageUrl:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
      isRedAccent: false,
      ctaText: "Learn more",
      ctaHref: "/contact?type=institutional",
    },
    {
      id: "emergency",
      title: "24/7 Emergency Pharmacy",
      description:
        "Round-the-clock urgent medication dispatch, essential injectables, and critical care support when you need it most.",
      icon: Clock,
      imageUrl:
        "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80",
      isRedAccent: true,
      ctaText: "Emergency line",
      ctaHref: "/contact#emergency",
    },
  ];

  return (
    <section className="relative overflow-visible pt-6 md:pt-10 pb-16 md:pb-24 bg-[#F0F7F3] border-b border-light-border/60">
      <div className="container-custom relative overflow-visible">
        {/* Subtle Pharmacy Background Accents flanking cards */}
        <ServicesBackgroundAccents />

        {/* Clean Minimal Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2.5">
            <span className="w-6 h-0.5 bg-primary-green rounded-full" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-main-text">
              Our Services
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 font-normal mt-2 leading-relaxed">
            Explore our range of pharmaceutical services
          </p>
        </div>

        {/* 3x2 Grid matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 relative z-10">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
