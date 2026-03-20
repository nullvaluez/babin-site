import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { offices } from "@/lib/data/offices";

// Practice areas available are the same statewide — shown per city for keyword density
const cityDetails = {
  columbus: {
    tagline: "Our Headquarters",
    description:
      "Home base for Babin Law. Columbus-area clients receive direct access to our full trial team — the same attorneys who've set national precedents in human trafficking and mass tort litigation.",
    highlight: "HQ Office",
  },
  cincinnati: {
    tagline: "Serving Southwest Ohio",
    description:
      "Cincinnati residents and families can access the full Babin Law team for personal injury, mass tort, sexual abuse, and human trafficking cases. We fight for southern Ohio just as hard as we fight in Columbus.",
    highlight: "Southwest OH",
  },
  dayton: {
    tagline: "Serving the Miami Valley",
    description:
      "Accident victims and injury survivors throughout Dayton and the surrounding Miami Valley region have a fierce advocate in Babin Law. No fees unless we win.",
    highlight: "Miami Valley",
  },
  cleveland: {
    tagline: "Serving Northeast Ohio",
    description:
      "From car accidents to defective drug claims, Cleveland-area clients can rely on Babin Law's experienced trial attorneys to take on insurance companies and corporations on their behalf.",
    highlight: "Northeast OH",
  },
};

export function ServiceAreas() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {/* Section header */}
        <div className="mb-12 grid items-end gap-6 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-primary">
              Where We Serve
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Fighting for Clients Across Ohio &amp; Beyond
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-gray-600">
              With offices in four Ohio cities, Babin Law represents injury
              victims throughout Columbus, Cincinnati, Dayton, and Cleveland.
              Wherever you are in Ohio, we come to you — and we never stop
              fighting.
            </p>
          </div>
          <Link
            href="/contact"
            className="hidden items-center gap-2 text-sm font-semibold text-blue-primary transition-colors hover:text-blue-dark lg:flex"
          >
            Find Your Nearest Office
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* City cards grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {offices.map((office) => {
            const details = cityDetails[office.slug] ?? {};
            return (
              <Link
                key={office.slug}
                href={`/serving/${office.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-primary/30 hover:bg-blue-50/50 hover:shadow-lg"
              >
                {/* HQ badge */}
                {office.isHQ && (
                  <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-blue-primary/10 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-blue-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-primary" />
                    Headquarters
                  </span>
                )}

                {/* Icon + city */}
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-primary/10">
                    <MapPin className="h-4 w-4 text-blue-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{office.city}</p>
                    <p className="text-xs text-gray-400">{office.state}</p>
                  </div>
                </div>

                {/* Tagline */}
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-primary/70">
                  {details.tagline}
                </p>

                {/* Description */}
                <p className="flex-1 text-sm leading-relaxed text-gray-600">
                  {details.description}
                </p>

                {/* Address if present */}
                {office.address && (
                  <p className="mt-4 text-xs text-gray-400">{office.address}</p>
                )}

                {/* Hover arrow */}
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-blue-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  Learn More <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center lg:hidden">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-primary"
          >
            Find Your Nearest Office
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
