import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HeroIllustration } from "./hero-illustration";

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[500px] md:min-h-[580px] lg:min-h-[620px] flex items-center pt-12 pb-16 md:pt-16 md:pb-20 border-b border-light-border/60">
      {/* Background Banner spanning across the entire hero section */}
      <div className="absolute inset-0 -z-10 pointer-events-none select-none">
        <Image
          src="/images/hero_bg_alternate_with_map.png"
          alt="Pharmaceutical delivery geometric pattern"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right md:object-center"
        />
        {/* Soft vignette to maintain crisp typography readability */}
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/80 to-transparent lg:via-white/30" />
      </div>

      {/* Centered snug container bringing text and image close together */}
      <div className="w-full max-w-5xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* Left Column: Minimal, bold stacked typography */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-6">
            {/* Brand Accent Bar */}
            <div className="w-14 h-1.5 bg-primary-green rounded-full" />

            {/* 3-line clean stacked headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-main-text leading-[1.14] tracking-tight">
              Medicines<br />
              Delivered<br />
              Across Ghana
            </h1>

            {/* Red Tinted Minimal CTA */}
            <div className="pt-2">
              <Link
                href="/wholesale"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-red-accent hover:text-red-700 transition-colors group"
              >
                <ArrowUpRight className="w-4 h-4 text-red-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                <span className="underline decoration-red-200 hover:decoration-red-accent underline-offset-4">
                  Request supply
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Rider sitting immediately adjacent to the text */}
          <div className="lg:col-span-7 flex justify-start items-center lg:-ml-2">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
