import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { primaryPhone, primaryPhoneTel } from "@/lib/data/offices";

export function CategoryIntroSection({
  heading,
  paragraphs,
  categoryImage,
  categorySlug,
}) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-4 h-1 w-16 rounded-full bg-blue-primary" />
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {heading}
            </h2>
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className={`leading-relaxed text-gray-600 ${
                  i === 0 ? "mt-6 text-lg" : "mt-4 text-[17px]"
                }`}
              >
                {p}
              </p>
            ))}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="font-semibold">
                <Link href="/contact">Free Consultation</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="font-semibold">
                <a href={`tel:${primaryPhoneTel}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  {primaryPhone}
                </a>
              </Button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl">
            <div className="relative aspect-4/3">
              <Image
                src={categoryImage}
                alt={`Babin Law ${heading}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-blue-950/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeaturedServicesSection({
  featuredServices,
  categorySlug,
  title = "Featured Practice Areas",
}) {
  if (!featuredServices?.length) return null;

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-blue-primary">
            {title}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How We Can Help
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredServices.map((service, i) => (
            <Link
              key={service.slug}
              href={`/${categorySlug}/${service.slug}`}
              className={`group relative overflow-hidden rounded-2xl ${
                i === 0 ? "md:col-span-2 md:row-span-1" : ""
              }`}
            >
              <div
                className={`relative w-full overflow-hidden ${
                  i === 0 ? "h-72 md:h-80" : "h-64"
                }`}
              >
                <Image
                  src={service.heroImage.src}
                  alt={service.heroImage.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes={i === 0 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                />
                <div className="absolute inset-0 bg-linear-to-t from-blue-950/90 via-blue-950/40 to-blue-950/10 transition-colors group-hover:from-blue-950/95" />

                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <div className="flex items-center gap-2">
                    {service.icon && (
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 backdrop-blur-sm">
                        <service.icon className="h-4.5 w-4.5 text-white" />
                      </div>
                    )}
                    <h3
                      className={`font-bold text-white ${
                        i === 0 ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
                    {service.shortDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MidSectionCTA() {
  return (
    <section className="bg-blue-primary py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row lg:px-6">
        <div className="text-center sm:text-left">
          <p className="text-xl font-bold text-white">
            Not sure which service fits your situation?
          </p>
          <p className="mt-1 text-sm text-blue-100/80">
            Our team will evaluate your case at no cost and point you in the
            right direction.
          </p>
        </div>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="shrink-0 border-white/30 bg-white/10 font-semibold text-white hover:bg-white hover:text-blue-primary"
        >
          <Link href="/contact">
            Free Case Review
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

export function GroupedServicesSection({
  serviceGroups,
  allServices,
  categorySlug,
}) {
  if (!serviceGroups?.length) return null;

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            All Practice Areas
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-gray-600">
            Explore our full range of services. Every case gets the same level
            of dedication and expertise.
          </p>
        </div>

        <div className="space-y-16">
          {serviceGroups.map((group, gi) => {
            const groupServices = group.slugs
              .map((slug) => allServices.find((s) => s.slug === slug))
              .filter(Boolean);

            if (!groupServices.length) return null;

            return (
              <div key={gi}>
                <div className="mb-6 border-l-4 border-blue-primary pl-5">
                  <h3 className="text-xl font-bold text-gray-900">
                    {group.heading}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {group.description}
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {groupServices.map((s) => {
                    const Icon = s.icon;
                    return (
                      <Link
                        key={s.slug}
                        href={`/${categorySlug}/${s.slug}`}
                        className="group flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-blue-primary/30 hover:shadow-md"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-primary/10 transition-colors group-hover:bg-blue-primary group-hover:text-white">
                          <Icon className="h-5 w-5 text-blue-primary group-hover:text-white" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-semibold text-gray-900 group-hover:text-blue-primary">
                            {s.title}
                          </h4>
                          <p className="mt-1 line-clamp-2 text-sm text-gray-500">
                            {s.shortDescription}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
