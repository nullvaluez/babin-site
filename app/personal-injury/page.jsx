import { getCategoryBySlug, personalInjuryServices } from "@/lib/data/practice-areas";
import { faqsByCategory } from "@/lib/data/faqs";
import { getCategoryOverview, getFeaturedServicesWithImages } from "@/lib/data/category-overview";
import { ServiceHero } from "@/components/sections/service-hero";
import { CaseStages } from "@/components/sections/case-stages";
import {
  CategoryIntroSection,
  FeaturedServicesSection,
  MidSectionCTA,
  GroupedServicesSection,
} from "@/components/sections/category-service-showcase";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { CTABanner } from "@/components/sections/cta-banner";
import {
  generatePageMetadata,
  generateBreadcrumbJsonLd,
  generateFAQJsonLd,
} from "@/lib/seo/metadata";

const CATEGORY_SLUG = "personal-injury";
const category = getCategoryBySlug(CATEGORY_SLUG);
const faqs = faqsByCategory[CATEGORY_SLUG];
const overview = getCategoryOverview(CATEGORY_SLUG);
const featured = getFeaturedServicesWithImages(CATEGORY_SLUG, personalInjuryServices);

export const metadata = generatePageMetadata({
  title: "Columbus Personal Injury Lawyers | Babin Law, LLC",
  description:
    "Babin Law's personal injury attorneys in Columbus, Ohio fight for maximum compensation in car accidents, truck accidents, brain injuries, and more. Free consultation.",
  path: "/personal-injury",
});

export default function PersonalInjuryPage() {
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Home", href: "/" },
    { name: "Practice Areas", href: "/practice-areas" },
    { name: "Personal Injury" },
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
        title="Columbus Personal Injury Lawyers"
        description={category.description}
        image={category.image}
        badge="Personal Injury"
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
        title="Personal Injury"
      />

      <MidSectionCTA />

      <GroupedServicesSection
        serviceGroups={overview.serviceGroups}
        allServices={personalInjuryServices}
        categorySlug={CATEGORY_SLUG}
      />

      <CaseStages variant="personal-injury" />

      <WhyChooseUs />

      <FAQAccordion faqs={faqs} title="Personal Injury FAQs" />

      <CTABanner />
    </>
  );
}
