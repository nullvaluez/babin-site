import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { primaryPhone, primaryPhoneTel } from "@/lib/data/offices";

export function ServiceHero({ title, description, image, badge }) {
  return (
    <section className="relative overflow-hidden bg-blue-950 py-20 lg:py-28">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-950/70 to-blue-950/40" />
        </>
      )}
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-6">
        {badge && (
          <span className="mb-4 inline-block rounded-full border border-blue-primary/30 bg-blue-primary/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
            {badge}
          </span>
        )}
        <h1 className="mt-2 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-blue-100/70">
            {description}
          </p>
        )}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button size="lg" asChild className="text-base font-semibold">
            <Link href="/contact">Free Consultation</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-white/30 bg-transparent text-base font-semibold text-white hover:bg-white/10 hover:text-white"
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
