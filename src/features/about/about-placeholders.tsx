import React from "react";
import { FileText, Award, Calendar } from "lucide-react";

export function AboutPlaceholders() {
  const items = [
    {
      title: "Company Background",
      icon: Calendar,
      description:
        "Proh Pharmacy is established to bridge medicine access across Ghana with reliable sourcing and nationwide distribution.",
    },
    {
      title: "Regulatory Compliance",
      icon: Award,
      description:
        "Operates strictly under Ghanaian pharmaceutical governance, following Pharmacy Council and FDA standards.",
    },
    {
      title: "Service Commitment",
      icon: FileText,
      description:
        "Dedicated to transparent order fulfillment, secure medicine transport, and long-term pharmacy partnerships.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.title}
            className="bg-white rounded-xl border border-light-border p-5 flex flex-col justify-between"
          >
            <div>
              <div className="w-8 h-8 rounded-md bg-light-green text-deep-green flex items-center justify-center mb-3">
                <Icon className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-main-text">{item.title}</h4>
              <p className="text-xs text-muted-text mt-1.5 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
