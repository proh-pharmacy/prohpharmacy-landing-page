import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Learn how Proh Pharmacy handles contact information and enquiries submitted through this website and connected communication services.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <article className="bg-white py-14 sm:py-20">
      <div className="container-custom max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2D6A4F]">Last updated 22 September 2026</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#2C3338] sm:text-4xl">Privacy Policy</h1>
        <p className="mt-5 text-sm leading-7 text-[#6B7280]">
          This policy explains how Proh Pharmacy handles personal information when you use this website or contact us by telephone, email, or WhatsApp.
        </p>

        <div className="mt-10 space-y-9 text-sm leading-7 text-[#6B7280]">
          <section>
            <h2 className="text-xl font-semibold text-[#2C3338]">Information you provide</h2>
            <p className="mt-3">
              We may receive your name, telephone number, organisation type, enquiry subject, message, and any information you voluntarily include when contacting us. Please do not send medical records or other sensitive health information unless a pharmacist specifically requests it through an appropriate channel.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2C3338]">How enquiries are sent</h2>
            <p className="mt-3">
              The website enquiry form prepares a WhatsApp message on your device. You must review and send that message in WhatsApp to complete the enquiry. The website does not store the form contents in a website database.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2C3338]">How we use information</h2>
            <p className="mt-3">
              We use contact information to respond to enquiries, prepare supply quotations, coordinate branch or delivery requests, provide customer support, maintain appropriate business records, and meet applicable legal or regulatory obligations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2C3338]">Sharing and external services</h2>
            <p className="mt-3">
              We do not sell personal information. Information may be handled by communication, hosting, delivery, or professional service providers where necessary to complete your request. WhatsApp and other external services process information under their own privacy terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2C3338]">Cookies and analytics</h2>
            <p className="mt-3">
              This website does not currently use advertising trackers or analytics cookies. Essential infrastructure may process standard technical information such as IP addresses, request times, browser details, and security logs to deliver and protect the website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2C3338]">Retention and your choices</h2>
            <p className="mt-3">
              We retain enquiry and transaction records only for as long as reasonably needed for customer service, business administration, dispute resolution, and applicable legal obligations. You may ask about, correct, or request deletion of personal information by contacting us, subject to records we are required to keep.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2C3338]">Contact us</h2>
            <p className="mt-3">
              For privacy questions, email <a className="text-[#2D6A4F] underline" href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a> or visit our <Link className="text-[#2D6A4F] underline" href="/contact">contact page</Link>.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
