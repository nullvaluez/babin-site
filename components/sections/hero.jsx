"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Play, X, Shield, Award, ChevronRight, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { primaryPhone, primaryPhoneTel } from "@/lib/data/offices";

const trustPills = [
  { icon: Shield, label: "No Win, No Fee — Ever" },
  { icon: Award, label: "75+ Years Combined" },
  { icon: MapPin, label: "4 Ohio Offices" },
];

function VideoThumbnail({ videoId, title, onPlay, large = false }) {
  return (
    <button
      onClick={onPlay}
      className={`group relative block w-full overflow-hidden bg-blue-950 ${
        large ? "aspect-video" : "aspect-video"
      }`}
      aria-label={`Play video: ${title}`}
    >
      <Image
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt={title}
        fill
        className="object-cover opacity-60 transition-all duration-500 group-hover:opacity-80 group-hover:scale-[1.04]"
        sizes={large ? "(max-width: 1280px) 420px, 460px" : "220px"}
        unoptimized
      />
      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-blue-950/70 via-transparent to-transparent" />
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`flex items-center justify-center rounded-full bg-white/20 ring-2 ring-white/40 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30 group-hover:ring-white/60 ${
            large ? "h-16 w-16" : "h-10 w-10"
          }`}
        >
          <Play
            className={`ml-0.5 fill-white text-white ${large ? "h-7 w-7" : "h-4 w-4"}`}
          />
        </div>
      </div>
    </button>
  );
}

function ClippersPartnershipCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="relative hidden overflow-hidden rounded-2xl border border-gold/25 bg-blue-950/60 p-8 shadow-2xl backdrop-blur-md lg:block"
    >
      <div className="flex flex-col items-center text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-5xl">
          ⚾
        </div>
        <h3 className="mt-5 text-2xl font-extrabold leading-tight tracking-tight text-white">
          Official Partner of the<br />Columbus Clippers
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-blue-100/60">
          Babin Law is proud to stand alongside Columbus&apos;s Triple-A baseball
          team as an official community partner — because great teams fight for
          the people.
        </p>
        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/35 bg-gold/10 px-5 py-2">
          <span className="text-xs font-bold uppercase tracking-widest text-gold">
            2025–2026 Season Partner
          </span>
        </div>
        <div className="mt-6 grid w-full grid-cols-2 gap-3 border-t border-white/10 pt-6">
          {[
            { label: "AAA Baseball", sub: "Triple-A Affiliate" },
            { label: "Columbus, OH", sub: "Huntington Park" },
          ].map(({ label, sub }) => (
            <div key={label} className="rounded-xl bg-white/5 px-3 py-3">
              <p className="text-sm font-bold text-white">{label}</p>
              <p className="mt-0.5 text-[0.7rem] text-blue-200/50">{sub}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -inset-6 -z-10 rounded-3xl bg-gold/8 blur-3xl" />
    </motion.div>
  );
}

export function Hero({
  title = "Your Ally Against the Powerful",
  subtitle = "Top-rated Columbus attorneys with 75+ years of combined experience fighting for individuals — not corporations. No fees unless we win.",
  backgroundImage = "/images/hero.jpg",
  ctaText = "Free Consultation",
  ctaHref = "/contact",
  showPhone = true,
  overlay = true,
  showClippersPartnership = true,
  // Replace with your actual YouTube video ID (e.g. "dQw4w9WgXcQ")
  featuredVideoId = null,
  featuredVideoTitle = "Watch Our Story",
  // Array of { id: string, title: string } for up to 2 secondary videos
  additionalVideoIds = [],
}) {
  const [modalVideoId, setModalVideoId] = useState(null);

  const hasVideo = Boolean(featuredVideoId);
  const hasRightPanel = hasVideo || showClippersPartnership;

  return (
    <>
      <section className="relative flex min-h-[90vh] items-center overflow-hidden">
        {/* Background image */}
        {backgroundImage && (
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        )}

        {/* Dark gradient overlay — left side heavier for text legibility */}
        {overlay && (
          <div className="absolute inset-0 bg-linear-to-r from-blue-950/96 via-blue-950/82 to-blue-950/45" />
        )}

        {/* Subtle architectural grid texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 lg:px-6">
          <div
            className={`grid items-center gap-12 lg:gap-16 ${
              hasRightPanel
                ? "lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px]"
                : "lg:grid-cols-1"
            }`}
          >
            {/* ── LEFT COLUMN: COPY ── */}
            <div>
              {/* Columbus Clippers partnership badge */}
              {showClippersPartnership && (
                <motion.div
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-gold/35 bg-gold/10 px-4 py-2 backdrop-blur-sm"
                >
                  <span className="text-base leading-none">⚾</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-gold">
                    Official Partner · Columbus Clippers
                  </span>
                </motion.div>
              )}

              <motion.h1
                className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.75rem]"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                {title}
              </motion.h1>

              <motion.p
                className="mt-5 max-w-lg text-[1.05rem] leading-relaxed text-blue-100/70"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.28 }}
              >
                {subtitle}
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.42 }}
              >
                <Button
                  size="lg"
                  asChild
                  className="text-base font-bold shadow-lg shadow-blue-primary/30"
                >
                  <Link href={ctaHref}>{ctaText}</Link>
                </Button>
                {showPhone && (
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="border-white/25 bg-white/5 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/10 hover:text-white"
                  >
                    <a href={`tel:${primaryPhoneTel}`}>
                      <Phone className="mr-2 h-4 w-4" />
                      {primaryPhone}
                    </a>
                  </Button>
                )}
              </motion.div>

              {/* Trust indicator pills */}
              <motion.div
                className="mt-10 flex flex-wrap gap-2.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.58 }}
              >
                {trustPills.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm"
                  >
                    {Icon && <Icon className="h-3.5 w-3.5 text-blue-300/70" />}
                    <span className="text-xs font-medium text-blue-100/75">
                      {label}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ── RIGHT COLUMN: VIDEO SHOWCASE ── */}
            {hasVideo && (
              <motion.div
                initial={{ opacity: 0, y: 28, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative hidden lg:block"
              >
                {/* Main video card */}
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-blue-950/50 shadow-2xl backdrop-blur-md">
                  <VideoThumbnail
                    videoId={featuredVideoId}
                    title={featuredVideoTitle}
                    onPlay={() => setModalVideoId(featuredVideoId)}
                    large
                  />

                  {/* Card info footer */}
                  <div className="flex items-center justify-between px-5 py-4">
                    <div>
                      <p className="text-[0.65rem] font-bold uppercase tracking-widest text-blue-400/55">
                        Featured Video
                      </p>
                      <p className="mt-0.5 text-sm font-semibold text-white">
                        {featuredVideoTitle}
                      </p>
                    </div>
                    <button
                      onClick={() => setModalVideoId(featuredVideoId)}
                      className="flex items-center gap-1 text-xs font-semibold text-blue-300 transition-colors hover:text-white"
                    >
                      Watch Now{" "}
                      <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  {/* Clippers co-branding strip at base of card */}
                  {showClippersPartnership && (
                    <div className="flex items-center gap-2 border-t border-gold/20 bg-gold/5 px-5 py-2.5">
                      <span className="text-sm leading-none">⚾</span>
                      <span className="text-[0.65rem] font-bold uppercase tracking-widest text-gold/75">
                        Official Partner of the Columbus Clippers
                      </span>
                    </div>
                  )}
                </div>

                {/* Secondary video thumbnails (up to 2) */}
                {additionalVideoIds.length > 0 && (
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    {additionalVideoIds.slice(0, 2).map((vid) => (
                      <div
                        key={vid.id}
                        className="overflow-hidden rounded-xl border border-white/10 bg-blue-950/40 backdrop-blur-sm"
                      >
                        <VideoThumbnail
                          videoId={vid.id}
                          title={vid.title}
                          onPlay={() => setModalVideoId(vid.id)}
                        />
                        <div className="px-3 py-2">
                          <p className="truncate text-[0.7rem] font-medium text-blue-100/65">
                            {vid.title}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Ambient glow behind the card */}
                <div className="absolute -inset-6 -z-10 rounded-3xl bg-blue-primary/12 blur-3xl" />
              </motion.div>
            )}

            {/* RIGHT COLUMN: Clippers partnership card (no video state) */}
            {!hasVideo && showClippersPartnership && (
              <ClippersPartnershipCard />
            )}
          </div>
        </div>
      </section>

      {/* ── VIDEO MODAL ── */}
      <AnimatePresence>
        {modalVideoId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
            onClick={() => setModalVideoId(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 18 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 18 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${modalVideoId}?autoplay=1&rel=0&modestbranding=1`}
                title="Babin Law Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
              <button
                onClick={() => setModalVideoId(null)}
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
                aria-label="Close video"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
