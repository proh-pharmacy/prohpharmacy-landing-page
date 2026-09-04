import { siteConfig } from "@/config/site";
import { Truck, Mail, Phone } from "lucide-react";

export function TopBar() {
  return (
    <aside
      aria-label="Quick announcements"
      className="bg-[#131A16] text-white/90 text-xs py-2 border-b border-white/10 hidden sm:block select-none"
    >
      <div className="container-custom flex items-center justify-between gap-4">
        {/* Main message */}
        <div className="flex items-center gap-2 font-normal text-white/85">
          <Truck className="w-3.5 h-3.5 text-emerald-400/80 flex-shrink-0" />
          <span>{siteConfig.topBarMessage}</span>
        </div>

        {/* Contact links */}
        <div className="flex items-center gap-6 text-white/70 text-[11.5px]">
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-emerald-400/80" />
            <span>{siteConfig.contact.email}</span>
          </a>
          <div className="flex items-center gap-1.5 text-white/70">
            <Phone className="w-3.5 h-3.5 text-emerald-400/80" />
            <span>{siteConfig.contact.phoneDisplay}</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
