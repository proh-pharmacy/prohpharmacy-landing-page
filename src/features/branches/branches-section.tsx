import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { branchesData } from "@/config/branches";
import { BranchCard } from "./branch-card";
import { Reveal } from "@/components/ui/reveal";

interface BranchesSectionProps {
  title?: string;
  subtitle?: string;
  limit?: number;
  showViewAll?: boolean;
}

export function BranchesSection({
  title = "Our Pharmacy Branches & Marts",
  subtitle = "Visit any of our 8 pharmacy branches across Greater Accra for retail dispensing, wholesale supply, diagnostic testing, and selected 24/7 services.",
  limit = 3,
  showViewAll = true,
}: BranchesSectionProps) {
  const displayedBranches = branchesData.slice(0, limit);

  return (
    <section className="py-14 md:py-20 bg-[#F4F8F5] border-b border-light-border/60 relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Clean Subtle Centered Section Header Matching WordPress Reference */}
        <Reveal direction="up" distance={20} duration={500}>
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12 relative z-10">
            <h2 className="text-2xl sm:text-[28px] font-medium tracking-normal text-[#2C3338]">
              {title}
            </h2>
            <p className="text-xs sm:text-[13px] text-[#787C82] font-normal mt-2 leading-relaxed">
              {subtitle}
            </p>
          </div>
        </Reveal>

        {/* 3-Column Branch Cards Grid Matching Reference Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8 items-start">
          {displayedBranches.map((branch, idx) => (
            <Reveal
              key={branch.id}
              direction="up"
              distance={20}
              duration={500}
              delay={idx * 80}
            >
              <BranchCard
                branch={branch}
                isTopChoice={branch.id === "kwashieman-alang"}
              />
            </Reveal>
          ))}
        </div>

        {/* Action Button Link to All Branches */}
        {showViewAll && (
          <Reveal direction="up" distance={15} duration={500} delay={200}>
            <div className="mt-10 sm:mt-12 text-center">
              <Link
                href="/branches"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-xs border border-[#CCD0D4] hover:border-[#2C3338] hover:text-[#1D2327] text-[#50575E] font-normal text-[10.5px] tracking-widest uppercase transition-colors"
              >
                <span>Explore All Locations</span>
                <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
