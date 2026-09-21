"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Copy,
  Check,
  ExternalLink,
  Phone,
  MessageSquare,
  ChevronDown,
  MapPin,
} from "lucide-react";
import { Branch } from "@/types";

interface BranchDetailModalProps {
  branch: Branch | null;
  isOpen: boolean;
  onClose: () => void;
}

export function BranchDetailModal({
  branch,
  isOpen,
  onClose,
}: BranchDetailModalProps) {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [isEntered, setIsEntered] = useState(false);

  // Controlled animated close
  const handleClose = useCallback(() => {
    setIsEntered(false);
    setTimeout(() => {
      onClose();
    }, 380);
  }, [onClose]);

  // Entrance & exit animation handling
  useEffect(() => {
    if (isOpen && branch) {
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
  }, [isOpen, branch]);

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
  }, [shouldRender, handleClose]);

  if (!shouldRender || !branch) return null;

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

  const handleCopyDigitalAddress = () => {
    if (branch.digitalAddress) {
      navigator.clipboard.writeText(branch.digitalAddress);
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2000);
    }
  };

  const googleMapsQuery = encodeURIComponent(
    `${branch.name}, ${branch.location}, Ghana`
  );
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${googleMapsQuery}`;

  const primaryPhone = branch.phones[0];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden pointer-events-auto">
      {/* Dark Ambient Backdrop with smooth fade */}
      <div
        onClick={handleClose}
        aria-hidden="true"
        className={`fixed inset-0 bg-black/70 backdrop-blur-xs cursor-pointer transition-opacity duration-400 ease-out ${
          isEntered ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Bottom Sheet Drawer with native-speed smooth slide */}
      <div
        className={`fixed inset-x-0 bottom-0 z-10 flex flex-col items-center pointer-events-none transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
          isEntered ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Outside Floating Controls: Center Hide Chevron */}
        <div className="pointer-events-auto relative w-full max-w-lg sm:max-w-xl px-4 flex items-end justify-center mb-3 sm:mb-4">
          <button
            onClick={handleClose}
            type="button"
            aria-label="Hide details"
            className="group inline-flex items-center gap-2 px-5 py-2 bg-[#1A1E21] hover:bg-black text-white text-[11px] font-normal uppercase tracking-widest transition-all cursor-pointer shadow-2xl border border-white/20 hover:-translate-y-0.5"
          >
            <ChevronDown className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors animate-bounce" />
            <span>Hide Details</span>
          </button>
        </div>

        {/* Bottom Sheet Card with Storefront Image Background (Tall & Slender) */}
        <div
          role="dialog"
          aria-modal="true"
          className="pointer-events-auto relative w-full max-w-lg sm:max-w-xl bg-[#111315] border-t border-x border-white/20 shadow-2xl overflow-hidden flex flex-col h-[85vh] sm:h-[82vh] min-h-[600px] max-h-[92vh] justify-between"
        >
          {/* Background Layer: Storefront Photography */}
          {branch.image ? (
            <Image
              src={branch.image}
              alt={`${branch.name} Storefront`}
              fill
              priority
              sizes="(max-width: 640px) 100vw, 576px"
              className="object-cover object-center pointer-events-none select-none"
            />
          ) : (
            <div className="absolute inset-0 bg-[#161B1E] pointer-events-none" />
          )}

          {/* Deep Contrast Architectural Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/98 via-black/85 to-black/50 pointer-events-none" />

          {/* Foreground Scrollable Content - Expands Gracefully */}
          <div className="relative z-10 p-5 sm:p-7 md:p-8 overflow-y-auto flex-1 flex flex-col justify-between py-6 sm:py-8 space-y-6 sm:space-y-8">
            {/* TOP: Branch Title as the Head, with Location, Area & 24/7 Status below */}
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl md:text-[26px] font-medium text-white tracking-tight leading-snug drop-shadow-md break-words">
                {branch.name}
              </h3>

              <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap text-xs sm:text-sm text-gray-200 font-normal pt-0.5">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#4EBA77] shrink-0" />
                  <span>{branch.location}</span>
                </div>

                {branch.localArea && (
                  <>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-300">{branch.localArea}</span>
                  </>
                )}

                {branch.is24Hours && (
                  <>
                    <span className="text-gray-500">•</span>
                    <span className="text-[#4EBA77] font-normal">
                      Open 24/7
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* MIDDLE: Key Information with Frosted Dark Background Overlay (Responsive 1-col on mobile, 3-col on sm+) */}
            <div className="bg-black/55 backdrop-blur-md border border-white/15 divide-y divide-white/10 text-xs">
              {/* Hours */}
              <div className="grid grid-cols-1 sm:grid-cols-3 p-3 sm:p-3.5 gap-1 sm:gap-0 items-start sm:items-center">
                <span className="text-[11px] sm:text-xs text-gray-400 font-normal sm:col-span-1">Operating Hours</span>
                <span className="sm:col-span-2 text-white font-normal">
                  {branch.hours}
                </span>
              </div>

              {/* GPS Digital Address */}
              {branch.digitalAddress && (
                <div className="grid grid-cols-1 sm:grid-cols-3 p-3 sm:p-3.5 gap-1 sm:gap-0 items-start sm:items-center">
                  <span className="text-[11px] sm:text-xs text-gray-400 font-normal sm:col-span-1">GPS Digital Address</span>
                  <div className="sm:col-span-2 flex items-center justify-between gap-2">
                    <span className="text-white font-mono text-[12px]">
                      {branch.digitalAddress}
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyDigitalAddress}
                      className="text-[10px] text-[#4EBA77] hover:underline cursor-pointer inline-flex items-center gap-1 uppercase tracking-wider font-normal shrink-0"
                    >
                      {copiedAddress ? (
                        <>
                          <Check className="w-3 h-3 text-[#4EBA77]" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 text-gray-400" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* Telephone */}
              {primaryPhone && (
                <div className="grid grid-cols-1 sm:grid-cols-3 p-3 sm:p-3.5 gap-1 sm:gap-0 items-start sm:items-center">
                  <span className="text-[11px] sm:text-xs text-gray-400 font-normal sm:col-span-1">Telephone</span>
                  <div className="sm:col-span-2 space-y-0.5">
                    <a
                      href={`tel:${cleanPhone(primaryPhone)}`}
                      className="text-white hover:text-[#4EBA77] font-mono font-normal block text-[12px]"
                    >
                      {primaryPhone}
                    </a>
                    {branch.phones.slice(1).map((phone, i) => (
                      <a
                        key={i}
                        href={`tel:${cleanPhone(phone)}`}
                        className="text-gray-300 hover:text-[#4EBA77] font-mono font-normal block text-[11px]"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Services */}
              <div className="grid grid-cols-1 sm:grid-cols-3 p-3 sm:p-3.5 gap-1 sm:gap-0 items-start">
                <span className="text-[11px] sm:text-xs text-gray-400 font-normal sm:col-span-1">Services</span>
                <p className="sm:col-span-2 text-gray-200 font-normal leading-relaxed text-[11.5px]">
                  {branch.services.join(", ")}
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM: Navigation Bar Under with Frosted Overlay */}
          <div className="relative z-10 bg-black/85 backdrop-blur-md border-t border-white/15 p-3.5 sm:p-4 md:p-5 flex flex-col sm:flex-row gap-2 sm:gap-2.5 items-center shrink-0">
            {primaryPhone && (
              <a
                href={`tel:${cleanPhone(primaryPhone)}`}
                className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 sm:py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-[10px] sm:text-[10.5px] font-normal tracking-widest uppercase transition-colors rounded-none flex-1 text-center w-full cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-gray-300" />
                <span>Call Branch</span>
              </a>
            )}

            {branch.whatsapp && (
              <a
                href={getWaHref(branch.whatsapp, branch.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 sm:py-3 bg-[#2D6A4F] hover:bg-[#23533E] text-white text-[10px] sm:text-[10.5px] font-normal tracking-widest uppercase transition-colors rounded-none flex-1 text-center w-full shadow-lg cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 text-white" />
                <span>WhatsApp</span>
              </a>
            )}

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 sm:py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-[10px] sm:text-[10.5px] font-normal tracking-widest uppercase transition-colors rounded-none flex-1 text-center w-full cursor-pointer"
            >
              <span>Directions</span>
              <ExternalLink className="w-3 h-3 text-gray-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
