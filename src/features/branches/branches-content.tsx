import React from "react";
import Link from "next/link";
import { BranchesGrid } from "./branches-grid";

export function BranchesContent() {
  return (
    <section className="bg-[#F8FFF8] min-h-screen pb-20">
      {/* Top Hero Banner */}
      <div className="bg-[#022619] relative overflow-hidden border-b border-white/10">
        <div className="container-custom relative z-10 py-12 sm:py-16 text-center max-w-2xl mx-auto">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-emerald-400 mb-2">
            Storefronts &amp; Facilities
          </span>

          <h1 className="text-white font-semibold text-2xl sm:text-3xl md:text-4xl tracking-tight">
            Pharmacy Branches &amp; Marts
          </h1>

          <p className="text-white/75 text-xs sm:text-sm mt-3 leading-relaxed max-w-xl mx-auto font-normal">
            8 verified locations across Greater Accra providing 24/7 dispensing, wholesale supplies,
            diagnostic lab testing, and direct pharmacist consultations.
          </p>
        </div>
      </div>

      {/* Network Overview Stats Ribbon
      <div className="container-custom -mt-5 relative z-20 @container">
        <div className="grid grid-cols-2 @md:grid-cols-4 gap-2.5 @sm:gap-3">
          <div className="bg-white p-3.5 rounded-xl border border-light-border/90 shadow-xs">
            <p className="text-base font-bold text-main-text leading-none">8 Branches</p>
            <p className="text-[11px] text-gray-500 mt-1">Retail &amp; Wholesale</p>
          </div>

          <div className="bg-white p-3.5 rounded-xl border border-light-border/90 shadow-xs">
            <p className="text-base font-bold text-main-text leading-none">24/7 Open</p>
            <p className="text-[11px] text-gray-500 mt-1">Emergency night service</p>
          </div>

          <div className="bg-white p-3.5 rounded-xl border border-light-border/90 shadow-xs">
            <p className="text-base font-bold text-main-text leading-none">Wholesale Hubs</p>
            <p className="text-[11px] text-gray-500 mt-1">Bulk supply &amp; lab tests</p>
          </div>

          <div className="bg-white p-3.5 rounded-xl border border-light-border/90 shadow-xs">
            <p className="text-base font-bold text-main-text leading-none">Fast Delivery</p>
            <p className="text-[11px] text-gray-500 mt-1">Nationwide trekking</p>
          </div>
        </div>
      </div> */}

      {/* Main Filterable Branch Directory */}
      <div className="container-custom mt-8 sm:mt-10">
        <BranchesGrid />
      </div>

      {/* Delivery & Wholesale Alternative Callout */}
      <div className="container-custom mt-12 sm:mt-16 @container">
        <div className="bg-[#022619] rounded-2xl p-6 @lg:p-8 text-white relative overflow-hidden border border-white/10 shadow-md">
          <div className="relative z-10 flex flex-col @2xl:flex-row @2xl:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="text-[10px] font-semibold tracking-wider uppercase text-emerald-400">
                Delivery &amp; Logistics
              </span>
              <h2 className="text-lg @sm:text-xl font-bold tracking-tight text-white">
                Nationwide Medicine Delivery &amp; Wholesale Supply
              </h2>
              <p className="text-white/70 text-xs leading-relaxed">
                5 dedicated trekking vans distribute verified medicines directly to partner pharmacies, clinics, and individuals across Ghana.
              </p>
            </div>

            <div className="flex flex-col @xs:flex-row gap-2.5 shrink-0">
              <Link
                href="/delivery"
                className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-medium text-xs rounded-lg transition-colors text-center border border-white/15"
              >
                Delivery Network
              </Link>
              <Link
                href="/contact?type=wholesale"
                className="px-4 py-2.5 bg-red-accent hover:bg-red-accent-hover text-white font-medium text-xs rounded-lg transition-colors text-center"
              >
                Request Quotation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
