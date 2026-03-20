import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ServiceGrid({ services, categorySlug, title = "Our Services" }) {
  if (!services?.length) return null;

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.slug}
                href={`/${categorySlug}/${s.slug}`}
                className="group flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-blue-primary/30 hover:shadow-md"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-primary/10 transition-colors group-hover:bg-blue-primary/20">
                  <Icon className="h-5 w-5 text-blue-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-primary">
                    {s.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm text-gray-500">
                    {s.shortDescription}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-blue-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Learn More
                    <ArrowRight className="h-3 w-3" />
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
