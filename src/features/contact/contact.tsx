import React from "react";
import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <>
      <div className="bg-[#022619]">
        <nav className="flex flex-col items-center justify-center h-full min-h-[10vh] py-14 sm:py-16 gap-3 text-center px-4">
          <h1 className="text-white font-medium text-3xl sm:text-[34px] tracking-normal">
            Contact Us
          </h1>
          <span className="text-white/80 text-xs sm:text-[13px] font-normal">
            Send your medicine request, request a wholesale quotation, or enquire about nationwide delivery across Ghana.
          </span>
        </nav>
      </div>

      <section id="contact" className="pt-10 pb-16 sm:pt-14 sm:pb-20 md:pt-16 md:pb-22 bg-[#F4F8F5] border-b border-light-border/60">
        <div className="container-custom">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
