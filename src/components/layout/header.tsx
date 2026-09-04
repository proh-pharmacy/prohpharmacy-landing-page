"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 bg-white/95 backdrop-blur-md ${
        isScrolled ? "shadow-sm border-b border-light-border" : "border-b border-light-border/60"
      }`}
    >
      <div className="container-custom flex items-center justify-between h-20">
        <Logo size="md" />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
          {siteConfig.navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "text-deep-green bg-light-green font-semibold"
                    : "text-muted-text hover:text-deep-green hover:bg-light-green/50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Quote CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button href={siteConfig.routes.quote} size="md" variant="primary">
            Request a Quote
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="lg:hidden p-2 rounded-lg text-main-text hover:bg-light-green focus:outline-none focus:ring-2 focus:ring-primary-green"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[80px] bg-white border-b border-light-border shadow-xl px-5 py-6 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between ${
                    isActive
                      ? "text-deep-green bg-light-green font-semibold"
                      : "text-main-text hover:bg-light-green/60"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-bright-green" />}
                </Link>
              );
            })}
          </nav>
          <div className="pt-2 border-t border-light-border flex flex-col gap-3">
            <Button
              href={siteConfig.routes.quote}
              size="lg"
              variant="primary"
              className="w-full justify-between"
              onClick={() => setIsOpen(false)}
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
            <p className="text-xs text-center text-muted-text">
              Retail & Wholesale Medicine Delivery Across Ghana
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
