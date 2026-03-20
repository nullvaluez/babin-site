import Image from "next/image";
import {
  Phone, Mail, MapPin, Clock, ExternalLink,
  Shield, Award, Scale, Users, ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConsultationForm } from "@/components/forms/consultation-form";
import { offices, primaryPhone, primaryPhoneTel } from "@/lib/data/offices";
import {
  generatePageMetadata,
  generateBreadcrumbJsonLd,
  generateLocalBusinessJsonLd,
} from "@/lib/seo/metadata";

export const metadata = generatePageMetadata({
  title: "Contact Us — Free Case Evaluation",
  description:
    "Contact Babin Law, LLC for a free, confidential case evaluation. Offices in Columbus, Cincinnati, Dayton, and Cleveland. Call (614) 761-8800 or fill out our online form.",
  path: "/contact",
});

const hqOffice = offices.find((o) => o.isHQ);

const trustSignals = [
  { icon: Shield, label: "No Win, No Fee — Ever" },
  { icon: Award, label: "75+ Years Combined" },
  { icon: MapPin, label: "4 Ohio Offices" },
  { icon: Scale, label: "Nationwide Reach" },
];

export default function ContactPage() {
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Home", href: "/" },
    { name: "Contact Us" },
  ]);

  const localBusinessJsonLd = offices
    .filter((o) => o.address)
    .map((o) => generateLocalBusinessJsonLd(o));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {localBusinessJsonLd.map((ld, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      ))}

      {/* ── Hero with Background Image ── */}
      <section className="relative overflow-hidden bg-blue-950 py-20 lg:py-28">
        <Image
          src="/images/hero-columbus.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-blue-950/95 via-blue-950/85 to-blue-950/60" />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-6">
          <span className="mb-4 inline-block rounded-full border border-blue-primary/30 bg-blue-primary/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
            Contact Us
          </span>
          <h1 className="mt-2 max-w-2xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let&apos;s Fight for Your Justice
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-blue-100/70">
            Every case starts with a conversation. Reach out for a free,
            confidential consultation — our attorneys are ready to evaluate
            your claim and advise you on the best path forward.
          </p>

          {/* Contact quick-links */}
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              href={`tel:${primaryPhoneTel}`}
              className="flex items-center gap-2 text-lg font-bold text-gold transition-colors hover:text-yellow-300"
            >
              <Phone className="h-5 w-5" />
              {primaryPhone}
            </a>
            <a
              href="mailto:info@babin.lawyer"
              className="flex items-center gap-2 text-sm font-medium text-blue-100/60 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4" />
              info@babin.lawyer
            </a>
            <div className="flex items-center gap-2 text-sm text-blue-100/40">
              <Clock className="h-4 w-4" />
              Mon – Fri, 9 AM – 5 PM
            </div>
          </div>

          {/* Trust pills */}
          <div className="mt-8 flex flex-wrap gap-2.5">
            {trustSignals.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm"
              >
                <Icon className="h-3.5 w-3.5 text-blue-300/70" />
                <span className="text-xs font-medium text-blue-100/75">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form Section — Elevated Card Layout ── */}
      <section className="relative bg-gray-50 py-16 lg:py-24">
        <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-linear-to-r from-transparent via-blue-primary/20 to-transparent" />

        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:gap-14">
            {/* Main Form */}
            <div>
              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-primary">
                  Free Case Evaluation
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Tell Us About Your Case
                </h2>
                <p className="mt-3 max-w-xl text-gray-600">
                  Fill out the form below with as much detail as possible. A
                  member of our legal team will review your information and
                  respond within 24 hours.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
                <ConsultationForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              {/* Why Contact Us */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">
                  Why Contact Babin Law
                </h3>
                <ul className="mt-5 space-y-4">
                  {[
                    {
                      icon: ShieldCheck,
                      title: "100% Free Consultation",
                      desc: "No cost, no obligation to evaluate your case.",
                    },
                    {
                      icon: Scale,
                      title: "No Fee Unless We Win",
                      desc: "You pay nothing upfront. Period.",
                    },
                    {
                      icon: Users,
                      title: "Dedicated Legal Team",
                      desc: "Your case is assigned to a team, not a queue.",
                    },
                    {
                      icon: Clock,
                      title: "24-Hour Response",
                      desc: "We respond to all inquiries within one business day.",
                    },
                  ].map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-primary/10">
                        <item.icon className="h-4 w-4 text-blue-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-500">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct Contact */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">
                  Speak With Us Directly
                </h3>
                <div className="mt-5 space-y-4">
                  <a
                    href={`tel:${primaryPhoneTel}`}
                    className="flex items-center gap-3 transition-colors hover:text-blue-primary"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10">
                      <Phone className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-base font-bold text-gray-900">
                        {primaryPhone}
                      </p>
                      <p className="text-xs text-gray-500">
                        Call for immediate assistance
                      </p>
                    </div>
                  </a>
                  <a
                    href="mailto:info@babin.lawyer"
                    className="flex items-center gap-3 transition-colors hover:text-blue-primary"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-primary/10">
                      <Mail className="h-5 w-5 text-blue-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        info@babin.lawyer
                      </p>
                      <p className="text-xs text-gray-500">
                        Email us anytime
                      </p>
                    </div>
                  </a>
                </div>

                <div className="mt-5 border-t border-gray-100 pt-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-primary/10">
                      <Clock className="h-5 w-5 text-blue-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Office Hours
                      </p>
                      <p className="text-xs text-gray-500">
                        Mon – Fri: 9:00 AM – 5:00 PM
                      </p>
                      <p className="text-xs text-gray-500">
                        Weekends &amp; evenings by appointment
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* HQ Office Card */}
              {hqOffice && (
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">
                    Main Office
                  </h3>
                  <div className="mt-4 flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10">
                      <MapPin className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {hqOffice.city}, {hqOffice.state}
                        <span className="ml-2 rounded-full bg-gold/10 px-2 py-0.5 text-[0.6rem] font-bold uppercase text-gold">
                          HQ
                        </span>
                      </p>
                      {hqOffice.address && (
                        <p className="mt-1 text-sm text-gray-600">
                          {hqOffice.address}
                        </p>
                      )}
                      <p className="text-sm text-gray-600">
                        {hqOffice.cityState}
                      </p>
                      {hqOffice.mapUrl && (
                        <a
                          href={hqOffice.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-blue-primary hover:underline"
                        >
                          Get Directions
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Google Maps Embed ── */}
      <section className="border-y border-gray-200">
        <iframe
          title="Babin Law Columbus Office — 10 W Broad St, Suite 900"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.53!2d-83.0034!3d39.9612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88388f3b1b1b1b1b%3A0x1234567890abcdef!2s10%20W%20Broad%20St%20%23900%2C%20Columbus%2C%20OH%2043215!5e0!3m2!1sen!2sus!4v1700000000000"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        />
      </section>

      {/* ── All Office Locations ── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="mb-14 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-primary">
              Serving Ohio &amp; Beyond
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Office Locations
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-600">
              With offices across Ohio and a nationwide practice, we&apos;re
              ready to fight for you — no matter where you are.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {offices.map((office) => (
              <div
                key={office.slug}
                className="group rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-all hover:border-blue-primary/20 hover:bg-white hover:shadow-lg hover:shadow-blue-primary/5"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-primary/10 transition-colors group-hover:bg-blue-primary/15">
                    <MapPin className="h-5 w-5 text-blue-primary" />
                  </div>
                  {office.isHQ && (
                    <span className="rounded-full bg-gold/10 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-wider text-gold">
                      Headquarters
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {office.city}, {office.state}
                </h3>
                {office.address && (
                  <p className="mt-1 text-sm text-gray-600">{office.address}</p>
                )}
                <p className="text-sm text-gray-500">{office.cityState}</p>

                <div className="mt-4 flex items-center gap-4 border-t border-gray-100 pt-4">
                  <a
                    href={`tel:${office.phoneTel}`}
                    className="flex items-center gap-1.5 text-sm font-semibold text-blue-primary transition-colors hover:text-blue-vivid"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    {office.phone}
                  </a>
                  {office.mapUrl && (
                    <a
                      href={office.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs font-medium text-gray-400 transition-colors hover:text-blue-primary"
                    >
                      Directions
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Urgency CTA ── */}
      <section className="relative overflow-hidden bg-blue-950 py-16 lg:py-24">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-blue-950/95 via-blue-950/90 to-blue-950/70" />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-linear-to-r from-transparent via-gold/30 to-transparent" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center lg:px-6">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/8 px-4 py-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-gold" />
            <span className="text-xs font-bold uppercase tracking-widest text-gold">
              Time-Sensitive
            </span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Don&apos;t Wait — Your Case Has a Deadline
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-blue-100/65">
            Ohio&apos;s statute of limitations restricts the time you have to
            file a claim. The sooner you contact us, the sooner we can preserve
            evidence and build the strongest case possible.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              asChild
              className="bg-white text-base font-bold text-blue-950 shadow-lg shadow-blue-primary/20 hover:bg-blue-50"
            >
              <a href={`tel:${primaryPhoneTel}`}>
                <Phone className="mr-2 h-4 w-4" />
                Call {primaryPhone} Now
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white/20 bg-white/5 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/10 hover:text-white"
            >
              <a href="#top">
                Back to Form
              </a>
            </Button>
          </div>

          <div className="mx-auto mt-10 flex max-w-lg flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[
              { value: "75+", label: "Years Experience" },
              { value: "40%", label: "Hotel Trafficking Cases" },
              { value: "$0", label: "Upfront Cost" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-extrabold text-white">
                  {stat.value}
                </p>
                <p className="text-[0.65rem] font-medium text-blue-100/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
