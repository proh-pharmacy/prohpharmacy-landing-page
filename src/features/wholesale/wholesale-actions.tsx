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
    },
    {
      title: "Send a Medicine List",
      desc: "Already have a restocking or procurement list prepared? Send it directly to our intake team.",
      icon: Send,
      actionText: "Submit Medicine List",
      href: "/contact?type=wholesale#contact-form",
    },
    {
      title: "Contact the Sales Team",
      desc: "Speak with our pharmaceutical account representatives regarding ongoing supply contracts.",
      icon: Users,
      actionText: "Contact Sales Team",
      href: "/contact?type=wholesale#contact-form",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
      {actions.map((act) => {
        const Icon = act.icon;
        return (
          <div
            key={act.title}
            className="rounded-xl p-6 flex flex-col justify-between border border-light-border bg-white hover:border-primary-green/40 transition-all"
          >
            <div>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-light-green text-deep-green">
                <Icon className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-main-text">{act.title}</h4>
              <p className="text-xs sm:text-sm text-muted-text mt-2 leading-relaxed">{act.desc}</p>
            </div>

            <div className="mt-6 pt-4 border-t border-light-border/60">
              <Link
                href={act.href}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-deep-green hover:text-primary-green transition-colors"
              >
                <span>{act.actionText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
