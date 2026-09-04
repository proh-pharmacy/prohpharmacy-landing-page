import React from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverted?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  inverted = false,
  className = "",
}: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col max-w-2xl mb-10 md:mb-14 ${alignment} ${className}`}>
      {eyebrow && (
        <p
          className={`text-xs font-semibold tracking-wider uppercase mb-2.5 ${
            inverted ? "text-bright-green" : "text-primary-green"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-2xl sm:text-3xl font-bold tracking-tight leading-tight ${
          inverted ? "text-white" : "text-main-text"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-3 text-sm sm:text-base leading-relaxed ${
            inverted ? "text-white/80" : "text-muted-text"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
