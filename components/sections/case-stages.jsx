"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight, ArrowRight, Clock, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { caseStages, stageImages } from "@/lib/data/case-stages";

export function CaseStages({ variant = "homepage" }) {
  const data = caseStages[variant];
  const [activeStage, setActiveStage] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const goNext = useCallback(() => {
    if (!data) return;
    setActiveStage((s) => (s < data.stages.length - 1 ? s + 1 : 0));
  }, [data]);

  const goPrev = useCallback(() => {
    if (!data) return;
    setActiveStage((s) => (s > 0 ? s - 1 : data.stages.length - 1));
  }, [data]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev]);

  if (!data) return null;

  const stage = data.stages[activeStage];
  const ActiveIcon = stage.icon;
  const stageImage = stageImages[activeStage % stageImages.length];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-blue-950 py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(7,115,231,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,112,214,0.1),transparent_60%)]" />
        <div className="absolute left-0 top-0 h-px w-full bg-linear-to-r from-transparent via-blue-primary/20 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block rounded-full border border-blue-primary/30 bg-blue-primary/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
            Our Proven Process
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {data.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-blue-100/50">
            {data.subtitle}
          </p>
        </motion.div>

        {/* ============ DESKTOP ============ */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-[280px_1fr] gap-10 xl:gap-14">
            {/* LEFT: stage list */}
            <div className="relative">
              <div className="absolute bottom-0 left-[35px] top-0 w-0.5 bg-white/10" />
              <motion.div
                className="absolute left-[35px] top-0 w-0.5 origin-top bg-linear-to-b from-blue-primary to-blue-vivid"
                initial={{ scaleY: 0 }}
                animate={{
                  scaleY: inView
                    ? (activeStage + 1) / data.stages.length
                    : 0,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />

              <div className="relative space-y-1">
                {data.stages.map((s, i) => {
                  const Icon = s.icon;
                  const isActive = i === activeStage;
                  const isPast = i < activeStage;

                  return (
                    <motion.button
                      key={s.number}
                      onClick={() => setActiveStage(i)}
                      className={`group relative flex w-full cursor-pointer items-center gap-4 rounded-xl px-3 py-3.5 text-left transition-all duration-200 ${
                        isActive
                          ? "bg-white/8"
                          : "hover:bg-white/4"
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: i * 0.06, duration: 0.4 }}
                    >
                      <div className="relative z-10 shrink-0">
                        {isActive && (
                          <motion.div
                            className="absolute -inset-1 rounded-full bg-blue-primary/30"
                            animate={{
                              scale: [1, 1.4, 1],
                              opacity: [0.4, 0, 0.4],
                            }}
                            transition={{
                              duration: 2.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                        )}
                        <div
                          className={`relative flex h-[46px] w-[46px] items-center justify-center rounded-full border-2 text-sm font-bold transition-all duration-300 ${
                            isActive
                              ? "border-blue-primary bg-blue-primary text-white shadow-lg shadow-blue-primary/40"
                              : isPast
                                ? "border-blue-primary/60 bg-blue-primary/20 text-blue-300"
                                : "border-white/15 bg-white/5 text-white/30 group-hover:border-white/30 group-hover:text-white/50"
                          }`}
                        >
                          {isActive ? (
                            <Icon className="h-5 w-5" />
                          ) : (
                            <span>{s.number}</span>
                          )}
                        </div>
                      </div>

                      <div className="min-w-0 flex-1">
                        <span
                          className={`text-[10px] font-bold uppercase tracking-[0.15em] ${
                            isActive
                              ? "text-blue-300"
                              : isPast
                                ? "text-blue-400/40"
                                : "text-white/20"
                          }`}
                        >
                          Stage {s.number}
                        </span>
                        <p
                          className={`truncate text-sm font-semibold leading-snug transition-colors ${
                            isActive
                              ? "text-white"
                              : isPast
                                ? "text-blue-200/50"
                                : "text-white/30 group-hover:text-white/50"
                          }`}
                        >
                          {s.title}
                        </p>
                      </div>

                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="shrink-0"
                        >
                          <ArrowRight className="h-4 w-4 text-blue-primary" />
                        </motion.div>
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* RIGHT: detail card with image */}
            <div className="relative flex flex-col">
              <div className="absolute -top-12 right-0 flex gap-2">
                <button
                  onClick={goPrev}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/60 transition-all hover:border-white/30 hover:bg-white/10 hover:text-white"
                  aria-label="Previous stage"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={goNext}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/60 transition-all hover:border-white/30 hover:bg-white/10 hover:text-white"
                  aria-label="Next stage"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.98 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="h-full overflow-hidden rounded-2xl border border-white/10"
                >
                  <div className="grid h-full grid-cols-[1fr_240px]">
                    {/* Content side */}
                    <div className="relative flex flex-col p-8 lg:p-10">
                      <div className="absolute inset-0 bg-linear-to-br from-white/7 via-white/3 to-transparent" />
                      <div className="relative flex flex-1 flex-col">
                        {/* Header row */}
                        <div className="mb-4 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-primary text-base font-extrabold text-white">
                              {stage.number}
                            </span>
                            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-300/60">
                              Stage {stage.number} of {data.stages.length}
                            </span>
                          </div>
                          {stage.timeline && (
                            <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-blue-200/60">
                              <Clock className="h-3 w-3" />
                              {stage.timeline}
                            </span>
                          )}
                        </div>

                        <h3 className="text-2xl font-bold text-white lg:text-3xl">
                          {stage.title}
                        </h3>

                        <p className="mt-3 text-[15px] leading-relaxed text-blue-100/50">
                          {stage.description}
                        </p>

                        {/* What to expect bullets */}
                        {stage.bullets && (
                          <div className="mt-5">
                            <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-blue-300/40">
                              What to expect
                            </h4>
                            <ul className="space-y-2.5">
                              {stage.bullets.map((bullet) => (
                                <li key={bullet} className="flex items-start gap-2.5">
                                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-primary/70" />
                                  <span className="text-sm leading-snug text-blue-100/60">
                                    {bullet}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Bottom area */}
                        <div className="mt-auto pt-6">
                          <div className="mb-5 h-1 overflow-hidden rounded-full bg-white/10">
                            <motion.div
                              className="h-full rounded-full bg-linear-to-r from-blue-primary to-blue-vivid"
                              initial={{ width: "0%" }}
                              animate={{
                                width: `${((activeStage + 1) / data.stages.length) * 100}%`,
                              }}
                              transition={{ duration: 0.5 }}
                            />
                          </div>
                          <Button asChild variant="secondary" size="lg">
                            <Link href="/contact">
                              Start Your Free Consultation
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Image side */}
                    <div className="relative hidden md:block">
                      <Image
                        src={stageImage}
                        alt={stage.title}
                        fill
                        className="object-cover"
                        sizes="220px"
                      />
                      <div className="absolute inset-0 bg-linear-to-r from-blue-950/80 via-blue-950/40 to-transparent" />
                      <div className="absolute inset-0 bg-blue-primary/10 mix-blend-overlay" />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ============ MOBILE ============ */}
        <div className="lg:hidden">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-linear-to-r from-blue-primary to-blue-vivid"
                animate={{
                  width: `${((activeStage + 1) / data.stages.length) * 100}%`,
                }}
                transition={{ duration: 0.4 }}
              />
            </div>
            <span className="shrink-0 text-xs font-semibold text-white/40">
              {activeStage + 1}/{data.stages.length}
            </span>
          </div>

          <div className="space-y-3">
            {data.stages.map((s, i) => {
              const Icon = s.icon;
              const isActive = i === activeStage;
              const isPast = i < activeStage;

              return (
                <motion.div
                  key={s.number}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                >
                  <button
                    onClick={() => setActiveStage(isActive ? -1 : i)}
                    className={`w-full cursor-pointer overflow-hidden rounded-xl border text-left transition-all ${
                      isActive
                        ? "border-blue-primary/40 bg-white/6"
                        : "border-white/5 bg-white/2 hover:bg-white/4"
                    }`}
                  >
                    {/* Collapsed header */}
                    <div className={`flex items-center gap-4 ${isActive ? "p-5 pb-0" : "p-4"}`}>
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-bold transition-all ${
                          isActive
                            ? "bg-blue-primary text-white shadow-lg shadow-blue-primary/30"
                            : isPast
                              ? "bg-blue-primary/20 text-blue-300"
                              : "bg-white/5 text-white/30"
                        }`}
                      >
                        {isActive ? (
                          <Icon className="h-5 w-5" />
                        ) : (
                          <span>{s.number}</span>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <span
                          className={`text-[10px] font-bold uppercase tracking-[0.15em] ${
                            isActive ? "text-blue-300" : "text-white/20"
                          }`}
                        >
                          Stage {s.number}
                        </span>
                        <h3 className="truncate text-sm font-bold text-white">
                          {s.title}
                        </h3>
                      </div>
                      <ChevronRight
                        className={`h-4 w-4 shrink-0 transition-transform ${
                          isActive
                            ? "rotate-90 text-blue-primary"
                            : "text-white/20"
                        }`}
                      />
                    </div>

                    {/* Expanded content with image */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="relative mx-5 mt-4 mb-1 h-32 overflow-hidden rounded-lg">
                            <Image
                              src={stageImages[i % stageImages.length]}
                              alt={s.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 1024px) 90vw, 300px"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-blue-950/60 to-transparent" />
                          </div>
                          <div className="px-5 pb-5">
                            {s.timeline && (
                              <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-blue-200/60">
                                <Clock className="h-2.5 w-2.5" />
                                {s.timeline}
                              </span>
                            )}
                            <p className="mt-2.5 text-sm leading-relaxed text-blue-100/50">
                              {s.description}
                            </p>
                            {s.bullets && (
                              <ul className="mt-3 space-y-1.5">
                                {s.bullets.map((b) => (
                                  <li key={b} className="flex items-start gap-2">
                                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-primary/70" />
                                    <span className="text-xs leading-snug text-blue-100/50">{b}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                            <div className="mt-4">
                              <Button asChild variant="secondary" size="sm">
                                <Link href="/contact">
                                  Get Started
                                  <ArrowRight className="ml-1 h-3 w-3" />
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
