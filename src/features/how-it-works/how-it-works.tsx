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
    <section className="py-14 md:py-20 bg-[#F9FBF9] border-b border-light-border">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Order Process"
          title="How ordering works"
          description="A simple three-step process for retail customers and healthcare institutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
