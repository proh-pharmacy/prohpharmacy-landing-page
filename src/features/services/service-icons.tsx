import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

/**
 * 1. Layered Bulk Supply Icon (Inspired by Icon 1 in reference)
 * Three stacked isometric diamond layers: top layer vibrant emerald, base layers dark charcoal.
 */
export function LayeredSupplyIcon({ className = "w-7 h-7" }: IconProps) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Bottom Layer (Dark) */}
      <path
        d="M14 24.5L3.5 19.25L5.6 17.5L14 21.7L22.4 17.5L24.5 19.25L14 24.5Z"
        fill="#111827"
      />
      {/* Middle Layer (Dark with subtle opacity) */}
      <path
        d="M14 19.6L3.5 14.35L5.6 12.6L14 16.8L22.4 12.6L24.5 14.35L14 19.6Z"
        fill="#1F2937"
      />
      {/* Top Diamond Layer (Vibrant Emerald Green) */}
      <path
        d="M14 4.5L24.5 9.75L14 15L3.5 9.75L14 4.5Z"
        fill="#05C075"
      />
      {/* Top Highlight Accent */}
      <path
        d="M14 6.2L21.7 10.05L14 13.9L6.3 10.05L14 6.2Z"
        fill="#34D399"
        fillOpacity="0.4"
      />
    </svg>
  );
}

/**
 * 2. Quality Control & Institutional Check Icon (Inspired by Icon 2 in reference)
 * Vibrant green circle with dark checkmark & clinical ring.
 */
export function QualityCheckIcon({ className = "w-7 h-7" }: IconProps) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Green Circle Base */}
      <circle cx="14" cy="14" r="11.5" fill="#05C075" />
      {/* Inner Glow Ring */}
      <circle cx="14" cy="14" r="10" stroke="#34D399" strokeWidth="1" strokeOpacity="0.6" />
      {/* Dark Bold Checkmark */}
      <path
        d="M9.5 14.2L12.5 17.2L18.5 11.2"
        stroke="#111827"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * 3. 24/7 Customer Service & Emergency Dispatch Icon (Inspired by Icon 3 in reference)
 * Vibrant green chat bubble with dark secondary shadow bubble and speech dots.
 */
export function ServiceChatIcon({ className = "w-7 h-7" }: IconProps) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Dark Secondary Bubble (Offset back) */}
      <path
        d="M7 19.5L5 23.5L9.5 22.2C10.8 22.7 12.3 23 14 23C19.5 23 24 18.7 24 13.5C24 12.3 23.7 11.2 23.2 10.2C22.6 15.3 18.3 19.2 13 19.2C10.7 19.2 8.7 18.5 7 17.4V19.5Z"
        fill="#111827"
      />
      {/* Primary Vibrant Green Bubble */}
      <path
        d="M13 5C7.5 5 3 9.3 3 14.5C3 16.5 3.6 18.3 4.8 19.7L3.5 23.5L7.6 22.3C9.2 23.4 11 24 13 24C18.5 24 23 19.7 23 14.5C23 9.3 18.5 5 13 5Z"
        fill="#05C075"
      />
      {/* Three Dark Conversation Dots */}
      <circle cx="9" cy="14.5" r="1.3" fill="#111827" />
      <circle cx="13" cy="14.5" r="1.3" fill="#111827" />
      <circle cx="17" cy="14.5" r="1.3" fill="#111827" />
    </svg>
  );
}

/**
 * 4. Prescription Handbook / Refill Book Icon (Inspired by Icon 4 in reference)
 * Vibrant green book cover with dark spine/bookmark and prescription lines.
 */
export function PrescriptionBookIcon({ className = "w-7 h-7" }: IconProps) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Book Cover (Vibrant Emerald) */}
      <rect x="5.5" y="4" width="17" height="20" rx="3.5" fill="#05C075" />
      {/* Dark Spine Strip on left */}
      <path
        d="M5.5 7.5C5.5 5.567 7.067 4 9 4H9.5V24H9C7.067 24 5.5 22.433 5.5 20.5V7.5Z"
        fill="#111827"
      />
      {/* Dark Bookmark Ribbon */}
      <rect x="12" y="4" width="3.5" height="7" rx="1" fill="#111827" />
      {/* Rx Document Indicator Lines */}
      <rect x="12" y="14" width="7" height="1.8" rx="0.9" fill="#FFFFFF" fillOpacity="0.9" />
      <rect x="12" y="17.5" width="5" height="1.8" rx="0.9" fill="#FFFFFF" fillOpacity="0.9" />
    </svg>
  );
}

/**
 * 5. Delivered Safely / Isometric Delivery Box Icon (Inspired by Icon 5 in reference)
 * 3D isometric cube box with vibrant green facets, dark contrast flap and shipping tape.
 */
export function DeliveryBoxIcon({ className = "w-7 h-7" }: IconProps) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Top Face (Vibrant Bright Green) */}
      <path
        d="M14 3.5L23.5 8.8L14 14.1L4.5 8.8L14 3.5Z"
        fill="#05C075"
      />
      {/* Left Face (Deep Green) */}
      <path
        d="M4.5 9.8L13.2 14.7V24.5L4.5 19.6V9.8Z"
        fill="#038E55"
      />
      {/* Right Face (Medium Green) */}
      <path
        d="M14.8 14.7L23.5 9.8V19.6L14.8 24.5V14.7Z"
        fill="#04A765"
      />
      {/* Center Dark Packaging Tape */}
      <path
        d="M14 3.5L16.2 4.7L16.2 12.8L14 14.1L11.8 12.8L11.8 4.7L14 3.5Z"
        fill="#111827"
      />
      {/* Front Tape Continuation */}
      <path
        d="M13.2 14.7H14.8V24.5H13.2V14.7Z"
        fill="#111827"
      />
    </svg>
  );
}

/**
 * 6. Capsule & Tablet Duo-Tone Icon (Retail Medicine Supply)
 * Angled pharmaceutical capsule & pill in emerald green & dark charcoal.
 */
export function MedicinePillIcon({ className = "w-7 h-7" }: IconProps) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Capsule Lower Body (Emerald Green) */}
      <path
        d="M7.8 20.2C5.4 17.8 5.4 13.9 7.8 11.5L12 7.3L16.2 11.5L12 15.7L12.7 16.4L16.5 12.6C18.9 15 18.9 18.9 16.5 21.3C14.1 23.7 10.2 23.7 7.8 20.2Z"
        fill="#05C075"
      />
      {/* Capsule Upper Cap (Dark Charcoal) */}
      <path
        d="M12.4 6.9L16.6 2.7C19 0.3 22.9 0.3 25.3 2.7C27.7 5.1 27.7 9 25.3 11.4L21.1 15.6L16.2 10.7L12.4 6.9Z"
        fill="#111827"
      />
      {/* Highlight Sheen on Cap */}
      <path
        d="M19.5 5.5L22.5 8.5"
        stroke="#34D399"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Round Tablet Overlay (Dark with Green Cross) */}
      <circle cx="8" cy="8" r="4.5" fill="#111827" />
      <path
        d="M8 5.8V10.2M5.8 8H10.2"
        stroke="#05C075"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
