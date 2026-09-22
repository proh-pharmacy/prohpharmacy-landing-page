import { WholesaleContent } from "@/features/wholesale/wholesale-content";
import { HowItWorks } from "@/features/how-it-works/how-it-works";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Wholesale Medicine Supply in Ghana",
  description:
    "Proh Pharmacy provides dependable wholesale medicine supply to pharmacies across Ghana. Request a wholesale quotation or submit your pharmacy medicine list today.",
  path: "/wholesale",
});

export default function WholesalePage() {
  return (
    <div>
      <WholesaleContent headingLevel="h1" />
      <HowItWorks />
    </div>
  );
}
