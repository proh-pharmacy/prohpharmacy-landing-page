import { siteConfig } from "@/config/site";
import { Truck, Mail, Phone } from "lucide-react";

export function TopBar() {
  return (
    <aside aria-label="Quick announcements" className="bg-deep-green text-white text-xs py-2 border-b border-white/10 hidden sm:block">
      <div className="container-custom flex flex-wrap items-center justify-between gap-4">
        {/* Main message */}
        <div className="flex items-center gap-2 font-medium">
          <Truck className="w-3.5 h-3.5 text-bright-green flex-shrink-0" />
          <span>{siteConfig.topBarMessage}</span>
        </div>

        {/* Contact placeholders */}
        <div className="flex items-center gap-5 text-white/80">
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-bright-green" />
            <span>{siteConfig.contact.email}</span>
          </a>
          <div className="flex items-center gap-1.5 text-white/70">
            <Phone className="w-3.5 h-3.5 text-bright-green" />
            <span>{siteConfig.contact.phoneDisplay}</span>
            <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-white/60">
              Placeholder
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
