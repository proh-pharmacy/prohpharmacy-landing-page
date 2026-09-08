export type EnquiryType = "retail" | "wholesale" | "general";

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  businessName?: string;
  enquiryType: EnquiryType;
  message: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  badge?: string;
  isRedAccent?: boolean;
  ctaText: string;
  ctaHref: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface OrderingStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface Branch {
  id: string;
  name: string;
  shortName?: string;
  category: "retail" | "wholesale" | "annex" | "mart";
  location: string;
  localArea?: string;
  digitalAddress?: string;
  phones: string[];
  whatsapp?: string;
  email?: string;
  hours: string;
  is24Hours?: boolean;
  services: string[];
  image?: string;
  badge?: string;
  featured?: boolean;
}

