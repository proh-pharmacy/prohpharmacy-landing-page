import React from "react";
import Image from "next/image";

export function HeroIllustration() {
  return (
    <div className="relative w-full max-w-[500px] lg:max-w-[580px] mx-auto flex items-center justify-center select-none">
      {/* Rider Graphic layered over the full hero banner background */}
      <Image
        src="/images/hero_rider_without_bg.png"
        alt="Proh Pharmacy medicine delivery rider"
        width={1200}
        height={800}
        priority
        className="w-full h-auto object-contain drop-shadow-md"
      />
    </div>
  );
}
