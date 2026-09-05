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
      answer: "Yes. Proh Pharmacy provides retail dispensing services to individual customers with doorstep delivery across Ghana.",
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
    <div className="max-w-3xl mx-auto space-y-3.5 sm:space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={faq.question}
            className={`bg-white rounded-xl overflow-hidden transition-all duration-200 border ${
              isOpen
                ? "border-primary-green/40 shadow-sm ring-1 ring-primary-green/15"
                : "border-light-border/80 hover:border-primary-green/30 hover:shadow-xs"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full px-5 py-4 sm:px-6 sm:py-5 text-left flex items-center justify-between gap-4 cursor-pointer transition-colors group"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3.5 sm:gap-4">
                <span
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-[13px] font-medium shrink-0 transition-colors ${
                    isOpen
                      ? "bg-primary-green text-white"
                      : "bg-[#E5F4EC] text-primary-green"
                  }`}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="font-medium text-main-text text-sm sm:text-base md:text-[17px] tracking-tight">
                  {faq.question}
                </span>
              </div>

              <span
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                  isOpen
                    ? "bg-light-green text-primary-green"
                    : "bg-gray-100 text-gray-500 group-hover:bg-light-green group-hover:text-primary-green"
                }`}
              >
                <div className="relative w-4 h-4 flex items-center justify-center">
                  <Plus
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 absolute transition-all duration-300 ease-out ${
                      isOpen
                        ? "rotate-90 opacity-0 scale-50"
                        : "rotate-0 opacity-100 scale-100"
                    }`}
                  />
                  <Minus
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 absolute transition-all duration-300 ease-out ${
                      isOpen
                        ? "rotate-0 opacity-100 scale-100"
                        : "-rotate-90 opacity-0 scale-50"
                    }`}
                  />
                </div>
              </span>
            </button>

            {/* Smooth animated height expansion */}
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div
                  className={`px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-light-border/40 pl-[52px] sm:pl-[64px] transition-opacity duration-300 ease-out ${
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
        <p className="text-xs sm:text-sm text-gray-500">
          Have a specific prescription or wholesale enquiry?{" "}
          <Link
            href="/contact"
            className="font-semibold text-primary-green hover:text-deep-green inline-flex items-center gap-1 underline underline-offset-4 decoration-primary-green/40 hover:decoration-primary-green transition-colors"
          >
            <span>Contact us directly</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </p>
      </div>
    </div>
  );
}
