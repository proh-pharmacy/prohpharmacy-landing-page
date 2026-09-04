import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HeroIllustration } from "./hero-illustration";
import { TrustPoints } from "./trust-points";
import { ArrowRight, PhoneCall } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-linear-to-b from-[#F7FCF9] via-white to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <Badge variant="green" showDot>
              Retail & Wholesale Pharmaceutical Supply
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-main-text leading-[1.15] tracking-tight">
              Reliable medicines,{" "}
              <span className="text-deep-green underline decoration-bright-green/30 decoration-4 underline-offset-4">
                delivered anywhere
              </span>{" "}
              in Ghana.
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-text leading-relaxed max-w-2xl font-normal">
              Proh Pharmacy provides dependable retail and wholesale medicine supply to
              individuals and pharmacies, with convenient delivery across Ghana.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
              <Button href="/wholesale" size="lg" variant="primary" className="w-full sm:w-auto">
                <span>Request Wholesale Supply</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/contact" size="lg" variant="outline" className="w-full sm:w-auto">
                <PhoneCall className="w-4 h-4 text-deep-green" />
                <span>Contact Us</span>
              </Button>
            </div>

            {/* 3 Trust Points */}
            <div className="w-full pt-4">
              <TrustPoints />
            </div>
          </div>

          {/* Right Column: Visual Composition inspired by user reference */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
