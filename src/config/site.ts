export const siteConfig = {
  name: "Proh Pharmacy",
  domain: "https://prohpharmacy.com",
  tagline: "Reliable medicines, delivered anywhere in Ghana.",
  eyebrow: "Retail & Wholesale Pharmaceutical Supply",
  description:
    "Proh Pharmacy provides dependable retail and wholesale medicine supply to individuals and pharmacies, with convenient delivery across Ghana.",
  topBarMessage: "Retail and wholesale medicine delivery anywhere in Ghana",

  // Contact details & clearly identified placeholders
  contact: {
    email: "info@prohpharmacy.com",
    phoneDisplay: "+233 (0) XX XXX XXXX",
    phoneHref: "tel:+233000000000",
    phonePlaceholderNote: "Official phone line to be confirmed",
    whatsappDisplay: "+233 (0) XX XXX XXXX",
    whatsappHref: "https://wa.me/233000000000?text=Hello%20Proh%20Pharmacy,%20I%20would%20like%20to%20make%20an%20enquiry.",
    whatsappPlaceholderNote: "WhatsApp business number to be confirmed",
    address: "Accra, Ghana",
    addressPlaceholderNote: "Registered facility & distribution hub location to be confirmed",
    openingHours: "Mon - Sat: 8:00 AM - 8:00 PM",
    openingHoursNote: "Official operational hours to be confirmed",
    googleMapsEmbedUrl: "", // Map embed placeholder
  },

  // Internal and external portal routes
  routes: {
    home: "/",
    about: "/about",
    services: "/services",
    wholesale: "/wholesale",
    delivery: "/delivery",
    contact: "/contact",
    quote: "/contact?type=wholesale",
    staffPortal: "https://app.prohpharmacy.com", // Ready, kept hidden until portal launch
  },

  // Navigation items for header & mobile drawer
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Delivery", href: "/delivery" },
    { label: "Contact", href: "/contact" },
  ],

  // Social link placeholders
  socialLinks: [
    { name: "LinkedIn", href: "#", placeholder: true },
    { name: "Twitter", href: "#", placeholder: true },
    { name: "Facebook", href: "#", placeholder: true },
    { name: "Instagram", href: "#", placeholder: true },
  ],

  // Brand color tokens for reference
  theme: {
    deepGreen: "#045E1F",
    primaryGreen: "#087A2D",
    brightGreen: "#01A42F",
    lightGreenBg: "#F1FBF4",
    redAccent: "#F8010F",
    mainText: "#102218",
    mutedText: "#5F6F64",
    white: "#FFFFFF",
    lightBorder: "#DDE9E0",
  },
};

export type SiteConfig = typeof siteConfig;
