"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Branch } from "@/types";

interface BranchCardProps {
  branch: Branch;
  className?: string;
}

export function BranchCard({
  branch,
  className = "",
}: BranchCardProps) {
  const [copiedAddress, setCopiedAddress] = useState(false);

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

  const handleCopyDigitalAddress = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (branch.digitalAddress) {
      navigator.clipboard.writeText(branch.digitalAddress);
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2000);
    }
  };

  const primaryPhone = branch.phones[0];

  return (
    <div className={`@container w-full h-full ${className}`}>
      <article
        id={`branch-${branch.id}`}
        className="group relative w-full h-full min-h-[380px] @xs:min-h-[400px] rounded-xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-gray-200/80 hover:border-emerald-500/50 select-none bg-[#021f14]"
      >
        {/* Subtle Shine Sweep on Hover */}
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
          <div className="w-1/2 h-full bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover-shine" />
        </div>

        {/* Full-Bleed Storefront Background Frame */}
        <div className="absolute inset-0 z-0">
          {branch.image ? (
            <>
              <Image
                src={branch.image}
                alt={`${branch.name} Storefront`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                priority={branch.featured}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/92 via-black/45 to-black/20" />
            </>
          ) : (
            <div className="absolute inset-0 bg-linear-to-br from-[#042817] via-[#021c10] to-[#01120a] flex flex-col justify-between p-6">
              <div className="text-[10px] uppercase font-mono tracking-widest text-emerald-400/60">
                {branch.badge || "Proh Pharmacy Network"}
              </div>
              <div className="text-center opacity-20 tracking-widest uppercase font-mono text-[11px] text-emerald-200">
                {branch.category === "annex" ? "Annex Facility" : "Community Dispensary"}
              </div>
            </div>
          )}
        </div>

        {/* Top Header Floating Badges (Clean, Minimal, No Icons) */}
        <div className="relative z-10 p-3.5 @xs:p-4 flex items-center justify-between gap-2">
          {/* Status Badge with animated live radar beacon */}
          <div className="flex items-center gap-1.5">
            {branch.is24Hours ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-semibold tracking-wide uppercase bg-white/95 text-main-text shadow-xs backdrop-blur-xs">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-radar absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-600" />
                </span>
                <span>24/7 Open</span>
              </span>
            ) : (
              <span className="px-2.5 py-1 rounded-md text-[10px] font-medium tracking-wide uppercase bg-black/45 text-white/85 backdrop-blur-xs border border-white/10">
                Daily Open
              </span>
            )}

            {branch.badge && branch.category === "wholesale" && (
              <span className="hidden @xs:inline-block px-2.5 py-1 rounded-md text-[10px] font-medium tracking-wide uppercase bg-emerald-950/80 text-emerald-300 border border-emerald-500/20 backdrop-blur-xs">
                Wholesale Hub
              </span>
            )}
          </div>

          {/* Ghana Post GPS Digital Address Badge */}
          {branch.digitalAddress && (
            <button
              type="button"
              onClick={handleCopyDigitalAddress}
              title="Click to copy Ghana Post Digital Address"
              className="px-2.5 py-1 rounded-md bg-black/50 hover:bg-black/70 text-white/90 text-[10px] font-mono tracking-wider backdrop-blur-xs border border-white/15 transition-all cursor-pointer active:scale-95"
            >
              <span>{copiedAddress ? "Copied" : `GPS: ${branch.digitalAddress}`}</span>
            </button>
          )}
        </div>

        {/* Lower Content Scrim */}
        <div className="relative z-10 text-white space-y-2.5 p-4 @xs:p-5">
          {/* Branch Title & Location */}
          <div>
            <h3 className="text-[16px] @xs:text-[17px] font-semibold tracking-tight text-white line-clamp-1 group-hover:text-emerald-300 transition-colors">
              {branch.name}
            </h3>

            <p className="text-[12px] text-white/75 mt-0.5 font-normal truncate">
              {branch.localArea ? `${branch.localArea} — ` : ""}
              {branch.location}
            </p>
          </div>

          {/* Hairline Specs Row (Typography only, No icons) */}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-white/65 font-normal tracking-tight">
            <span>
              {branch.is24Hours
                ? "24 Hours Service"
                : branch.hours.split(":")[0] || "Day Service"}
            </span>
            <span className="text-white/20">|</span>
            <span>
              {branch.category === "wholesale"
                ? "Wholesale & Retail"
                : "Prescriptions"}
            </span>
            <span className="text-white/20">|</span>
            <span className="truncate max-w-[100px] @xs:max-w-[140px]">
              {branch.services[0] || "Dispensing"}
            </span>
          </div>

          {/* Bottom Action Footer */}
          <div className="pt-2 flex items-center justify-between gap-2">
            {/* Direct Call Link */}
            {primaryPhone && (
              <a
                href={`tel:${cleanPhone(primaryPhone)}`}
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[11px] font-mono font-medium backdrop-blur-xs border border-white/15 transition-all active:scale-95 truncate hover:border-white/30"
                title={`Call ${primaryPhone}`}
              >
                {primaryPhone}
              </a>
            )}

            {/* Clean WhatsApp Pill Action */}
            {branch.whatsapp && (
              <a
                href={getWaHref(branch.whatsapp, branch.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-white hover:bg-emerald-50 text-main-text font-semibold text-[11px] @xs:text-xs shadow-xs hover:shadow-md transition-all active:scale-95 shrink-0"
              >
                WhatsApp
              </a>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}
