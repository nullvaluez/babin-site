"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Users, Percent, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: 75,
    suffix: "+",
    label: "Years Combined Experience",
  },
  {
    icon: Users,
    value: 0,
    suffix: "",
    label: "Clients Represented",
    displayValue: "Thousands",
  },
  {
    icon: Percent,
    value: 40,
    suffix: "%",
    label: "Of All Hotel Trafficking Cases",
  },
  {
    icon: ShieldCheck,
    value: 0,
    suffix: "",
    label: "No Fees Unless We Win",
    displayValue: "$0 Upfront",
  },
];

function AnimatedNumber({ value, suffix, displayValue }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      if (displayValue) {
        setCount(value);
        return;
      }
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [inView, value, displayValue]);

  if (displayValue) {
    return (
      <span ref={ref} className="text-4xl font-extrabold text-blue-primary sm:text-5xl">
        {displayValue}
      </span>
    );
  }

  return (
    <span ref={ref} className="text-4xl font-extrabold text-blue-primary sm:text-5xl">
      {count}
      {suffix}
    </span>
  );
}

export function StatCounters() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-20">
      {/* Subtle top border glow from dark section above */}
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-blue-primary/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
                  <Icon className="h-6 w-6 text-blue-primary" />
                </div>
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  displayValue={stat.displayValue}
                />
                <p className="mt-2 text-sm font-medium text-gray-500">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
