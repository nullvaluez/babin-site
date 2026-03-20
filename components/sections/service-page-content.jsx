import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Phone,
  ArrowRight,
  Award,
  ShieldCheck,
  Scale,
  Clock,
  Users,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceSidebar } from "@/components/sections/service-sidebar";
import { CTABanner } from "@/components/sections/cta-banner";
import { primaryPhone, primaryPhoneTel } from "@/lib/data/offices";
import { getServiceImages } from "@/lib/data/service-images";
import {
  WhatToDoSteps,
  CaseValueFactors,
  ServiceFAQs,
} from "@/components/sections/service-content-extras";

const trustBadges = [
  { icon: Award, label: "75+ Years Combined Experience" },
  { icon: ShieldCheck, label: "No Fee Unless We Win" },
  { icon: Scale, label: "Proven Trial Record" },
];

const firmStats = [
  { value: "75+", label: "Years Combined Experience", icon: Clock },
  { value: "1000s", label: "Cases Successfully Resolved", icon: Users },
  { value: "100%", label: "Contingency — No Upfront Fees", icon: ShieldCheck },
  { value: "5★", label: "Client-Rated Representation", icon: Star },
];

export function ServicePageContent({
  service,
  content,
  category,
  relatedServices,
  categorySlug,
}) {
  const images = getServiceImages(categorySlug, service.slug);

  return (
    <>
      <ServiceHero
        service={service}
        content={content}
        category={category}
        categorySlug={categorySlug}
        heroImage={images.hero}
      />

      <TrustBadgesStrip />

      <section className="bg-white py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
            <article>
              <ContentSections
                content={content}
                service={service}
                featureImage={images.feature}
              />
            </article>

            <ServiceSidebar
              relatedServices={relatedServices}
              categorySlug={categorySlug}
            />
          </div>
        </div>
      </section>

      <FirmStatsBanner />

      <RelatedServicesSection
        services={relatedServices}
        categorySlug={categorySlug}
      />

      <CTABanner />
    </>
  );
}

function ServiceHero({ service, content, category, categorySlug, heroImage }) {
  return (
    <section className="relative overflow-hidden bg-blue-950">
      <Image
        src={heroImage.src}
        alt={heroImage.alt}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-linear-to-r from-blue-950/95 via-blue-950/80 to-blue-950/50" />
      <div className="absolute inset-0 bg-linear-to-t from-blue-950/60 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-14 lg:px-6 lg:pb-28 lg:pt-20">
        <nav className="mb-6 flex items-center gap-2 text-sm text-blue-200/60">
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <span>/</span>
          <Link
            href={`/${categorySlug}`}
            className="transition-colors hover:text-white"
          >
            {category.title}
          </Link>
          <span>/</span>
          <span className="text-blue-100/80">{service.title}</span>
        </nav>

        <Link
          href={`/${categorySlug}`}
          className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-blue-300/70 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          All {category.title} Services
        </Link>

        <div className="max-w-3xl">
          <div className="mb-4 h-1 w-16 rounded-full bg-blue-primary" />
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {service.title}
          </h1>

          {content?.heroIntro && (
            <p className="mt-6 text-lg leading-relaxed text-blue-100/80 lg:text-xl">
              {content.heroIntro}
            </p>
          )}
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button
            size="lg"
            asChild
            className="text-base font-semibold shadow-lg shadow-blue-primary/25"
          >
            <Link href="/contact">Free Consultation</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-white/30 bg-white/5 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/15 hover:text-white"
          >
            <a href={`tel:${primaryPhoneTel}`}>
              <Phone className="mr-2 h-4 w-4" />
              Call {primaryPhone}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function TrustBadgesStrip() {
  return (
    <section className="border-b border-gray-200 bg-white py-5">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-4 lg:px-6">
        {trustBadges.map((b) => {
          const Icon = b.icon;
          return (
            <div key={b.label} className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50">
                <Icon className="h-4 w-4 text-blue-primary" />
              </div>
              <span className="text-sm font-semibold text-gray-700">
                {b.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ContentSections({ content, service, featureImage }) {
  const sections = content?.sections || [];

  if (!sections.length) {
    return (
      <div>
        <p className="text-lg leading-relaxed text-gray-600">
          {service.shortDescription}
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-gray-600">
          If you or a loved one has been affected, contact Babin Law today for a
          free, confidential consultation. Our experienced attorneys are ready to
          evaluate your case and fight for the compensation you deserve.
        </p>
        <InlineFeatureImage image={featureImage} />
        <InlineCTA />
      </div>
    );
  }

  return (
    <>
      {sections.map((section, i) => (
        <div key={i}>
          <div className={i > 0 ? "mt-12 border-t border-gray-100 pt-12" : ""}>
            <div className="flex items-start gap-4">
              <div className="mt-1.5 hidden h-8 w-1 shrink-0 rounded-full bg-blue-primary lg:block" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 lg:text-3xl">
                  {section.heading}
                </h2>
                {section.body.split("\n\n").map((paragraph, j) => (
                  <p
                    key={j}
                    className={`mt-4 leading-relaxed text-gray-600 ${
                      i === 0 && j === 0
                        ? "text-lg lg:text-[19px]"
                        : "text-[17px]"
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {i === 0 && <InlineFeatureImage image={featureImage} />}

          {i === 1 && <StatCalloutBox />}
        </div>
      ))}

      <WhatToDoSteps whatToDo={content?.whatToDo} />

      <CaseValueFactors caseValue={content?.caseValue} />

      <ServiceFAQs
        faqs={content?.faqs}
        serviceTitle={service.title}
      />

      <InlineCTA />
    </>
  );
}

function InlineFeatureImage({ image }) {
  return (
    <div className="my-10 overflow-hidden rounded-2xl">
      <div className="relative aspect-video w-full">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 700px"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="text-xs font-medium text-white/80">{image.alt}</p>
        </div>
      </div>
    </div>
  );
}

function StatCalloutBox() {
  return (
    <div className="my-10 rounded-2xl bg-linear-to-br from-blue-950 to-blue-dark p-8 lg:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <p className="text-4xl font-extrabold text-white">75+</p>
          <p className="mt-1 text-sm font-medium text-blue-200/70">
            Years of combined legal experience
          </p>
        </div>
        <div>
          <p className="text-4xl font-extrabold text-gold">$0</p>
          <p className="mt-1 text-sm font-medium text-blue-200/70">
            Upfront cost to you — we work on contingency
          </p>
        </div>
      </div>
      <div className="mt-6 border-t border-white/10 pt-6">
        <p className="text-sm leading-relaxed text-blue-100/60">
          Our attorneys have the trial experience and resources to take on
          insurance companies and corporate defendants. You pay nothing unless we
          win your case.
        </p>
      </div>
    </div>
  );
}

function InlineCTA() {
  return (
    <div className="mt-12 overflow-hidden rounded-2xl border border-blue-primary/20 bg-linear-to-br from-blue-50 via-white to-blue-50/50 p-8 shadow-sm">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900">
            Ready to Discuss Your Case?
          </h3>
          <p className="mt-1.5 text-sm text-gray-600">
            Free consultations. No fees unless we win.
          </p>
        </div>
        <Button asChild size="lg" className="shrink-0 shadow-md">
          <Link href="/contact">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

function FirmStatsBanner() {
  return (
    <section className="bg-blue-950 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">
            Why Clients Trust Us
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-white lg:text-4xl">
            Results That Speak for Themselves
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {firmStats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <Icon className="h-5 w-5 text-gold" />
                </div>
                <p className="text-3xl font-extrabold text-white lg:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-blue-200/60">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function RelatedServicesSection({ services, categorySlug }) {
  if (!services?.length) return null;

  return (
    <section className="bg-gray-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-blue-primary">
            Related Practice Areas
          </p>
          <h2 className="mt-2 text-2xl font-bold text-gray-900 lg:text-3xl">
            You May Also Need Help With
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((s) => {
            const relatedImages = getServiceImages(categorySlug, s.slug);
            return (
              <Link
                key={s.slug}
                href={`/${categorySlug}/${s.slug}`}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:border-blue-primary/30 hover:shadow-lg"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={relatedImages.hero.src}
                    alt={`${s.title} legal services`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-blue-950/70 to-blue-950/10" />
                  <div className="absolute bottom-4 left-4">
                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                      {s.title}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-primary">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {s.shortDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-primary">
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
