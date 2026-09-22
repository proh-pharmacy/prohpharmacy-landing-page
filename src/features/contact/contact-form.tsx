"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Phone, Mail, MapPin, CheckCircle2, MessageCircle } from "lucide-react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [entityType, setEntityType] = useState<"personal" | "institutional">("personal");
  const [subject, setSubject] = useState("");
  const [otherSubject, setOtherSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isOther = subject === "Other";
  const effectiveSubject = isOther ? otherSubject : subject;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && phone.trim() && effectiveSubject.trim() && message.trim()) {
      const whatsappMessage = [
        "Hello Proh Pharmacy, I would like to make an enquiry.",
        `Name: ${name.trim()}`,
        `Phone: ${phone.trim()}`,
        `Contact type: ${entityType === "institutional" ? "Business or institutional" : "Personal"}`,
        `Subject: ${effectiveSubject.trim()}`,
        `Message: ${message.trim()}`,
      ].join("\n");

      window.open(
        `https://wa.me/233534740592?text=${encodeURIComponent(whatsappMessage)}`,
        "_blank",
        "noopener,noreferrer",
      );
      setSubmitted(true);
      setName("");
      setPhone("");
      setEntityType("personal");
      setSubject("");
      setOtherSubject("");
      setMessage("");
      setTimeout(() => setSubmitted(false), 6000);
    }
  };

  return (
    <div
      id="contact-form"
      className="bg-white p-6 sm:p-10 lg:p-12 border border-gray-200/80 max-w-5xl mx-auto rounded-none shadow-2xs scroll-mt-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Contact Information */}
        <div className="md:col-span-5 flex flex-col justify-between pr-0 lg:pr-4 h-full">
          <div>
            <p className="text-xs sm:text-[13px] text-[#787C82] mt-2 leading-relaxed font-normal">
              Reach out directly for retail medicine enquiries, wholesale supplies, or distribution across Ghana.
            </p>

            <div className="mt-8 space-y-5">
              {/* Phone Lines */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-none bg-[#F4F8F5] border border-gray-200/80 flex items-center justify-center shrink-0 mt-0.5 text-[#2D6A4F]">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs sm:text-[13px] text-[#2C3338] leading-snug">
                  <a
                    href={siteConfig.contact.phoneHref}
                    className="font-normal block hover:text-[#087A2D] transition-colors"
                  >
                    {siteConfig.contact.phoneDisplay}{" "}
                    <span className="text-[11px] text-[#787C82] font-normal">
                      (Laterbiokorshie)
                    </span>
                  </a>
                  <a
                    href={siteConfig.contact.phoneSecondaryHref}
                    className="mt-1 block text-[#50575E] hover:text-[#087A2D] transition-colors font-normal"
                  >
                    {siteConfig.contact.phoneSecondaryDisplay}{" "}
                    <span className="text-[11px] text-[#787C82] font-normal">
                      (Wholesale Hub)
                    </span>
                  </a>
                </div>
              </div>

              {/* Email */}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3.5 group text-[#2C3338] hover:text-[#087A2D] transition-colors"
              >
                <div className="w-8 h-8 rounded-none bg-[#F4F8F5] border border-gray-200/80 flex items-center justify-center shrink-0 text-[#2D6A4F]">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs sm:text-[13px] font-normal">
                  {siteConfig.contact.email}
                </div>
              </a>

              {/* WhatsApp Direct Chat */}
              <a
                href={siteConfig.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 group text-[#2C3338] hover:text-[#087A2D] transition-colors"
              >
                <div className="w-8 h-8 rounded-none bg-[#F4F8F5] border border-gray-200/80 flex items-center justify-center shrink-0 text-[#2D6A4F]">
                  <MessageCircle className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs sm:text-[13px] font-normal">
                  Chat on WhatsApp ({siteConfig.contact.whatsappDisplay})
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-none bg-[#F4F8F5] border border-gray-200/80 flex items-center justify-center shrink-0 mt-0.5 text-[#2D6A4F]">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs sm:text-[13px] text-[#2C3338]">
                  <p className="font-normal">8 Locations in Greater Accra</p>
                  <p className="text-[11px] text-[#787C82] mt-0.5 font-normal">
                    Laterbiokorshie, Kwashieman, Fadama, Pokuase &amp; more
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Response Reassurance Note */}
          <div className="pt-6 mt-8 border-t border-gray-100 text-[11px] text-[#787C82] font-normal leading-relaxed">
            Our dispensary and wholesale team typically responds promptly during operating hours.
          </div>
        </div>

        {/* Right Column: Clean Architectural Form */}
        <div className="md:col-span-7 flex flex-col justify-center border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-8 lg:pl-10">
          <div className="mb-5 sm:mb-6">
            <p className="text-xs sm:text-[13px] text-[#787C82] font-normal leading-relaxed">
              Fill out this form and we will reach out to you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Entity Type */}
            <div>
              <p className="text-[11px] font-normal uppercase tracking-wider text-[#787C82] mb-2">
                I&apos;m contacting as
              </p>
              <div className="flex items-center flex-wrap gap-4 sm:gap-6">
                <label
                  htmlFor="entity-personal"
                  className="flex items-center gap-2 cursor-pointer text-xs sm:text-[13px] text-[#50575E]"
                >
                  <input
                    id="entity-personal"
                    type="radio"
                    name="entityType"
                    value="personal"
                    checked={entityType === "personal"}
                    onChange={() => setEntityType("personal")}
                    className="accent-[#2D6A4F] w-3.5 h-3.5 cursor-pointer"
                  />
                  Personal
                </label>
                <label
                  htmlFor="entity-institutional"
                  className="flex items-center gap-2 cursor-pointer text-xs sm:text-[13px] text-[#50575E]"
                >
                  <input
                    id="entity-institutional"
                    type="radio"
                    name="entityType"
                    value="institutional"
                    checked={entityType === "institutional"}
                    onChange={() => setEntityType("institutional")}
                    className="accent-[#2D6A4F] w-3.5 h-3.5 cursor-pointer"
                  />
                  Business or Institutional
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-[11px] font-normal uppercase tracking-wider text-[#787C82] mb-1"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Kwame Mensah"
                  className="w-full border-b border-gray-200 focus:border-[#2C3338] py-2 text-xs sm:text-sm text-[#2C3338] font-normal bg-transparent outline-none transition-colors placeholder:text-gray-300"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="contact-phone"
                  className="block text-[11px] font-normal uppercase tracking-wider text-[#787C82] mb-1"
                >
                  Phone Number
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="000 0000 000"
                  className="w-full border-b border-gray-200 focus:border-[#2C3338] py-2 text-xs sm:text-sm text-[#2C3338] font-normal bg-transparent outline-none transition-colors placeholder:text-gray-300"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-subject"
                className="block text-[11px] font-normal uppercase tracking-wider text-[#787C82] mb-1"
              >
                Your Subject
              </label>
              <select
                id="contact-subject"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                  setOtherSubject("");
                }}
                required
                className="w-full border-b border-gray-200 focus:border-[#2C3338] py-2 text-xs sm:text-sm bg-transparent outline-none transition-colors appearance-none cursor-pointer"
                style={{ color: subject ? "#2C3338" : "#9CA3AF" }}
              >
                <option value="" disabled hidden className="text-gray-300">
                  Select a subject
                </option>
                <option value="Retail Medicine Supply" className="text-[#2C3338]">
                  Retail Medicine Supply
                </option>
                <option value="Wholesale Pharmacy Supply" className="text-[#2C3338]">
                  Wholesale Pharmacy Supply
                </option>
                <option value="Nationwide Medicine Delivery" className="text-[#2C3338]">
                  Nationwide Medicine Delivery
                </option>
                <option value="Prescription Refill Service" className="text-[#2C3338]">
                  Prescription Refill Service
                </option>
                <option value="Institutional & Clinic Supply" className="text-[#2C3338]">
                  Institutional &amp; Clinic Supply
                </option>
                <option value="24/7 Emergency Pharmacy" className="text-[#2C3338]">
                  24/7 Emergency Pharmacy
                </option>
                <option value="Other" className="text-[#2C3338]">
                  Other
                </option>
              </select>

              {isOther && (
                <div className="mt-2.5">
                  <input
                    id="contact-subject-other"
                    type="text"
                    value={otherSubject}
                    onChange={(e) => setOtherSubject(e.target.value)}
                    placeholder="Please describe your subject"
                    className="w-full border-b border-gray-200 focus:border-[#2C3338] py-2 text-xs sm:text-sm text-[#2C3338] font-normal bg-transparent outline-none transition-colors placeholder:text-gray-300"
                    required
                    autoFocus
                  />
                </div>
              )}
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-[11px] font-normal uppercase tracking-wider text-[#787C82] mb-1"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write here your message"
                className="w-full border-b border-gray-200 focus:border-[#2C3338] py-2 text-xs sm:text-sm text-[#2C3338] font-normal bg-transparent outline-none transition-colors resize-none placeholder:text-gray-300"
                required
              />
            </div>

            {submitted && (
              <div className="p-3 bg-[#F4F8F5] border border-[#CCD0D4] text-xs text-[#2D6A4F] flex items-center gap-2 rounded-none">
                <CheckCircle2 className="w-4 h-4 text-[#2D6A4F] shrink-0" />
                <span>Your WhatsApp message is ready. Send it in WhatsApp to complete your enquiry.</span>
              </div>
            )}

            <div className="pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 border border-[#CCD0D4] hover:border-[#2C3338] hover:bg-[#2C3338] hover:text-white text-[10.5px] font-normal tracking-widest uppercase text-[#50575E] transition-all rounded-none cursor-pointer shadow-2xs"
              >
                Send Message
              </button>
              <p className="mt-3 max-w-md text-[10.5px] leading-relaxed text-[#787C82]">
                Submitting opens WhatsApp with your enquiry. See our{" "}
                <Link href="/privacy" className="text-[#2D6A4F] underline">
                  Privacy Policy
                </Link>.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
