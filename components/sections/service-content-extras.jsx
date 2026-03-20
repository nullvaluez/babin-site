"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, AlertTriangle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function WhatToDoSteps({ whatToDo }) {
  if (!whatToDo?.steps?.length) return null;

  return (
    <div className="mt-14 border-t border-gray-100 pt-14">
      <div className="flex items-start gap-4">
        <div className="mt-1.5 hidden h-8 w-1 shrink-0 rounded-full bg-blue-primary lg:block" />
        <div className="w-full">
          <h2 className="text-2xl font-bold text-gray-900 lg:text-3xl">
            {whatToDo.heading}
          </h2>
          {whatToDo.intro && (
            <p className="mt-4 text-[17px] leading-relaxed text-gray-600">
              {whatToDo.intro}
            </p>
          )}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {whatToDo.steps.map((step, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-xl border border-gray-200 bg-gray-50 p-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-primary text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function CaseValueFactors({ caseValue }) {
  if (!caseValue?.factors?.length) return null;

  return (
    <div className="mt-14 border-t border-gray-100 pt-14">
      <div className="flex items-start gap-4">
        <div className="mt-1.5 hidden h-8 w-1 shrink-0 rounded-full bg-blue-primary lg:block" />
        <div className="w-full">
          <h2 className="text-2xl font-bold text-gray-900 lg:text-3xl">
            {caseValue.heading}
          </h2>
          {caseValue.intro && (
            <p className="mt-4 text-[17px] leading-relaxed text-gray-600">
              {caseValue.intro}
            </p>
          )}
          <div className="mt-8 space-y-4">
            {caseValue.factors.map((factor, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 bg-white p-5"
              >
                <h3 className="font-semibold text-gray-900">{factor.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                  {factor.description}
                </p>
              </div>
            ))}
          </div>
          {caseValue.note && (
            <div className="mt-6 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-5">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
              <p className="text-sm leading-relaxed text-amber-800">
                {caseValue.note}
              </p>
            </div>
          )}
          {caseValue.body && (
            <div className="mt-6">
              {caseValue.body.split("\n\n").map((p, j) => (
                <p
                  key={j}
                  className="mt-4 text-[17px] leading-relaxed text-gray-600"
                >
                  {p}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function ServiceFAQs({ faqs, serviceTitle }) {
  const [openIndex, setOpenIndex] = useState(-1);

  if (!faqs?.length) return null;

  return (
    <div className="mt-14 border-t border-gray-100 pt-14">
      <div className="flex items-start gap-4">
        <div className="mt-1.5 hidden h-8 w-1 shrink-0 rounded-full bg-blue-primary lg:block" />
        <div className="w-full">
          <h2 className="text-2xl font-bold text-gray-900 lg:text-3xl">
            Frequently Asked Questions About {serviceTitle}
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-gray-600">
            Get answers to the questions our Columbus attorneys hear most from
            clients in {serviceTitle.toLowerCase()} cases.
          </p>
          <div className="mt-8 space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = i === openIndex;
              return (
                <div
                  key={i}
                  className={`overflow-hidden rounded-xl border transition-colors ${
                    isOpen
                      ? "border-blue-primary/30 bg-white shadow-sm"
                      : "border-gray-200 bg-gray-50"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="flex w-full cursor-pointer items-center justify-between px-5 py-4 text-left"
                  >
                    <span className="pr-4 text-base font-semibold text-gray-900">
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
                        <div className="border-t border-gray-100 px-5 pb-5 pt-4">
                          {faq.answer.split("\n\n").map((p, j) => (
                            <p
                              key={j}
                              className={`leading-relaxed text-gray-600 ${j > 0 ? "mt-3" : ""}`}
                            >
                              {p}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
          <div className="mt-8 rounded-xl bg-blue-50 p-6">
            <p className="text-sm font-semibold text-gray-900">
              Have a question not answered here?
            </p>
            <p className="mt-1 text-sm text-gray-600">
              Every case is unique. Our attorneys can answer your specific
              questions during a free, confidential consultation.
            </p>
            <Button asChild size="default" className="mt-4">
              <Link href="/contact">
                Ask Us Directly
                <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
