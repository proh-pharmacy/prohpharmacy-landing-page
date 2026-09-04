import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LucideIcon, ArrowRight } from "lucide-react";

export interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  imageUrl: string;
  isRedAccent?: boolean;
  ctaText?: string;
  ctaHref: string;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  imageUrl,
  isRedAccent = false,
  ctaText = "Learn more",
  ctaHref,
}: ServiceCardProps) {
  return (
    <div
      className={`bg-white rounded-2xl border border-transparent transition-all duration-200 p-3 sm:p-3.5 flex flex-col justify-between group hover:shadow-lg ${
        isRedAccent
          ? "hover:border-red-accent"
          : "hover:border-primary-green/60"
      }`}
    >
      <div>
        {/* Chamfered Image Container with Floating Badge */}
        <div className="relative w-full">
          <div className="relative w-full h-44 sm:h-48 overflow-hidden rounded-tr-xl rounded-b-md [clip-path:polygon(0_32px,32px_0,100%_0,100%_100%,0_100%)]">
            <Image
              src={imageUrl}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Soft dark gradient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent pointer-events-none" />
          </div>

          {/* Floating Circular Icon Badge */}
          <div
            className={`absolute -bottom-5 left-4 w-12 h-12 rounded-full border-[3px] border-white shadow-md flex items-center justify-center z-10 transition-transform duration-200 group-hover:scale-110 ${
              isRedAccent ? "bg-red-accent text-white" : "bg-deep-green text-white"
            }`}
          >
            <Icon className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Content Area */}
        <div className="pt-8 px-2">
          <h3 className="text-base sm:text-[17px] font-bold text-main-text leading-snug group-hover:text-primary-green transition-colors">
            {title}
          </h3>
          <p className="text-xs sm:text-[13px] text-muted-text mt-2 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Action Link */}
      <div className="px-2 pt-4 mt-4 border-t border-gray-100 flex items-center">
        <Link
          href={ctaHref}
          className={`inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold transition-colors ${
            isRedAccent
              ? "text-red-accent hover:text-red-700"
              : "text-main-text group-hover:text-primary-green"
          }`}
        >
          <span>{ctaText}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
