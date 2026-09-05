"use client";

import React, { useState } from "react";
import { Check, Clock } from "lucide-react";
import { GhanaMap, RegionInfo } from "./ghana-map";
import { DeliveryDivider } from "./delivery-divider";
import { Reveal } from "@/components/ui/reveal";

// Proh Pharmacy's authentic ground network
const REGIONS_DATA: RegionInfo[] = [
  // Available regions (Branches, wholesale, and 5 trekking vans)
  {
    id: "greater-accra",
    name: "Greater Accra",
    status: "available",
    coverage: "Retail branches, 2 wholesale hubs, lab & daily van dispatch",
    hubs: ["Accra Central", "Tema", "Madina"],
  },
  {
    id: "ashanti",
    name: "Ashanti",
    status: "available",
    coverage: "Wholesale pharmacy restocking & regular van routes",
    hubs: ["Kumasi", "Adum", "Kejetia"],
  },
  {
    id: "eastern",
    name: "Eastern",
    status: "available",
    coverage: "Dedicated trekking van distribution route",
    hubs: ["Koforidua", "Nkawkaw"],
  },
  {
    id: "central",
    name: "Central",
    status: "available",
    coverage: "Dedicated trekking van distribution route",
    hubs: ["Cape Coast", "Kasoa", "Winneba"],
  },
  {
    id: "western",
    name: "Western",
    status: "available",
    coverage: "Dedicated trekking van distribution route",
    hubs: ["Takoradi", "Tarkwa"],
  },
  {
    id: "volta",
    name: "Volta",
    status: "available",
    coverage: "Dedicated trekking van distribution route",
    hubs: ["Ho", "Aflao"],
  },
  {
    id: "bono",
    name: "Bono",
    status: "available",
    coverage: "Dedicated trekking van distribution route",
    hubs: ["Sunyani", "Berekum"],
  },
  {
    id: "northern",
    name: "Northern",
    status: "available",
    coverage: "Dedicated trekking van distribution route",
    hubs: ["Tamale", "Yendi"],
  },

  // Expansion regions (Coming Soon)
  {
    id: "upper-east",
    name: "Upper East",
    status: "coming_soon",
    coverage: "Scheduled for next expansion phase",
    hubs: ["Bolgatanga"],
  },
  {
    id: "upper-west",
    name: "Upper West",
    status: "coming_soon",
    coverage: "Scheduled for next expansion phase",
    hubs: ["Wa"],
  },
  {
    id: "north-east",
    name: "North East",
    status: "coming_soon",
    coverage: "Scheduled for next expansion phase",
    hubs: ["Nalerigu"],
  },
  {
    id: "savannah",
    name: "Savannah",
    status: "coming_soon",
    coverage: "Scheduled for next expansion phase",
    hubs: ["Damongo"],
  },
  {
    id: "bono-east",
    name: "Bono East",
    status: "coming_soon",
    coverage: "Scheduled for next expansion phase",
    hubs: ["Techiman"],
  },
  {
    id: "ahafo",
    name: "Ahafo",
    status: "coming_soon",
    coverage: "Scheduled for next expansion phase",
    hubs: ["Goaso"],
  },
  {
    id: "western-north",
    name: "Western North",
    status: "coming_soon",
    coverage: "Scheduled for next expansion phase",
    hubs: ["Sefwi Wiawso"],
  },
  {
    id: "oti",
    name: "Oti",
    status: "coming_soon",
    coverage: "Scheduled for next expansion phase",
    hubs: ["Dambai"],
  },
];

export function DeliveryContent() {
  const [highlightedRegion, setHighlightedRegion] = useState<string | null>(null);

  const availableRegions = REGIONS_DATA.filter((r) => r.status === "available");
  const comingSoonRegions = REGIONS_DATA.filter((r) => r.status === "coming_soon");

  return (
    <section
      id="delivery"
      className="bg-[#022619] pt-16 sm:pt-20 pb-24 sm:pb-32 relative overflow-hidden"
    >
      {/* Subtle Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:25px_25px] -z-10" />

      <div className="container-custom">
        {/* Clean Minimal Section Header Centered */}
        <Reveal direction="up" distance={20} duration={500}>
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2.5">
              <span className="w-6 h-0.5 bg-[#018959] rounded-full" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Where We Deliver To
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300/90 font-normal mt-2 leading-relaxed">
              We deploy 5 dedicated trekking vans delivering genuine medicines to healthcare facilities and pharmacies across Ghana.
            </p>
          </div>
        </Reveal>

        <Reveal direction="up" distance={24} duration={600} delay={100}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
          {/* Left Column: Authentic Proh Pharmacy Delivery Coverage (Borderless deep green panel) */}
          <div className="lg:col-span-6 w-full h-full flex flex-col justify-between bg-[#011c12] border-0 rounded-none p-5 sm:p-6 shadow-none">
            {/* 1. Available Regions Section */}
            <div className="w-full flex flex-col gap-2">
              <div className="pb-1">
                <span className="text-xs font-semibold text-[#05C075] uppercase tracking-wider">
                  Available
                </span>
              </div>

              {/* Semantic accessible list of available regions separated by hr of rider green tint */}
              <ul
                role="list"
                aria-label="Available medicine delivery regions across Ghana"
                className="w-full flex flex-col p-0 m-0 list-none"
              >
                {availableRegions.map((item, idx) => {
                  const isSelected = highlightedRegion === item.name;
                  return (
                    <React.Fragment key={item.id}>
                      {idx > 0 && <hr className="w-full border-t border-[#018959]/20" />}
                      <li
                        tabIndex={0}
                        onMouseEnter={() => setHighlightedRegion(item.name)}
                        onMouseLeave={() => setHighlightedRegion(null)}
                        onFocus={() => setHighlightedRegion(item.name)}
                        onBlur={() => setHighlightedRegion(null)}
                        aria-label={`Medicine delivery available in ${item.name} Region, Ghana`}
                        className={`flex items-center gap-2.5 py-2 px-2.5 rounded-md transition-all duration-150 cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-[#018959] ${isSelected
                            ? "bg-[#018959]/25 text-[#34D399] font-semibold pl-3.5"
                            : "text-white/90 hover:bg-white/5 hover:text-[#34D399] font-medium"
                          }`}
                      >
                        <Check className="w-3.5 h-3.5 text-[#05C075] shrink-0" aria-hidden="true" strokeWidth={2.5} />
                        <span className="text-xs sm:text-sm">{item.name}</span>
                        <span className="sr-only">Region, Ghana - Direct medicine delivery available</span>
                      </li>
                    </React.Fragment>
                  );
                })}
              </ul>
            </div>

            {/* 2. Coming Soon Regions Section */}
            <div className="w-full flex flex-col gap-2 pt-2">
              <div className="pb-1">
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  Coming Soon
                </span>
              </div>

              {/* Semantic accessible list of coming soon regions separated by hr of subtle rider green tint */}
              <ul
                role="list"
                aria-label="Upcoming pharmaceutical expansion regions across Ghana"
                className="w-full flex flex-col p-0 m-0 list-none"
              >
                {comingSoonRegions.map((item, idx) => {
                  const isSelected = highlightedRegion === item.name;
                  return (
                    <React.Fragment key={item.id}>
                      {idx > 0 && <hr className="w-full border-t border-[#018959]/15" />}
                      <li
                        tabIndex={0}
                        onMouseEnter={() => setHighlightedRegion(item.name)}
                        onMouseLeave={() => setHighlightedRegion(null)}
                        onFocus={() => setHighlightedRegion(item.name)}
                        onBlur={() => setHighlightedRegion(null)}
                        aria-label={`Upcoming medicine delivery expansion to ${item.name} Region, Ghana`}
                        className={`flex items-center gap-2.5 py-1.5 px-2.5 rounded-md transition-all duration-150 cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 ${isSelected
                            ? "bg-white/10 text-white font-medium pl-3.5"
                            : "text-zinc-400 hover:bg-white/5 hover:text-zinc-200"
                          }`}
                      >
                        <Clock className="w-3.5 h-3.5 text-zinc-500 shrink-0" aria-hidden="true" strokeWidth={2} />
                        <span className="text-xs">{item.name}</span>
                        <span className="sr-only">Region, Ghana - Scheduled for expansion</span>
                      </li>
                    </React.Fragment>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Right Column: Interactive Ghana SVG Map (Lime unrounded container flush with left column) */}
          <div className="lg:col-span-6 flex flex-col justify-center w-full h-full min-h-[320px] sm:min-h-[420px] lg:min-h-[480px]">
            <GhanaMap
              regions={REGIONS_DATA}
              overviewClassName="w-full h-full"
              highlightedRegion={highlightedRegion}
              onRegionHover={setHighlightedRegion}
            />
          </div>
        </div>
      </Reveal>
    </div>

      {/* Wave divider transitioning smoothly into FAQ */}
      <DeliveryDivider />
    </section>
  );
}

export default DeliveryContent;
