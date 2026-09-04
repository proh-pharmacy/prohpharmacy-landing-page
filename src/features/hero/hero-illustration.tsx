import React from "react";

export function HeroIllustration() {
  return (
    <div className="relative w-full max-w-[480px] aspect-[1.15/1] mx-auto flex items-center justify-center select-none">
      {/* Organic Curved Wave Backdrop matching reference image style */}
      <svg
        viewBox="0 0 540 460"
        className="w-full h-full drop-shadow-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="heroTealGrad" x1="20%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#08A366" />
            <stop offset="60%" stopColor="#087A2D" />
            <stop offset="100%" stopColor="#045E1F" />
          </linearGradient>
          <radialGradient id="heroInnerGlow" cx="60%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#01A42F" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#045E1F" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Fluid curved wave contour inspired directly by reference mockup */}
        <path
          d="M 170 0 C 230 110 140 220 220 330 C 270 400 370 450 540 460 L 540 0 Z"
          fill="url(#heroTealGrad)"
        />

        {/* Ambient subtle light glow circle behind pharmacist */}
        <circle cx="390" cy="220" r="140" fill="url(#heroInnerGlow)" />

        {/* Vector Shopping Cart */}
        <g id="shoppingCart">
          {/* Cart Wheels */}
          <circle cx="232" cy="405" r="9" fill="#045E1F" />
          <circle cx="232" cy="405" r="4" fill="#FFFFFF" />
          <circle cx="330" cy="405" r="9" fill="#045E1F" />
          <circle cx="330" cy="405" r="4" fill="#FFFFFF" />

          {/* Cart Legs / Chassis */}
          <path
            d="M 232 396 L 246 348 L 332 348 M 246 348 L 330 396"
            stroke="#045E1F"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Cart Basket Body */}
          <path
            d="M 205 240 L 226 338 L 362 338 L 378 240 Z"
            fill="#FFFFFF"
            fillOpacity="0.85"
            stroke="#087A2D"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Cart Wire Grid */}
          <path
            d="M 236 240 L 250 338 M 274 240 L 280 338 M 310 240 L 310 338 M 346 240 L 340 338"
            stroke="#087A2D"
            strokeWidth="2"
            strokeOpacity="0.5"
          />
          <path
            d="M 212 272 L 372 272 M 218 304 L 368 304"
            stroke="#087A2D"
            strokeWidth="2"
            strokeOpacity="0.5"
          />

          {/* Cart Handle */}
          <path
            d="M 188 238 L 210 238"
            stroke="#045E1F"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </g>

        {/* Capsule 1 in Cart: Orange / White (from reference mockup) */}
        <g transform="translate(290, 248) rotate(32)">
          {/* Top Half (Orange/Gold) */}
          <path
            d="M -22 -65 C -22 -85 22 -85 22 -65 L 22 0 L -22 0 Z"
            fill="#F59E0B"
          />
          {/* Bottom Half (White) */}
          <path
            d="M -22 0 L 22 0 L 22 65 C 22 85 -22 85 -22 65 Z"
            fill="#FFFFFF"
            stroke="#D1D5DB"
            strokeWidth="1.5"
          />
          {/* Subtle reflection shine */}
          <path
            d="M -12 -65 L -12 55"
            stroke="#FFFFFF"
            strokeWidth="4"
            strokeLinecap="round"
            strokeOpacity="0.4"
          />
        </g>

        {/* Capsule 2 in Cart: Green / White (matching Proh Pharmacy brand) */}
        <g transform="translate(258, 276) rotate(-22)">
          {/* Top Half (Green) */}
          <path
            d="M -20 -55 C -20 -75 20 -75 20 -55 L 20 0 L -20 0 Z"
            fill="#087A2D"
          />
          {/* Bottom Half (White) */}
          <path
            d="M -20 0 L 20 0 L 20 55 C 20 75 -20 75 -20 55 Z"
            fill="#FFFFFF"
            stroke="#D1D5DB"
            strokeWidth="1.5"
          />
          {/* Small medical cross on capsule */}
          <path
            d="M 0 -38 L 0 -22 M -8 -30 L 8 -30"
            stroke="#F8010F"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>

        {/* Pharmacist / Healthcare Worker Silhouette (clean, minimalist vector from reference) */}
        <g id="pharmacistFigure">
          {/* Head & Hair */}
          <path
            d="M 418 102 C 418 80 446 80 446 102 C 446 122 418 122 418 102 Z"
            fill="#FED7AA"
          />
          <path
            d="M 414 96 C 414 74 446 72 452 88 C 452 94 448 98 448 98 C 444 92 434 90 422 94 Z"
            fill="#1E293B"
          />

          {/* Neck & Orange Collar */}
          <path d="M 426 120 L 438 120 L 438 136 L 426 136 Z" fill="#FDBA74" />
          <polygon points="426,128 438,128 432,142" fill="#EA580C" />

          {/* White Lab Coat Body */}
          <path
            d="M 396 150 C 408 140 456 140 468 150 L 484 324 L 380 324 Z"
            fill="#FFFFFF"
            stroke="#E2E8F0"
            strokeWidth="2"
          />

          {/* Lapels */}
          <path
            d="M 422 144 L 432 208 L 442 144"
            stroke="#CBD5E1"
            strokeWidth="2"
            fill="none"
          />

          {/* Arms holding capsule / cart */}
          <path
            d="M 404 156 L 358 226 L 372 238 L 416 182"
            fill="#FFFFFF"
            stroke="#E2E8F0"
            strokeWidth="2"
          />
          {/* Hand */}
          <circle cx="360" cy="232" r="7" fill="#FDBA74" />

          {/* Other Arm */}
          <path
            d="M 462 156 L 480 236 L 468 242 L 448 182"
            fill="#FFFFFF"
            stroke="#E2E8F0"
            strokeWidth="2"
          />

          {/* Dark Trousers */}
          <path d="M 400 324 L 426 324 L 424 416 L 402 416 Z" fill="#1E293B" />
          <path d="M 436 324 L 464 324 L 462 416 L 438 416 Z" fill="#1E293B" />

          {/* Shoes */}
          <ellipse cx="408" cy="422" rx="16" ry="6" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
          <ellipse cx="454" cy="422" rx="16" ry="6" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}
