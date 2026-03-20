"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Star, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/data/testimonials";

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-gold text-gold" : "text-gray-200"}`}
        />
      ))}
    </div>
  );
}

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const visibleCount = 3;
  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  const next = useCallback(() => {
    setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrent((c) => (c <= 0 ? maxIndex : c - 1));
  }, [maxIndex]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const visible = testimonials.slice(current, current + visibleCount);

  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              Over the years we&apos;ve helped thousands of clients. This is what
              they have to say about us.
            </p>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border bg-white text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-primary"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border bg-white text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-primary"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((t) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col rounded-xl border bg-white p-6 shadow-sm"
              >
                <StarRating rating={t.rating} />
                <h3 className="mt-3 text-base font-bold text-gray-900">
                  &ldquo;{t.headline}&rdquo;
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                  {t.quote}
                </p>
                <p className="mt-4 text-sm font-semibold text-blue-dark">
                  — {t.name}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-1 text-sm font-semibold text-blue-primary hover:underline"
          >
            View All Reviews
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
