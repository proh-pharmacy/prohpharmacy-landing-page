import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  inverted?: boolean;
}

export function Logo({ className = "", size = "md", inverted = false }: LogoProps) {
  const dimensions = {
    sm: { img: 32, text: "text-lg" },
    md: { img: 40, text: "text-xl" },
    lg: { img: 48, text: "text-2xl" },
  }[size];

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 font-bold tracking-tight transition-opacity hover:opacity-95 ${className}`}
      aria-label="Proh Pharmacy Home"
    >
      <div className="relative flex-shrink-0 flex items-center justify-center">
        <Image
          src="/images/prohpharmacy_icon.png"
          alt="Proh Pharmacy Logo"
          width={dimensions.img}
          height={dimensions.img}
          priority
          className="object-contain"
        />
      </div>
      <div className="flex flex-col leading-none">
        <span className={`font-extrabold ${dimensions.text} ${inverted ? "text-white" : "text-deep-green"}`}>
          Proh<span className={inverted ? "text-white/90" : "text-main-text"}> Pharmacy</span>
        </span>
        <span className={`text-[10px] font-semibold tracking-wider uppercase mt-0.5 ${inverted ? "text-white/70" : "text-muted-text"}`}>
          Ghana
        </span>
      </div>
    </Link>
  );
}
