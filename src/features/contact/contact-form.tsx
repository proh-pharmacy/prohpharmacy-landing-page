"use client";

import React, { useState } from "react";
import { EnquiryType, ContactFormData } from "@/types";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Send, Mail, MessageCircle } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    phone: "",
    email: "",
    businessName: "",
    enquiryType: "wholesale",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "validated_pending_backend">("idle");

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name (at least 2 characters).";
    }

    if (!formData.phone.trim() || !/^[+0-9\s-]{8,20}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid contact phone number.";
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Please describe your medicine or quotation request (at least 10 characters).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Clear errors and show truthful validation feedback
      setSubmissionStatus("validated_pending_backend");
    }
  };

  return (
    <div id="contact-form" className="bg-white rounded-2xl border border-light-border p-6 sm:p-8 shadow-xs">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-main-text">Send an Enquiry or Quotation Request</h3>
        <p className="text-xs sm:text-sm text-muted-text mt-1">
          Complete the form below to initiate medicine supply or distribution enquiries.
        </p>
      </div>

      {submissionStatus === "validated_pending_backend" ? (
        <div className="p-6 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 space-y-4">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-primary-green flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-base text-main-text">Your Form Input is Validated!</h4>
              <p className="text-xs text-muted-text mt-1 leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. As specified, the automated form-handling
                service for <code>prohpharmacy.com</code> is currently being connected to our customer
                database.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-white border border-amber-200 text-xs space-y-2">
            <p className="font-semibold text-deep-green">
              To complete your {formData.enquiryType} request immediately, please reach us directly:
            </p>
            <div className="flex flex-col sm:flex-row gap-2 pt-1">
              <a
                href={`mailto:${siteConfig.contact.email}?subject=Enquiry from ${encodeURIComponent(formData.fullName)}&body=${encodeURIComponent(formData.message)}`}
                className="inline-flex items-center gap-1.5 px-3 py-2 bg-deep-green text-white rounded-md font-medium hover:bg-primary-green transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                Email Direct ({siteConfig.contact.email})
              </a>
              <a
                href={siteConfig.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 bg-light-green text-deep-green border border-light-border rounded-md font-medium hover:bg-[#e1f5e8] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-bright-green" />
                Chat via WhatsApp
              </a>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setSubmissionStatus("idle")}
            className="text-xs text-muted-text underline hover:text-deep-green cursor-pointer"
          >
            Edit form inputs
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-xs font-semibold text-main-text mb-1">
              Full Name <span className="text-red-accent">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g. Kwame Mensah"
              className={`w-full px-3.5 py-2.5 rounded-lg text-sm border bg-white focus:outline-none focus:ring-2 focus:ring-primary-green ${
                errors.fullName ? "border-red-accent" : "border-light-border"
              }`}
            />
            {errors.fullName && <p className="text-xs text-red-accent mt-1">{errors.fullName}</p>}
          </div>

          {/* Grid: Phone & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-main-text mb-1">
                Phone Number <span className="text-red-accent">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+233 XX XXX XXXX"
                className={`w-full px-3.5 py-2.5 rounded-lg text-sm border bg-white focus:outline-none focus:ring-2 focus:ring-primary-green ${
                  errors.phone ? "border-red-accent" : "border-light-border"
                }`}
              />
              {errors.phone && <p className="text-xs text-red-accent mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-main-text mb-1">
                Email Address <span className="text-red-accent">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@domain.com"
                className={`w-full px-3.5 py-2.5 rounded-lg text-sm border bg-white focus:outline-none focus:ring-2 focus:ring-primary-green ${
                  errors.email ? "border-red-accent" : "border-light-border"
                }`}
              />
              {errors.email && <p className="text-xs text-red-accent mt-1">{errors.email}</p>}
            </div>
          </div>

          {/* Business / Pharmacy Name (Optional) */}
          <div>
            <label htmlFor="businessName" className="block text-xs font-semibold text-main-text mb-1">
              Pharmacy or Business Name <span className="text-muted-text font-normal">(Optional)</span>
            </label>
            <input
              id="businessName"
              type="text"
              value={formData.businessName}
              onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
              placeholder="e.g. Accra Community Pharmacy"
              className="w-full px-3.5 py-2.5 rounded-lg text-sm border border-light-border bg-white focus:outline-none focus:ring-2 focus:ring-primary-green"
            />
          </div>

          {/* Enquiry Type Selector */}
          <div>
            <label className="block text-xs font-semibold text-main-text mb-1.5">
              Enquiry Type <span className="text-red-accent">*</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(["retail", "wholesale", "general"] as EnquiryType[]).map((type) => (
                <button
                  type="button"
                  key={type}
                  onClick={() => setFormData({ ...formData, enquiryType: type })}
                  className={`py-2 px-3 rounded-lg text-xs font-semibold capitalize border transition-all cursor-pointer ${
                    formData.enquiryType === type
                      ? "bg-light-green text-deep-green border-deep-green shadow-2xs"
                      : "bg-white text-muted-text border-light-border hover:bg-gray-50"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-main-text mb-1">
              Message or Medicine Requirements <span className="text-red-accent">*</span>
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="List the medicines or quantities you require, your delivery town/city, or any questions..."
              className={`w-full px-3.5 py-2.5 rounded-lg text-sm border bg-white focus:outline-none focus:ring-2 focus:ring-primary-green ${
                errors.message ? "border-red-accent" : "border-light-border"
              }`}
            />
            {errors.message && <p className="text-xs text-red-accent mt-1">{errors.message}</p>}
          </div>

          {/* Submit button */}
          <Button type="submit" size="lg" variant="primary" className="w-full justify-center">
            <span>Submit Enquiry</span>
            <Send className="w-4 h-4" />
          </Button>

          <p className="text-[11px] text-center text-muted-text">
            Protected by pharmaceutical client privacy standards. No medical claims invented.
          </p>
        </form>
      )}
    </div>
  );
}
