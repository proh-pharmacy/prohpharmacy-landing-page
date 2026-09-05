import React from "react";
import { Reveal } from "@/components/ui/reveal";

export function HowItWorks() {
  const steps = [
    {
      stepNumber: "01",
      title: "Initial Consultation",
      description:
        "Discuss your medical requirements, specific pharmaceutical brands, dosage forms, or routine supply schedules.",
      bgColor: "#A33010",
      numColor: "#A33010",
    },
    {
      stepNumber: "02",
      title: "Order Placement",
      description:
        "Submit your medication lists, prescription requests, or bulk replenishment orders whenever supplies are needed.",
      bgColor: "#C85A17",
      numColor: "#C85A17",
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
    <section className="py-14 md:py-24 bg-[#F9FBF9] border-b border-light-border/80 overflow-hidden">
      <div className="container-custom">
        {/* Clean Minimal Section Header matching Our Services */}
        <Reveal direction="up" distance={20} duration={500}>
          <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2.5">
              <span className="w-6 h-0.5 bg-primary-green rounded-full" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-main-text">
                How We Work
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 font-normal mt-2 leading-relaxed">
              A tailored process for individuals and healthcare organizations, ensuring ongoing pharmaceutical supply anywhere in Ghana.
            </p>
          </div>
        </Reveal>

        {/* Desktop Connected Ribbon Diagram (Upright: Red to Green Brand Progression) */}
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
                    !isFirst ? "-ml-[1px] shadow-[-10px_0_18px_-4px_rgba(0,0,0,0.14)]" : ""
                  } ${isFirst ? "rounded-l-2xl" : ""} ${
                    isLast ? "rounded-r-2xl" : ""
                  }`}
                  style={{ zIndex }}
                >
                  {/* Upper Number Section (seamless with section background) */}
                  <div
                    className={`h-20 lg:h-24 flex items-center justify-center bg-[#F9FBF9] select-none ${
                      isFirst ? "rounded-tl-2xl" : ""
                    } ${isLast ? "rounded-tr-2xl" : ""}`}
                  >
                    <span
                      className="text-4xl lg:text-5xl font-black italic tracking-tight"
                      style={{ color: step.numColor }}
                    >
                      {step.stepNumber}
                    </span>
                  </div>

                  {/* Lower Colored Block */}
                  <div
                    className={`px-5 py-7 lg:px-6 lg:py-8 flex flex-col justify-start flex-grow min-h-[210px] lg:min-h-[230px] ${
                      isFirst ? "rounded-bl-2xl" : ""
                    } ${isLast ? "rounded-br-2xl" : ""}`}
                    style={{ backgroundColor: step.bgColor }}
                  >
                    <h3 className="font-bold uppercase tracking-wider text-white text-[13px] lg:text-[14px] mb-2.5">
                      {step.title}
                    </h3>
                    <p className="text-white/95 text-xs lg:text-[13px] leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Mobile Vertical Stack (< md screens) */}
        <div className="flex md:hidden flex-col gap-4 max-w-md mx-auto">
          {steps.map((step, index) => (
            <Reveal key={step.stepNumber} delay={index * 80} distance={16} duration={450}>
              <div
                className="rounded-xl overflow-hidden shadow-xs border border-light-border/60 bg-white"
              >
                <div className="bg-[#F9FBF9] px-4 py-3 flex items-center justify-between border-b border-light-border/60">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Step {step.stepNumber}
                  </span>
                  <span
                    className="text-2xl font-black italic tracking-tight"
                    style={{ color: step.numColor }}
                  >
                    {step.stepNumber}
                  </span>
                </div>
                <div
                  className="p-5"
                  style={{ backgroundColor: step.bgColor }}
                >
                  <h3 className="font-bold uppercase tracking-wider text-white text-sm mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-white/95 text-xs leading-relaxed font-normal">
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
