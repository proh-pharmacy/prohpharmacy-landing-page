import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HeroIllustration } from "./hero-illustration";
import { TrustPoints } from "./trust-points";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-18 md:pb-24 border-b border-light-border/60">
      {/* Background Banner spanning across the entire hero section */}
      <div className="absolute inset-0 -z-10 pointer-events-none select-none">
        <Image
          src="/images/hero_bg_rings.png"
          alt="Pharmaceutical delivery geometric pattern"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right md:object-center"
        />
        {/* Subtle white vignette on left to keep text ultra-crisp while letting rings show through */}
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/80 to-transparent lg:via-white/40" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Clean, modern typography matching reference */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start space-y-5">
            {/* Brand Accent Bar matching reference visual */}
            <div className="w-12 h-1.5 bg-primary-green rounded-full" />

            <p className="text-xs sm:text-sm font-semibold tracking-wider text-primary-green uppercase">
              Retail & Wholesale Pharmaceutical Supply
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-main-text leading-[1.18] tracking-tight">
              Reliable medicines, delivered anywhere in Ghana.
            </h1>

            <p className="text-base sm:text-lg text-muted-text leading-relaxed max-w-xl">
              Proh Pharmacy provides dependable retail and wholesale medicine supply to
              individuals and pharmacies, with convenient delivery across Ghana.
            </p>

            {/* Clean, well-spaced CTA Buttons */}
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

          {/* Right Column: Rider Image cleanly standing over the banner background */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
