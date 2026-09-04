import React from "react";
import { Truck, ShieldCheck, MapPin, Package, Plus } from "lucide-react";

export function HeroIllustration() {
  return (
    <div className="relative w-full aspect-square max-w-[500px] lg:max-w-[540px] mx-auto flex items-center justify-center">
      {/* Background organic curved green shape inspired by reference mockup */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full object-cover"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="heroGreenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#01A42F" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#087A2D" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#045E1F" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="innerCircleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#01A42F" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#087A2D" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Flowing backdrop shape matching the curve from reference */}
          <path
            d="M 120 0 C 180 140 80 240 200 360 C 270 430 380 480 500 460 L 500 0 Z"
            fill="url(#heroGreenGradient)"
          />

          {/* Ambient circles */}
          <circle cx="340" cy="220" r="150" fill="url(#innerCircleGrad)" />
          <circle cx="390" cy="140" r="8" fill="#FFFFFF" fillOpacity="0.4" />
          <circle cx="440" cy="280" r="5" fill="#FFFFFF" fillOpacity="0.3" />
        </svg>
      </div>

      {/* Foreground Composition: Pharmaceutical Distribution & Delivery theme */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6 sm:p-8">
        {/* Central Graphic Container */}
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 bg-white/95 rounded-2xl shadow-xl border border-light-border p-6 flex flex-col items-center justify-between backdrop-blur-sm">
          {/* Top header badge within illustration */}
          <div className="w-full flex items-center justify-between border-b border-light-border pb-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-accent flex items-center justify-center text-white">
                <Plus className="w-2.5 h-2.5 stroke-[3]" />
              </span>
              <span className="text-xs font-bold text-deep-green tracking-wide">
                PROH PHARMACY LOGISTICS
              </span>
            </div>
            <span className="text-[10px] font-semibold bg-light-green text-deep-green px-2 py-0.5 rounded-full">
              Ghana Verified
            </span>
          </div>

          {/* Vector Cart & Medicine Supply Representation */}
          <div className="relative my-auto flex flex-col items-center justify-center">
            {/* Medical Cross & Pill Visual */}
            <div className="relative flex items-center justify-center">
              {/* Capsule Visual 1 */}
              <div className="w-28 h-12 bg-linear-to-r from-emerald-600 via-primary-green to-white rounded-full shadow-md rotate-[-25deg] flex items-center justify-between px-3 border border-deep-green/20">
                <span className="w-3 h-3 rounded-full bg-white/40" />
                <span className="text-[10px] font-extrabold text-white tracking-widest uppercase">
                  RX SUPPLY
                </span>
                <span className="w-3 h-3 rounded-full bg-red-accent/80" />
              </div>
              
              {/* Capsule Visual 2 */}
              <div className="absolute top-4 left-6 w-24 h-11 bg-linear-to-r from-amber-400 to-white rounded-full shadow-lg rotate-[35deg] flex items-center justify-between px-3 border border-amber-300">
                <span className="w-2 h-2 rounded-full bg-white/60" />
                <span className="text-[9px] font-bold text-amber-900 tracking-wider">
                  CARE
                </span>
              </div>
            </div>

            {/* Shopping Cart / Mobile Supply Base */}
            <div className="mt-4 flex items-center gap-2 bg-light-green px-4 py-2 rounded-xl border border-light-border">
              <Package className="w-5 h-5 text-deep-green" />
              <div className="text-left">
                <div className="text-xs font-bold text-deep-green">Pharmaceutical Dispatch</div>
                <div className="text-[10px] text-muted-text">Retail & Wholesale Orders</div>
              </div>
            </div>
          </div>

          {/* Dispatch Footer */}
          <div className="w-full flex items-center justify-between text-[11px] font-medium text-muted-text pt-2 border-t border-light-border/60">
            <span className="flex items-center gap-1 text-deep-green font-semibold">
              <MapPin className="w-3.5 h-3.5 text-red-accent" />
              All 16 Regions
            </span>
            <span className="text-bright-green font-bold">Fast Delivery</span>
          </div>
        </div>

        {/* Floating Stat Badge 1: Delivery Coverage */}
        <div className="absolute -bottom-2 -left-2 sm:bottom-4 sm:left-2 bg-white rounded-xl shadow-lg border border-light-border p-3 flex items-center gap-3 animate-in fade-in zoom-in duration-300">
          <div className="w-10 h-10 rounded-lg bg-light-green flex items-center justify-center text-deep-green">
            <Truck className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-main-text">Nationwide Delivery</div>
            <div className="text-[11px] text-muted-text">Direct to your doorstep or pharmacy</div>
          </div>
        </div>

        {/* Floating Stat Badge 2: Certified Supply */}
        <div className="absolute -top-2 -right-2 sm:top-4 sm:right-2 bg-white rounded-xl shadow-lg border border-light-border p-3 flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-red-50 text-red-accent flex items-center justify-center">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-main-text">Dependable Partner</div>
            <div className="text-[10px] text-muted-text">Wholesale & Retail</div>
          </div>
        </div>
      </div>
    </div>
  );
}
