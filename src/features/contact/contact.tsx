import React from "react";
import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="pt-10 pb-16 sm:pt-14 sm:pb-20 md:pt-16 md:pb-24 bg-[#F4F9F6] border-b border-light-border/60">
      <div className="container-custom">
        {/* Clean Minimal Section Header matching Our Services */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2.5">
            <span className="w-6 h-0.5 bg-primary-green rounded-full" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-main-text">
              Contact Us
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 font-normal mt-2 leading-relaxed">
            Send your medicine request, request a wholesale quotation, or enquire about nationwide delivery across Ghana.
          </p>
        </div>

        {/* Unified Contact Information & Underline-Input Form Card */}
        <ContactForm />
      </div>
    </section>
  );
}
