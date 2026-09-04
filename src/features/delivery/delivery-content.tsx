import React from "react";
import { Button } from "@/components/ui/button";
import { GhanaMapGraphic } from "./ghana-map-graphic";
import { MapPin, Truck, Headphones } from "lucide-react";

export function DeliveryContent() {
  const highlights = [
    {
      title: "Nationwide coverage",
      desc: "Direct deliveries across all 16 administrative regions in Ghana.",
      icon: MapPin,
    },
    {
      title: "Retail and wholesale delivery",
      desc: "Secure transport for individual prescriptions and bulk pharmacy cartons.",
      icon: Truck,
    },
    {
      title: "Convenient ordering support",
      desc: "Fast dispatch coordination via phone, WhatsApp, or email.",
      icon: Headphones,
    },
  ];

  return (
    <section className="py-14 md:py-20 bg-deep-green text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-7 space-y-5">
            <p className="text-xs font-semibold tracking-wider text-bright-green uppercase">
              Nationwide Logistics
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
              Delivery anywhere in Ghana
            </h2>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-lg">
              Whether you are an individual customer or a pharmacy business, Proh Pharmacy can
              arrange delivery to your location anywhere in the country.
            </p>

            {/* 3 Highlights */}
            <div className="space-y-3 pt-2">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-3.5 p-3.5 rounded-lg bg-white/5 border border-white/10"
                  >
                    <Icon className="w-5 h-5 text-bright-green flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                      <p className="text-xs text-white/70 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-3 flex flex-wrap gap-3">
              <Button href="/contact?type=general" size="md" variant="white">
                Arrange a Delivery
              </Button>
              <Button
                href="/wholesale"
                size="md"
                variant="outline"
                className="text-white border-white/30 hover:bg-white/10 hover:border-white"
              >
                Wholesale Restocking
              </Button>
            </div>
          </div>

          {/* Right Column: Subtle Ghana Map Illustration */}
          <div className="lg:col-span-5">
            <GhanaMapGraphic />
          </div>
        </div>
      </div>
    </section>
  );
}
