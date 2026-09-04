import React from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { StepCard } from "./step-card";
import { Send, CheckCircle2, Truck } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      stepNumber: 1,
      title: "Send your request",
      description: "Contact Proh Pharmacy with the medicines or supplies you need.",
      icon: Send,
    },
    {
      stepNumber: 2,
      title: "Confirm your order",
      description:
        "The team will review the request and confirm availability and order details.",
      icon: CheckCircle2,
    },
    {
      stepNumber: 3,
      title: "Receive your delivery",
      description: "Your confirmed order will be delivered to your location in Ghana.",
      icon: Truck,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F8FCFA] border-b border-light-border/60">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Simple Ordering Workflow"
          title="How Ordering Works"
          description="A straightforward, transparent 3-step process designed for fast fulfilment for both individual patients and healthcare institutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step) => (
            <StepCard
              key={step.stepNumber}
              stepNumber={step.stepNumber}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
