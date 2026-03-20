"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";

// ─────────────────────────────────────────────────────────────
// Stacked variant (default) — used on practice area pages
// ─────────────────────────────────────────────────────────────
function StackedAccordion({ faqs, title }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
        </div>

        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = i === openIndex;
            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-xl border transition-colors ${
                  isOpen
                    ? "border-blue-primary/30 bg-white shadow-sm"
                    : "border-gray-200 bg-white"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="flex w-full cursor-pointer items-center justify-between px-6 py-5 text-left"
                >
                  <span className="pr-4 font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-blue-primary" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-gray-100 px-6 pb-5 pt-4">
                        <p className="leading-relaxed text-gray-600">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Side-panel variant — used on the homepage
// Desktop: question list left, answer panel right (full max-w-7xl)
// Mobile: falls back to standard accordion behavior
// ─────────────────────────────────────────────────────────────
function SidePanelAccordion({ faqs, title }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = faqs[activeIndex];

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">

        {/* ── DESKTOP: two-column side-panel ── */}
        <div className="hidden lg:grid lg:grid-cols-[2fr_3fr] lg:gap-12 xl:gap-16">

          {/* Left: label + question list */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-primary">
              Got Questions?
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              Everything you need to know before taking the first step. Can&apos;t
              find your answer? Call us — it&apos;s free.
            </p>

            <nav className="mt-8 space-y-1" aria-label="FAQ questions">
              {faqs.map((faq, i) => {
                const isActive = i === activeIndex;
                return (
                  <button
                    key={faq.question}
                    onClick={() => setActiveIndex(i)}
                    className={`group flex w-full items-start gap-3 rounded-xl px-4 py-3.5 text-left transition-all duration-150 ${
                      isActive
                        ? "bg-white shadow-sm ring-1 ring-gray-200"
                        : "hover:bg-white/60"
                    }`}
                  >
                    <ChevronRight
                      className={`mt-0.5 h-4 w-4 shrink-0 transition-all duration-150 ${
                        isActive
                          ? "text-blue-primary"
                          : "text-gray-300 group-hover:text-gray-400"
                      }`}
                    />
                    <span
                      className={`text-sm leading-snug transition-colors ${
                        isActive
                          ? "font-semibold text-gray-900"
                          : "font-medium text-gray-500 group-hover:text-gray-700"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Right: answer panel */}
          <div className="flex items-start">
            <div className="sticky top-28 w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm xl:p-10"
                >
                  {/* Question number badge */}
                  <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-primary/8 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-primary">
                    Question {activeIndex + 1} of {faqs.length}
                  </span>

                  <h3 className="text-xl font-bold leading-snug text-gray-900 xl:text-2xl">
                    {active.question}
                  </h3>

                  <p className="mt-5 text-[15px] leading-relaxed text-gray-600">
                    {active.answer}
                  </p>

                  {/* Navigation row */}
                  <div className="mt-8 flex items-center gap-3 border-t border-gray-100 pt-6">
                    <button
                      onClick={() =>
                        setActiveIndex((i) => Math.max(0, i - 1))
                      }
                      disabled={activeIndex === 0}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all hover:border-blue-primary/40 hover:text-blue-primary disabled:opacity-30"
                      aria-label="Previous question"
                    >
                      <ChevronRight className="h-4 w-4 rotate-180" />
                    </button>
                    <button
                      onClick={() =>
                        setActiveIndex((i) => Math.min(faqs.length - 1, i + 1))
                      }
                      disabled={activeIndex === faqs.length - 1}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all hover:border-blue-primary/40 hover:text-blue-primary disabled:opacity-30"
                      aria-label="Next question"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                    <div className="ml-2 flex-1">
                      <div className="h-1 overflow-hidden rounded-full bg-gray-100">
                        <motion.div
                          className="h-full rounded-full bg-blue-primary"
                          animate={{
                            width: `${((activeIndex + 1) / faqs.length) * 100}%`,
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>
                    <span className="text-xs font-medium text-gray-400">
                      {activeIndex + 1}/{faqs.length}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ── MOBILE: standard accordion ── */}
        <div className="lg:hidden">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              {title}
            </h2>
          </div>
          <MobileAccordion faqs={faqs} />
        </div>

      </div>
    </section>
  );
}

function MobileAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = i === openIndex;
        return (
          <div
            key={faq.question}
            className={`overflow-hidden rounded-xl border transition-colors ${
              isOpen
                ? "border-blue-primary/30 bg-white shadow-sm"
                : "border-gray-200 bg-white"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              className="flex w-full cursor-pointer items-center justify-between px-5 py-4 text-left"
            >
              <span className="pr-4 text-sm font-semibold text-gray-900">
                {faq.question}
              </span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-gray-400 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-blue-primary" : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-gray-100 px-5 pb-4 pt-3">
                    <p className="text-sm leading-relaxed text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Public export — variant="side" for homepage, default for others
// ─────────────────────────────────────────────────────────────
export function FAQAccordion({
  faqs,
  title = "Frequently Asked Questions",
  variant = "stack",
}) {
  if (!faqs?.length) return null;

  if (variant === "side") {
    return <SidePanelAccordion faqs={faqs} title={title} />;
  }

  return <StackedAccordion faqs={faqs} title={title} />;
}
