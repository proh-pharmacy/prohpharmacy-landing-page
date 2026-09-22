"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Branch } from "@/types";
import { BranchDetailModal } from "./branch-detail-modal";

interface BranchCardProps {
  branch: Branch;
  className?: string;
  isTopChoice?: boolean;
}

const getCleanTitle = (branch: Branch) => {
  if (branch.shortName) {
    if (branch.shortName.includes("Laterbiokorshie")) return "Laterbiokorshie Mart";
    if (branch.shortName.includes("Kwashieman")) return "Kwashieman Wholesale";
    if (branch.shortName.includes("Fadama")) return "Fadama Dispensary";
    if (branch.shortName.includes("Pokuase Main")) return "Pokuase Main Mart";
    if (branch.shortName.includes("Katapor")) return "Tinacare Katapor";
    if (branch.shortName.includes("Annex")) return "Pokuase Annex";
    if (branch.shortName.includes("RASE")) return "RASE Chemist";
    if (branch.shortName.includes("Kwabenya")) return "Kwabenya Branch";
    return branch.shortName;
  }
  return branch.name.replace("Proh Pharmacy & Mart - ", "").replace("Proh Pharmacy - ", "");
};

const getCleanLocation = (branch: Branch) => {
  if (branch.location.includes("Laterbiokorshie")) return "Laterbiokorshie, Accra";
  if (branch.location.includes("Kwashieman")) return "Kwashieman, Accra";
  if (branch.location.includes("Fadama")) return "Fadama, Accra";
  if (branch.location.includes("Pokuase")) return "Pokuase, Accra";
  if (branch.location.includes("Katapor")) return "Katapor, Accra";
  if (branch.location.includes("Kwabenya")) return "Kwabenya, Accra";
  return branch.location;
};

export function BranchCard({
  branch,
  className = "",
  isTopChoice = false,
}: BranchCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const displayTitle = getCleanTitle(branch);
  const displayLocation = getCleanLocation(branch);
  const showTopChoice = isTopChoice || branch.id === "kwashieman-alang";

  return (
    <>
      <div className={`flex flex-col items-center text-center ${className}`}>
        {/* Aspect 4:3 Image Container with Gentle Rounded Corners */}
        <div
          onClick={() => setIsModalOpen(true)}
          className="relative aspect-4/3 w-full rounded-lg overflow-hidden bg-gray-50 cursor-pointer shadow-2xs hover:shadow-xs transition-shadow duration-300"
        >
          {branch.image ? (
            <Image
              src={branch.image}
              alt={displayTitle}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-center hover:scale-103 transition-transform duration-500 ease-out"
              priority={branch.featured}
            />
          ) : (
            <div className="absolute inset-0 bg-[#022619] flex items-center justify-center p-6 text-center">
              <span className="text-emerald-300/60 text-xs tracking-widest font-normal">
                {displayTitle}
              </span>
            </div>
          )}

          {/* WordPress-Style Subtle TOP CHOICE Corner Ribbon */}
          {showTopChoice && (
            <div className="absolute -top-1 -left-1 overflow-hidden w-24 h-24 pointer-events-none z-10">
              <div className="absolute transform -rotate-45 bg-[#3B7A57] text-white font-medium text-[8px] uppercase tracking-widest py-1 right-[-36px] top-[16px] w-[120px] text-center shadow-xs">
                TOP CHOICE
              </div>
            </div>
          )}
        </div>

        {/* Content Details Below the Image - WordPress Subtle Weight & Contrast */}
        <div className="pt-3.5 flex flex-col items-center text-center w-full">
          {/* Title - Soft medium weight, no harsh black */}
          <h3 className="text-[15px] sm:text-[16px] font-medium leading-snug tracking-normal">
            <Link
              href={`/branches/${branch.id}`}
              className="text-[#2C3338] transition-colors hover:text-[#087A2D]"
            >
              {displayTitle}
            </Link>
          </h3>

          {/* Location Subtitle - Muted gray, light-normal font */}
          <p className="text-[12px] sm:text-[12.5px] text-[#787C82] font-normal mt-1 leading-none">
            {displayLocation}
          </p>

          {/* WordPress-Style Outline Button: Light hairline border, subdued text */}
          <div className="mt-3">
            <Link
              href={`/branches/${branch.id}`}
              className="inline-flex items-center justify-center px-3.5 py-1.5 border border-[#CCD0D4] hover:border-[#2C3338] hover:text-[#1D2327] text-[10px] font-normal tracking-widest uppercase text-[#50575E] transition-colors cursor-pointer rounded-xs"
            >
              VIEW DETAIL
            </Link>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      <BranchDetailModal
        branch={branch}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
