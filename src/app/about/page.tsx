import type { Metadata } from "next";
import { AboutContent } from "@/features/about/about-content";
import { CtaBanner } from "@/features/cta/cta-banner";

export const metadata: Metadata = {
  title: "About Us | Trusted Pharmaceutical Supply Partner",
  description:
    "Learn about Proh Pharmacy, our mission to support individuals and retail pharmacies with dependable medicine supply, and nationwide distribution across Ghana.",
  keywords: [
    "About Proh Pharmacy",
    "Pharmaceutical company Ghana",
    "Medicine distributor Ghana",
    "Pharmacy partner Accra",
  ],
};

export default function AboutPage() {
  return (
    <div className="pt-6">
      <AboutContent isStandalonePage />
      <CtaBanner />
    </div>
  );
}
