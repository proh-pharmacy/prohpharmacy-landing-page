import { AboutContent } from "@/features/about/about-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Our Pharmacy",
  description:
    "Learn about Proh Pharmacy, our mission to support individuals and retail pharmacies with dependable medicine supply, and nationwide distribution across Ghana.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div>
      <AboutContent />
    </div>
  );
}
