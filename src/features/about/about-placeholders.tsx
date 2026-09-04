import React from "react";
import { FileText, Award, Calendar, AlertCircle } from "lucide-react";

export function AboutPlaceholders() {
  const items = [
    {
      title: "Company History & Milestones",
      icon: Calendar,
      description:
        "Detailed founding story, background, and operational milestones will be documented upon client verification.",
      status: "Official Record Pending",
    },
    {
      title: "Licences & Regulatory Registration",
      icon: Award,
      description:
        "Pharmacy Council of Ghana and Food and Drugs Authority (FDA) regulatory registration credentials.",
      status: "Verification In Progress",
    },
    {
      title: "Corporate Mission & Governance",
      icon: FileText,
      description:
        "Formal corporate mission, pharmaceutical practice standards, and distribution guidelines.",
      status: "Approved Copy Pending",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.title}
            className="bg-[#F7FAF8] rounded-xl border border-dashed border-light-border p-5 flex flex-col justify-between hover:border-primary-green/50 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-light-green text-primary-green flex items-center justify-center">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted-text bg-white px-2 py-0.5 rounded border border-light-border">
                  <AlertCircle className="w-3 h-3 text-primary-green" />
                  {item.status}
                </span>
              </div>
              <h4 className="text-base font-bold text-main-text">{item.title}</h4>
              <p className="text-xs text-muted-text mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-light-border/60 text-[11px] text-muted-text/80 italic">
              Reserved placeholder for verified partner documentation
            </div>
          </div>
        );
      })}
    </div>
  );
}
