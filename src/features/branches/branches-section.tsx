import React from "react";
import Link from "next/link";
import { branchesData } from "@/config/branches";
import { BranchCard } from "./branch-card";

interface BranchesSectionProps {
  title?: string;
  subtitle?: string;
  limit?: number;
  showViewAll?: boolean;
}

export function BranchesSection({
  title = "Our Pharmacy Branches & Marts",
  subtitle = "Visit any of our 8 strategically located pharmacy branches across Greater Accra for 24/7 retail dispensing, wholesale supply, and diagnostic testing.",
  limit = 3,
  showViewAll = true,
}: BranchesSectionProps) {
  const displayedBranches = branchesData.slice(0, limit);

  return (
    <section className="py-12 sm:py-16 bg-[#F4F9F6] border-b border-light-border/60">
      <div className="container-custom @container">
        <div className="flex flex-col @lg:flex-row @lg:items-end justify-between mb-8 sm:mb-10 gap-3">
          <div className="max-w-xl">
            <span className="text-[11px] font-semibold text-primary-green uppercase tracking-wider">
              Storefronts &amp; Locations
            </span>
            <h2 className="text-xl @sm:text-2xl font-bold tracking-tight text-main-text mt-1">
              {title}
            </h2>
            <p className="text-xs text-gray-500 font-normal mt-1.5 leading-relaxed">
              {subtitle}
            </p>
          </div>

          {showViewAll && (
            <Link
              href="/branches"
              className="text-xs font-semibold text-primary-green hover:text-deep-green self-start @lg:self-auto transition-colors"
            >
              Explore All 8 Branches &rarr;
            </Link>
          )}
        </div>

        {/* Standard Grid Preview */}
        <div className="grid grid-cols-1 @sm:grid-cols-2 @lg:grid-cols-3 gap-5 @sm:gap-6 items-stretch">
          {displayedBranches.map((branch) => (
            <div
              key={branch.id}
              className="transition-transform duration-300 hover:-translate-y-1"
            >
              <BranchCard branch={branch} />
            </div>
          ))}
        </div>

        {showViewAll && (
          <div className="mt-8 text-center">
            <Link
              href="/branches"
              className="inline-block px-5 py-2.5 bg-white hover:bg-gray-50 text-main-text font-semibold text-xs rounded-lg border border-light-border/90 shadow-xs transition-colors"
            >
              View All 8 Locations &amp; GPS Codes &rarr;
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
