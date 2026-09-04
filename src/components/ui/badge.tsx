import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "green" | "red-accent" | "neutral" | "outline";
  showDot?: boolean;
  className?: string;
}

export function Badge({
  children,
  variant = "green",
  showDot = false,
  className = "",
}: BadgeProps) {
  const styles = {
    green: "bg-light-green text-deep-green border border-light-border",
    "red-accent": "bg-red-50 text-red-accent border border-red-200",
    neutral: "bg-gray-100 text-muted-text border border-gray-200",
    outline: "bg-white text-deep-green border border-light-border",
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${styles} ${className}`}
    >
      {showDot && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            variant === "red-accent" ? "bg-red-accent" : "bg-bright-green"
          }`}
        />
      )}
      {children}
    </span>
  );
}
