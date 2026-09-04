import React from "react";
import { Check } from "lucide-react";

export function TrustPoints() {
  const points = [
    "Retail & wholesale supply",
    "Nationwide delivery",
    "Dedicated pharmacy supply",
  ];

  return (
    <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-3 text-xs sm:text-sm text-muted-text">
      {points.map((point) => (
        <div key={point} className="flex items-center gap-1.5">
          <span className="w-4 h-4 rounded-full bg-light-green text-primary-green flex items-center justify-center flex-shrink-0">
            <Check className="w-2.5 h-2.5 stroke-[3]" />
          </span>
          <span className="font-medium text-main-text/80">{point}</span>
        </div>
      ))}
    </div>
  );
}
