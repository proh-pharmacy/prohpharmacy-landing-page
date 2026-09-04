import React from "react";

export function HeroDivider() {
  return (
    <div
      aria-hidden="true"
      className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none select-none z-10 translate-y-[1px]"
    >
      <svg
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
        className="w-full h-12 sm:h-16 md:h-20 lg:h-24 block"
      >
        <defs>
          <linearGradient id="heroMintFade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="62%" stopColor="#f2fffb" />
            <stop offset="100%" stopColor="#dff8ef" />
          </linearGradient>
        </defs>

        {/* Soft mint accent wave layer */}
        <path
          d="M0 112c60 20 120 2 180-20 60-22 120-8 180 14 60 22 120 2 180-18 60-20 120-6 180 14 60 20 120 2 180-18 60-20 120-8 180 10 60 18 120 4 180-16 60-20 120-20 180-4V180H0Z"
          fill="url(#heroMintFade)"
          opacity="0.65"
        />

        {/* Primary wave filled with the Services section background (#F0F7F3) */}
        <path
          d="M0 126c60 20 120 2 180-20 60-22 120-8 180 14 60 22 120 2 180-18 60-20 120-6 180 14 60 20 120 2 180-18 60-20 120-8 180 10 60 18 120 4 180-16 60-20 120-20 180-4V180H0Z"
          fill="#F0F7F3"
        />

        {/* Subtle mint wave contour stroke */}
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
