import Link from "next/link";
import { Clock, DollarSign, FileText, ShieldCheck } from "lucide-react";
import { ServiceHero } from "@/components/sections/service-hero";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { CTABanner } from "@/components/sections/cta-banner";
import { ServiceSidebar } from "@/components/sections/service-sidebar";
import {
  generatePageMetadata,
  generateBreadcrumbJsonLd,
} from "@/lib/seo/metadata";

export const metadata = generatePageMetadata({
  title: "Columbus Unpaid Wages Lawyer | Babin Law, LLC",
  description:
    "Babin Law fights for workers owed unpaid wages, overtime, and commissions. Ohio employment law attorneys pursuing fair compensation for employees.",
  path: "/unpaid-wages",
});

const sections = [
  {
    heading: "Ohio Unpaid Wages & Employment Law",
    body: `Every worker in Ohio deserves to be paid fully and on time for the work they perform. Unfortunately, wage theft is one of the most widespread forms of corporate misconduct in America. Employers illegally withhold wages, misclassify employees as independent contractors, refuse to pay overtime, and manipulate timekeeping systems to shortchange workers.

Ohio's Prompt Pay Act (O.R.C. § 4113.15) requires employers to pay wages on regular paydays at least twice per month. When employers violate this law, workers are entitled to recover the unpaid wages plus liquidated damages, penalties, and attorney's fees. Federal law under the Fair Labor Standards Act (FLSA) provides additional protections for overtime and minimum wage violations.`,
  },
  {
    heading: "Common Types of Wage Theft",
    body: `Wage theft takes many forms, and employers often count on workers not knowing their rights. Common violations include failure to pay overtime for hours worked over 40 in a workweek, minimum wage violations, off-the-clock work requirements, illegal tip pooling or tip skimming by management, misclassification of employees as independent contractors to avoid benefits and overtime obligations, and failure to pay final wages after termination.

Certain industries are especially prone to wage violations, including restaurants and hospitality, construction, healthcare, retail, and the gig economy. If you suspect your employer is not paying you correctly, you may have a claim — and you may not be the only affected employee.`,
  },
  {
    heading: "How Babin Law Fights for Your Wages",
    body: `Our employment law attorneys investigate your pay records, employment agreements, and timekeeping data to identify all unpaid compensation you're owed. We pursue claims under both Ohio law and the FLSA to maximize your recovery.

In many cases, unpaid wage violations affect multiple employees. We can bring collective actions under the FLSA or class actions under Ohio law to recover wages for all affected workers. This puts enormous pressure on employers to settle and deters future violations. You are protected by law against retaliation for asserting your wage rights — it is illegal for your employer to fire, demote, or discipline you for filing a wage claim.`,
  },
];

export default function UnpaidWagesPage() {
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Home", href: "/" },
    { name: "Practice Areas", href: "/practice-areas" },
    { name: "Unpaid Wages" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <ServiceHero
        title="Unpaid Wages & Employment Law"
        description="Your employer is legally required to pay you for every hour worked. When they don't, Babin Law fights to recover what you're owed — plus penalties and damages."
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

              {/* Quick facts */}
              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: DollarSign, text: "Recover Full Back Pay" },
                  { icon: Clock, text: "Overtime Violations" },
                  { icon: ShieldCheck, text: "Retaliation Protection" },
                  { icon: FileText, text: "Class & Collective Actions" },
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

            <ServiceSidebar relatedServices={[]} categorySlug="unpaid-wages" />
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <CTABanner />
    </>
  );
}
