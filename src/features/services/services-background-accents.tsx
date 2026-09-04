import React from "react";

export function ServicesBackgroundAccents() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-visible pointer-events-none select-none z-0 opacity-40"
    >
      {/* ========================================================
          LEFT FLANK ACCENT (Tucked right alongside the left cards)
          ======================================================== */}
      <div className="absolute left-0 -translate-x-[40%] sm:-translate-x-[50%] md:-translate-x-[55%] lg:-translate-x-[60%] top-6 md:top-10 w-64 sm:w-72 md:w-80 lg:w-88 pointer-events-none">
        <svg
          viewBox="0 0 320 720"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          {/* Defs for soft gradients */}
          <defs>
            <linearGradient id="left-pulse-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#087A2D" stopOpacity="0" />
              <stop offset="50%" stopColor="#087A2D" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#087A2D" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* --- TOP CLUSTER (Flanking Row 1: Retail Supply) --- */}

          {/* Faint Dotted Orbit Ring */}
          <circle
            cx="170"
            cy="120"
            r="85"
            stroke="#087A2D"
            strokeWidth="1"
            strokeDasharray="4 6"
            strokeOpacity="0.18"
          />

          {/* Primary Molecular Hexagon (Benzene ring) */}
          <polygon
            points="170,70 210,93 210,140 170,163 130,140 130,93"
            fill="#087A2D"
            fillOpacity="0.03"
            stroke="#087A2D"
            strokeWidth="1.5"
            strokeOpacity="0.25"
          />
          {/* Inner Hexagon Echo */}
          <polygon
            points="170,84 198,100 198,133 170,149 142,133 142,100"
            stroke="#087A2D"
            strokeWidth="0.8"
            strokeOpacity="0.15"
          />

          {/* Molecular Nodes on Vertices */}
          <circle cx="170" cy="70" r="3.5" fill="#087A2D" fillOpacity="0.35" />
          <circle cx="210" cy="93" r="3.5" fill="#087A2D" fillOpacity="0.35" />
          <circle cx="210" cy="140" r="3.5" fill="#087A2D" fillOpacity="0.35" />
          <circle cx="170" cy="163" r="3.5" fill="#087A2D" fillOpacity="0.35" />
          <circle cx="130" cy="140" r="3.5" fill="#087A2D" fillOpacity="0.35" />
          <circle cx="130" cy="93" r="3.5" fill="#087A2D" fillOpacity="0.35" />

          {/* Molecular Bond Line to Secondary Ring */}
          <line
            x1="210"
            y1="140"
            x2="245"
            y2="180"
            stroke="#087A2D"
            strokeWidth="1.2"
            strokeOpacity="0.22"
          />

          {/* Secondary Hexagon */}
          <polygon
            points="270,160 300,177 300,212 270,229 240,212 240,177"
            fill="#087A2D"
            fillOpacity="0.02"
            stroke="#087A2D"
            strokeWidth="1.2"
            strokeOpacity="0.2"
          />
          <circle cx="270" cy="160" r="3" fill="#087A2D" fillOpacity="0.3" />
          <circle cx="300" cy="177" r="3" fill="#087A2D" fillOpacity="0.3" />
          <circle cx="270" cy="229" r="3" fill="#087A2D" fillOpacity="0.3" />

          {/* Delicate Floating Pharmaceutical Capsule (Tilted) */}
          <g transform="translate(100, 190) rotate(-32)">
            <rect
              x="0"
              y="0"
              width="28"
              height="68"
              rx="14"
              fill="#087A2D"
              fillOpacity="0.035"
              stroke="#087A2D"
              strokeWidth="1.4"
              strokeOpacity="0.24"
            />
            {/* Center division line across capsule */}
            <line
              x1="0"
              y1="34"
              x2="28"
              y2="34"
              stroke="#087A2D"
              strokeWidth="1.2"
              strokeOpacity="0.25"
            />
          </g>

          {/* Subtle Pharmacy Cross Outline (Top Left) */}
          <path
            d="M75 105h10v10h10v10h-10v10h-10v-10h-10v-10h10z"
            fill="#087A2D"
            fillOpacity="0.03"
            stroke="#087A2D"
            strokeWidth="1.2"
            strokeOpacity="0.22"
            strokeLinejoin="round"
          />

          {/* Floating Round Tablet Pill */}
          <circle
            cx="255"
            cy="90"
            r="12"
            fill="#087A2D"
            fillOpacity="0.025"
            stroke="#087A2D"
            strokeWidth="1.1"
            strokeOpacity="0.2"
          />
          <line
            x1="247"
            y1="90"
            x2="263"
            y2="90"
            stroke="#087A2D"
            strokeWidth="1"
            strokeOpacity="0.22"
          />

          {/* Medical Plus Micro Accents */}
          <path
            d="M60 210v8m-4-4h8"
            stroke="#087A2D"
            strokeWidth="1.2"
            strokeOpacity="0.2"
            strokeLinecap="round"
          />
          <path
            d="M215 260v8m-4-4h8"
            stroke="#087A2D"
            strokeWidth="1.2"
            strokeOpacity="0.18"
            strokeLinecap="round"
          />

          {/* --- MIDDLE BRIDGE: Subtle Pulse / ECG Line --- */}
          <path
            d="M50 350h50l8-14 12 28 10-20 8 10 14-4h40"
            stroke="url(#left-pulse-grad)"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* --- BOTTOM CLUSTER (Flanking Row 2: Refills & Institutional) --- */}

          {/* Lower Connected Hexagon Lattice */}
          <polygon
            points="180,430 215,450 215,490 180,510 145,490 145,450"
            fill="#087A2D"
            fillOpacity="0.02"
            stroke="#087A2D"
            strokeWidth="1.3"
            strokeOpacity="0.22"
          />
          <circle cx="180" cy="430" r="3" fill="#087A2D" fillOpacity="0.3" />
          <circle cx="215" cy="450" r="3" fill="#087A2D" fillOpacity="0.3" />
          <circle cx="215" cy="490" r="3" fill="#087A2D" fillOpacity="0.3" />
          <circle cx="180" cy="510" r="3" fill="#087A2D" fillOpacity="0.3" />
          <circle cx="145" cy="490" r="3" fill="#087A2D" fillOpacity="0.3" />
          <circle cx="145" cy="450" r="3" fill="#087A2D" fillOpacity="0.3" />

          {/* Second Lower Capsule */}
          <g transform="translate(230, 520) rotate(24)">
            <rect
              x="0"
              y="0"
              width="24"
              height="60"
              rx="12"
              fill="#087A2D"
              fillOpacity="0.03"
              stroke="#087A2D"
              strokeWidth="1.3"
              strokeOpacity="0.22"
            />
            <line
              x1="0"
              y1="30"
              x2="24"
              y2="30"
              stroke="#087A2D"
              strokeWidth="1.1"
              strokeOpacity="0.22"
            />
          </g>

          {/* Lower Subtle Medical Cross */}
          <path
            d="M120 540h8v8h8v8h-8v8h-8v-8h-8v-8h8z"
            fill="#087A2D"
            fillOpacity="0.025"
            stroke="#087A2D"
            strokeWidth="1.1"
            strokeOpacity="0.2"
            strokeLinejoin="round"
          />

          {/* Dotted Accent Ring */}
          <circle
            cx="130"
            cy="470"
            r="60"
            stroke="#087A2D"
            strokeWidth="0.9"
            strokeDasharray="3 5"
            strokeOpacity="0.14"
          />
        </svg>
      </div>

      {/* =========================================================
          RIGHT FLANK ACCENT (Tucked right alongside the right cards)
          ========================================================= */}
      <div className="absolute right-0 translate-x-[40%] sm:translate-x-[50%] md:translate-x-[55%] lg:translate-x-[60%] top-10 md:top-14 w-64 sm:w-72 md:w-80 lg:w-88 pointer-events-none">
        <svg
          viewBox="0 0 320 720"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          {/* Defs for soft gradients */}
          <defs>
            <linearGradient id="right-pulse-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DE2512" stopOpacity="0" />
              <stop offset="50%" stopColor="#DE2512" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#087A2D" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* --- TOP CLUSTER (Flanking Row 1: Delivery & Wholesale) --- */}

          {/* Faint Dotted Orbit Ring */}
          <circle
            cx="150"
            cy="130"
            r="90"
            stroke="#087A2D"
            strokeWidth="1"
            strokeDasharray="4 6"
            strokeOpacity="0.16"
          />

          {/* Angled Pharmacy Capsule (Green) */}
          <g transform="translate(160, 60) rotate(24)">
            <rect
              x="0"
              y="0"
              width="26"
              height="64"
              rx="13"
              fill="#087A2D"
              fillOpacity="0.035"
              stroke="#087A2D"
              strokeWidth="1.4"
              strokeOpacity="0.24"
            />
            <line
              x1="0"
              y1="32"
              x2="26"
              y2="32"
              stroke="#087A2D"
              strokeWidth="1.2"
              strokeOpacity="0.25"
            />
          </g>

          {/* Upper Right Molecular Hexagon */}
          <polygon
            points="140,140 175,160 175,200 140,220 105,200 105,160"
            fill="#087A2D"
            fillOpacity="0.03"
            stroke="#087A2D"
            strokeWidth="1.5"
            strokeOpacity="0.24"
          />
          {/* Inner Hexagon Echo */}
          <polygon
            points="140,152 165,166 165,194 140,208 115,194 115,166"
            stroke="#087A2D"
            strokeWidth="0.8"
            strokeOpacity="0.14"
          />

          {/* Molecular Nodes */}
          <circle cx="140" cy="140" r="3.5" fill="#087A2D" fillOpacity="0.32" />
          <circle cx="175" cy="160" r="3.5" fill="#087A2D" fillOpacity="0.32" />
          <circle cx="175" cy="200" r="3.5" fill="#087A2D" fillOpacity="0.32" />
          <circle cx="140" cy="220" r="3.5" fill="#087A2D" fillOpacity="0.32" />
          <circle cx="105" cy="200" r="3.5" fill="#087A2D" fillOpacity="0.32" />
          <circle cx="105" cy="160" r="3.5" fill="#087A2D" fillOpacity="0.32" />

          {/* Bond Line leading towards red accent */}
          <line
            x1="105"
            y1="200"
            x2="70"
            y2="235"
            stroke="#087A2D"
            strokeWidth="1.2"
            strokeOpacity="0.2"
          />

          {/* Subtle Red Pharmacy Cross Accent (Brand red echo) */}
          <path
            d="M50 230h9v9h9v9h-9v9h-9v-9h-9v-9h9z"
            fill="#DE2512"
            fillOpacity="0.035"
            stroke="#DE2512"
            strokeWidth="1.2"
            strokeOpacity="0.22"
            strokeLinejoin="round"
          />

          {/* Round Tablet Pill with score */}
          <circle
            cx="75"
            cy="120"
            r="11"
            fill="#087A2D"
            fillOpacity="0.02"
            stroke="#087A2D"
            strokeWidth="1"
            strokeOpacity="0.2"
          />
          <line
            x1="68"
            y1="116"
            x2="82"
            y2="124"
            stroke="#087A2D"
            strokeWidth="0.9"
            strokeOpacity="0.2"
          />

          {/* Plus Micro Accents */}
          <path
            d="M245 150v7m-3.5-3.5h7"
            stroke="#087A2D"
            strokeWidth="1.1"
            strokeOpacity="0.2"
            strokeLinecap="round"
          />
          <path
            d="M190 250v7m-3.5-3.5h7"
            stroke="#DE2512"
            strokeWidth="1.1"
            strokeOpacity="0.2"
            strokeLinecap="round"
          />

          {/* --- MIDDLE BRIDGE: Subtle Pulse --- */}
          <path
            d="M100 340h40l8-12 12 26 8-18 10 8 12-4h50"
            stroke="url(#right-pulse-grad)"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* --- BOTTOM CLUSTER (Flanking Row 2: Emergency & 24/7) --- */}

          {/* Lower Connected Molecule Hexagon */}
          <polygon
            points="130,420 160,437 160,472 130,490 100,472 100,437"
            fill="#087A2D"
            fillOpacity="0.02"
            stroke="#087A2D"
            strokeWidth="1.2"
            strokeOpacity="0.22"
          />
          <circle cx="130" cy="420" r="3" fill="#087A2D" fillOpacity="0.28" />
          <circle cx="160" cy="437" r="3" fill="#087A2D" fillOpacity="0.28" />
          <circle cx="160" cy="472" r="3" fill="#087A2D" fillOpacity="0.28" />
          <circle cx="130" cy="490" r="3" fill="#087A2D" fillOpacity="0.28" />
          <circle cx="100" cy="472" r="3" fill="#087A2D" fillOpacity="0.28" />
          <circle cx="100" cy="437" r="3" fill="#087A2D" fillOpacity="0.28" />

          {/* Second Lower Capsule (Slight Red Accent) */}
          <g transform="translate(60, 500) rotate(-20)">
            <rect
              x="0"
              y="0"
              width="24"
              height="60"
              rx="12"
              fill="#DE2512"
              fillOpacity="0.025"
              stroke="#DE2512"
              strokeWidth="1.2"
              strokeOpacity="0.2"
            />
            <line
              x1="0"
              y1="30"
              x2="24"
              y2="30"
              stroke="#DE2512"
              strokeWidth="1"
              strokeOpacity="0.2"
            />
          </g>

          {/* Lower Green Cross */}
          <path
            d="M175 520h8v8h8v8h-8v8h-8v-8h-8v-8h8z"
            fill="#087A2D"
            fillOpacity="0.025"
            stroke="#087A2D"
            strokeWidth="1.1"
            strokeOpacity="0.2"
            strokeLinejoin="round"
          />

          {/* Dotted Accent Ring */}
          <circle
            cx="170"
            cy="455"
            r="65"
            stroke="#087A2D"
            strokeWidth="0.9"
            strokeDasharray="3 5"
            strokeOpacity="0.14"
          />
        </svg>
      </div>
    </div>
  );
}
