import React from "react";

export function AboutDivider() {
  return (
    <div
      aria-hidden="true"
      className="absolute bottom-0 left-0 right-0 z-10 w-full translate-y-[1px] overflow-hidden leading-none pointer-events-none select-none"
    >
      <svg
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
        className="block h-12 w-full sm:h-16 md:h-20 lg:h-24"
      >
        <defs>
          <linearGradient id="aboutMintFade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
            <stop offset="62%" stopColor="#f2fffb" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#dff8ef" />
          </linearGradient>
        </defs>

        <path
          d="M0 112c60 20 120 2 180-20 60-22 120-8 180 14 60 22 120 2 180-18 60-20 120-6 180 14 60 20 120 2 180-18 60-20 120-8 180 10 60 18 120 4 180-16 60-20 120-20 180-4V180H0Z"
          fill="url(#aboutMintFade)"
          opacity="0.65"
        />

        <path
          d="M0 126c60 20 120 2 180-20 60-22 120-8 180 14 60 22 120 2 180-18 60-20 120-6 180 14 60 20 120 2 180-18 60-20 120-8 180 10 60 18 120 4 180-16 60-20 120-20 180-4V180H0Z"
          fill="#ffffff"
        />

        <path
          d="M0 126c60 20 120 2 180-20 60-22 120-8 180 14 60 22 120 2 180-18 60-20 120-6 180 14 60 20 120 2 180-18 60-20 120-8 180 10 60 18 120 4 180-16 60-20 120-20 180-4"
          fill="none"
          stroke="#9fe8d2"
          strokeWidth="2"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
