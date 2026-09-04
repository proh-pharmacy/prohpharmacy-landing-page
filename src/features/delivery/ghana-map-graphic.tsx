import React from "react";
import { MapPin } from "lucide-react";

export function GhanaMapGraphic() {
  const hubs = [
    { city: "Accra (Central Hub)", top: "82%", left: "62%", isHub: true },
    { city: "Kumasi", top: "66%", left: "44%", isHub: false },
    { city: "Takoradi", top: "88%", left: "38%", isHub: false },
    { city: "Tamale", top: "35%", left: "50%", isHub: false },
    { city: "Sunyani", top: "58%", left: "32%", isHub: false },
    { city: "Ho", top: "72%", left: "70%", isHub: false },
    { city: "Bolgatanga", top: "18%", left: "52%", isHub: false },
    { city: "Wa", top: "25%", left: "28%", isHub: false },
  ];

  return (
    <div className="relative w-full max-w-[420px] aspect-[4/5] mx-auto bg-white/5 backdrop-blur-xs rounded-3xl p-6 border border-white/15 flex items-center justify-center">
      {/* Background Stylized Map Contour for Ghana */}
      <svg
        viewBox="0 0 300 400"
        className="w-full h-full opacity-40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 120 40 C 180 30, 210 50, 220 90 C 230 140, 240 190, 245 250 C 250 290, 220 330, 190 350 C 160 360, 120 360, 90 340 C 70 320, 80 270, 75 220 C 70 170, 60 120, 80 80 Z"
          stroke="#01A42F"
          strokeWidth="2.5"
          strokeDasharray="4 4"
          fill="rgba(1, 164, 47, 0.08)"
        />
        {/* Connected delivery trajectories */}
        <path
          d="M 186 328 Q 132 264 150 140"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeOpacity="0.4"
          strokeDasharray="3 3"
        />
        <path
          d="M 186 328 Q 130 300 114 352"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeOpacity="0.4"
          strokeDasharray="3 3"
        />
        <path
          d="M 186 328 Q 210 288 210 288"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeOpacity="0.4"
          strokeDasharray="3 3"
        />
      </svg>

      {/* City Hub Markers */}
      {hubs.map((hub) => (
        <div
          key={hub.city}
          className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 group cursor-default"
          style={{ top: hub.top, left: hub.left }}
        >
          <span
            className={`flex items-center justify-center rounded-full transition-transform group-hover:scale-125 ${
              hub.isHub
                ? "w-4 h-4 bg-red-accent ring-4 ring-red-accent/30 shadow-md"
                : "w-2.5 h-2.5 bg-bright-green ring-2 ring-white/30"
            }`}
          />
          <span
            className={`text-[11px] font-semibold tracking-tight whitespace-nowrap px-2 py-0.5 rounded shadow-xs ${
              hub.isHub
                ? "bg-white text-deep-green font-bold text-xs"
                : "bg-deep-green/90 text-white/90 border border-white/10 text-[10px]"
            }`}
          >
            {hub.city}
          </span>
        </div>
      ))}

      {/* Delivery Legend */}
      <div className="absolute bottom-3 left-4 right-4 bg-deep-green/95 border border-white/20 rounded-xl px-3 py-2 text-[11px] text-white/80 flex items-center justify-between">
        <span className="flex items-center gap-1 text-white font-medium">
          <MapPin className="w-3.5 h-3.5 text-red-accent" /> Central Dispatch
        </span>
        <span className="text-bright-green font-semibold">16 Regions Covered</span>
      </div>
    </div>
  );
}
