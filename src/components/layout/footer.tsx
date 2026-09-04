import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/ui/logo";
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#033713] text-white border-t border-white/10 pt-16 pb-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" inverted />
            <p className="text-sm text-white/80 leading-relaxed max-w-sm">
              Proh Pharmacy is a trusted retail and wholesale pharmaceutical business serving
              individuals and pharmacies across Ghana with dependable nationwide delivery.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-xs bg-white/10 px-3 py-1.5 rounded-md text-white/90">
                <span className="w-2 h-2 rounded-full bg-bright-green"></span>
                Ghana Nationwide Distribution
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-bright-green">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-white/80">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-bright-green">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <Link href="/services#retail" className="hover:text-white transition-colors">
                  Retail Medicine Supply
                </Link>
              </li>
              <li>
                <Link href="/wholesale" className="hover:text-white transition-colors">
                  Wholesale Pharmacy Supply
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="hover:text-white transition-colors">
                  Nationwide Delivery
                </Link>
              </li>
              <li>
                <Link href="/contact?type=wholesale" className="hover:text-white transition-colors">
                  Request Quotation
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Placeholders */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-bright-green">
              Contact & Location
            </h4>
            <div className="space-y-3 text-sm text-white/80">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-start gap-2.5 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-bright-green flex-shrink-0 mt-0.5" />
                <span>{siteConfig.contact.email}</span>
              </a>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-bright-green flex-shrink-0 mt-0.5" />
                <div>
                  <p>{siteConfig.contact.phoneDisplay}</p>
                  <p className="text-[11px] text-white/50">{siteConfig.contact.phonePlaceholderNote}</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-bright-green flex-shrink-0 mt-0.5" />
                <div>
                  <p>{siteConfig.contact.address}</p>
                  <p className="text-[11px] text-white/50">{siteConfig.contact.addressPlaceholderNote}</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-bright-green flex-shrink-0 mt-0.5" />
                <div>
                  <p>{siteConfig.contact.openingHours}</p>
                  <p className="text-[11px] text-white/50">{siteConfig.contact.openingHoursNote}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© 2026 Proh Pharmacy. All rights reserved.</p>
          
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/contact#legal" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact#legal" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            
            {/* Staff portal link: prepared for production launch, discreetly tucked per instructions */}
            <a
              href={siteConfig.routes.staffPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors hidden"
              aria-label="Staff Portal"
            >
              Staff Portal <ArrowUpRight className="inline w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
