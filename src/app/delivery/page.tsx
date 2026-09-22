import { DeliveryContent } from "@/features/delivery/delivery-content";
import { HowItWorks } from "@/features/how-it-works/how-it-works";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Medicine Delivery Across Ghana",
  description:
    "Explore Proh Pharmacy medicine delivery routes across eight active regions in Ghana and the regions planned for future expansion.",
  path: "/delivery",
});

export default function DeliveryPage() {
  return (
    <div>
      <DeliveryContent headingLevel="h1" />
      <HowItWorks />
    </div>
  );
}
