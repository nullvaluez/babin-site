"use client";

import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConsultationForm } from "@/components/forms/consultation-form";
import { primaryPhone, primaryPhoneTel } from "@/lib/data/offices";

export function ServiceSidebar({ relatedServices = [], categorySlug }) {
  return (
    <aside className="space-y-6">
      {/* Consultation form card */}
      <div className="sticky top-24 space-y-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-1 text-lg font-bold text-gray-900">
            Free Case Evaluation
          </h3>
          <p className="mb-4 text-sm text-gray-500">
            Tell us about your situation. Consultations are always free and
            confidential.
          </p>
          <ConsultationForm compact />
        </div>

        {/* Phone CTA */}
        <div className="rounded-2xl border border-blue-primary/20 bg-blue-50 p-6 text-center">
          <p className="mb-2 text-sm font-medium text-gray-700">
            Prefer to talk?
          </p>
          <Button asChild variant="default" size="lg" className="w-full">
            <a href={`tel:${primaryPhoneTel}`}>
              <Phone className="mr-2 h-4 w-4" />
              Call {primaryPhone}
            </a>
          </Button>
          <p className="mt-2 text-xs text-gray-500">
            Available Mon–Fri, 9 AM – 5 PM
          </p>
        </div>

        {/* Related services links */}
        {relatedServices.length > 0 && (
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-500">
              Related Services
            </h3>
            <nav className="space-y-2">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${categorySlug}/${s.slug}`}
                  className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-primary"
                >
                  <span>{s.title}</span>
                  <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </aside>
  );
}
