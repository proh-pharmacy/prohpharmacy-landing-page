"use client";

import { siteConfig } from "@/config/site";

export function WhatsAppFab() {
  return (
    <a
      id="whatsapp-fab"
      href={siteConfig.contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed z-50 flex items-center justify-center w-13 h-13 bottom-6 right-5 md:bottom-auto md:top-1/2 md:-translate-y-1/2"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />

      {/* Button */}
      <span className="relative flex items-center justify-center w-13 h-13 rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/40 transition-transform duration-200 group-hover:scale-110">
        {/* WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-7 h-7 fill-white"
          aria-hidden="true"
        >
          <path d="M16 0C7.164 0 0 7.163 0 16c0 2.824.737 5.476 2.027 7.78L.064 31.16a1 1 0 0 0 1.217 1.217l7.38-1.963A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.726-1.82l-.482-.287-4.977 1.323 1.323-4.977-.287-.482A13.27 13.27 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.31-9.907c-.4-.2-2.366-1.168-2.732-1.3-.366-.133-.633-.2-.9.2-.266.4-1.032 1.3-1.266 1.566-.233.267-.466.3-.866.1-.4-.2-1.688-.622-3.215-1.983-1.188-1.06-1.99-2.369-2.222-2.769-.233-.4-.025-.616.175-.815.18-.18.4-.466.6-.7.2-.233.267-.4.4-.666.133-.267.067-.5-.033-.7-.1-.2-.9-2.167-1.233-2.966-.325-.78-.656-.674-.9-.686l-.766-.013c-.267 0-.7.1-1.066.5-.367.4-1.4 1.367-1.4 3.333s1.433 3.867 1.633 4.133c.2.267 2.82 4.306 6.833 6.034.955.412 1.7.658 2.28.843.958.305 1.83.262 2.52.159.768-.115 2.366-.967 2.7-1.9.333-.933.333-1.733.233-1.9-.1-.166-.366-.266-.766-.466z" />
        </svg>
      </span>

      {/* Tooltip */}
      <span className="absolute right-full mr-3 whitespace-nowrap bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-md">
        Chat on WhatsApp
        <span className="absolute top-1/2 -translate-y-1/2 -right-1.5 border-4 border-transparent border-l-gray-900" />
      </span>
    </a>
  );
}
