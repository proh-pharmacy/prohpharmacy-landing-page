import React from "react";
import Image from "next/image";
import Link from "next/link";

export function AboutContent() {
  return (
    <section className="bg-[#F8FFF8] min-h-screen">
      {/* Top Banner (matching nawa-frontend banner with application green tint) */}
      <div className="bg-[#022619]">
        <nav className="flex flex-col items-center justify-center h-full min-h-[10vh] py-16 gap-5 text-center px-4">
          <h1 className="text-white font-semibold text-4xl tracking-tight">
            About Us
          </h1>
          <span className="text-white/80 text-sm">
            About Proh Pharmacy and Reliable Healthcare Distribution in Ghana
          </span>
        </nav>
      </div>

      {/* Block 1: Logoinscription layout */}
      <div className="max-w-5xl w-full mx-auto py-14 grid grid-cols-1 md:grid-cols-5 gap-8 px-4 sm:px-6 items-center">
        <div className="md:col-span-2 flex items-center justify-center">
          <Image
            quality={100}
            height={500}
            width={500}
            alt="About Proh Pharmacy"
            src="/images/about_image.png"
            className="rounded-2xl object-cover w-full h-auto aspect-square border-0 shadow-none"
            priority
          />
        </div>

        <div className="md:col-span-3 flex items-center justify-center py-2">
          <div className="max-w-md h-full mx-auto flex flex-col justify-center">
            <h2 className="font-semibold text-2xl text-main-text mb-5">
              What is Proh Pharmacy
            </h2>
            <div className="flex flex-col justify-evenly h-full grow gap-6 text-[#2C2C2C] text-[15px] leading-relaxed font-normal">
              <p>
                Established in August 2020, Proh Pharmacy is an independent pharmaceutical enterprise
                dedicated to dependable medicine supply, verified healthcare access, and nationwide distribution across Ghana.
              </p>

              <p>
                We currently operate 8 retail branches, 1 modern diagnostic laboratory, and 2 wholesale branches,
                delivering professional dispensing services to individual patients and bulk replenishment to partner facilities.
              </p>

              <p>
                Proh Pharmacy compiles everything patients, clinics, and pharmacies need for timely medication access,
                trusted clinical advice, and uninterrupted pharmaceutical supply.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Block 2: Womenempowering layout */}
      <section className="max-w-5xl w-full mx-auto py-14 grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 sm:px-6">
        <div className="col-span-1 flex flex-col justify-center gap-7 pr-0 md:pr-10">
          <h2 className="font-semibold text-2xl md:max-w-sm text-main-text leading-snug">
            Nationwide Trekking & Medicine Distribution
          </h2>

          <div className="flex flex-col gap-6 text-[#2C2C2C] text-[15px] leading-relaxed font-normal">
            <p>
              We have 5 dedicated trekking vans that sell and distribute genuine medicines directly to pharmacies, clinics,
              and healthcare facilities in regions such as Volta, Eastern, Central, Western, Bono, Northern, and Greater Accra.
            </p>

            <p>
              All pharmaceutical shipments are managed under strict cold-chain and verified transit standards to ensure
              essential treatments reach every community in optimal therapeutic condition.
            </p>

            <Link
              href="/delivery"
              className="bg-[#2C2C2C] hover:bg-[#102218] text-[#FEFEFE] p-4 px-7 rounded-full self-start font-medium text-sm transition-colors inline-block"
            >
              View Delivery Network
            </Link>
          </div>
        </div>

        <div className="col-span-1 flex justify-center">
          <Image
            alt="Proh Pharmacy Trekking and Medicine Distribution Van"
            quality={100}
            height={500}
            width={500}
            className="rounded-2xl object-cover w-full h-auto aspect-square border border-light-border/80"
            src="/images/pharma_trekking_van.jpg"
            priority
          />
        </div>
      </section>

      {/* Block 3: Standards & Regulatory Compliance (Homesupport layout) */}
      <section className="max-w-5xl w-full mx-auto py-16 grid grid-cols-1 md:grid-cols-5 gap-10 items-center px-4 sm:px-6 border-t border-light-border/60">
        <div className="flex flex-col gap-6 items-start justify-center md:col-span-3 max-w-lg">
          <h2 className="font-semibold text-main-text text-2xl sm:text-3xl tracking-tight leading-snug">
            Standards &amp; Regulatory Compliance
          </h2>

          <div className="flex flex-col gap-4 text-[#2C2C2C] text-[15px] leading-relaxed font-normal">
            <p>
              Official company registration and licensing records are maintained in accordance with Ghanaian pharmaceutical distribution regulations.
            </p>
            <p>
              Operates strictly under Ghanaian pharmaceutical governance, following Pharmacy Council and FDA standards.
            </p>
          </div>
        </div>

        {/* 3 Regulatory Badges: FDA Ghana, GSA, ORC */}
        <div className="flex items-center justify-center md:justify-end w-full md:col-span-2 pt-6 md:pt-0">
          {/* Mobile: simple row of badges */}
          <div className="flex md:hidden items-center justify-center gap-4 w-full">
            <div className="w-24 aspect-square rounded-full overflow-hidden border border-light-border/80 bg-white p-3 flex items-center justify-center">
              <Image src="/images/fda_ghana.png" alt="Food and Drugs Authority Ghana" width={200} height={200} className="w-full h-full object-contain" />
            </div>
            <div className="w-24 aspect-square rounded-full overflow-hidden border border-light-border/80 bg-white p-3 flex items-center justify-center">
              <Image src="/images/gsa_ghana.png" alt="Ghana Standards Authority" width={200} height={200} className="w-full h-full object-contain" />
            </div>
            <div className="w-24 aspect-square rounded-full overflow-hidden border border-light-border/80 bg-white p-3 flex items-center justify-center">
              <Image src="/images/orc_ghana.png" alt="Office of the Registrar of Companies Ghana" width={200} height={200} className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Desktop: overlapping cluster */}
          <div className="hidden md:flex relative w-full max-w-[320px] h-[260px] sm:h-[290px] items-center justify-center">
            <div className="absolute top-0 left-2 w-32 sm:w-36 aspect-square rounded-full overflow-hidden border border-light-border/80 bg-white p-4 flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform duration-200 z-10">
              <Image src="/images/fda_ghana.png" alt="Food and Drugs Authority Ghana" width={300} height={300} className="w-full h-full object-contain" />
            </div>
            <div className="absolute top-6 right-2 w-32 sm:w-36 aspect-square rounded-full overflow-hidden border border-light-border/80 bg-white p-4 flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-200 z-20">
              <Image src="/images/gsa_ghana.png" alt="Ghana Standards Authority" width={400} height={200} className="w-full h-full object-contain" />
            </div>
            <div className="absolute bottom-0 left-12 w-32 sm:w-36 aspect-square rounded-full overflow-hidden border border-light-border/80 bg-white p-4 flex items-center justify-center transform translate-y-1 hover:translate-y-0 transition-transform duration-200 z-30">
              <Image src="/images/orc_ghana.png" alt="Office of the Registrar of Companies Ghana" width={400} height={200} className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
