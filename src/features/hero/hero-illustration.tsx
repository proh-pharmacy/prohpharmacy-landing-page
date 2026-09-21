"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export function HeroIllustration() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(true);

  // When image loads, it appears IMMEDIATELY.
  // We only delay the unmounting of the skeleton so it cross-fades away gracefully underneath.
  useEffect(() => {
    if (imageLoaded) {
      const timer = setTimeout(() => {
        setShowSkeleton(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [imageLoaded]);

  return (
    <div className="relative w-full max-w-[680px] aspect-[3/2] flex items-center justify-center select-none lg:w-[clamp(640px,58vw,790px)] lg:max-w-none lg:flex-none lg:justify-start">
      {/* Skeleton placeholder: stays mounted and cross-fades out smoothly when image appears */}
      {showSkeleton && (
        <div
          className={`w-full flex items-center justify-center transition-opacity duration-700 ${
            imageLoaded
              ? "opacity-0 pointer-events-none absolute inset-0"
              : "opacity-100 relative"
          }`}
        >
          <Image
            src="/images/hero_bg_rk_placeholder.svg"
            alt=""
            aria-hidden="true"
            width={1536}
            height={1024}
            unoptimized
            className="w-full h-auto object-contain"
          />
        </div>
      )}

      {/* Real image: fades in as the matching SVG placeholder fades out */}
      <div
        className={`w-full flex items-center justify-center absolute inset-0 ${
          imageLoaded ? "hero-artwork-fade-in" : "opacity-0 pointer-events-none"
        }`}
      >
        <Image
          src="/images/hero_bg_rk_1.webp"
          alt="Medicines supplied from Proh Pharmacy to pharmacies, hospitals, and healthcare facilities across Ghana"
          width={1200}
          height={800}
          sizes="(max-width: 1023px) 100vw, 58vw"
          preload
          onLoad={() => setImageLoaded(true)}
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}
