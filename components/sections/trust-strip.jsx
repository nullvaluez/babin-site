"use client";

import { motion } from "framer-motion";

const mediaLogos = [
  { name: "The New Yorker", abbr: "THE NEW YORKER" },
  { name: "ABC 6 News", abbr: "ABC 6" },
  { name: "Columbus Dispatch", abbr: "COLUMBUS DISPATCH" },
  { name: "Court TV", abbr: "COURT TV" },
  { name: "Fox News", abbr: "FOX NEWS" },
];

export function TrustStrip() {
  return (
    <section className="border-b bg-gray-50 py-6">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-gray-400">
          As Featured In
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {mediaLogos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="text-sm font-bold tracking-wider text-gray-300 transition-colors hover:text-gray-500"
            >
              {logo.abbr}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
