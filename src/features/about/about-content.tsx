import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AboutDivider } from "./about-divider";

export function AboutContent() {
  return (
    <section className="bg-white min-h-screen">
      {/* Top Banner */}
      <div className="relative overflow-hidden bg-[#022619]">
        <nav className="flex min-h-[10vh] h-full flex-col items-center justify-center gap-3 px-4 pt-14 pb-24 text-center sm:pt-16 sm:pb-28 md:pb-32">
          <h1 className="text-white font-medium text-3xl sm:text-[34px] tracking-normal">
            About Us
          </h1>
          <span className="text-white/80 text-xs sm:text-[13px] font-normal">
            About Proh Pharmacy and Reliable Healthcare Distribution in Ghana
          </span>
        </nav>
        <AboutDivider />
      </div>

      {/* Block 1: Overview */}
      <div className="max-w-5xl w-full mx-auto py-12 sm:py-16 grid grid-cols-1 md:grid-cols-5 gap-8 px-4 sm:px-6 items-center">
        <div className="md:col-span-2 flex items-center justify-center">
          <Image
            quality={100}
            height={500}
            width={500}
            alt="About Proh Pharmacy"
            src="/images/about_image.png"
            className="rounded-lg object-cover w-full h-auto aspect-square border-0 shadow-2xs"
            priority
          />
        </div>

        <div className="md:col-span-3 flex items-center justify-center py-2">
          <div className="max-w-md h-full mx-auto flex flex-col justify-center">
            <h2 className="font-medium text-2xl sm:text-[26px] text-[#2C3338] mb-4 tracking-normal">
              What is Proh Pharmacy
            </h2>
            <div className="flex flex-col justify-evenly h-full grow gap-5 text-[#6B7280] text-[13.5px] sm:text-[14px] leading-relaxed font-normal">
              <p>
                Established in August 2020, Proh Pharmacy is an independent pharmaceutical enterprise
                dedicated to dependable medicine supply, verified healthcare access, and nationwide distribution across Ghana.
              </p>

              <p>
                We currently operate{" "}
                <Link href="/branches" className="text-[#2D6A4F] hover:text-[#1D2327] font-medium underline">
                  8 retail branches
                </Link>
                , 1 modern diagnostic laboratory, and 2 wholesale branches, delivering professional dispensing services to individual patients and bulk replenishment to partner facilities.
              </p>

              <p>
                Proh Pharmacy compiles everything patients, clinics, and pharmacies need for timely medication access,
                trusted clinical advice, and uninterrupted pharmaceutical supply.
              </p>

              <div className="pt-2">
                <Link
                  href="/branches"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#2D6A4F] hover:text-[#1D2327] transition-colors"
                >
                  <span>Explore our branch network &amp; contacts &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Block 2: Trekking & Distribution */}
      <section className="max-w-5xl w-full mx-auto py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 sm:px-6 border-t border-gray-100">
        <div className="col-span-1 flex flex-col justify-center gap-6 pr-0 md:pr-10">
          <h2 className="font-medium text-2xl sm:text-[26px] md:max-w-sm text-[#2C3338] leading-snug tracking-normal">
            Nationwide Trekking &amp; Medicine Distribution
          </h2>

          <div className="flex flex-col gap-5 text-[#6B7280] text-[13.5px] sm:text-[14px] leading-relaxed font-normal">
            <p>
              We have 5 dedicated trekking vans that sell and distribute genuine medicines directly to pharmacies, clinics,
              and healthcare facilities in regions such as Volta, Eastern, Central, Western, Bono, Northern, and Greater Accra.
            </p>

            <p>
              All pharmaceutical shipments are managed under strict cold-chain and verified transit standards to ensure
              essential treatments reach every community in optimal therapeutic condition.
            </p>

            <div className="pt-2">
              <Link
                href="/delivery"
                className="inline-block px-4 py-2 border border-[#CCD0D4] hover:border-[#2C3338] hover:text-[#1D2327] text-[#50575E] text-[10.5px] font-normal tracking-widest uppercase transition-colors rounded-xs"
              >
                View Delivery Network
              </Link>
            </div>
          </div>
        </div>

        <div className="col-span-1 flex justify-center">
          <Image
            alt="Proh Pharmacy Trekking and Medicine Distribution Van"
            quality={100}
            height={500}
            width={500}
            className="rounded-lg object-cover w-full h-auto aspect-square border border-gray-200/80 shadow-2xs"
            src="/images/pharma_trekking_van.jpg"
            priority
          />
        </div>
      </section>

      {/* Block 3: Standards & Regulatory Compliance */}
      <section className="max-w-5xl w-full mx-auto py-14 sm:py-16 grid grid-cols-1 md:grid-cols-5 gap-10 items-center px-4 sm:px-6 border-t border-gray-100">
        <div className="flex flex-col gap-5 items-start justify-center md:col-span-3 max-w-lg">
          <h2 className="font-medium text-[#2C3338] text-2xl sm:text-[26px] tracking-normal leading-snug">
            Standards &amp; Regulatory Compliance
          </h2>

          <div className="flex flex-col gap-3.5 text-[#6B7280] text-[13.5px] sm:text-[14px] leading-relaxed font-normal">
            <p>
              Official company registration and licensing records are maintained in accordance with Ghanaian pharmaceutical distribution regulations.
            </p>
            <p>
              Operates strictly under Ghanaian pharmaceutical governance, following Pharmacy Council and FDA standards.
            </p>
          </div>
        </div>

        {/* 3 Regulatory Badges */}
        <div className="flex items-center justify-center md:justify-end w-full md:col-span-2 pt-4 md:pt-0">
          <div className="flex items-center justify-center gap-4 w-full">
            <div className="w-22 sm:w-24 aspect-square rounded-lg border border-gray-200/80 bg-white p-3 flex items-center justify-center shadow-2xs">
              <Image src="/images/fda_ghana.png" alt="Food and Drugs Authority Ghana" width={200} height={200} className="w-full h-full object-contain" />
            </div>
            <div className="w-22 sm:w-24 aspect-square rounded-lg border border-gray-200/80 bg-white p-3 flex items-center justify-center shadow-2xs">
              <Image src="/images/gsa_ghana.png" alt="Ghana Standards Authority" width={200} height={200} className="w-full h-full object-contain" />
            </div>
            <div className="w-22 sm:w-24 aspect-square rounded-lg border border-gray-200/80 bg-white p-3 flex items-center justify-center shadow-2xs">
              <Image src="/images/orc_ghana.png" alt="Office of the Registrar of Companies Ghana" width={200} height={200} className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
