import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { practiceAreaCategories } from "@/lib/data/practice-areas";
import { CTABanner } from "@/components/sections/cta-banner";
import { generatePageMetadata, generateBreadcrumbJsonLd } from "@/lib/seo/metadata";

export const metadata = generatePageMetadata({
  title: "Practice Areas | Babin Law, LLC",
  description:
    "Babin Law represents clients in personal injury, mass tort, sexual abuse, and human trafficking cases across Ohio. Explore our practice areas.",
  path: "/practice-areas",
});

export default function PracticeAreasPage() {
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Home", href: "/" },
    { name: "Practice Areas" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-blue-950 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-6">
          <span className="mb-4 inline-block rounded-full border border-blue-primary/30 bg-blue-primary/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
            How We Help
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Practice Areas
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-blue-100/60">
            From catastrophic personal injuries to groundbreaking human
            trafficking litigation, Babin Law fights for justice across four
            core practice areas.
          </p>
        </div>
      </section>

      {/* Category cards */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {practiceAreaCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.slug}
                  href={`/${cat.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-primary text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h2 className="text-2xl font-bold text-white">
                        {cat.title}
                      </h2>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600">{cat.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-primary">
                      View Practice Area
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Other services */}
          <div className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-8 lg:p-10">
            <h2 className="text-2xl font-bold text-gray-900">
              Other Services
            </h2>
            <p className="mt-2 text-gray-600">
              We also represent clients in class action and employment law
              matters.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Link
                href="/class-actions"
                className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-blue-primary/30 hover:shadow-sm"
              >
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Class Action Lawsuits
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Strength in numbers against corporate wrongdoing
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-primary" />
              </Link>
              <Link
                href="/unpaid-wages"
                className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-blue-primary/30 hover:shadow-sm"
              >
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Unpaid Wages
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Fighting for the compensation you earned
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-primary" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
