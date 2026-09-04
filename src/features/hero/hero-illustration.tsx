import React from "react";
import Image from "next/image";

export function HeroIllustration() {
  return (
    <div className="relative w-full max-w-[560px] lg:max-w-[620px] aspect-[1.4/1] mx-auto flex items-center justify-center select-none">
      {/* Geometric Rings Background Container */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xs border border-light-border/40">
        <Image
          src="/images/hero_bg_rings.png"
          alt="Geometric pharmaceutical supply background"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 600px"
          className="object-cover object-center"
        />
      </div>

      {/* Layered Foreground Rider (Without Background) */}
      <div className="relative z-10 w-[94%] h-[94%] flex items-center justify-center pt-2">
        <Image
          src="/images/hero_rider_without_bg.png"
          alt="Proh Pharmacy medicine delivery rider"
          width={1200}
          height={800}
          priority
          className="w-full h-auto object-contain drop-shadow-sm"
        />
      </div>
    </div>
  );
}
