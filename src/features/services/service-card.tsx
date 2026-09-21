import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  isRedAccent?: boolean;
  ctaText?: string;
  ctaHref: string;
  index: number;
  total: number;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  ctaText = "Learn more",
  ctaHref,
  index,
}: ServiceCardProps) {
  return (
    <div className="bg-white p-5 sm:p-7 md:p-8 rounded-none shadow-2xs hover:shadow-xs transition-all duration-300 flex flex-col justify-between group h-full">
      <Reveal delay={index * 50} distance={12} duration={450} className="h-full flex flex-col justify-between">
        <div>
          {/* Non-Rounded Icon Badge with Subtle Muted Fill */}
          <div className="w-12 h-12 rounded-none bg-[#F4F8F5] border border-gray-100 flex items-center justify-center mb-5 group-hover:bg-[#EBF3ED] transition-colors duration-200">
            <Icon className="w-6 h-6" />
          </div>

          {/* Title: Soft medium weight, no harsh black, subtle brand accent on hover */}
          <h3 className="text-[15px] sm:text-[16px] font-medium text-[#2C3338] tracking-normal leading-snug mb-2 group-hover:text-[#087A2D] transition-colors duration-200">
            {title}
          </h3>

          {/* Description: Slightly more muted text, soft gray, relaxed line height */}
          <p className="text-[12px] sm:text-[12.5px] text-[#787C82] font-normal leading-relaxed">
            {description}
          </p>
        </div>

        {/* Action Button: Non-rounded hairline outline matching branch cards */}
        <div className="pt-6 mt-auto">
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 border border-[#CCD0D4] hover:border-[#2C3338] hover:text-[#1D2327] text-[10px] font-normal tracking-widest uppercase text-[#50575E] transition-colors rounded-none"
          >
            <span>{ctaText}</span>
            <ArrowRight className="w-3 h-3 text-[#787C82] group-hover:text-[#1D2327] transition-colors" />
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
