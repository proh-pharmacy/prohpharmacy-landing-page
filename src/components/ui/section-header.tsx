import React from "react";
import { Badge } from "./badge";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  badgeVariant?: "green" | "red-accent";
  inverted?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  badgeVariant = "green",
  inverted = false,
  className = "",
}: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col max-w-3xl mb-12 md:mb-16 ${alignment} ${className}`}>
      {eyebrow && (
        <Badge variant={badgeVariant} showDot className="mb-3">
          {eyebrow}
        </Badge>
      )}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight ${
          inverted ? "text-white" : "text-main-text"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            inverted ? "text-white/80" : "text-muted-text"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
