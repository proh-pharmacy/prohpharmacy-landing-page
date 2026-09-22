import React from "react";
import { branchesData } from "@/config/branches";
import { siteConfig } from "@/config/site";
import { Branch } from "@/types";
import { serializeJsonLd, SITE_URL } from "@/lib/seo";

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}

function internationalPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("233")) return `+${digits}`;
  if (digits.startsWith("0")) return `+233${digits.slice(1)}`;
  return `+${digits}`;
}

function schemaOpeningHours(branch: Branch) {
  if (branch.is24Hours) return "Mo-Su 00:00-23:59";
  if (branch.id === "pokuase-annex") return "Mo-Su 07:30-22:00";
  if (branch.id === "rase-chemist") return "Mo-Su 07:00-22:30";
  return undefined;
}

export function WebSiteSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: "Proh Pharmacy",
        alternateName: "Proh Pharmacy Ghana",
        url: SITE_URL,
        description:
          "Retail and wholesale medicine supply, pharmacy services, and delivery across Ghana.",
        inLanguage: "en-GH",
        publisher: { "@id": `${SITE_URL}/#organization` },
      }}
    />
  );
}

export function OrganizationSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Proh Pharmacy",
        alternateName: "Proh Pharmacy Ghana",
        description:
          "Retail and wholesale pharmaceutical supply serving individuals, pharmacies, clinics, and healthcare facilities in Ghana.",
        url: SITE_URL,
        logo: `${SITE_URL}/images/prohpharmacy_icon.png`,
        image: `${SITE_URL}/opengraph-image`,
        foundingDate: "2020-08",
        email: siteConfig.contact.email,
        telephone: internationalPhone(siteConfig.contact.phoneDisplay),
        address: {
          "@type": "PostalAddress",
          streetAddress: "Appiah Danquah Taxi Station, Ghana Post GPS A24/9",
          addressLocality: "Laterbiokorshie",
          addressRegion: "Greater Accra",
          addressCountry: "GH",
        },
        areaServed: { "@type": "Country", name: "Ghana" },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: internationalPhone(siteConfig.contact.phoneDisplay),
          email: siteConfig.contact.email,
          areaServed: "GH",
          availableLanguage: "English",
        },
      }}
    />
  );
}

export function BranchesListSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Proh Pharmacy locations in Greater Accra",
        numberOfItems: branchesData.length,
        itemListElement: branchesData.map((branch, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: branch.name,
          url: `${SITE_URL}/branches/${branch.id}`,
        })),
      }}
    />
  );
}

export function BranchSchema({ branch }: { branch: Branch }) {
  const url = `${SITE_URL}/branches/${branch.id}`;
  const locality = branch.location.split(",")[0].trim();
  const streetAddress = [
    branch.localArea,
    branch.digitalAddress ? `Ghana Post GPS ${branch.digitalAddress}` : undefined,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Pharmacy",
        "@id": `${url}/#pharmacy`,
        name: branch.name,
        description: `${branch.name} provides ${branch.services.join(", ").toLowerCase()} in ${branch.location}.`,
        url,
        image: branch.image ? `${SITE_URL}${branch.image}` : `${SITE_URL}/opengraph-image`,
        telephone: internationalPhone(branch.phones[0]),
        email: branch.email ?? siteConfig.contact.email,
        priceRange: "GH₵₵",
        currenciesAccepted: "GHS",
        openingHours: schemaOpeningHours(branch),
        address: {
          "@type": "PostalAddress",
          streetAddress,
          addressLocality: locality,
          addressRegion: "Greater Accra",
          addressCountry: "GH",
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: branch.location,
        },
        parentOrganization: { "@id": `${SITE_URL}/#organization` },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${branch.name} services`,
          itemListElement: branch.services.map((service) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: service },
          })),
        },
      }}
    />
  );
}
