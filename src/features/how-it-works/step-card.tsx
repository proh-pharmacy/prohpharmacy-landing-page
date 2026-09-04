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
    <div className="flex flex-col items-start p-6 bg-white rounded-xl border border-light-border">
      <div className="flex items-center justify-between w-full mb-4">
        <div className="w-10 h-10 rounded-lg bg-light-green text-deep-green flex items-center justify-center">
          <Icon className="w-5 h-5" />
        </div>
        <span className="text-xs font-bold text-muted-text/60">0{stepNumber}</span>
      </div>

      <h3 className="text-base font-bold text-main-text">{title}</h3>
      <p className="text-xs sm:text-sm text-muted-text mt-1.5 leading-relaxed">{description}</p>
    </div>
  );
}
