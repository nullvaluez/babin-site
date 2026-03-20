import { getCategoryBySlug, sexualAbuseServices } from "@/lib/data/practice-areas";
import { faqsByCategory } from "@/lib/data/faqs";
import { getCategoryOverview, getFeaturedServicesWithImages } from "@/lib/data/category-overview";
import { ServiceHero } from "@/components/sections/service-hero";
import { CaseStages } from "@/components/sections/case-stages";
import {
  CategoryIntroSection,
  FeaturedServicesSection,
  MidSectionCTA,
} from "@/components/sections/category-service-showcase";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { CTABanner } from "@/components/sections/cta-banner";
import {
  generatePageMetadata,
  generateBreadcrumbJsonLd,
  generateFAQJsonLd,
} from "@/lib/seo/metadata";

const CATEGORY_SLUG = "sexual-abuse";
const category = getCategoryBySlug(CATEGORY_SLUG);
const faqs = faqsByCategory[CATEGORY_SLUG];
const overview = getCategoryOverview(CATEGORY_SLUG);
const featured = getFeaturedServicesWithImages(CATEGORY_SLUG, sexualAbuseServices);

export const metadata = generatePageMetadata({
  title: "Sexual Abuse & Assault Lawyers | Babin Law, LLC",
  description:
    "Compassionate, confidential legal representation for survivors of sexual abuse and assault. Babin Law holds abusers and institutions accountable.",
  path: "/sexual-abuse",
});

export default function SexualAbusePage() {
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Home", href: "/" },
    { name: "Practice Areas", href: "/practice-areas" },
    { name: "Sexual Abuse" },
  ]);
  const faqJsonLd = generateFAQJsonLd(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbJsonLd, faqJsonLd]),
        }}
      />

      <ServiceHero
        title="Sexual Abuse & Assault Lawyers"
        description={category.description}
        image={category.image}
        badge="Sexual Abuse"
      />

      <CategoryIntroSection
        heading={overview.introHeading}
        paragraphs={overview.introParagraphs}
        categoryImage={category.image}
        categorySlug={CATEGORY_SLUG}
      />

      <FeaturedServicesSection
        featuredServices={featured}
        categorySlug={CATEGORY_SLUG}
        title="Sexual Abuse"
      />

      <MidSectionCTA />

      <CaseStages variant="sexual-abuse" />

      <WhyChooseUs />

      <FAQAccordion faqs={faqs} title="Sexual Abuse Case FAQs" />

      <CTABanner />
    </>
  );
}
