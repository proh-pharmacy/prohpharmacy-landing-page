import React from "react";
import { Reveal } from "@/components/ui/reveal";

export function HowItWorks() {
  const steps = [
    {
      stepNumber: "01",
      title: "Initial Consultation",
      description:
        "Discuss your medical requirements, specific pharmaceutical brands, dosage forms, or routine supply schedules.",
      bgColor: "#8B2B0F",
      numColor: "#8B2B0F",
    },
    {
      stepNumber: "02",
      title: "Order Placement",
      description:
        "Submit your medication lists, prescription requests, or bulk replenishment orders whenever supplies are needed.",
      bgColor: "#B55014",
      numColor: "#B55014",
    },
    {
      stepNumber: "03",
      title: "Review & Confirmation",
      description:
        "Our team reviews stock availability, verifies genuine pharmaceutical batches, and confirms order specifications promptly.",
      bgColor: "#087A2D",
      numColor: "#087A2D",
    },
    {
      stepNumber: "04",
      title: "Nationwide Supply",
      description:
        "Reliable ongoing supply and prompt delivery directly to your facility or doorstep anywhere in Ghana.",
      bgColor: "#02422C",
      numColor: "#02422C",
    },
  ];

  return (
    <section className="py-14 md:py-20 bg-[#F4F8F5] border-b border-light-border/60 overflow-hidden">
      <div className="container-custom">
        {/* Subtle Section Header */}
        <Reveal direction="up" distance={20} duration={500}>
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-[28px] font-medium tracking-normal text-[#2C3338]">
              How We Work
            </h2>
            <p className="text-xs sm:text-[13px] text-[#787C82] font-normal mt-2 leading-relaxed">
              A tailored process for individuals and healthcare organizations, ensuring ongoing pharmaceutical supply anywhere in Ghana.
            </p>
          </div>
        </Reveal>

        {/* Desktop Connected Ribbon Diagram */}
        <Reveal direction="up" distance={24} duration={600} delay={100}>
          <div className="hidden md:flex flex-row items-stretch justify-center max-w-5xl mx-auto px-4 sm:px-6 py-4 isolate">
            {steps.map((step, index) => {
              const isFirst = index === 0;
              const isLast = index === steps.length - 1;
              const zIndex = (index + 1) * 10;

              return (
                <div
                  key={step.stepNumber}
                  className={`relative flex-1 flex flex-col ${
                    !isFirst ? "-ml-[1px] shadow-[-8px_0_14px_-4px_rgba(0,0,0,0.1)]" : ""
                  }`}
                  style={{ zIndex }}
                >
                  {/* Upper Number Section */}
                  <div className="h-16 lg:h-20 flex items-center justify-center bg-[#F4F8F5] select-none">
                    <span
                      className="text-3xl lg:text-4xl font-medium tracking-tight"
                      style={{ color: step.numColor }}
                    >
                      {step.stepNumber}
                    </span>
                  </div>

                  {/* Lower Colored Block */}
                  <div
                    className="px-5 py-6 lg:px-6 lg:py-7 flex flex-col justify-start flex-grow min-h-[190px] lg:min-h-[210px]"
                    style={{ backgroundColor: step.bgColor }}
                  >
                    <h3 className="font-medium uppercase tracking-wider text-white text-[12.5px] lg:text-[13px] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-white/90 text-xs lg:text-[12.5px] leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Mobile Vertical Stack */}
        <div className="flex md:hidden flex-col gap-3.5 max-w-md mx-auto">
          {steps.map((step, index) => (
            <Reveal key={step.stepNumber} delay={index * 80} distance={16} duration={450}>
              <div className="overflow-hidden border border-gray-200/80 bg-white">
                <div className="bg-[#F4F8F5] px-4 py-2.5 flex items-center justify-between border-b border-gray-100">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-[#787C82]">
                    Step {step.stepNumber}
                  </span>
                  <span
                    className="text-xl font-medium tracking-tight"
                    style={{ color: step.numColor }}
                  >
                    {step.stepNumber}
                  </span>
                </div>
                <div
                  className="p-4"
                  style={{ backgroundColor: step.bgColor }}
                >
                  <h3 className="font-medium uppercase tracking-wider text-white text-xs mb-1">
                    {step.title}
                  </h3>
                  <p className="text-white/90 text-xs leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
