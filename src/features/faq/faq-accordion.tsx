"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FaqItem } from "@/types";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const faqs: FaqItem[] = [
    {
      question: "Do you deliver outside Accra?",
      answer: "Yes. Proh Pharmacy provides delivery anywhere in Ghana across all 16 regions.",
    },
    {
      question: "Do you supply pharmacies?",
      answer:
        "Yes. Proh Pharmacy provides wholesale medicine supply to pharmacies across Ghana looking to restock inventory.",
    },
    {
      question: "Can individuals purchase from Proh Pharmacy?",
      answer: "Yes. Proh Pharmacy provides retail services to individual customers.",
    },
    {
      question: "How can I request a wholesale quotation?",
      answer:
        "Use the contact form or contact Proh Pharmacy through the provided phone, email, or WhatsApp details.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={faq.question}
            className="border border-light-border bg-white rounded-xl overflow-hidden transition-colors"
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full px-5 py-4 text-left font-bold text-main-text text-base sm:text-lg flex items-center justify-between gap-4 hover:bg-light-green/40 transition-colors cursor-pointer"
              aria-expanded={isOpen}
            >
              <span>{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-deep-green flex-shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-sm text-muted-text leading-relaxed border-t border-light-border/40">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
