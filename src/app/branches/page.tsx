import type { Metadata } from "next";
import { BranchesContent } from "@/features/branches/branches-content";

export const metadata: Metadata = {
  title: "Branches & Pharmacy Locations | 24/7 Service in Ghana",
  description:
    "Find Proh Pharmacy branches in Laterbiokorshie, Kwashieman (A-Lang), Fadama, Pokuase, Katapor, and Kwabenya. Verified phone numbers, WhatsApp, and Ghana Post GPS digital addresses.",
  keywords: [
    "Proh Pharmacy branches",
    "Pharmacy in Laterbiokorshie",
    "Pharmacy in Kwashieman",
    "Pharmacy in Fadama",
    "Pharmacy in Pokuase",
    "Tinacare Katapor",
    "RASE Chemist Pokuase",
    "Kwabenya pharmacy",
    "24 hour pharmacy Accra Ghana",
    "Ghana Post GPS pharmacy addresses",
  ],
  alternates: {
    canonical: "https://prohpharmacy.com/branches",
  },
  openGraph: {
    title: "Proh Pharmacy Locations & Branches Across Ghana",
    description:
      "8 strategically located pharmacy branches providing 24/7 retail dispensing, wholesale distribution, and nationwide medicine delivery.",
    url: "https://prohpharmacy.com/branches",
    siteName: "Proh Pharmacy",
    type: "website",
  },
};

export default function BranchesPage() {
  return <BranchesContent />;
}
