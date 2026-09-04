import React from "react";
import Link from "next/link";
import { LucideIcon, ArrowRight } from "lucide-react";

export interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  isRedAccent?: boolean;
  ctaText: string;
  ctaHref: string;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  isRedAccent = false,
  ctaText,
  ctaHref,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl border border-light-border p-7 flex flex-col justify-between hover:border-primary-green/40 hover:shadow-xs transition-all duration-150">
      <div>
        {/* Subtle Icon */}
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 ${
            isRedAccent
              ? "bg-red-50 text-red-accent"
              : "bg-light-green text-deep-green"
          }`}
        >
          <Icon className="w-6 h-6" />
        </div>

        <h3 className="text-lg font-bold text-main-text leading-snug">{title}</h3>
        <p className="text-sm text-muted-text mt-2.5 leading-relaxed">{description}</p>
      </div>

      {/* Subtle Text Link */}
      <div className="mt-6 pt-4 border-t border-light-border/60">
        <Link
          href={ctaHref}
          className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-colors ${
            isRedAccent
              ? "text-red-accent hover:text-red-700"
              : "text-deep-green hover:text-primary-green"
          }`}
        >
          <span>{ctaText}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
