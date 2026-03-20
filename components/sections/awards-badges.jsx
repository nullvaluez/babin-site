"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

const awards = [
  {
    name: "Super Lawyers",
    detail: "Rising Stars",
    year: "2023–2024",
  },
  {
    name: "Nation's Trial Lawyers",
    detail: "Top 40 Under 40",
    year: "Multiple Years",
  },
  {
    name: "Ohio State Bar Association",
    detail: "Member in Good Standing",
    year: null,
  },
  {
    name: "Ohio Association for Justice",
    detail: "Member",
    year: null,
  },
  {
    name: "American Association for Justice",
    detail: "AAJ Member",
    year: null,
  },
  {
    name: "Federal Bar Association",
    detail: "Member",
    year: null,
  },
];

export function AwardsBadges() {
  return (
    <section className="border-y border-gray-100 bg-gray-50 py-14 lg:py-18">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
            Recognized & Trusted
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Awards, Memberships &amp; Credentials
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-gray-500">
            Our attorneys hold the highest professional recognitions in Ohio
            civil litigation — because our clients deserve representation that
            has earned its reputation.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {awards.map((award, i) => (
            <motion.div
              key={award.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.45 }}
              className="flex flex-col items-center rounded-2xl border border-gray-200 bg-white px-4 py-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-gold/10">
                <BadgeCheck className="h-5 w-5 text-gold" />
              </div>
              <p className="text-sm font-bold leading-snug text-gray-900">
                {award.name}
              </p>
              <p className="mt-1 text-xs text-gray-500">{award.detail}</p>
              {award.year && (
                <p className="mt-1 text-[0.65rem] font-semibold text-blue-primary/70">
                  {award.year}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
