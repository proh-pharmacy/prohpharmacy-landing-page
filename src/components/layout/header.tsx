"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/ui/logo";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-150 bg-white/90 backdrop-blur-md ${
        isScrolled ? "border-b border-primary-green/30" : "border-b border-primary-green/20"
      }`}
    >
      <div className="container-custom flex items-center justify-between h-18 md:h-[80px]">
        {/* Minimal Logo Wordmark */}
        <Logo size="md" />

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main Navigation">
          {siteConfig.navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13.5px] tracking-tight transition-colors py-1 relative ${
                  isActive
                    ? "text-main-text font-semibold"
                    : "text-muted-text hover:text-main-text font-medium"
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-green rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Red Supply CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href={siteConfig.routes.quote}
            className="group inline-flex items-center gap-2 text-sm font-semibold tracking-tight px-4.5 py-2.5 bg-red-accent text-white hover:bg-red-accent-hover transition-colors"
          >
            <span>Request Supply</span>
            <ArrowUpRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="lg:hidden p-1.5 rounded-md text-main-text hover:bg-light-green focus:outline-none"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[72px] bg-white border-b border-primary-green/20 px-5 py-6 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col gap-1">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2.5 rounded-md text-sm transition-colors flex items-center justify-between ${
                    isActive
                      ? "text-deep-green font-semibold bg-light-green/60"
                      : "text-main-text hover:bg-gray-50 font-medium"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-primary-green" />}
                </Link>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-light-border">
            <Link
              href={siteConfig.routes.quote}
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 text-sm font-semibold py-2.5 px-4 bg-red-accent text-white hover:bg-red-accent-hover transition-colors"
            >
              <span>Request Supply</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
