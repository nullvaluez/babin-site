"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import {
  Phone, Menu, ChevronDown,
  FileText, Users, BookOpen, Video, HelpCircle, Handshake, Scale, DollarSign,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MegaMenu } from "./mega-menu";
import { MobileNav } from "./mobile-nav";
import { aboutNav, otherServicesNav } from "@/lib/data/navigation";
import { primaryPhone, primaryPhoneTel } from "@/lib/data/offices";

const aboutIcons = {
  "/about": FileText,
  "/about/core-values": Scale,
  "/blog": BookOpen,
  "/media": Users,
  "/videos": Video,
  "/faq": HelpCircle,
  "/about/co-counsel": Handshake,
};

const otherServicesIcons = {
  "/class-actions": Scale,
  "/unpaid-wages": DollarSign,
};

const dropdownVariants = {
  hidden:  { opacity: 0, y: -4, scale: 0.98 },
  visible: { opacity: 1, y: 0,  scale: 1,   transition: { duration: 0.15, ease: "easeOut" } },
  exit:    { opacity: 0, y: -4, scale: 0.98, transition: { duration: 0.1 } },
};

export function Navbar() {
  const [megaMenuOpen,      setMegaMenuOpen]      = useState(false);
  const [aboutOpen,         setAboutOpen]         = useState(false);
  const [otherServicesOpen, setOtherServicesOpen] = useState(false);
  const [mobileOpen,        setMobileOpen]        = useState(false);

  // Timeout ref prevents the mega-menu from snapping closed when the mouse
  // moves from the nav trigger to the menu panel (a ~150 ms grace window).
  const megaCloseTimer = useRef(null);

  const openMega = useCallback(() => {
    clearTimeout(megaCloseTimer.current);
    setMegaMenuOpen(true);
  }, []);

  const scheduleMegaClose = useCallback(() => {
    megaCloseTimer.current = setTimeout(() => setMegaMenuOpen(false), 150);
  }, []);

  function closeAll() {
    clearTimeout(megaCloseTimer.current);
    setMegaMenuOpen(false);
    setAboutOpen(false);
    setOtherServicesOpen(false);
  }

  return (
    // `relative` is required so the mega menu (absolute top-full left-0 right-0)
    // is correctly positioned against the full-width header, not a narrow nav item.
    <header className="sticky top-0 z-50 w-full border-b border-blue-primary/15 bg-blue-950">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-6">

        {/* Logo */}
        <Link href="/" onClick={closeAll} className="shrink-0">
          <span className="text-xl font-extrabold tracking-tight text-white">
            BABIN <span className="text-blue-primary">LAW</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          <Link
            href="/"
            onClick={closeAll}
            className="rounded-md px-3 py-2 text-sm font-medium text-blue-100/65 transition-colors hover:text-white"
          >
            Home
          </Link>

          {/* Practice Areas — triggers the full-width mega menu */}
          <div
            onMouseEnter={openMega}
            onMouseLeave={scheduleMegaClose}
          >
            <Link
              href="/practice-areas"
              className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                megaMenuOpen ? "text-white" : "text-blue-100/65 hover:text-white"
              }`}
            >
              Practice Areas
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  megaMenuOpen ? "rotate-180 text-blue-300" : ""
                }`}
              />
            </Link>
          </div>

          {/* Other Services */}
          <div
            className="relative"
            onMouseEnter={() => { closeAll(); setOtherServicesOpen(true); }}
            onMouseLeave={() => setOtherServicesOpen(false)}
          >
            <button
              className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                otherServicesOpen ? "text-white" : "text-blue-100/65 hover:text-white"
              }`}
            >
              Other Services
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  otherServicesOpen ? "rotate-180 text-blue-300" : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {otherServicesOpen && (
                <motion.div
                  variants={dropdownVariants} initial="hidden" animate="visible" exit="exit"
                  className="absolute left-0 top-full z-50 w-56 rounded-xl border border-white/10 bg-blue-950 py-2 shadow-2xl"
                >
                  {otherServicesNav.map((item) => {
                    const Icon = otherServicesIcons[item.href];
                    return (
                      <Link
                        key={item.href} href={item.href} onClick={closeAll}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-blue-100/60 transition-colors hover:bg-white/5 hover:text-white"
                      >
                        {Icon && <Icon className="h-4 w-4 shrink-0 text-blue-primary/70" />}
                        {item.title}
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/team"
            onClick={closeAll}
            className="rounded-md px-3 py-2 text-sm font-medium text-blue-100/65 transition-colors hover:text-white"
          >
            Our Team
          </Link>

          {/* About */}
          <div
            className="relative"
            onMouseEnter={() => { closeAll(); setAboutOpen(true); }}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <Link
              href="/about"
              className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                aboutOpen ? "text-white" : "text-blue-100/65 hover:text-white"
              }`}
            >
              About
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  aboutOpen ? "rotate-180 text-blue-300" : ""
                }`}
              />
            </Link>
            <AnimatePresence>
              {aboutOpen && (
                <motion.div
                  variants={dropdownVariants} initial="hidden" animate="visible" exit="exit"
                  className="absolute left-0 top-full z-50 w-52 rounded-xl border border-white/10 bg-blue-950 py-2 shadow-2xl"
                >
                  {aboutNav.map((item) => {
                    const Icon = aboutIcons[item.href];
                    return (
                      <Link
                        key={item.href} href={item.href} onClick={closeAll}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-blue-100/60 transition-colors hover:bg-white/5 hover:text-white"
                      >
                        {Icon && <Icon className="h-4 w-4 shrink-0 text-blue-primary/70" />}
                        {item.title}
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/contact"
            onClick={closeAll}
            className="rounded-md px-3 py-2 text-sm font-medium text-blue-100/65 transition-colors hover:text-white"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop right actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${primaryPhoneTel}`}
            className="flex items-center gap-1.5 text-sm font-bold text-gold transition-colors hover:text-yellow-300"
          >
            <Phone className="h-3.5 w-3.5" />
            {primaryPhone}
          </a>
          <Button asChild className="bg-white font-bold text-blue-950 hover:bg-blue-50">
            <Link href="/contact" onClick={closeAll}>Free Consultation</Link>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white lg:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* ── Full-width mega menu — rendered at header level so left-0/right-0
           correctly spans the entire viewport width, not just the nav item.   ── */}
      <AnimatePresence>
        {megaMenuOpen && (
          <div onMouseEnter={openMega} onMouseLeave={scheduleMegaClose}>
            <MegaMenu onClose={closeAll} />
          </div>
        )}
      </AnimatePresence>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
