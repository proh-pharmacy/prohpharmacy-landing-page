import React from "react";
import Link from "next/link";
import { FileSpreadsheet, Send, Users, ArrowRight } from "lucide-react";

export function WholesaleActions() {
  const actions = [
    {
      title: "Request a Wholesale Quotation",
      desc: "Submit your estimated requirements and receive an itemized wholesale pricing quote.",
      icon: FileSpreadsheet,
      actionText: "Request Quotation",
      href: "/contact?type=wholesale#contact-form",
      highlight: true,
    },
    {
      title: "Send a Medicine List",
      desc: "Already have a restocking or procurement list prepared? Send it directly to our intake team.",
      icon: Send,
      actionText: "Submit Medicine List",
      href: "/contact?type=wholesale#contact-form",
      highlight: false,
    },
    {
      title: "Contact the Sales Team",
      desc: "Speak with our pharmaceutical account representatives regarding ongoing supply contracts.",
      icon: Users,
      actionText: "Contact Sales Rep",
      href: "/contact?type=wholesale#contact-form",
      highlight: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
      {actions.map((act) => {
        const Icon = act.icon;
        return (
          <div
            key={act.title}
            className={`rounded-2xl p-6 flex flex-col justify-between border transition-all ${
              act.highlight
                ? "bg-white border-primary-green/50 shadow-md ring-1 ring-primary-green/20"
                : "bg-white border-light-border hover:border-primary-green/40 hover:shadow-xs"
            }`}
          >
            <div>
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  act.highlight
                    ? "bg-light-green text-deep-green border border-light-border"
                    : "bg-gray-50 text-deep-green border border-light-border"
                }`}
              >
                <Icon className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-main-text">{act.title}</h4>
              <p className="text-sm text-muted-text mt-2 leading-relaxed">{act.desc}</p>
            </div>

            <div className="mt-6 pt-4 border-t border-light-border/70">
              <Link
                href={act.href}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-deep-green hover:text-primary-green transition-colors"
              >
                <span>{act.actionText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
