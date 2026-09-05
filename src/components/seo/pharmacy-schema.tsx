import React from "react";
import { siteConfig } from "@/config/site";

export function PharmacySchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Pharmacy", "MedicalBusiness", "WholesaleStore", "Store"],
    name: "Proh Pharmacy",
    alternateName: [
      "Proh Pharmacy Wholesale & Retail",
      "Proh Pharmacy Ghana",
      "Proh Medical Logistics",
    ],
    description:
      "Trusted retail and wholesale pharmaceutical supply, prescription delivery, and medical commerce across Ghana. Serving individuals, community pharmacies, clinics, and hospitals with 8 retail branches, 1 laboratory, 2 wholesale hubs, and 5 dedicated trekking distribution vans.",
    url: "https://prohpharmacy.com",
    logo: "https://prohpharmacy.com/images/prohpharmacy_icon.png",
    image: "https://prohpharmacy.com/images/header_image.png",
    foundingDate: "2020-08",
    priceRange: "GH₵₵",
    currenciesAccepted: "GHS",
    paymentAccepted:
      "Cash, Mobile Money (MTN MoMo, Telecel Cash, AT Money), Bank Transfer",
    openingHours: "Mo-Sa 08:00-20:00",
    telephone: siteConfig.contact.phoneDisplay,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Accra",
      addressRegion: "Greater Accra",
      addressCountry: "GH",
    },
    areaServed: [
      { "@type": "Country", name: "Ghana" },
      { "@type": "AdministrativeArea", name: "Greater Accra Region" },
      { "@type": "AdministrativeArea", name: "Ashanti Region" },
      { "@type": "AdministrativeArea", name: "Eastern Region" },
      { "@type": "AdministrativeArea", name: "Central Region" },
      { "@type": "AdministrativeArea", name: "Western Region" },
      { "@type": "AdministrativeArea", name: "Volta Region" },
      { "@type": "AdministrativeArea", name: "Bono Region" },
      { "@type": "AdministrativeArea", name: "Northern Region" },
    ],
    knowsAbout: [
      "Wholesale Pharmaceutical Restocking",
      "Retail Medicine Dispensing",
      "Prescription Delivery Logistics",
      "Cold Chain Pharmaceutical Storage",
      "Institutional Hospital Procurement",
      "Over-The-Counter (OTC) Health Products",
    ],
    hasDeliveryMethod: [
      "https://schema.org/DeliveryModeOwnFleet",
      "https://schema.org/OnSitePickup",
    ],
    potentialAction: [
      {
        "@type": "OrderAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://prohpharmacy.com/contact?type=wholesale",
          inLanguage: "en-GH",
          actionPlatform: [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform",
          ],
        },
        deliveryMethod: "https://schema.org/DeliveryModeOwnFleet",
      },
      {
        "@type": "CommunicateAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: siteConfig.contact.whatsappHref,
          inLanguage: "en-GH",
          actionPlatform: [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform",
          ],
        },
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pharmaceutical Commerce, Wholesale Supply & Delivery Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wholesale Pharmacy Supply & Distribution",
            description:
              "Bulk pharmaceutical procurement, tiered restocking discounts, and consistent supply contracts for community pharmacies, clinics, and hospitals.",
            serviceType: "Wholesale Pharmaceutical Supply",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Retail Medicine & OTC Healthcare Supply",
            description:
              "Direct retail access to genuine prescription medications, vital OTC drugs, and wellness essentials for patients and families across Ghana.",
            serviceType: "Retail Pharmacy Supply",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Nationwide Temperature-Monitored Medicine Delivery",
            description:
              "Reliable trekking van distribution routes and courier dispatch covering Greater Accra, Ashanti, and nationwide across Ghana.",
            serviceType: "Medicine Delivery & Logistics",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Prescription Refill & Automatic Reordering",
            description:
              "Convenient digital prescription refills with scheduled routine deliveries for chronic condition management.",
            serviceType: "Prescription Refill Service",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Institutional & Clinic Pharmaceutical Procurement",
            description:
              "Comprehensive medicine inventory replenishment and emergency supply agreements for medical facilities and maternity homes.",
            serviceType: "Institutional Supply",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "24/7 Emergency Pharmacy Dispatch",
            description:
              "Urgent around-the-clock medication delivery, essential injectables, and critical care support.",
            serviceType: "Emergency Pharmacy Service",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
