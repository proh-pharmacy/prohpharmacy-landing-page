import React from "react";
import Link from "next/link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  external = false,
  children,
  icon,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer gap-2";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 h-8",
    md: "text-sm px-5 py-2.5 h-11",
    lg: "text-base px-6 py-3.5 h-13 font-semibold",
  }[size];

  const variantStyles = {
    primary:
      "bg-deep-green text-white hover:bg-primary-green active:bg-deep-green shadow-xs hover:shadow",
    secondary:
      "bg-light-green text-deep-green hover:bg-[#e2f6e8] border border-light-border",
    outline:
      "bg-white text-deep-green border border-deep-green/30 hover:bg-light-green hover:border-deep-green",
    white:
      "bg-white text-deep-green hover:bg-gray-50 shadow-sm font-semibold",
  }[variant];

  const combinedClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
          {icon}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {children}
      {icon}
    </button>
  );
}
