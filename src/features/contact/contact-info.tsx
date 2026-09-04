import React from "react";
import { siteConfig } from "@/config/site";
import { Mail, Phone, MessageCircle, MapPin, Clock, Map } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-main-text">Contact Information</h3>
        <p className="text-sm text-muted-text mt-1.5 leading-relaxed">
          Reach out for retail medicine enquiries, wholesale pharmacy accounts, or nationwide delivery
          coordination.
        </p>
      </div>

      {/* Clean Contact Details List */}
      <div className="space-y-3">
        {/* Email */}
        <a
          href={`mailto:${siteConfig.contact.email}`}
          className="flex items-center gap-3.5 p-3.5 rounded-lg border border-light-border bg-white hover:border-primary-green/50 transition-colors"
        >
          <div className="w-9 h-9 rounded-md bg-light-green text-deep-green flex items-center justify-center flex-shrink-0">
            <Mail className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[11px] font-semibold text-muted-text uppercase tracking-wider block">
              Email
            </span>
            <span className="text-sm font-semibold text-main-text hover:text-deep-green">
              {siteConfig.contact.email}
            </span>
          </div>
        </a>

        {/* WhatsApp */}
        <a
          href={siteConfig.contact.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3.5 p-3.5 rounded-lg border border-light-border bg-white hover:border-primary-green/50 transition-colors"
        >
          <div className="w-9 h-9 rounded-md bg-light-green text-deep-green flex items-center justify-center flex-shrink-0">
            <MessageCircle className="w-4 h-4 text-primary-green" />
          </div>
          <div>
            <span className="text-[11px] font-semibold text-muted-text uppercase tracking-wider block">
              WhatsApp
            </span>
            <span className="text-sm font-semibold text-main-text">
              {siteConfig.contact.whatsappDisplay}
            </span>
          </div>
        </a>

        {/* Phone */}
        <div className="flex items-center gap-3.5 p-3.5 rounded-lg border border-light-border bg-white">
          <div className="w-9 h-9 rounded-md bg-light-green text-deep-green flex items-center justify-center flex-shrink-0">
            <Phone className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[11px] font-semibold text-muted-text uppercase tracking-wider block">
              Phone
            </span>
            <span className="text-sm font-semibold text-main-text">
              {siteConfig.contact.phoneDisplay}
            </span>
          </div>
        </div>

        {/* Physical Address */}
        <div className="flex items-center gap-3.5 p-3.5 rounded-lg border border-light-border bg-white">
          <div className="w-9 h-9 rounded-md bg-light-green text-deep-green flex items-center justify-center flex-shrink-0">
            <MapPin className="w-4 h-4 text-red-accent" />
          </div>
          <div>
            <span className="text-[11px] font-semibold text-muted-text uppercase tracking-wider block">
              Location
            </span>
            <span className="text-sm font-semibold text-main-text">
              {siteConfig.contact.address}
            </span>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="flex items-center gap-3.5 p-3.5 rounded-lg border border-light-border bg-white">
          <div className="w-9 h-9 rounded-md bg-light-green text-deep-green flex items-center justify-center flex-shrink-0">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[11px] font-semibold text-muted-text uppercase tracking-wider block">
              Operating Hours
            </span>
            <span className="text-sm font-semibold text-main-text">
              {siteConfig.contact.openingHours}
            </span>
          </div>
        </div>

        {/* Location Map Placeholder */}
        <div className="p-3.5 rounded-lg border border-light-border bg-[#F9FBF9] flex items-center gap-3">
          <Map className="w-4 h-4 text-deep-green flex-shrink-0" />
          <p className="text-xs text-muted-text">
            Google Maps location pin will be displayed upon facility confirmation.
          </p>
        </div>
      </div>
    </div>
  );
}
