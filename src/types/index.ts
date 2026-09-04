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
