import { Phone, Facebook, Instagram, Linkedin, ExternalLink } from "lucide-react";
import { primaryPhone, primaryPhoneTel, clientPortalUrl } from "@/lib/data/offices";

export function TopBar() {
  return (
    <div className="hidden border-b border-white/8 bg-blue-950 lg:block">
      <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 lg:px-6">
        {/* Left — phone number */}
        <a
          href={`tel:${primaryPhoneTel}`}
          className="flex items-center gap-1.5 text-xs font-semibold text-blue-100/70 transition-colors hover:text-white"
        >
          <Phone className="h-3 w-3" />
          {primaryPhone}
        </a>

        {/* Right — social links + client portal */}
        <div className="flex items-center gap-1">
          {/* Social icons */}
          <a
            href="#"
            aria-label="Facebook"
            className="flex h-7 w-7 items-center justify-center rounded-md text-blue-100/40 transition-colors hover:bg-white/5 hover:text-blue-100/80"
          >
            <Facebook className="h-3.5 w-3.5" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="flex h-7 w-7 items-center justify-center rounded-md text-blue-100/40 transition-colors hover:bg-white/5 hover:text-blue-100/80"
          >
            <Instagram className="h-3.5 w-3.5" />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="flex h-7 w-7 items-center justify-center rounded-md text-blue-100/40 transition-colors hover:bg-white/5 hover:text-blue-100/80"
          >
            <Linkedin className="h-3.5 w-3.5" />
          </a>

          {/* Divider */}
          <div className="mx-2 h-3.5 w-px bg-white/10" />

          {/* Client portal */}
          <a
            href={clientPortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium text-blue-100/50 transition-colors hover:bg-white/5 hover:text-blue-100/80"
          >
            Client Portal
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
