import React from "react";
import { CheckCircle2, ShieldCheck, Truck } from "lucide-react";

export function TrustPoints() {
  const points = [
    {
      title: "Retail and wholesale supply",
      description: "Direct to individuals & healthcare facilities",
      icon: CheckCircle2,
    },
    {
      title: "Nationwide delivery",
      description: "Convenient courier coverage across Ghana",
      icon: Truck,
    },
    {
      title: "Dedicated pharmacy supply",
      description: "Reliable restocking for retail pharmacies",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-light-border/80">
      {points.map((point) => {
        const Icon = point.icon;
        return (
          <div key={point.title} className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-light-green text-primary-green flex items-center justify-center flex-shrink-0 mt-0.5 border border-primary-green/20">
              <Icon className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-main-text leading-tight">
                {point.title}
              </h4>
              <p className="text-xs text-muted-text mt-0.5">{point.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
