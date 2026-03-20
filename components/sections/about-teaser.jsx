"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function AboutTeaser() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/about-team.jpg"
                alt="The Babin Law team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/30 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-xl bg-gold px-6 py-3 shadow-lg">
              <p className="text-2xl font-extrabold text-white">75+</p>
              <p className="text-xs font-semibold text-white/80">
                Years Combined Experience
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-bold uppercase tracking-widest text-blue-primary">
              About Babin Law
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Pioneering Individuals Over Corporations
            </h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              Babin Law LLC, based in Columbus, Ohio, with a reach extending
              nationwide, is a top-rated trial law firm dedicated to representing
              real people — not corporations. Our seasoned attorneys champion the
              cause of individuals who have suffered due to corporate negligence or
              wrongdoing.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              With a combined experience of over 75 years, our personal injury
              attorneys possess a proven track record of confronting and defeating
              formidable corporate opponents. We are driven by a philosophy that
              lawsuits are won through meticulous hard work, unwavering attention to
              details, and a strong ethical foundation.
            </p>
            <div className="mt-8 flex gap-4">
              <Button asChild>
                <Link href="/team">
                  Meet Our Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/about">Our Story</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
