import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  inverted?: boolean;
}

export function Logo({ className = "", size = "md", inverted = false }: LogoProps) {
  if (inverted) {
    const dimensions = {
      sm: { img: 28, text: "text-base" },
      md: { img: 36, text: "text-lg" },
      lg: { img: 44, text: "text-xl" },
    }[size];

    return (
      <Link
        href="/"
        className={`inline-flex items-center gap-2.5 tracking-tight transition-opacity hover:opacity-90 ${className}`}
        aria-label="Proh Pharmacy Home"
      >
        <div className="relative flex-shrink-0 flex items-center justify-center">
          <Image
            src="/images/prohpharmacy_icon.png"
            alt="Proh Pharmacy Icon"
            width={dimensions.img}
            height={dimensions.img}
            priority
            className="object-contain"
          />
        </div>
        <span
          className={`font-bold ${dimensions.text} tracking-tight text-white`}
        >
          Proh Pharmacy
        </span>
      </Link>
    );
  }

  // Official header brand lockup (960x284 aspect ratio: ~3.38)
  const sizes = {
    sm: "w-[160px]",
    md: "w-[185px] sm:w-[215px] md:w-[240px]",
    lg: "w-[220px] sm:w-[250px] md:w-[275px]",
  }[size];

  return (
    <Link
      href="/"
      className={`shrink-0 inline-flex items-center tracking-tight transition-opacity hover:opacity-95 py-1 ${className}`}
      aria-label="Proh Pharmacy Home"
    >
      <Image
        src="/images/header_image.png"
        alt="Proh Pharmacy Wholesale & Retail"
        width={960}
        height={284}
        priority
        unoptimized
        className={`${sizes} h-auto shrink-0 block`}
      />
    </Link>
  );
}
