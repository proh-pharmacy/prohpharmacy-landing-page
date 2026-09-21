"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MapPin, Phone, MessageSquare, ChevronDown } from "lucide-react";
import { Branch } from "@/types";
import { NeighborhoodCluster } from "./branches-map";

interface ClusterModalProps {
  cluster: NeighborhoodCluster | null;
  branches: Branch[];
  isOpen: boolean;
  onClose: () => void;
  onSelectBranch: (branch: Branch) => void;
}

export function ClusterModal({
  cluster,
  branches,
  isOpen,
  onClose,
  onSelectBranch,
}: ClusterModalProps) {
  const [shouldRender, setShouldRender] = useState(false);
  const [isEntered, setIsEntered] = useState(false);

  // Controlled animated close
  const handleClose = () => {
    setIsEntered(false);
    setTimeout(() => {
      onClose();
    }, 380);
  };

  // Entrance & exit animation handling
  useEffect(() => {
    if (isOpen && cluster) {
      setShouldRender(true);
      const raf = requestAnimationFrame(() => {
        const timer = setTimeout(() => {
          setIsEntered(true);
        }, 20);
        return () => clearTimeout(timer);
      });
      return () => cancelAnimationFrame(raf);
    } else {
      setIsEntered(false);
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 380);
      return () => clearTimeout(timer);
    }
  }, [isOpen, cluster]);

  // Escape key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    if (shouldRender) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [shouldRender]);

  if (!shouldRender || !cluster) return null;

  const clusterBranches = branches.filter((b) =>
    cluster.branchIds.includes(b.id)
  );

  const cleanPhone = (phone: string) => phone.replace(/[^\d+]/g, "");

  const getWaHref = (wa: string, branchName: string) => {
    let clean = cleanPhone(wa);
    if (clean.startsWith("0")) {
      clean = "233" + clean.slice(1);
    } else if (clean.startsWith("+")) {
      clean = clean.slice(1);
    }
    const message = encodeURIComponent(
      `Hello ${branchName}, I would like to inquire about medicine availability.`
    );
    return `https://wa.me/${clean}?text=${message}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden pointer-events-auto">
      {/* Dark Ambient Backdrop */}
      <div
        onClick={handleClose}
        aria-hidden="true"
        className={`fixed inset-0 bg-black/70 backdrop-blur-xs cursor-pointer transition-opacity duration-400 ease-out ${
          isEntered ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Bottom Sheet Wrapper */}
      <div
        className={`fixed inset-x-0 bottom-0 z-10 flex flex-col items-center pointer-events-none transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
          isEntered ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Outside Floating Controls: Center Hide Chevron */}
        <div className="pointer-events-auto relative w-full max-w-xl px-4 flex items-end justify-center mb-3 sm:mb-4">
          <button
            onClick={handleClose}
            type="button"
            aria-label="Hide cluster"
            className="group inline-flex items-center gap-2 px-5 py-2 bg-[#1A1E21] hover:bg-black text-white text-[11px] font-normal uppercase tracking-widest transition-all cursor-pointer shadow-2xl border border-white/20 hover:-translate-y-0.5"
          >
            <ChevronDown className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors animate-bounce" />
            <span>Hide Details</span>
          </button>
        </div>

        {/* Bottom Sheet Card */}
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cluster-modal-title"
          className="pointer-events-auto w-full max-w-xl bg-white border-t border-x border-[#CCD0D4] shadow-2xl overflow-hidden animate-in slide-in-from-bottom duration-300 h-[85vh] sm:h-[82vh] min-h-[580px] max-h-[92vh] flex flex-col"
        >
          {/* Top Info Bar */}
          <div className="px-4 sm:px-6 py-3.5 border-b border-gray-100 flex items-center justify-between bg-white shrink-0">
            <div>
              <p className="text-[10px] font-normal uppercase tracking-widest text-[#787C82]">
                Location Cluster
              </p>
              <h3
                id="cluster-modal-title"
                className="text-base sm:text-xl font-medium text-[#2C3338] leading-tight mt-0.5"
              >
                {cluster.title}
              </h3>
            </div>
            <span className="text-[11px] text-[#787C82] font-normal">
              {clusterBranches.length} locations
            </span>
          </div>

          {/* List of Branches in this Cluster */}
          <div className="p-4 sm:p-6 overflow-y-auto divide-y divide-gray-100 space-y-4">
            {clusterBranches.map((branch) => {
              const primaryPhone = branch.phones[0];
              return (
                <div
                  key={branch.id}
                  className="pt-4 first:pt-0 flex flex-col sm:flex-row gap-3 sm:gap-4 items-start justify-between"
                >
                  {/* Branch Thumbnail */}
                  <div
                    onClick={() => {
                      onClose();
                      onSelectBranch(branch);
                    }}
                    className="relative aspect-4/3 w-full sm:w-36 rounded-none overflow-hidden bg-gray-50 shrink-0 cursor-pointer border border-gray-100"
                  >
                    {branch.image ? (
                      <Image
                        src={branch.image}
                        alt={branch.name}
                        fill
                        sizes="160px"
                        className="object-cover object-center"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-[#F4F8F5]" />
                    )}
                    {branch.is24Hours && (
                      <span className="absolute bottom-1 left-1 px-1.5 py-0.5 text-[8.5px] font-normal uppercase bg-[#2D6A4F] text-white">
                        24/7
                      </span>
                    )}
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h4
                      onClick={() => {
                        onClose();
                        onSelectBranch(branch);
                      }}
                      className="text-sm sm:text-base font-medium text-[#2C3338] hover:text-[#2D6A4F] cursor-pointer leading-snug"
                    >
                      {branch.name}
                    </h4>

                    <p className="text-xs text-[#787C82] flex items-center gap-1 mt-1 font-normal">
                      <MapPin className="w-3 h-3 text-[#2D6A4F] shrink-0" />
                      <span>{branch.location}</span>
                    </p>

                    <p className="text-[11px] text-gray-400 mt-0.5">
                      Hours: {branch.hours}
                    </p>

                    {/* Actions */}
                    <div className="flex items-center gap-2 mt-3">
                      <button
                        type="button"
                        onClick={() => {
                          onClose();
                          onSelectBranch(branch);
                        }}
                        className="px-3.5 py-1.5 border border-[#CCD0D4] hover:border-[#2C3338] hover:text-[#1D2327] text-[10px] font-normal uppercase tracking-wider text-[#50575E] rounded-none cursor-pointer transition-colors"
                      >
                        View Detail
                      </button>

                      {primaryPhone && (
                        <a
                          href={`tel:${cleanPhone(primaryPhone)}`}
                          className="inline-flex items-center gap-1 px-3 py-1.5 border border-gray-200 hover:border-gray-300 text-[#2C3338] text-[10.5px] font-mono rounded-none"
                        >
                          <Phone className="w-2.5 h-2.5 text-gray-400" />
                          <span>{primaryPhone}</span>
                        </a>
                      )}

                      {branch.whatsapp && (
                        <a
                          href={getWaHref(branch.whatsapp, branch.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#2D6A4F] hover:bg-[#23533E] text-white text-[10.5px] rounded-none"
                        >
                          <MessageSquare className="w-2.5 h-2.5" />
                          <span>WhatsApp</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
