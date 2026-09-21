"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Branch } from "@/types";
import { branchesData } from "@/config/branches";
import { BranchCard } from "./branch-card";

interface BranchesGridProps {
  branches?: Branch[];
}

export function BranchesGrid({ branches = branchesData }: BranchesGridProps) {
  return (
    <div className="w-full">
      {/* 3-Column Clean Grid Exactly Matching Reference (No Search, No Filter Bars) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7 sm:gap-x-8 gap-y-10 sm:gap-y-12 items-start">
        {branches.map((branch) => (
          <BranchCard
            key={branch.id}
            branch={branch}
            isTopChoice={branch.id === "kwashieman-alang"}
          />
        ))}

        {/* 9th Card: Nationwide Delivery Van (Matches 4:3 Aspect Format) */}
        <div className="flex flex-col items-center text-center">
          <div className="relative aspect-4/3 w-full rounded-lg overflow-hidden bg-gray-50 shadow-2xs hover:shadow-xs transition-shadow duration-300">
            <Image
              src="/images/pharma_trekking_van.jpg"
              alt="Nationwide Medicine Delivery Van"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-center hover:scale-103 transition-transform duration-500 ease-out"
            />
          </div>

          <div className="pt-3.5 flex flex-col items-center text-center w-full">
            <h3 className="text-[15px] sm:text-[16px] font-medium text-[#2C3338] leading-snug tracking-normal">
              Nationwide Delivery
            </h3>
            <p className="text-[12px] sm:text-[12.5px] text-[#787C82] font-normal mt-1 leading-none">
              Greater Accra &amp; All Regions
            </p>

            <div className="mt-3">
              <Link
                href="/delivery"
                className="inline-flex items-center justify-center px-3.5 py-1.5 border border-[#CCD0D4] hover:border-[#2C3338] hover:text-[#1D2327] text-[10px] font-normal tracking-widest uppercase text-[#50575E] transition-colors rounded-xs"
              >
                VIEW DETAIL
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
