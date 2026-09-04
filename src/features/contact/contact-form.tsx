"use client";

import React, { useState } from "react";
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
    <div className="bg-white p-3.5 sm:p-4 border border-light-border/60 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-stretch">
        {/* Left Column: Green Tint Direct Contact Information Card (Matching Landing Page Green) */}
        <div className="md:col-span-5 bg-gradient-to-br from-[#018959] to-[#016843] p-6 sm:p-8 text-white relative overflow-hidden flex flex-col justify-between min-h-[400px] sm:min-h-[460px]">
          {/* Glowing Circle in bottom right corner (matching reference image) */}
          <div className="absolute -bottom-16 -right-16 w-52 h-52 rounded-full bg-white/10 pointer-events-none" />
          <div className="absolute -bottom-24 -right-8 w-44 h-44 rounded-full bg-[#34D399]/25 pointer-events-none" />

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white tracking-tight">Contact Information</h3>
            <p className="text-white/80 text-xs sm:text-sm mt-2 leading-relaxed">
              Reach out directly for retail medicine enquiries, wholesale supplies, or distribution across Ghana.
            </p>

            <div className="mt-8 sm:mt-10 space-y-5">
              {/* Phone Lines */}
              <a
                href={siteConfig.contact.phoneHref}
                className="flex items-start gap-3.5 group transition-opacity hover:opacity-90"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-white/20 transition-colors">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div className="text-xs sm:text-sm text-white/90 leading-snug">
                  <div className="font-semibold">+233 24 123 4567</div>
                  <div className="mt-0.5 text-white/75">+233 50 987 6543</div>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3.5 group transition-opacity hover:opacity-90"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div className="text-xs sm:text-sm text-white/90 font-medium">
                  {siteConfig.contact.email}
                </div>
              </a>

              {/* WhatsApp Direct Chat */}
              <a
                href={siteConfig.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 group transition-opacity hover:opacity-90"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                  <MessageCircle className="w-4 h-4 text-[#34D399]" />
                </div>
                <div className="text-xs sm:text-sm text-white/90 font-medium">
                  Chat on WhatsApp
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div className="text-xs sm:text-sm text-white/90">
                  {siteConfig.contact.address}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Underline-Input Form (Matching Reference Image) */}
        <div className="md:col-span-7 flex flex-col justify-center px-4 sm:px-5 py-4 sm:py-5">
          <div className="mb-5 sm:mb-6">
            <p className="text-xs sm:text-sm text-gray-500 font-normal leading-relaxed">
              Fill out this form and we will reach out to you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Entity Type */}
            <div>
              <p className="text-xs font-semibold text-gray-400 mb-2">I&apos;m contacting as</p>
              <div className="flex items-center gap-6">
                <label htmlFor="entity-personal" className="flex items-center gap-2 cursor-pointer text-sm text-main-text">
                  <input
                    id="entity-personal"
                    type="radio"
                    name="entityType"
                    value="personal"
                    checked={entityType === "personal"}
                    onChange={() => setEntityType("personal")}
                    className="accent-[#018959] w-4 h-4 cursor-pointer"
                  />
                  Personal
                </label>
                <label htmlFor="entity-institutional" className="flex items-center gap-2 cursor-pointer text-sm text-main-text">
                  <input
                    id="entity-institutional"
                    type="radio"
                    name="entityType"
                    value="institutional"
                    checked={entityType === "institutional"}
                    onChange={() => setEntityType("institutional")}
                    className="accent-[#018959] w-4 h-4 cursor-pointer"
                  />
                  Business or Institutional
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-semibold text-gray-400 mb-1">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Kwame Mensah"
                  className="w-full border-b border-gray-200 focus:border-[#018959] py-2 text-sm text-main-text font-medium bg-transparent outline-none transition-colors placeholder:text-gray-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-phone" className="block text-xs font-semibold text-gray-400 mb-1">
                  Phone Number
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="000 0000 000"
                  className="w-full border-b border-gray-200 focus:border-[#018959] py-2 text-sm text-main-text font-medium bg-transparent outline-none transition-colors placeholder:text-gray-300"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-subject" className="block text-xs font-semibold text-gray-400 mb-1">
                Your Subject
              </label>
              <select
                id="contact-subject"
                value={subject}
                onChange={(e) => { setSubject(e.target.value); setOtherSubject(""); }}
                required
                className="w-full border-b border-gray-200 focus:border-[#018959] py-2 text-sm bg-transparent outline-none transition-colors appearance-none cursor-pointer"
                style={{ color: subject ? undefined : '#D1D5DB' }}
              >
                <option value="" disabled hidden className="text-gray-300">
                  Select a subject
                </option>
                <option value="Retail Medicine Supply" className="text-main-text">Retail Medicine Supply</option>
                <option value="Wholesale Pharmacy Supply" className="text-main-text">Wholesale Pharmacy Supply</option>
                <option value="Nationwide Medicine Delivery" className="text-main-text">Nationwide Medicine Delivery</option>
                <option value="Prescription Refill Service" className="text-main-text">Prescription Refill Service</option>
                <option value="Institutional & Clinic Supply" className="text-main-text">Institutional &amp; Clinic Supply</option>
                <option value="24/7 Emergency Pharmacy" className="text-main-text">24/7 Emergency Pharmacy</option>
                <option value="Other" className="text-main-text">Other</option>
              </select>

              {/* Reveal text input when Other is selected */}
              {isOther && (
                <div className="mt-3" style={{ animation: 'fadeSlideDown 0.2s ease both' }}>
                  <input
                    id="contact-subject-other"
                    type="text"
                    value={otherSubject}
                    onChange={(e) => setOtherSubject(e.target.value)}
                    placeholder="Please describe your subject"
                    className="w-full border-b border-gray-200 focus:border-[#018959] py-2 text-sm text-main-text font-medium bg-transparent outline-none transition-colors placeholder:text-gray-300"
                    required
                    autoFocus
                  />
                </div>
              )}
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-semibold text-[#018959] mb-1">
                Message
              </label>
              <textarea
                id="contact-message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write here your message"
                className="w-full border-b-2 border-[#018959] py-2 text-sm text-main-text font-medium bg-transparent outline-none transition-colors resize-none placeholder:text-gray-300"
                required
              />
            </div>

            {submitted && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Thank you! Your message has been sent successfully.</span>
              </div>
            )}

            <div className="pt-2">
              <button
                type="submit"
                className="bg-[#018959] hover:bg-[#017049] active:bg-[#015C3C] text-white font-medium text-sm px-7 py-3 transition-colors shadow-xs"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
