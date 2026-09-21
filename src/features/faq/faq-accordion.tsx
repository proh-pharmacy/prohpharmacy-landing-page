"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { FaqItem } from "@/types";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const faqs: FaqItem[] = [
    {
      question: "Do you deliver outside Accra?",
      answer:
        "Yes. Proh Pharmacy currently delivers across 8 active regions in Ghana (Greater Accra, Ashanti, Eastern, Central, Western, Volta, Bono, and Northern) with our 5 dedicated trekking vans and verified courier logistics, with ongoing expansion scheduled to cover all 16 regions.",
    },
    {
      question: "Do you supply pharmacies?",
      answer:
        "Yes. Proh Pharmacy provides wholesale medicine supply to pharmacies, clinics, and hospitals across Ghana looking to reliably restock genuine inventory.",
    },
    {
      question: "Can individuals purchase from Proh Pharmacy?",
      answer:
        "Yes. Proh Pharmacy provides retail dispensing services to individual customers with doorstep delivery across Ghana.",
    },
    {
      question: "How can I request a wholesale quotation?",
      answer:
        "Submit an inquiry through our Request Supply button or contact Proh Pharmacy directly via phone, email, or WhatsApp with your medication order list.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-3 sm:space-y-3.5">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={faq.question}
            className={`bg-white rounded-none transition-colors duration-200 border ${
              isOpen
                ? "border-[#CCD0D4] shadow-2xs"
                : "border-gray-200/80 hover:border-gray-300"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full px-5 py-4 sm:px-6 sm:py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer transition-colors group"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3.5 sm:gap-4">
                <span
                  className={`w-6 h-6 rounded-none flex items-center justify-center text-[11px] font-normal shrink-0 transition-colors ${
                    isOpen
                      ? "bg-[#2D6A4F] text-white"
                      : "bg-[#F4F8F5] text-[#787C82]"
                  }`}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="font-medium text-[#2C3338] text-sm sm:text-[15.5px] tracking-normal">
                  {faq.question}
                </span>
              </div>

              <span className="w-6 h-6 rounded-none flex items-center justify-center shrink-0 text-[#787C82]">
                <div className="relative w-3.5 h-3.5 flex items-center justify-center">
                  <Plus
                    className={`w-3.5 h-3.5 absolute transition-all duration-200 ease-out ${
                      isOpen
                        ? "rotate-90 opacity-0 scale-50"
                        : "rotate-0 opacity-100 scale-100"
                    }`}
                  />
                  <Minus
                    className={`w-3.5 h-3.5 absolute transition-all duration-200 ease-out ${
                      isOpen
                        ? "rotate-0 opacity-100 scale-100"
                        : "-rotate-90 opacity-0 scale-50"
                    }`}
                  />
                </div>
              </span>
            </button>

            {/* Smooth height expansion */}
            <div
              className={`grid transition-[grid-template-rows] duration-250 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div
                  className={`px-5 pb-5 sm:px-6 sm:pb-5 pt-1 text-xs sm:text-[13px] text-[#787C82] leading-relaxed border-t border-gray-100 pl-[48px] sm:pl-[60px] font-normal transition-opacity duration-200 ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Bottom Reassurance Link */}
      <div className="pt-8 sm:pt-10 text-center">
        <p className="text-xs sm:text-[13px] text-[#787C82] font-normal">
          Have a specific prescription or wholesale enquiry?{" "}
          <Link
            href="/contact"
            className="font-medium text-[#2D6A4F] hover:text-[#1D2327] inline-flex items-center gap-1 underline underline-offset-4 decoration-[#2D6A4F]/40 hover:decoration-[#2D6A4F] transition-colors"
          >
            <span>Contact us directly</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </p>
      </div>
    </div>
  );
}
