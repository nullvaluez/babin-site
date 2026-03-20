"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ChevronDown, Phone, ExternalLink, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { practiceAreaNav, aboutNav, otherServicesNav } from "@/lib/data/navigation";
import { primaryPhone, primaryPhoneTel, clientPortalUrl } from "@/lib/data/offices";

function AccordionSection({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/8">
      <button
        className="flex w-full items-center justify-between py-3.5 text-left text-sm font-semibold text-white"
        onClick={() => setOpen(!open)}
      >
        {title}
        <ChevronDown
          className={`h-4 w-4 text-blue-300/50 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-3">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function MobileNav({ open, onClose }) {
  if (!open) return null;

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 left-0 z-50 flex w-[320px] flex-col overflow-y-auto bg-blue-950 lg:hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
              <span className="text-lg font-extrabold tracking-tight text-white">
                BABIN <span className="text-blue-primary">LAW</span>
              </span>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-white/60 transition-colors hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Nav links */}
            <div className="flex-1 px-5 pt-2">
              <Link
                href="/"
                onClick={onClose}
                className="flex items-center justify-between border-b border-white/8 py-3.5 text-sm font-semibold text-white"
              >
                Home
              </Link>

              <AccordionSection title="Practice Areas">
                {practiceAreaNav.map((col) => (
                  <div key={col.category} className="mb-4">
                    <Link
                      href={col.href}
                      onClick={onClose}
                      className="mb-2 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-blue-300"
                    >
                      {col.category}
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                    {col.items.slice(0, 6).map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={onClose}
                        className="flex py-1 pl-2 text-[13px] text-blue-100/55 transition-colors hover:text-white"
                      >
                        {item.title}
                      </Link>
                    ))}
                    {col.items.length > 6 && (
                      <Link
                        href={col.href}
                        onClick={onClose}
                        className="mt-1 flex items-center gap-1 pl-2 text-[12px] font-semibold text-blue-primary"
                      >
                        View all <ArrowRight className="h-3 w-3" />
                      </Link>
                    )}
                  </div>
                ))}
              </AccordionSection>

              <AccordionSection title="Other Services">
                {otherServicesNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="flex py-2 pl-2 text-sm text-blue-100/60 transition-colors hover:text-white"
                  >
                    {item.title}
                  </Link>
                ))}
              </AccordionSection>

              <Link
                href="/team"
                onClick={onClose}
                className="flex items-center justify-between border-b border-white/8 py-3.5 text-sm font-semibold text-white"
              >
                Our Team
              </Link>

              <AccordionSection title="About">
                {aboutNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="flex py-2 pl-2 text-sm text-blue-100/60 transition-colors hover:text-white"
                  >
                    {item.title}
                  </Link>
                ))}
              </AccordionSection>

              <Link
                href="/contact"
                onClick={onClose}
                className="flex items-center justify-between border-b border-white/8 py-3.5 text-sm font-semibold text-white"
              >
                Contact
              </Link>
            </div>

            {/* Bottom CTA area */}
            <div className="border-t border-white/8 px-5 py-5 space-y-3">
              <Button asChild className="w-full bg-white font-bold text-blue-950 hover:bg-blue-50">
                <Link href="/contact" onClick={onClose}>
                  Free Consultation
                </Link>
              </Button>
              <a
                href={`tel:${primaryPhoneTel}`}
                className="flex items-center justify-center gap-2 rounded-lg border border-white/10 py-2.5 text-sm font-semibold text-gold"
              >
                <Phone className="h-4 w-4" />
                {primaryPhone}
              </a>
              <a
                href={clientPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 text-xs text-blue-100/40"
              >
                Client Portal
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
