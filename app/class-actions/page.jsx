import Link from "next/link";
import { ArrowLeft, Users, Scale, ShieldCheck, FileText, Gavel, DollarSign } from "lucide-react";
import { ServiceHero } from "@/components/sections/service-hero";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { CTABanner } from "@/components/sections/cta-banner";
import { ServiceSidebar } from "@/components/sections/service-sidebar";
import {
  generatePageMetadata,
  generateBreadcrumbJsonLd,
} from "@/lib/seo/metadata";

export const metadata = generatePageMetadata({
  title: "Columbus Class Action Lawyer | Babin Law, LLC",
  description:
    "Babin Law represents plaintiffs in class action lawsuits against corporations. Strength in numbers for consumer fraud, defective products, and more.",
  path: "/class-actions",
});

const sections = [
  {
    heading: "What Is a Class Action Lawsuit?",
    body: `A class action lawsuit allows a group of people who have been similarly harmed by the same defendant to bring their claims together in a single legal proceeding. Instead of filing hundreds or thousands of individual lawsuits, one or several lead plaintiffs represent the entire group — known as the "class."

This structure is particularly powerful when individual damages may be small but the collective harm is massive. It levels the playing field against corporations with deep pockets and armies of defense attorneys. Class actions have been instrumental in holding companies accountable for consumer fraud, defective products, data breaches, and employment violations.`,
  },
  {
    heading: "Types of Class Action Cases We Handle",
    body: `Babin Law pursues class action claims involving consumer fraud and deceptive business practices, defective products that caused widespread harm, environmental contamination affecting communities, data breaches and privacy violations, and corporate misconduct affecting large groups of consumers or employees.

Our attorneys evaluate each potential class action to determine whether class certification is likely, whether the claims share common legal and factual questions, and whether the proposed class can be adequately represented. We take on cases where aggregating claims creates the strongest possible leverage against corporate defendants.`,
  },
  {
    heading: "How Class Actions Work in Ohio",
    body: `Under Ohio Civil Rule 23, a class action must meet specific requirements: the class must be so large that individual lawsuits are impractical, there must be common questions of law or fact, the lead plaintiffs' claims must be typical of the class, and the representatives must adequately protect the class's interests.

Federal class actions follow similar requirements under Federal Rule of Civil Procedure 23. Many class actions are filed in federal court, especially when class members span multiple states. Babin Law has experience in both Ohio state courts and federal courts, and we strategically choose the venue that gives our clients the best chance of success.`,
  },
];

export default function ClassActionsPage() {
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Home", href: "/" },
    { name: "Practice Areas", href: "/practice-areas" },
    { name: "Class Actions" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <ServiceHero
        title="Class Action Lawsuits"
        description="When corporations harm large groups of people, class action lawsuits provide strength in numbers. Babin Law fights for collective justice."
        badge="Other Services"
        image="/images/hero.jpg"
      />

      <section className="bg-white py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
            <article>
              {sections.map((section, i) => (
                <div key={i} className={i > 0 ? "mt-10" : ""}>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {section.heading}
                  </h2>
                  {section.body.split("\n\n").map((p, j) => (
                    <p key={j} className="mt-4 leading-relaxed text-gray-600">
                      {p}
                    </p>
                  ))}
                </div>
              ))}

              {/* Key benefits grid */}
              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Users, text: "Strength in Numbers" },
                  { icon: Scale, text: "Level Playing Field" },
                  { icon: ShieldCheck, text: "Shared Legal Costs" },
                  { icon: Gavel, text: "Corporate Accountability" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.text}
                      className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-primary/10">
                        <Icon className="h-5 w-5 text-blue-primary" />
                      </div>
                      <span className="font-medium text-gray-900">
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </article>

            <ServiceSidebar relatedServices={[]} categorySlug="class-actions" />
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <CTABanner />
    </>
  );
}
