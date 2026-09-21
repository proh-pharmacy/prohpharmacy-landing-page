import React from "react";
import { siteConfig } from "@/config/site";

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Proh Pharmacy",
    alternateName: "Proh Pharmacy Ghana",
    url: "https://prohpharmacy.com",
    description:
      "Trusted retail and wholesale pharmaceutical supply, prescription delivery, and medical commerce across Ghana.",
    inLanguage: "en-GH",
    publisher: {
      "@type": "Organization",
      name: "Proh Pharmacy",
      url: "https://prohpharmacy.com",
      logo: {
        "@type": "ImageObject",
        url: "https://prohpharmacy.com/images/prohpharmacy_icon.png",
        width: 1024,
        height: 1024,
      },
    },
    hasPart: [
      {
        "@type": "WebPage",
        name: "Home",
        url: "https://prohpharmacy.com/",
        description:
          "Proh Pharmacy – Retail & Wholesale Medicine Delivery in Ghana",
      },
      {
        "@type": "WebPage",
        name: "About Us",
        url: "https://prohpharmacy.com/about",
        description:
          "Trusted pharmaceutical supply partner since 2020 — our mission, branches, lab, and wholesale hubs.",
      },
      {
        "@type": "WebPage",
        name: "Branches & Locations",
        url: "https://prohpharmacy.com/branches",
        description:
          "Find Proh Pharmacy retail branches and 24/7 pickup locations across Ghana.",
      },
      {
        "@type": "WebPage",
        name: "Pharmaceutical Services",
        url: "https://prohpharmacy.com/services",
        description:
          "Retail dispensing, wholesale supply, prescription refills, and institutional procurement.",
      },
      {
        "@type": "WebPage",
        name: "Wholesale Supply",
        url: "https://prohpharmacy.com/wholesale",
        description:
          "Bulk pharmaceutical supply and wholesale medicine restocking for pharmacies, clinics, and hospitals in Ghana.",
      },
      {
        "@type": "WebPage",
        name: "Nationwide Delivery",
        url: "https://prohpharmacy.com/delivery",
        description:
          "Temperature-monitored medicine delivery across all 16 regions of Ghana.",
      },
      {
        "@type": "WebPage",
        name: "Contact Us",
        url: "https://prohpharmacy.com/contact",
        description:
          "Request a wholesale quote, medicine enquiry, or delivery booking from Proh Pharmacy.",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

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
