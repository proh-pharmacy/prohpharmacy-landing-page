import React from "react";
import { siteConfig } from "@/config/site";
import { Mail, Phone, MessageCircle, MapPin, Clock, Map } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-main-text">Get in Touch</h3>
        <p className="text-sm text-muted-text mt-2 leading-relaxed">
          Contact our team for retail medicine enquiries, wholesale pharmacy accounts, or delivery
          logistics across Ghana.
        </p>
      </div>

      {/* Contact Cards List */}
      <div className="space-y-4">
        {/* Email */}
        <a
          href={`mailto:${siteConfig.contact.email}`}
          className="flex items-start gap-4 p-4 rounded-xl border border-light-border bg-white hover:border-primary-green/50 transition-colors shadow-2xs"
        >
          <div className="w-10 h-10 rounded-lg bg-light-green text-deep-green flex items-center justify-center flex-shrink-0">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-semibold text-muted-text uppercase tracking-wider">
              Email Address
            </span>
            <div className="text-base font-bold text-main-text hover:text-deep-green">
              {siteConfig.contact.email}
            </div>
            <span className="text-xs text-primary-green">Official customer & wholesale inbox</span>
          </div>
        </a>

        {/* WhatsApp */}
        <a
          href={siteConfig.contact.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 p-4 rounded-xl border border-light-border bg-white hover:border-primary-green/50 transition-colors shadow-2xs"
        >
          <div className="w-10 h-10 rounded-lg bg-light-green text-deep-green flex items-center justify-center flex-shrink-0">
            <MessageCircle className="w-5 h-5 text-primary-green" />
          </div>
          <div>
            <span className="text-xs font-semibold text-muted-text uppercase tracking-wider">
              WhatsApp Support
            </span>
            <div className="text-base font-bold text-main-text">
              {siteConfig.contact.whatsappDisplay}
            </div>
            <span className="text-xs text-muted-text/80 italic">
              {siteConfig.contact.whatsappPlaceholderNote}
            </span>
          </div>
        </a>

        {/* Phone */}
        <div className="flex items-start gap-4 p-4 rounded-xl border border-light-border bg-white shadow-2xs">
          <div className="w-10 h-10 rounded-lg bg-light-green text-deep-green flex items-center justify-center flex-shrink-0">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-semibold text-muted-text uppercase tracking-wider">
              Phone Line
            </span>
            <div className="text-base font-bold text-main-text">
              {siteConfig.contact.phoneDisplay}
            </div>
            <span className="text-xs text-muted-text/80 italic">
              {siteConfig.contact.phonePlaceholderNote}
            </span>
          </div>
        </div>

        {/* Physical Address */}
        <div className="flex items-start gap-4 p-4 rounded-xl border border-light-border bg-white shadow-2xs">
          <div className="w-10 h-10 rounded-lg bg-light-green text-deep-green flex items-center justify-center flex-shrink-0">
            <MapPin className="w-5 h-5 text-red-accent" />
          </div>
          <div>
            <span className="text-xs font-semibold text-muted-text uppercase tracking-wider">
              Physical Location
            </span>
            <div className="text-base font-bold text-main-text">
              {siteConfig.contact.address}
            </div>
            <span className="text-xs text-muted-text/80 italic">
              {siteConfig.contact.addressPlaceholderNote}
            </span>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="flex items-start gap-4 p-4 rounded-xl border border-light-border bg-white shadow-2xs">
          <div className="w-10 h-10 rounded-lg bg-light-green text-deep-green flex items-center justify-center flex-shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-semibold text-muted-text uppercase tracking-wider">
              Opening Hours
            </span>
            <div className="text-base font-bold text-main-text">
              {siteConfig.contact.openingHours}
            </div>
            <span className="text-xs text-muted-text/80 italic">
              {siteConfig.contact.openingHoursNote}
            </span>
          </div>
        </div>

        {/* Google Maps Location Placeholder Box */}
        <div className="p-4 rounded-xl border border-dashed border-light-border bg-[#F7FAF8] flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-white border border-light-border flex items-center justify-center text-muted-text">
            <Map className="w-4 h-4 text-deep-green" />
          </div>
          <div>
            <span className="text-xs font-bold text-main-text block">Google Maps Location</span>
            <p className="text-[11px] text-muted-text italic">
              Interactive map pin will be rendered once the central pharmacy facility coordinates
              are finalized.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
