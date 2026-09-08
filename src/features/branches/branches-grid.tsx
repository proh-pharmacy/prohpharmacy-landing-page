"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Branch } from "@/types";
import { branchesData, branchCategories } from "@/config/branches";
import { BranchCard } from "./branch-card";

const popularAreas = [
  "Laterbiokorshie",
  "Kwashieman",
  "Fadama",
  "Pokuase",
  "Katapor",
  "Kwabenya",
];

export function BranchesGrid() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  const filteredBranches = useMemo(() => {
    return branchesData.filter((branch) => {
      // Category filter
      if (selectedCategory === "24hours" && !branch.is24Hours) {
        return false;
      }
      if (selectedCategory === "wholesale" && branch.category !== "wholesale") {
        return false;
      }
      if (selectedCategory === "mart" && branch.category !== "mart") {
        return false;
      }
      if (selectedCategory === "retail" && branch.category !== "retail" && branch.category !== "annex") {
        return false;
      }

      // Area tag filter
      if (selectedArea) {
        const matchesArea =
          branch.location.toLowerCase().includes(selectedArea.toLowerCase()) ||
          (branch.localArea?.toLowerCase().includes(selectedArea.toLowerCase()) ?? false);
        if (!matchesArea) return false;
      }

      // Search query filter
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = branch.name.toLowerCase().includes(query);
        const matchesLocation = branch.location.toLowerCase().includes(query);
        const matchesLocalArea = branch.localArea?.toLowerCase().includes(query) ?? false;
        const matchesDigital = branch.digitalAddress?.toLowerCase().includes(query) ?? false;
        const matchesServices = branch.services.some((s) => s.toLowerCase().includes(query));

        return matchesName || matchesLocation || matchesLocalArea || matchesDigital || matchesServices;
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedArea]);

  const handleReset = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedArea(null);
  };

  const handleAreaClick = (area: string) => {
    if (selectedArea === area) {
      setSelectedArea(null);
    } else {
      setSelectedArea(area);
    }
  };

  const showDispatchHub = selectedCategory === "all" && !selectedArea && !searchQuery;

  return (
    <div className="@container w-full space-y-6">
      {/* Clean Minimal Controls Bar */}
      <div className="bg-white p-4 @sm:p-5 rounded-xl border border-light-border/80 shadow-xs space-y-3.5">
        {/* Top Search Input & Category Filter */}
        <div className="flex flex-col @lg:flex-row items-stretch @lg:items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search branch name, neighborhood, or GPS code..."
              className="w-full px-3.5 py-2 bg-gray-50/80 border border-gray-200 rounded-lg text-xs @sm:text-sm text-main-text placeholder:text-gray-400 focus:outline-none focus:border-primary-green focus:bg-white transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 hover:text-gray-600 bg-gray-200 hover:bg-gray-300 rounded-full w-4 h-4 flex items-center justify-center transition-colors cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* Main Category Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 @lg:pb-0 scrollbar-none">
            {branchCategories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  type="button"
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                    isActive
                      ? "bg-primary-green text-white font-semibold"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-600"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Quick Area Filter Chips */}
        <div className="flex flex-col @sm:flex-row @sm:items-center gap-2 pt-2 border-t border-gray-100 text-xs">
          <span className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider shrink-0">
            Areas:
          </span>
          <div className="flex items-center gap-1.5 flex-wrap">
            {popularAreas.map((area) => {
              const isSelected = selectedArea === area;
              return (
                <button
                  key={area}
                  onClick={() => handleAreaClick(area)}
                  className={`px-2.5 py-1 rounded-md text-[11px] transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-emerald-100 text-emerald-900 border border-emerald-300 font-semibold"
                      : "bg-gray-50 hover:bg-gray-100 text-gray-600 border border-gray-200/60"
                  }`}
                >
                  {area}
                </button>
              );
            })}
          </div>
        </div>

        {/* Status Bar */}
        <div className="flex items-center justify-between text-[11px] text-gray-500 pt-2 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-main-text">
              {filteredBranches.length} of {branchesData.length} branches
            </span>
            {(selectedCategory !== "all" || selectedArea || searchQuery) && (
              <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[10px]">
                Filtered
              </span>
            )}
          </div>

          {(searchQuery || selectedCategory !== "all" || selectedArea) && (
            <button
              onClick={handleReset}
              className="text-primary-green hover:underline font-medium cursor-pointer"
            >
              Reset
            </button>
          )}
        </div>
      </div>

      {/* Normal Grid Layout */}
      {filteredBranches.length > 0 ? (
        <div className="grid grid-cols-1 @sm:grid-cols-2 @lg:grid-cols-3 gap-5 @sm:gap-6 items-stretch">
          {filteredBranches.map((branch) => (
            <div
              key={branch.id}
              className="transition-transform duration-300 hover:-translate-y-1"
            >
              <BranchCard branch={branch} />
            </div>
          ))}

          {/* 9th Tile: Emergency Dispatch & Nationwide Delivery (Completes the 3x3 grid) */}
          {showDispatchHub && (
            <div className="transition-transform duration-300 hover:-translate-y-1 h-full">
              <div className="rounded-xl bg-linear-to-br from-[#022619] via-[#033621] to-[#044a2b] p-5 @sm:p-6 text-white flex flex-col justify-between border border-white/10 shadow-xs h-full min-h-[380px] @xs:min-h-[400px] relative overflow-hidden group select-none">
                <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
                  <div className="w-1/2 h-full bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover-shine" />
                </div>

                <div className="space-y-3 relative z-20">
                  <div className="inline-flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-radar absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="text-[10px] font-semibold tracking-wider uppercase text-emerald-300">
                      24/7 Dispatch Hub
                    </span>
                  </div>
                  <div>
                    <h3 className="text-[17px] @xs:text-[18px] font-bold tracking-tight text-white">
                      Nationwide Medicine Delivery
                    </h3>
                    <p className="text-xs text-white/70 mt-1.5 leading-relaxed">
                      5 dedicated trekking vans distribute verified cold-chain medicines &amp; healthcare essentials directly across Greater Accra and all regions of Ghana.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2.5 relative z-20">
                  <div className="text-[11px] text-white/75 font-mono">
                    Dispatch Hotline: <span className="text-white font-semibold">+233 53 474 0592</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link
                      href="/delivery"
                      className="flex-1 text-center px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium border border-white/15 transition-colors whitespace-nowrap"
                    >
                      Delivery Info
                    </Link>
                    <Link
                      href="/contact?type=wholesale"
                      className="flex-1 text-center px-3 py-2 rounded-lg bg-red-accent hover:bg-red-accent-hover text-white text-xs font-medium transition-colors whitespace-nowrap"
                    >
                      Wholesale Supply
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-xl border border-light-border/80 p-10 text-center max-w-md mx-auto space-y-3">
          <h3 className="text-sm font-semibold text-main-text">No branches found</h3>
          <p className="text-xs text-gray-500">
            No locations matched your filter. Try adjusting your query or resetting filters.
          </p>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-primary-green text-white text-xs font-semibold rounded-lg hover:bg-deep-green transition-colors cursor-pointer"
          >
            Show All Branches
          </button>
        </div>
      )}
    </div>
  );
}
