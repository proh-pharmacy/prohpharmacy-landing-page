"use client";

import React, { useState } from "react";
import { ExternalLink, Navigation } from "lucide-react";

export interface NeighborhoodCluster {
  id: string;
  title: string;
  count: string;
  branchIds: string[];
  image: string;
  query: string;
}

export const neighborhoodClusters: NeighborhoodCluster[] = [
  {
    id: "laterbiokorshie",
    title: "Laterbiokorshie & Odorkor",
    count: "3 Locations",
    branchIds: ["laterbiokorshie", "fadama", "kwashieman-alang"],
    image: "/images/branches/laterbiokorshie.jpg",
    query: "Laterbiokorshie,Accra,Ghana",
  },
  {
    id: "pokuase",
    title: "Pokuase & Katapor",
    count: "4 Locations",
    branchIds: ["pokuase-retail", "tinacare-katapor", "pokuase-annex", "rase-chemist"],
    image: "/images/branches/pokuase-retail.jpg",
    query: "Pokuase,Accra,Ghana",
  },
  {
    id: "kwabenya",
    title: "Kwabenya & Legon",
    count: "1 Location",
    branchIds: ["kwabenya"],
    image: "/images/branches/kwabenya.jpg",
    query: "Kwabenya,Accra,Ghana",
  },
];

interface BranchesMapProps {
  selectedCluster?: NeighborhoodCluster | null;
}

export function BranchesMap({ selectedCluster }: BranchesMapProps) {
  const [activeQuery, setActiveQuery] = useState("Accra,Ghana");
  const [activeTitle, setActiveTitle] = useState("Greater Accra Metropolitan Area");
  const [activeSubtitle, setActiveSubtitle] = useState(
    "Greater Accra Region, Ghana • 8 Verified Branches"
  );

  React.useEffect(() => {
    if (selectedCluster) {
      setActiveTitle(selectedCluster.title);
      setActiveSubtitle(`${selectedCluster.count} • Proh Pharmacy Network`);
      setActiveQuery(selectedCluster.query);
    } else {
      setActiveTitle("Greater Accra Metropolitan Area");
      setActiveSubtitle("Greater Accra Region, Ghana • 8 Verified Branches");
      setActiveQuery("Accra,Ghana");
    }
  }, [selectedCluster]);

  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    activeQuery
  )}&t=&z=12&ie=UTF8&iwloc=&output=embed`;

  const externalMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    activeTitle + ", Greater Accra, Ghana"
  )}`;

  return (
    <section className="w-full pt-10 pb-6 sm:pt-14 sm:pb-8">
      {/* Centered Minimal Header Exactly Matching Reference */}
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 px-4">
        <h2 className="text-2xl sm:text-[26px] font-medium text-[#2C3338] tracking-normal">
          Find By Location
        </h2>
        <p className="text-xs sm:text-[13px] text-[#787C82] font-normal mt-2 leading-relaxed">
          Explore pharmacies in your favorite neighborhoods across the country. Find the perfect spot that matches your healthcare needs and convenience.
        </p>
      </div>

      {/* Embedded Map with Floating Top-Left Card */}
      <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[460px] rounded-lg overflow-hidden border border-gray-200/90 shadow-2xs bg-gray-50">
        <iframe
          title="Google Map of Greater Accra Pharmacy Branches"
          src={mapEmbedUrl}
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Floating Top-Left Info Card (Subtle WordPress Typography) */}
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-auto z-10 bg-white/95 backdrop-blur-md rounded-md p-2.5 sm:p-3 shadow-sm border border-gray-200/80 max-w-[calc(100%-1.5rem)] sm:max-w-[290px]">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-xs sm:text-[12.5px] font-medium text-[#2C3338] leading-tight">
                {activeTitle}
              </h3>
              <p className="text-[11px] text-[#787C82] mt-0.5 leading-tight font-normal">
                {activeSubtitle}
              </p>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <a
                href={externalMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Open in Google Maps"
                className="w-6 h-6 rounded bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={externalMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Get Directions"
                className="w-6 h-6 rounded bg-[#2D6A4F] hover:bg-[#23533E] flex items-center justify-center text-white transition-colors"
              >
                <Navigation className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
