import React from "react";
import Link from "next/link";
import { LucideIcon, ArrowRight, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  badge?: string;
  isRedAccent?: boolean;
  ctaText: string;
  ctaHref: string;
}

export function ServiceCard({
  title,
  description,
  features,
  icon: Icon,
  badge,
  isRedAccent = false,
  ctaText,
  ctaHref,
}: ServiceCardProps) {
  return (
    <div
      className={`relative bg-white rounded-2xl border transition-all duration-200 flex flex-col justify-between p-7 ${
        isRedAccent
          ? "border-primary-green/40 shadow-md ring-1 ring-primary-green/20"
          : "border-light-border hover:border-primary-green/40 hover:shadow-md"
      }`}
    >
      <div>
        {/* Top Icon & Badge */}
        <div className="flex items-center justify-between gap-3 mb-6">
          <div
            className={`w-14 h-14 rounded-xl flex items-center justify-center ${
              isRedAccent
                ? "bg-red-50 text-red-accent border border-red-100"
                : "bg-light-green text-deep-green border border-light-border"
            }`}
          >
            <Icon className="w-7 h-7" />
          </div>

          {badge && (
            <Badge variant={isRedAccent ? "red-accent" : "green"} showDot={isRedAccent}>
              {badge}
            </Badge>
          )}
        </div>

        <h3 className="text-xl font-bold text-main-text leading-snug">{title}</h3>
        <p className="text-sm text-muted-text mt-3 leading-relaxed">{description}</p>

        {/* Feature bullets */}
        <ul className="mt-6 space-y-2.5 text-xs text-main-text/90 font-medium">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <span
                className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                  isRedAccent ? "bg-red-50 text-red-accent" : "bg-light-green text-deep-green"
                }`}
              >
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card Action Link */}
      <div className="mt-8 pt-5 border-t border-light-border/70">
        <Link
          href={ctaHref}
          className={`inline-flex items-center gap-1.5 text-sm font-bold transition-colors ${
            isRedAccent ? "text-red-accent hover:text-red-700" : "text-deep-green hover:text-primary-green"
          }`}
        >
          <span>{ctaText}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
