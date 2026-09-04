import React from "react";
import { LucideIcon } from "lucide-react";

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export function StepCard({
  stepNumber,
  title,
  description,
  icon: Icon,
}: StepCardProps) {
  return (
    <div className="relative flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-light-border shadow-xs hover:border-primary-green/40 transition-all">
      {/* Step Badge */}
      <div className="w-12 h-12 rounded-full bg-deep-green text-white font-bold flex items-center justify-center text-base mb-4 shadow-sm ring-4 ring-light-green">
        0{stepNumber}
      </div>

      <div className="w-10 h-10 rounded-lg bg-light-green text-deep-green flex items-center justify-center mb-3">
        <Icon className="w-5 h-5" />
      </div>

      <h3 className="text-lg font-bold text-main-text">{title}</h3>
      <p className="text-sm text-muted-text mt-2 leading-relaxed">{description}</p>
    </div>
  );
}
