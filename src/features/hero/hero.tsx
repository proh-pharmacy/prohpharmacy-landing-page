import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Pacifico } from "next/font/google";
import { HeroIllustration } from "./hero-illustration";
import { HeroDivider } from "./hero-divider";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[550px] md:min-h-[620px] lg:min-h-[660px] flex items-center pt-24 pb-14 sm:pt-28 md:pt-32 md:pb-20">
      {/* Background Banner spanning across the entire hero section with subtle optical blur */}
      <div className="absolute inset-0 -z-10 pointer-events-none select-none overflow-hidden">
        <Image
          src="/images/hero_bg_alternate_with_map.png"
          alt="Pharmaceutical delivery geometric pattern"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right md:object-center blur-[1.5px] scale-[1.02]"
        />
        {/* Crisp original vignette allowing the map and pattern to pop cleanly */}
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/70 to-transparent lg:via-white/20" />
      </div>

      {/* Centered snug container bringing text and image close together */}
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* Left Column: Minimal, bold stacked typography */}
          <div className="lg:col-span-5 flex flex-col items-start">
            {/* Brand Accent Bar tucked right above 'we' */}
            <div className="w-12 sm:w-14 h-1.5 bg-primary-green rounded-full mb-2 sm:mb-2.5" />

            {/* Stacked headline with 'we' in Pacifico red script */}
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-main-text leading-[1.12] tracking-tight">
              <span className={`${pacifico.className} block text-2xl sm:text-3xl lg:text-[34px] text-red-accent font-normal tracking-normal mb-1`}>
                we
              </span>
              Supply<br />
              Medicines<br />
              Across Ghana
            </h1>

            {/* Non-intrusive faded supporting phrase with subtle red dotted highlight */}
            <p className="text-sm sm:text-[15px] text-gray-500 font-normal leading-relaxed max-w-sm mt-5 sm:mt-6">

              <span className="text-red-accent/90 border-b border-dotted border-red-accent/40 pb-0.5 font-medium">
                Retail and wholesale
              </span>{" "}
              supply of medicines to  individuals, healthcare facilities and pharmacies.
            </p>

            {/* Solid Red CTA matching the header */}
            <div className="pt-5 sm:pt-6">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 text-sm sm:text-base font-semibold tracking-tight px-5 py-3 bg-red-accent text-white hover:bg-red-accent-hover transition-colors"
              >
                <span>Request supply</span>
                <ArrowUpRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Rider sitting immediately adjacent to the text */}
          <div className="lg:col-span-7 flex justify-start items-center lg:-ml-2">
            <HeroIllustration />
          </div>
        </div>
      </div>

      {/* Raw SVG wave divider transitioning smoothly into services */}
      <HeroDivider />
    </section>
  );
}
