import React from "react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="py-14 md:py-18 bg-[#034417] text-white">
      <div className="container-custom text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Need medicines or wholesale supplies?
        </h2>

        <p className="text-sm sm:text-base text-white/80 leading-relaxed">
          Contact Proh Pharmacy to place an enquiry, send your medicine list or request a wholesale
          quotation.
        </p>

        {/* Buttons: White primary button and WhatsApp with small red accent */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
          <Button href="/contact" size="md" variant="white">
            Contact Us
          </Button>

          <Button
            href={siteConfig.contact.whatsappHref}
            size="md"
            variant="outline"
            external
            className="text-white border-white/40 hover:bg-white/10 hover:border-white"
          >
            <span className="w-2 h-2 rounded-full bg-red-accent mr-0.5" />
            <MessageCircle className="w-4 h-4 text-bright-green" />
            <span>Chat on WhatsApp</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
