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
  isRedAccent = false,
  ctaText = "Learn more",
  ctaHref,
  index,
  total,
}: ServiceCardProps) {
  // Border divider classes with a gentle glowing green tint
  const borderClasses = `
    ${index % 3 !== 2 ? "lg:border-r border-[#05C075]/20" : ""}
    ${index < 3 ? "lg:border-b border-[#05C075]/20" : ""}
    ${index % 2 === 0 ? "md:max-lg:border-r border-[#05C075]/20" : ""}
    ${index < total - 2 ? "md:max-lg:border-b border-[#05C075]/20" : ""}
    ${index < total - 1 ? "max-md:border-b border-[#05C075]/20" : ""}
  `;

  return (
    <div
      className={`p-7 sm:p-9 flex flex-col justify-between group transition-all duration-300 ease-out hover:bg-white/75 hover:shadow-[0_4px_24px_rgba(5,192,117,0.06)] ${borderClasses}`}
    >
      <Reveal delay={index * 60} distance={14} duration={500} className="h-full flex flex-col justify-between">
        <div>
          {/* Duo-Tone Icon on Soft White Squircle Badge with subtle hover lift */}
          <div className="w-13 h-13 rounded-2xl bg-white shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-[#05C075]/20 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_6px_20px_rgba(5,192,117,0.12)] group-hover:border-[#05C075]/40">
            <Icon className="w-7 h-7" />
          </div>

          {/* Title: Softened intensity with subtle brand accent on hover */}
          <h3
            className={`text-lg sm:text-[19px] font-semibold text-zinc-700 tracking-tight leading-snug mb-2.5 transition-colors duration-200 ${
              isRedAccent ? "group-hover:text-red-accent" : "group-hover:text-primary-green"
            }`}
          >
            {title}
          </h3>

          {/* Description: Clean, consistent high-legibility typography */}
          <p className="text-xs sm:text-[13.5px] text-gray-500 font-normal leading-relaxed group-hover:text-gray-600 transition-colors duration-200">
            {description}
          </p>
        </div>

        {/* Action Button Link: Micro-interaction with animated forward arrow */}
        <div className="pt-6 mt-2">
          <Link
            href={ctaHref}
            className={`inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold transition-all duration-200 ${
              isRedAccent
                ? "text-red-accent hover:text-red-accent-hover"
                : "text-main-text group-hover:text-primary-green"
            }`}
          >
            <span>{ctaText}</span>
            <ArrowRight
              className={`w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 ${
                isRedAccent ? "text-red-accent" : "text-primary-green"
              }`}
            />
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
