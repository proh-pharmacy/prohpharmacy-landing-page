"use client";

import React, { useState, useMemo, useRef } from "react";
import { MapPin, Check, CheckCircle2, Clock } from "lucide-react";
import { REGION_PATHS } from "./ghana-paths";

export type DeliveryStatus = "available" | "coming_soon";

export interface RegionInfo {
  id: string;
  name: string;
  status: DeliveryStatus;
  coverage: string;
  hubs?: string[];
}

interface GhanaMapProps {
  regions?: RegionInfo[];
  overviewClassName?: string;
  highlightedRegion?: string | null;
  onRegionHover?: (regionName: string | null) => void;
}

export const GhanaMap = React.memo(function GhanaMap({
  regions = [],
  overviewClassName = "",
  highlightedRegion = null,
  onRegionHover,
}: GhanaMapProps) {
  const [internalHoveredRegion, setInternalHoveredRegion] = useState<RegionInfo | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const mapRef = useRef<HTMLDivElement>(null);

  // Quick lookup dictionary by region name
  const regionMap = useMemo(() => {
    const map: Record<string, RegionInfo> = {};
    regions.forEach((r) => {
      map[r.name] = r;
    });
    return map;
  }, [regions]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!mapRef.current) return;
    const rect = mapRef.current.getBoundingClientRect();
    setTooltipPos({
      x: Math.min(Math.max(e.clientX - rect.left + 15, 10), rect.width - 220),
      y: Math.min(Math.max(e.clientY - rect.top + 15, 10), rect.height - 120),
    });
  };

  const activeRegionName = internalHoveredRegion?.name || highlightedRegion;
  const activeRegionData = activeRegionName ? regionMap[activeRegionName] : null;

  return (
    <div
      className={`relative w-full flex flex-col h-full ${overviewClassName}`}
      ref={mapRef}
      onMouseMove={handleMouseMove}
    >
      {/* Subtle Soft Lime Colored Map Container - NOT rounded, sharing structure and containing status inside */}
      <div className="w-full h-full flex flex-col justify-between bg-[#F2F9E8] text-zinc-900 border-0 rounded-none p-4 sm:p-6 shadow-none">
        {/* Status Available and Coming Soon inside the subtle lime div */}
        <div className="w-full flex items-center justify-end pb-3 mb-2 border-b border-lime-200/70">
          <div className="flex items-center gap-3.5 text-[11px] font-medium">
            <span className="flex items-center gap-1.5 text-[#018959] font-semibold">
              <Check className="w-3.5 h-3.5 text-[#018959]" strokeWidth={2.5} />
              Available
            </span>
            <span className="flex items-center gap-1.5 text-zinc-700 font-medium">
              <Clock className="w-3.5 h-3.5 text-[#374151]" strokeWidth={2} />
              Coming Soon
            </span>
          </div>
        </div>

        {/* SVG Canvas Map Container */}
        <div className="w-full flex-1 flex items-center justify-center py-2">
          <div className="relative w-full max-w-[290px] aspect-[320/460]">
            <svg
              viewBox="0 0 320 460"
              className="w-full h-full select-none"
              xmlns="http://www.w3.org/2000/svg"
            >
            {REGION_PATHS.map((r) => {
              const info = regionMap[r.name];
              const isAvailable = info?.status === "available";
              const isHovered = activeRegionName === r.name;

              // Region Fill Colors on white canvas
              let fillColor = "#374151"; // Deep gray for coming soon regions
              if (isAvailable) {
                fillColor = isHovered ? "#05C075" : "#018959";
              } else if (isHovered) {
                fillColor = "#1F2937"; // Darker deep gray on hover
              }

              return (
                <path
                  key={r.id}
                  d={r.path}
                  fill={fillColor}
                  stroke={isHovered ? "#000000" : "#ffffff"}
                  strokeWidth={isHovered ? 2 : isAvailable ? 1.5 : 1}
                  strokeLinejoin="round"
                  className="transition-all duration-200 ease-out cursor-pointer"
                  style={{
                    transform: isHovered ? "scale(1.015)" : "scale(1)",
                    transformOrigin: "center",
                    filter: isHovered
                      ? isAvailable
                        ? "drop-shadow(0px 4px 12px rgba(1, 137, 89, 0.4))"
                        : "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.15))"
                      : "none",
                  }}
                  onMouseEnter={() => {
                    if (info) setInternalHoveredRegion(info);
                    if (onRegionHover) onRegionHover(r.name);
                  }}
                  onMouseLeave={() => {
                    setInternalHoveredRegion(null);
                    if (onRegionHover) onRegionHover(null);
                  }}
                />
              );
            })}
          </svg>

          {/* Active Delivery Hotspot Pulse Markers */}
          {REGION_PATHS.map((r) => {
            const info = regionMap[r.name];
            if (!info || info.status !== "available") return null;

            const dotCoords = r.centroid || { x: 160, y: 230 };

            return (
              <div
                key={`dot-${r.id}`}
                className="absolute pointer-events-none flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${(dotCoords.x / 320) * 100}%`,
                  top: `${(dotCoords.y / 460) * 100}%`,
                }}
              >
                <span className="absolute inline-flex h-3 w-3 rounded-full bg-[#018959] opacity-80 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#34D399] border-[1.5px] border-white shadow-sm" />
              </div>
            );
          })}
        </div>
      </div>
    </div>

      {/* Floating Interactive Tooltip */}
      {activeRegionData && (
        <div
          className="absolute z-50 pointer-events-none bg-zinc-900/95 backdrop-blur-md border border-zinc-700/90 text-white p-3 rounded-xl shadow-2xl flex flex-col gap-1.5 min-w-[180px] max-w-[220px] animate-in fade-in zoom-in-95 duration-150"
          style={{
            left: `${tooltipPos.x}px`,
            top: `${tooltipPos.y}px`,
          }}
        >
          <div className="flex items-center justify-between border-b border-zinc-800 pb-1.5">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#05C075] shrink-0" />
              <span className="text-[12px] font-bold text-white tracking-wide">
                {activeRegionData.name}
              </span>
            </div>
            {activeRegionData.status === "available" ? (
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#018959]/25 text-[#34D399] flex items-center gap-1">
                <CheckCircle2 className="w-2.5 h-2.5" /> Available
              </span>
            ) : (
              <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 flex items-center gap-1">
                <Clock className="w-2.5 h-2.5" /> Soon
              </span>
            )}
          </div>

          <p className="text-[10px] text-zinc-300 leading-relaxed mt-0.5">
            {activeRegionData.coverage}
          </p>

          {activeRegionData.hubs && activeRegionData.hubs.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-1 border-t border-zinc-800/80 pt-1.5">
              {activeRegionData.hubs.map((hub) => (
                <span
                  key={hub}
                  className="text-[8px] bg-zinc-800 border border-zinc-700/60 px-1.5 py-0.5 rounded font-medium text-zinc-300"
                >
                  {hub}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
});

export default GhanaMap;
