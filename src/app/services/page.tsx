import { ServicesGrid } from "@/features/services/services-grid";
import { HowItWorks } from "@/features/how-it-works/how-it-works";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Pharmacy Services in Ghana",
  description:
    "Explore Proh Pharmacy services: Retail medicine supply for individual patients, bulk wholesale restocking for pharmacies, and nationwide delivery across Ghana.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div>
      <ServicesGrid headingLevel="h1" />
      <HowItWorks />
    </div>
  );
}
