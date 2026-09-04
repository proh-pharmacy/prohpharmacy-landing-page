import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GhanaMapGraphic } from "./ghana-map-graphic";
import { MapPin, Truck, Headphones } from "lucide-react";

export function DeliveryContent() {
  const highlights = [
    {
      title: "Nationwide coverage",
      desc: "Comprehensive logistics extending across all 16 administrative regions in Ghana.",
      icon: MapPin,
    },
    {
      title: "Retail and wholesale delivery",
      desc: "Safe transit handling for single patient prescription orders and high-volume pharmacy cartons.",
      icon: Truck,
    },
    {
      title: "Convenient ordering support",
      desc: "Direct coordination via phone, WhatsApp, or email to verify delivery arrival details.",
      icon: Headphones,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-linear-to-br from-deep-green via-[#054F1C] to-[#033713] text-white overflow-hidden relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="green" showDot className="bg-white/10 text-white border-white/20">
              Reliable Logistics
            </Badge>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Delivery anywhere in Ghana
            </h2>

            <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-xl">
              Whether you are an individual customer or a pharmacy business, Proh Pharmacy can
              arrange delivery to your location anywhere in the country.
            </p>

            {/* 3 Highlights */}
            <div className="space-y-4 pt-2">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-bright-green">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-white/75 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button href="/contact?type=general" size="lg" variant="white">
                Arrange a Delivery
              </Button>
              <Button href="/wholesale" size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 hover:border-white">
                Wholesale Pharmacy Restock
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
