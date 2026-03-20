"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Car, Pill, Shield, Link2, ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { practiceAreaNav } from "@/lib/data/navigation";
import { primaryPhone, primaryPhoneTel } from "@/lib/data/offices";

const categoryMeta = {
  "Personal Injury": {
    icon: Car,
    accent: "text-blue-400",
    bg: "bg-blue-400/15",
    border: "border-blue-400/20",
  },
  "Mass Tort": {
    icon: Pill,
    accent: "text-violet-400",
    bg: "bg-violet-400/15",
    border: "border-violet-400/20",
  },
  "Sexual Abuse": {
    icon: Shield,
    accent: "text-rose-400",
    bg: "bg-rose-400/15",
    border: "border-rose-400/20",
  },
  "Human Trafficking": {
    icon: Link2,
    accent: "text-amber-400",
    bg: "bg-amber-400/15",
    border: "border-amber-400/20",
  },
};

// Max sub-items shown per column before "View all" link appears
const MAX_VISIBLE = 7;

export function MegaMenu({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      // Full width, fully opaque — positioned against the header (which has `relative`)
      className="absolute left-0 right-0 top-full z-50 border-t border-blue-primary/20 bg-blue-950 shadow-[0_24px_64px_rgba(0,0,0,0.6)]"
    >
      <div className="mx-auto max-w-7xl px-6 py-8 xl:px-8">
        <div className="grid grid-cols-[1fr_1fr_1fr_1fr_220px] gap-8">

          {/* ── 4 Practice Area columns ── */}
          {practiceAreaNav.map((col) => {
            const meta   = categoryMeta[col.category] ?? {};
            const Icon   = meta.icon;
            const shown  = col.items.slice(0, MAX_VISIBLE);
            const hasMore = col.items.length > MAX_VISIBLE;

            return (
              <div key={col.category} className="min-w-0">

                {/* Category header — single compact row */}
                <Link
                  href={col.href}
                  onClick={onClose}
                  className={`group mb-4 inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 transition-colors hover:bg-white/5 ${meta.border} ${meta.bg}`}
                >
                  {Icon && <Icon className={`h-3.5 w-3.5 shrink-0 ${meta.accent}`} />}
                  <span className={`text-xs font-bold tracking-wide ${meta.accent}`}>
                    {col.category}
                  </span>
                  <ArrowRight className={`h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100 ${meta.accent}`} />
                </Link>

                {/* Sub-links */}
                <ul className="space-y-0.5">
                  {shown.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="block rounded-md px-2 py-1.5 text-[13px] leading-snug text-blue-100/55 transition-colors hover:bg-white/5 hover:text-white"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>

                {hasMore && (
                  <Link
                    href={col.href}
                    onClick={onClose}
                    className="mt-3 flex items-center gap-1 rounded-md px-2 text-[12px] font-semibold text-blue-primary transition-colors hover:text-blue-300"
                  >
                    View all {col.items.length} services
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                )}
              </div>
            );
          })}

          {/* ── CTA panel ── */}
          <div className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300/60">
              Free Case Review
            </p>
            <p className="mt-2 text-sm font-bold leading-snug text-white">
              Speak with an attorney today — no obligation, no fees unless we win.
            </p>

            <ul className="mt-4 space-y-2.5">
              {[
                "No fees unless we win",
                "75+ years combined experience",
                "Confidential consultation",
              ].map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-blue-primary" />
                  <span className="text-[12px] text-blue-100/65">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto space-y-2 pt-5">
              <Button asChild size="sm" className="w-full font-bold">
                <Link href="/contact" onClick={onClose}>Free Consultation</Link>
              </Button>
              <a
                href={`tel:${primaryPhoneTel}`}
                className="flex items-center justify-center gap-1.5 text-[12px] font-semibold text-gold transition-colors hover:text-yellow-300"
              >
                <Phone className="h-3 w-3" />
                {primaryPhone}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-4">
          <p className="text-[11px] text-blue-100/25">
            Serving Columbus · Cincinnati · Dayton · Cleveland
          </p>
          <Link
            href="/practice-areas"
            onClick={onClose}
            className="flex items-center gap-1.5 text-[12px] font-semibold text-blue-primary transition-colors hover:text-blue-300"
          >
            View All Practice Areas <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
