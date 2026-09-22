import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { BranchSchema } from "@/components/seo/pharmacy-schema";
import { branchesData } from "@/config/branches";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";

type BranchPageProps = {
  params: Promise<{ slug: string }>;
};

function getBranch(slug: string) {
  return branchesData.find((branch) => branch.id === slug);
}

function phoneHref(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return digits.startsWith("233") ? `tel:+${digits}` : `tel:+233${digits.replace(/^0/, "")}`;
}

function whatsappHref(phone: string) {
  const digits = phone.replace(/\D/g, "");
  const international = digits.startsWith("233") ? digits : `233${digits.replace(/^0/, "")}`;
  return `https://wa.me/${international}?text=${encodeURIComponent("Hello, I would like to enquire about pharmacy services at this branch.")}`;
}

export function generateStaticParams() {
  return branchesData.map((branch) => ({ slug: branch.id }));
}

export async function generateMetadata({ params }: BranchPageProps): Promise<Metadata> {
  const { slug } = await params;
  const branch = getBranch(slug);

  if (!branch) return {};

  return createPageMetadata({
    title: `${branch.shortName ?? branch.name} Pharmacy`,
    description: `${branch.name} in ${branch.location}. View opening hours, services, telephone numbers, WhatsApp contact, and location details.`,
    path: `/branches/${branch.id}`,
  });
}

export default async function BranchPage({ params }: BranchPageProps) {
  const { slug } = await params;
  const branch = getBranch(slug);

  if (!branch) notFound();

  const mapQuery = encodeURIComponent(
    [branch.name, branch.localArea, branch.location, branch.digitalAddress, "Ghana"]
      .filter(Boolean)
      .join(", "),
  );

  return (
    <>
      <BranchSchema branch={branch} />

      <section className="bg-[#022619] px-4 pt-14 pb-16 text-center text-white sm:pt-16 sm:pb-20">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#34D399]">
          Proh Pharmacy Location
        </p>
        <h1 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
          {branch.name}
        </h1>
        <p className="mt-3 text-sm text-white/75">{branch.location}</p>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="container-custom">
          <Link
            href="/branches"
            className="mb-7 inline-flex items-center gap-2 text-sm font-medium text-[#2D6A4F] hover:text-[#1D2327]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All pharmacy locations
          </Link>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <div className="relative aspect-4/3 overflow-hidden rounded-lg bg-[#F4F8F5]">
                {branch.image ? (
                  <Image
                    src={branch.image}
                    alt={`${branch.name} storefront`}
                    fill
                    preload
                    sizes="(max-width: 1023px) 100vw, 50vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-sm text-[#5F6F64]">
                    {branch.name}
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="border-b border-gray-100 pb-7">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#2D6A4F]">
                  {branch.badge ?? "Pharmacy services"}
                </span>
                <h2 className="mt-2 text-2xl font-semibold text-[#2C3338]">Branch information</h2>
              </div>

              <dl className="divide-y divide-gray-100 text-sm">
                <div className="flex gap-3 py-5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#2D6A4F]" aria-hidden="true" />
                  <div>
                    <dt className="font-semibold text-[#2C3338]">Address</dt>
                    <dd className="mt-1 text-[#6B7280]">
                      {[branch.localArea, branch.location].filter(Boolean).join(", ")}
                      {branch.digitalAddress && <span className="block">Ghana Post GPS: {branch.digitalAddress}</span>}
                    </dd>
                  </div>
                </div>

                <div className="flex gap-3 py-5">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#2D6A4F]" aria-hidden="true" />
                  <div>
                    <dt className="font-semibold text-[#2C3338]">Opening hours</dt>
                    <dd className="mt-1 text-[#6B7280]">{branch.hours}</dd>
                  </div>
                </div>

                <div className="flex gap-3 py-5">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#2D6A4F]" aria-hidden="true" />
                  <div>
                    <dt className="font-semibold text-[#2C3338]">Telephone</dt>
                    <dd className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-[#6B7280]">
                      {branch.phones.map((phone) => (
                        <a key={phone} href={phoneHref(phone)} className="hover:text-[#2D6A4F] hover:underline">
                          {phone}
                        </a>
                      ))}
                    </dd>
                  </div>
                </div>

                <div className="flex gap-3 py-5">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#2D6A4F]" aria-hidden="true" />
                  <div>
                    <dt className="font-semibold text-[#2C3338]">Email</dt>
                    <dd className="mt-1 text-[#6B7280]">
                      <a href={`mailto:${branch.email ?? siteConfig.contact.email}`} className="hover:text-[#2D6A4F] hover:underline">
                        {branch.email ?? siteConfig.contact.email}
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="mt-7 flex flex-wrap gap-3">
                {branch.whatsapp && (
                  <a
                    href={whatsappHref(branch.whatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#2D6A4F] px-5 py-3 text-sm font-semibold text-white hover:bg-[#23533E]"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    WhatsApp branch
                  </a>
                )}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[#CCD0D4] px-5 py-3 text-sm font-semibold text-[#2C3338] hover:border-[#2C3338]"
                >
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          <section className="mt-14 border-t border-gray-100 pt-10 sm:mt-16">
            <h2 className="text-2xl font-semibold text-[#2C3338]">Services at this location</h2>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {branch.services.map((service) => (
                <li key={service} className="border border-gray-100 bg-[#F4F8F5] px-4 py-3 text-sm text-[#50575E]">
                  {service}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>
    </>
  );
}
