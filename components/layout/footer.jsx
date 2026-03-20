import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { footerNav } from "@/lib/data/navigation";
import { offices, primaryPhone, primaryPhoneTel } from "@/lib/data/offices";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-blue-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold tracking-tight">
                BABIN <span className="text-blue-primary">LAW</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-blue-50/70">
              Babin Law, LLC is your ally against the powerful. Our top-rated
              Columbus attorneys are committed to justice, taking on corporate
              giants with integrity and tenacity.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-blue-primary"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-blue-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-blue-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gold">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerNav.quickLinks.map((item) => (
                <li key={item.href}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-50/70 transition-colors hover:text-white"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-sm text-blue-50/70 transition-colors hover:text-white"
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gold">
              Practice Areas
            </h3>
            <ul className="space-y-2">
              {footerNav.practiceAreas.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-blue-50/70 transition-colors hover:text-white"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gold">
              Office Locations
            </h3>
            <ul className="space-y-3">
              {offices.map((office) => (
                <li key={office.slug}>
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-primary" />
                    <div>
                      <span className="text-sm font-medium text-white">
                        {office.city}, {office.state}
                        {office.isHQ && (
                          <span className="ml-1 text-xs text-gold">(HQ)</span>
                        )}
                      </span>
                      {office.address && (
                        <p className="text-xs text-blue-50/60">{office.address}</p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4 space-y-2">
              <a
                href={`tel:${primaryPhoneTel}`}
                className="flex items-center gap-2 text-sm font-semibold text-white"
              >
                <Phone className="h-4 w-4 text-blue-primary" />
                {primaryPhone}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-blue-50/50 sm:flex-row lg:px-6">
          <p>&copy; {currentYear} Babin Law, LLC. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/disclaimer" className="hover:text-white">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
