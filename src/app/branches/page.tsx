import { BranchesContent } from "@/features/branches/branches-content";
import { BranchesListSchema } from "@/components/seo/pharmacy-schema";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Pharmacy Locations in Greater Accra",
  description:
    "Find Proh Pharmacy branches in Laterbiokorshie, Kwashieman (A-Lang), Fadama, Pokuase, Katapor, and Kwabenya. Verified phone numbers, WhatsApp, and Ghana Post GPS digital addresses.",
  path: "/branches",
});

export default function BranchesPage() {
  return (
    <>
      <BranchesListSchema />
      <BranchesContent />
    </>
  );
}
