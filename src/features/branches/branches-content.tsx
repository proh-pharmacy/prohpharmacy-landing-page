"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { branchesData } from "@/config/branches";
import { Branch } from "@/types";
import { BranchCard } from "./branch-card";
import { BranchesMap, NeighborhoodCluster, neighborhoodClusters } from "./branches-map";
import { BranchDetailModal } from "./branch-detail-modal";

export function BranchesContent() {
  const [selectedCluster, setSelectedCluster] = useState<NeighborhoodCluster | null>(null);
  const [activeDetailBranch, setActiveDetailBranch] = useState<Branch | null>(null);

  const handleSelectCluster = (cluster: NeighborhoodCluster) => {
    const isSame = selectedCluster?.id === cluster.id;
    setSelectedCluster(isSame ? null : cluster);
    if (!isSame) {
      setTimeout(() => {
        document.getElementById("branch-cards-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  };

  const displayedBranches = selectedCluster
    ? branchesData.filter((b) => selectedCluster.branchIds.includes(b.id))
    : branchesData;

  return (
    <>
      <div className="bg-[#022619]">
        <nav className="flex flex-col items-center justify-center h-full min-h-[10vh] py-14 sm:py-16 gap-3 text-center px-4">
          <h1 className="text-white font-medium text-3xl sm:text-[34px] tracking-normal">
            Our Branches
          </h1>
          <span className="text-white/80 text-xs sm:text-[13px] font-normal">
            8 pharmacy locations across Greater Accra — retail, wholesale, and diagnostic services available 24/7.
          </span>
        </nav>
      </div>

    <div className="bg-white min-h-screen py-10 sm:py-14">
      <div className="container-custom">
        {/* Neighborhood Cluster Filter Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-14">
          {neighborhoodClusters.map((cluster) => {
            const isActive = selectedCluster?.id === cluster.id;
            return (
              <div
                key={cluster.id}
                onClick={() => handleSelectCluster(cluster)}
                className={`group relative h-60 sm:h-64 rounded-lg overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 cursor-pointer ${isActive ? "ring-2 ring-[#2D6A4F]" : ""}`}
              >
                <Image
                  src={cluster.image}
                  alt={cluster.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
                />
                <div className={`absolute inset-0 transition-colors ${isActive ? "bg-black/60" : "bg-black/45 group-hover:bg-black/55"}`} />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10 text-white">
                  <h3 className="text-base sm:text-[17px] font-medium tracking-normal text-white">
                    {cluster.title}
                  </h3>
                  <p className="text-[11.5px] text-white/80 mt-0.5 font-normal">
                    {cluster.count}
                  </p>
                  <div className="mt-3.5">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectCluster(cluster);
                      }}
                      className={`px-3.5 py-1.5 border text-[10px] font-normal tracking-widest uppercase transition-colors rounded-xs backdrop-blur-xs cursor-pointer ${isActive ? "bg-white text-black border-white" : "border-white/60 hover:border-white hover:bg-white hover:text-black text-white"}`}
                    >
                      {isActive ? "CLEAR FILTER" : "VIEW MORE"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active filter reset bar */}
        {selectedCluster && (
          <div className="mb-6 flex items-center justify-between py-2.5 px-4 bg-gray-50 rounded-md border border-gray-200/80 text-xs text-[#50575E]">
            <span>
              Showing <strong className="text-[#2C3338] font-medium">{selectedCluster.title}</strong> ({displayedBranches.length} locations)
            </span>
            <button
              type="button"
              onClick={() => setSelectedCluster(null)}
              className="text-[#087A2D] hover:underline font-medium cursor-pointer"
            >
              Show All Branches
            </button>
          </div>
        )}

        {/* Branch Cards Grid */}
        <div id="branch-cards-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7 sm:gap-x-8 gap-y-10 sm:gap-y-12 items-start scroll-mt-10">
          {displayedBranches.map((branch) => (
            <BranchCard
              key={branch.id}
              branch={branch}
              isTopChoice={branch.id === "kwashieman-alang"}
            />
          ))}

          {/* 9th Card: Nationwide Delivery Van (shown when no filter active) */}
          {!selectedCluster && (
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
          )}
        </div>

        {/* Find By Location Map Section */}
        <BranchesMap selectedCluster={selectedCluster} />

        {/* Feature Banner */}
        <div className="my-14 sm:my-20 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
          <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-6">
            <h2 className="text-2xl sm:text-[28px] md:text-[32px] font-medium tracking-normal text-[#2C3338] leading-tight">
              Follow The Step And More Dream
            </h2>
            <p className="text-xs sm:text-[13px] text-[#787C82] font-normal mt-3 leading-relaxed max-w-lg">
              Discover future-ready healthcare facilities equipped with certified pharmacists, essential medicine supplies, and modern diagnostic amenities.
            </p>
            <div className="mt-5 sm:mt-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#2D6A4F] hover:bg-[#23533E] text-white text-[10.5px] font-medium tracking-wider uppercase transition-colors rounded-xs"
              >
                <span>READ MORE</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative aspect-16/10 w-full rounded-lg overflow-hidden shadow-2xs">
              <Image
                src="/images/branches/laterbiokorshie.jpg"
                alt="Proh Pharmacy Facility"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Branch Detail Modal */}
      {activeDetailBranch && (
        <BranchDetailModal
          branch={activeDetailBranch}
          isOpen={!!activeDetailBranch}
          onClose={() => setActiveDetailBranch(null)}
        />
      )}
    </div>
    </>
  );
}
