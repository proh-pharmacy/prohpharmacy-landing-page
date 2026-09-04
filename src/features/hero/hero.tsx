import React from "react";
import { Button } from "@/components/ui/button";
import { HeroIllustration } from "./hero-illustration";
import { TrustPoints } from "./trust-points";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Subtle, Refined Headline & Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-5">
            <p className="text-xs sm:text-sm font-semibold tracking-wider text-primary-green uppercase">
              Retail & Wholesale Pharmaceutical Supply
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-main-text leading-[1.2] tracking-tight">
              Reliable medicines, delivered anywhere in Ghana.
            </h1>

            <p className="text-base sm:text-lg text-muted-text leading-relaxed max-w-xl">
              Proh Pharmacy provides dependable retail and wholesale medicine supply to
              individuals and pharmacies, with convenient delivery across Ghana.
            </p>

            {/* Clean CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <Button href="/wholesale" size="md" variant="primary">
                Request Wholesale Supply
              </Button>
              <Button href="/contact" size="md" variant="outline">
                Contact Us
              </Button>
            </div>

            {/* Subtle Inline Trust Points */}
            <div className="w-full pt-2">
              <TrustPoints />
            </div>
          </div>

          {/* Right Column: Clean Vector Illustration inspired by user reference */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
