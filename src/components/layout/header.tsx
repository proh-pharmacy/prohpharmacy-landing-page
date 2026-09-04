"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
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

  // Lock body scroll when mobile menu is open & listen for escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setIsOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <>
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

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setIsOpen(true)}
            type="button"
            className="lg:hidden p-2 rounded-lg text-main-text hover:bg-light-green/60 active:scale-95 transition-all focus:outline-none"
            aria-expanded={isOpen}
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6 text-main-text" />
          </button>
        </div>
      </header>

      {/* Classic Minimal Fullscreen Mobile Menu with Green Translucent Blur Backdrop */}
      <div
        className={`fixed inset-0 z-[100] lg:hidden bg-[#022619]/80 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-8 transition-transform duration-300 ease-out will-change-transform ${
          isOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
        aria-hidden={!isOpen}
        role="dialog"
        aria-modal="true"
      >
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#087A2D]/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#34D399]/20 blur-3xl pointer-events-none" />

        {/* Top Bar: Icon Only & Close Button */}
        <div className="relative z-10 flex items-center justify-between pb-6 border-b border-white/10">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center transition-opacity hover:opacity-90"
            aria-label="Proh Pharmacy Home"
          >
            <Image
              src="/images/prohpharmacy_icon.png"
              alt="Proh Pharmacy"
              width={38}
              height={38}
              priority
              className="object-contain"
            />
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="p-2.5 rounded-full text-white/80 hover:text-white bg-white/5 hover:bg-white/15 active:scale-95 transition-all focus:outline-none cursor-pointer"
            aria-label="Close navigation menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Middle: Classic Minimal Vertical Nav Links */}
        <div className="relative z-10 my-auto py-8 max-w-sm w-full mx-auto">
          <nav className="flex flex-col space-y-2">
            {siteConfig.navLinks.map((link, idx) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`group flex items-center justify-between py-3.5 border-b border-white/10 text-2xl sm:text-3xl font-medium tracking-tight transition-all duration-200 ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-white/75 hover:text-white hover:translate-x-2"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-bright-green animate-pulse" />
                    )}
                    <span>{link.label}</span>
                  </div>
                  <span className="text-xs font-mono text-white/40 group-hover:text-white/80 transition-colors">
                    0{idx + 1}
                  </span>
                </Link>
              );
            })}

            {/* Request Supply as the Last Option */}
            <div className="pt-6">
              <Link
                href={siteConfig.routes.quote}
                onClick={() => setIsOpen(false)}
                className="group w-full flex items-center justify-between px-6 py-4 bg-red-accent hover:bg-red-accent-hover text-white font-semibold text-lg transition-colors shadow-lg shadow-black/20"
              >
                <span>Request Supply</span>
                <ArrowUpRight className="w-5 h-5 text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
