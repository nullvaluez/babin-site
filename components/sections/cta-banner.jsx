"use client";

import Link from "next/link";
import { Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { primaryPhone, primaryPhoneTel } from "@/lib/data/offices";

export function CTABanner({
  title = "Schedule Your Free Consultation",
  subtitle = "Our attorneys are ready to review your case at no cost. Contact us today — you pay nothing unless we win.",
  variant = "dark",
}) {
  const isDark = variant === "dark";

  if (!isDark) {
    return (
      <section className="relative overflow-hidden bg-gray-50 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="text-base font-semibold">
              <Link href="/contact">
                Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base font-semibold">
              <a href={`tel:${primaryPhoneTel}`}>
                <Phone className="mr-2 h-4 w-4" />
                Call {primaryPhone}
              </a>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-blue-950 py-16 lg:py-24">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-950 via-blue-950 to-blue-dark" />

      {/* Radial glow behind content */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[500px] w-[800px] rounded-full bg-blue-primary/8 blur-[120px]" />
      </div>

      {/* Subtle grid texture matching the hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Top edge glow line */}
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-linear-to-r from-transparent via-blue-primary/40 to-transparent" />

      {/* Bottom edge glow line */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-gold/25 to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center lg:px-6">
        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/8 px-4 py-1.5"
        >
          <ShieldCheck className="h-3.5 w-3.5 text-gold" />
          <span className="text-xs font-bold uppercase tracking-widest text-gold">
            No Win, No Fee — Ever
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-blue-100/65"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            asChild
            className="bg-white text-base font-bold text-blue-950 shadow-lg shadow-blue-primary/20 hover:bg-blue-50"
          >
            <Link href="/contact">
              Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-white/20 bg-white/5 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/10 hover:text-white"
          >
            <a href={`tel:${primaryPhoneTel}`}>
              <Phone className="mr-2 h-4 w-4" />
              Call {primaryPhone}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
