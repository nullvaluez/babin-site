import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Flame, ShieldCheck, Lightbulb,
  Trophy, Rocket, Users, Scale, Phone, Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AwardsBadges } from "@/components/sections/awards-badges";
import { CTABanner } from "@/components/sections/cta-banner";
import { team } from "@/lib/data/team";
import { primaryPhone, primaryPhoneTel } from "@/lib/data/offices";
import {
  generatePageMetadata,
  generateBreadcrumbJsonLd,
  generateOrganizationJsonLd,
} from "@/lib/seo/metadata";

export const metadata = generatePageMetadata({
  title: "About Our Firm",
  description:
    "Learn about Babin Law, LLC — top-rated Columbus personal injury attorneys with 75+ years of combined experience. We fight for individuals against corporations. No fees unless we win.",
  path: "/about",
});

const coreValues = [
  {
    icon: Flame,
    title: "True Believers",
    description:
      "We don't just represent clients — we fight for causes. Our unwavering commitment to justice motivates us to challenge the status quo in every courtroom.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "Upholding the highest ethical standards, we prioritize our clients' needs first, delivering honest and respectful communication in everything we do.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We redefine personal injury law with innovative litigation strategies and cutting-edge technology, bringing unprecedented results to our clients.",
  },
  {
    icon: Trophy,
    title: "Mastery",
    description:
      "Our pursuit of mastery is relentless. We transcend competence, treating the practice of law as an art form expressed through powerful advocacy.",
  },
  {
    icon: Rocket,
    title: "Execution",
    description:
      "We go beyond fulfilling promises — we strive to surpass expectations. Our meticulous systems ensure swift, effective legal representation.",
  },
  {
    icon: Users,
    title: "Unity",
    description:
      "Our diversity fuels our strength, but it is our unity that truly defines us. Together we craft ingenious strategies that consistently lead to victories.",
  },
];

const attorneys = team.filter((m) => m.type === "attorney");

export default function AboutPage() {
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Home", href: "/" },
    { name: "About Our Firm" },
  ]);
  const organizationJsonLd = generateOrganizationJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-blue-950 py-20 lg:py-28">
        <Image
          src="/images/hero-columbus.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-blue-950/95 via-blue-950/80 to-blue-950/50" />

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
            About Our Firm
          </span>
          <h1 className="mt-2 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Your Nationwide Advocates for Justice
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-blue-100/70">
            Babin Law, LLC is built on a foundation of belief in the work we do
            and the people we represent. From Columbus to coast-to-coast, we
            challenge powerful corporations with integrity and tenacity.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              size="lg"
              asChild
              className="text-base font-bold shadow-lg shadow-blue-primary/30"
            >
              <Link href="/contact">Free Consultation</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-white/25 bg-white/5 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/10 hover:text-white"
            >
              <a href={`tel:${primaryPhoneTel}`}>
                <Phone className="mr-2 h-4 w-4" />
                {primaryPhone}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Firm Story ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative">
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
                <Image
                  src="/images/about-team.jpg"
                  alt="The Babin Law team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-tr from-blue-950/30 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-xl bg-gold px-6 py-3 shadow-lg">
                <p className="text-2xl font-extrabold text-white">75+</p>
                <p className="text-xs font-semibold text-white/80">
                  Years Combined Experience
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-primary">
                Pioneering Individuals Over Corporations
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                We Don&apos;t Just Practice Law — We Redefine It
              </h2>
              <p className="mt-5 leading-relaxed text-gray-600">
                At Babin Law, our unwavering commitment to justice spans the
                nation. We understand that selecting legal representation can be
                intimidating, especially when facing the concern of legal
                expenses. That&apos;s why we&apos;ve established a contingency
                fee model — you pay nothing upfront and only incur fees when we
                recover for your case.
              </p>
              <p className="mt-4 leading-relaxed text-gray-600">
                Our relentless dedication to our clients drives us to challenge
                influential corporations and entities that operate above the law.
                Our areas of expertise include personal injury, mass tort,
                sexual abuse, and human trafficking — realms where we have
                consistently achieved significant victories from our home base
                in Columbus, Ohio, with offices in Cincinnati, Dayton,
                Cleveland, and Scottsdale, Arizona.
              </p>
              <p className="mt-4 leading-relaxed text-gray-600">
                Our reach extends far beyond any single location. No matter
                where you are, Babin Law, LLC is ready to stand with you.
              </p>
              <div className="mt-8 flex gap-4">
                <Button asChild>
                  <Link href="/team">
                    Meet Our Team
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/about/core-values">Our Core Values</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── No Win, No Fee ── */}
      <section className="relative overflow-hidden bg-blue-950 py-16 lg:py-20">
        <div className="absolute inset-0 bg-linear-to-br from-blue-950 via-blue-950 to-blue-dark" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-linear-to-r from-transparent via-blue-primary/30 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/8 px-4 py-1.5">
                <Scale className="h-3.5 w-3.5 text-gold" />
                <span className="text-xs font-bold uppercase tracking-widest text-gold">
                  Our Promise
                </span>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                No Recovery, No Fees
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-blue-100/65">
                We operate on a contingency fee basis, which means our payment is
                contingent upon winning your case. You face no financial burden
                unless we secure a monetary recovery on your behalf. This ensures
                top-tier legal advocacy is accessible to all, irrespective of
                financial circumstances.
              </p>
            </div>
            <div className="flex gap-6 lg:gap-10">
              {[
                { value: "$0", label: "Upfront Cost" },
                { value: "0%", label: "Risk to You" },
                { value: "100%", label: "Commitment" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-extrabold text-blue-primary sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-medium text-blue-100/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="mb-14 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-primary">
              What Drives Us
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
              These principles are the heartbeat of our practice — guiding every
              case, every courtroom, and every client relationship.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="group rounded-2xl border border-gray-100 bg-gray-50 p-8 transition-all hover:border-blue-primary/20 hover:shadow-lg hover:shadow-blue-primary/5"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-primary/10 transition-colors group-hover:bg-blue-primary/15">
                    <Icon className="h-6 w-6 text-blue-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Button variant="outline" asChild>
              <Link href="/about/core-values">
                Learn More About Our Values
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Team Preview ── */}
      <section className="border-t border-gray-100 bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="mb-14 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-primary">
              Leadership
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet Our Attorneys
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
              Seasoned trial attorneys with a proven track record of confronting
              and defeating formidable corporate opponents.
            </p>
          </div>
          <div className="mx-auto grid max-w-3xl gap-8 sm:grid-cols-2">
            {attorneys.map((member) => (
              <Link
                key={member.slug}
                href={`/team/${member.slug}`}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:border-blue-primary/20 hover:shadow-lg hover:shadow-blue-primary/5"
              >
                <div className="relative aspect-3/4 overflow-hidden bg-gray-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, 350px"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-blue-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-xl font-bold text-white">{member.name}</p>
                    <p className="mt-1 text-sm font-medium text-blue-200/80">
                      {member.role}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-relaxed text-gray-600">
                    {member.shortBio}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-primary">
                    View Profile
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/team">
                View Full Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Awards ── */}
      <AwardsBadges />

      {/* ── Co-Counsel Teaser ── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-gray-50">
            <div className="grid items-center lg:grid-cols-[1fr_auto]">
              <div className="p-8 lg:p-12">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-primary/20 bg-blue-primary/5 px-3 py-1">
                  <Award className="h-3.5 w-3.5 text-blue-primary" />
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-primary">
                    For Attorneys
                  </span>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  Co-Counsel Opportunities
                </h2>
                <p className="mt-3 max-w-xl leading-relaxed text-gray-600">
                  Are you a dedicated attorney looking for a reliable firm to
                  refer your cases to? Babin Law, LLC offers seamless co-counsel
                  partnerships for mass torts, personal injury, and human
                  trafficking cases nationwide.
                </p>
                <Button asChild className="mt-6">
                  <Link href="/about/co-counsel">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="hidden h-full items-center border-l border-gray-100 bg-white px-12 lg:flex">
                <div className="text-center">
                  <p className="text-4xl font-extrabold text-blue-primary">40%</p>
                  <p className="mt-1 max-w-[140px] text-xs font-medium text-gray-500">
                    of all hotel human trafficking cases nationwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
