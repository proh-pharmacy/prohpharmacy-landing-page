import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata = createPageMetadata({
  title: "Website Terms",
  description:
    "Read the terms that apply when using the Proh Pharmacy website, branch information, enquiry channels, quotations, and delivery information.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <article className="bg-white py-14 sm:py-20">
      <div className="container-custom max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2D6A4F]">Last updated 22 September 2026</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#2C3338] sm:text-4xl">Website Terms</h1>
        <p className="mt-5 text-sm leading-7 text-[#6B7280]">
          These terms apply to your use of the Proh Pharmacy website. By using the site, you agree to use it lawfully and responsibly.
        </p>

        <div className="mt-10 space-y-9 text-sm leading-7 text-[#6B7280]">
          <section>
            <h2 className="text-xl font-semibold text-[#2C3338]">Website information</h2>
            <p className="mt-3">
              We aim to keep branch details, opening hours, service coverage, and contact information accurate. Operational information may change, so please confirm time-sensitive details directly with the relevant branch before travelling or arranging supply.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2C3338]">Healthcare information</h2>
            <p className="mt-3">
              Website content is general information and is not a diagnosis, prescription, or substitute for advice from a qualified healthcare professional. Medicine supply remains subject to availability, applicable prescription requirements, professional review, and Ghanaian law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2C3338]">Enquiries, quotations, and orders</h2>
            <p className="mt-3">
              An online enquiry does not by itself create a confirmed order or supply agreement. Prices, quantities, payment terms, delivery charges, timelines, and availability are confirmed directly by Proh Pharmacy before fulfilment.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2C3338]">Delivery coverage</h2>
            <p className="mt-3">
              Delivery availability depends on the destination, product, applicable handling requirements, and current route capacity. The delivery page distinguishes active service regions from planned expansion regions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2C3338]">Acceptable use and external services</h2>
            <p className="mt-3">
              You must not misuse the website, attempt unauthorised access, submit unlawful requests, or interfere with its operation. Links to WhatsApp, Google Maps, or other third-party services are provided for convenience and are governed by those services&apos; own terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2C3338]">Contact</h2>
            <p className="mt-3">
              Questions about these terms can be sent to <a className="text-[#2D6A4F] underline" href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>. For service requests, use our <Link className="text-[#2D6A4F] underline" href="/contact">contact page</Link>.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
