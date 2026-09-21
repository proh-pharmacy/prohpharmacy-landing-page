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
  const [isRendered, setIsRendered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const openMenu = () => {
    setIsRendered(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsOpen(true);
      });
    });
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isHome = pathname === "/";
  const headerClasses = isHome
    ? isScrolled
      ? "sticky top-0 z-40 w-full -mb-18 md:-mb-[80px] bg-white/90 backdrop-blur-md border-b border-primary-green/20 shadow-xs transition-all duration-300 ease-out"
      : "sticky top-0 z-40 w-full -mb-18 md:-mb-[80px] bg-transparent border-b border-transparent shadow-none transition-all duration-300 ease-out"
    : `sticky top-0 z-40 w-full transition-all duration-150 bg-white/90 backdrop-blur-md ${
        isScrolled ? "border-b border-primary-green/30" : "border-b border-primary-green/20"
      }`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open & listen for escape key; unmount after exit transition
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") closeMenu();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
      const timer = setTimeout(() => {
        setIsRendered(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <>
      <header className={headerClasses}>
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

          {/* Mobile Hamburger Toggle Button (Architectural Hairline Style) */}
          <button
            onClick={openMenu}
            type="button"
            className="lg:hidden p-2 border border-gray-200 hover:border-[#2C3338] text-[#2C3338] transition-colors rounded-none focus:outline-none cursor-pointer"
            aria-expanded={isOpen}
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Option 1: Crisp Architectural White Slide-Over Menu */}
      {isRendered && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Subtle Ambient Backdrop */}
          <div
            onClick={closeMenu}
            aria-hidden="true"
            className={`fixed inset-0 bg-black/45 backdrop-blur-xs transition-opacity duration-300 cursor-pointer ${
              isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          />

          {/* Slide-Over Drawer from Right */}
          <div
            className={`fixed top-0 right-0 bottom-0 z-10 w-full max-w-sm sm:max-w-md bg-white border-l border-[#CCD0D4] shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
            aria-hidden={!isOpen}
            role="dialog"
            aria-modal="true"
          >
            {/* Top Bar: Brand Logo & Minimal Hairline Close Button */}
            <div className="p-5 sm:p-6 border-b border-gray-100 flex items-center justify-between bg-white shrink-0">
              <div className="flex items-center gap-2.5">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="flex items-center gap-2"
                  aria-label="Proh Pharmacy Home"
                >
                  <Image
                    src="/images/prohpharmacy_icon.png"
                    alt="Proh Pharmacy"
                    width={30}
                    height={30}
                    priority
                    className="object-contain"
                  />
                  <span className="text-[12px] font-medium tracking-tight text-[#2C3338] uppercase">
                    Proh Pharmacy
                  </span>
                </Link>
              </div>

              <button
                type="button"
                onClick={closeMenu}
                className="p-1.5 border border-[#CCD0D4] hover:border-[#2C3338] text-[#50575E] hover:text-[#1D2327] transition-colors rounded-none cursor-pointer"
                aria-label="Close navigation menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Middle: Clean Architectural Vertical Navigation Links */}
            <div className="p-5 sm:p-6 overflow-y-auto flex-1">
              <p className="text-[10px] font-normal uppercase tracking-widest text-[#787C82] mb-3">
                Directory &amp; Navigation
              </p>

              <nav className="divide-y divide-gray-100 flex flex-col">
                {siteConfig.navLinks.map((link, idx) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className={`group flex items-center justify-between py-3.5 text-base sm:text-[17px] font-medium tracking-normal transition-colors ${
                        isActive
                          ? "text-[#087A2D] border-l-2 border-[#2D6A4F] pl-3 -ml-3"
                          : "text-[#2C3338] hover:text-[#087A2D]"
                      }`}
                    >
                      <span>{link.label}</span>
                      <span className="text-[10px] font-mono text-[#8C8F94] group-hover:text-[#2C3338] transition-colors shrink-0">
                        0{idx + 1}
                      </span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Bar: Architectural Service Note & Signature Hairline Button */}
            <div className="p-5 sm:p-6 border-t border-gray-100 bg-gray-50/50 shrink-0 space-y-4">
              <div>
                <p className="text-[11px] text-[#787C82] font-normal leading-relaxed">
                  Open 24/7 for retail medicine dispensing, wholesale distribution, and nationwide transit.
                </p>
                <a
                  href="tel:0244187892"
                  className="text-[11.5px] font-mono text-[#2C3338] hover:text-[#087A2D] font-normal block mt-1"
                >
                  Direct Support: 0244 187 892
                </a>
              </div>

              <Link
                href={siteConfig.routes.quote}
                onClick={closeMenu}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#2D6A4F] hover:bg-[#23533E] text-white text-[11px] font-normal tracking-widest uppercase transition-colors rounded-none w-full text-center shadow-2xs"
              >
                <span>Request Supply</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/90" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
