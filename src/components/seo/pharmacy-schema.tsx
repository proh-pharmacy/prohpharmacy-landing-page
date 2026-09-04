import React from "react";

export function PharmacySchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Pharmacy", "MedicalBusiness"],
    name: "Proh Pharmacy",
    alternateName: "Proh Pharmacy Wholesale & Retail",
    description:
      "Reliable retail and wholesale pharmaceutical supply, prescription delivery, and healthcare services across Ghana with 8 retail branches, 1 laboratory, 2 wholesale hubs, and 5 trekking distribution vans.",
    url: "https://prohpharmacy.com",
    logo: "https://prohpharmacy.com/images/prohpharmacy_icon.png",
    image: "https://prohpharmacy.com/images/header_image.png",
    foundingDate: "2020-08",
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
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pharmaceutical Supply Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Retail Medicine Supply",
            description: "Genuine prescription drugs and healthcare essentials for individuals.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wholesale Pharmacy Supply",
            description: "Bulk pharmaceutical procurement and supply for licensed pharmacies.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Nationwide Medicine Delivery",
            description: "Trekking van and courier delivery across Ghana.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "24/7 Emergency Pharmacy Service",
            description: "Round-the-clock urgent medication dispatch and critical care support.",
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
