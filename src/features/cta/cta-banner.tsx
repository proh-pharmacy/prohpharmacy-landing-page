import React from "react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="py-16 md:py-20 bg-deep-green text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-green/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-bright-green/20 blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10 text-center max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/20">
          <span className="w-2 h-2 rounded-full bg-red-accent" />
          <span>Fast Turnaround & Support</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Need medicines or wholesale supplies?
        </h2>

        <p className="text-base sm:text-lg text-white/85 leading-relaxed">
          Contact Proh Pharmacy to place an enquiry, send your medicine list or request a wholesale
          quotation.
        </p>

        {/* Buttons: White primary button and WhatsApp with small red accent */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Button href="/contact" size="lg" variant="white">
            <Mail className="w-4 h-4 text-deep-green" />
            <span>Contact Us</span>
          </Button>

          <Button
            href={siteConfig.contact.whatsappHref}
            size="lg"
            variant="outline"
            external
            className="text-white border-white/40 hover:bg-white/10 hover:border-white"
          >
            <span className="w-2 h-2 rounded-full bg-red-accent mr-0.5" />
            <MessageCircle className="w-4 h-4 text-bright-green" />
            <span>Chat on WhatsApp</span>
          </Button>
        </div>

        <p className="text-xs text-white/60 pt-2">
          Response within operating hours across all regions in Ghana
        </p>
      </div>
    </section>
  );
}
