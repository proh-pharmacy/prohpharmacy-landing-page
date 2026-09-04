import React from "react";
import { MapPin } from "lucide-react";

export function GhanaMapGraphic() {
  const points = [
    { name: "Accra", x: 185, y: 330, isHub: true },
    { name: "Kumasi", x: 135, y: 265, isHub: false },
    { name: "Takoradi", x: 115, y: 350, isHub: false },
    { name: "Tamale", x: 150, y: 140, isHub: false },
    { name: "Sunyani", x: 95, y: 235, isHub: false },
    { name: "Ho", x: 210, y: 285, isHub: false },
    { name: "Bolgatanga", x: 155, y: 70, isHub: false },
    { name: "Wa", x: 85, y: 100, isHub: false },
  ];

  return (
    <div className="relative w-full max-w-[380px] aspect-[4/5] mx-auto bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col items-center justify-center">
      {/* SVG Map of Ghana */}
      <svg
        viewBox="0 0 300 400"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Simplified accurate Ghana boundary contour */}
        <path
          d="M 120 40 C 180 30, 210 50, 220 90 C 230 140, 240 190, 245 250 C 250 290, 220 330, 190 350 C 160 360, 120 360, 90 340 C 70 320, 80 270, 75 220 C 70 170, 60 120, 80 80 Z"
          stroke="#01A42F"
          strokeWidth="2"
          strokeOpacity="0.6"
          fill="rgba(4, 94, 31, 0.2)"
        />

        {/* Subtle trajectory lines connecting Accra to regional hubs */}
        <path
          d="M 185 330 Q 140 290 135 265"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeOpacity="0.4"
          strokeDasharray="3 3"
        />
        <path
          d="M 185 330 Q 150 200 150 140"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeOpacity="0.4"
          strokeDasharray="3 3"
        />
        <path
          d="M 185 330 L 115 350"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeOpacity="0.4"
          strokeDasharray="3 3"
        />
        <path
          d="M 185 330 L 210 285"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeOpacity="0.4"
          strokeDasharray="3 3"
        />

        {/* City Dots */}
        {points.map((pt) => (
          <g key={pt.name}>
            <circle
              cx={pt.x}
              cy={pt.y}
              r={pt.isHub ? 5 : 3.5}
              fill={pt.isHub ? "#F8010F" : "#01A42F"}
              stroke="#FFFFFF"
              strokeWidth="1.5"
            />
            <text
              x={pt.x + (pt.x > 150 ? 8 : -8)}
              y={pt.y + 4}
              textAnchor={pt.x > 150 ? "start" : "end"}
              fill="#FFFFFF"
              fillOpacity={pt.isHub ? "1" : "0.75"}
              fontSize={pt.isHub ? "11" : "9.5"}
              fontWeight={pt.isHub ? "600" : "400"}
            >
              {pt.name}
            </text>
          </g>
        ))}
      </svg>

      {/* Simple quiet caption */}
      <div className="mt-2 text-center text-xs text-white/70 flex items-center gap-1.5">
        <MapPin className="w-3.5 h-3.5 text-red-accent" />
        <span>Central Dispatch Hub in Accra with Nationwide Courier Links</span>
      </div>
    </div>
  );
}
