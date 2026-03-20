import { getCategoryBySlug, massTortServices } from "@/lib/data/practice-areas";
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

const CATEGORY_SLUG = "mass-tort";
const category = getCategoryBySlug(CATEGORY_SLUG);
const faqs = faqsByCategory[CATEGORY_SLUG];
const overview = getCategoryOverview(CATEGORY_SLUG);
const featured = getFeaturedServicesWithImages(CATEGORY_SLUG, massTortServices);

export const metadata = generatePageMetadata({
  title: "Mass Tort & Dangerous Drug Lawyers | Babin Law, LLC",
  description:
    "Babin Law's mass tort attorneys hold pharmaceutical companies and device manufacturers accountable. MDL leadership experience. Free case screening.",
  path: "/mass-tort",
});

export default function MassTortPage() {
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Home", href: "/" },
    { name: "Practice Areas", href: "/practice-areas" },
    { name: "Mass Tort" },
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
        title="Mass Tort & Dangerous Drug Lawyers"
        description={category.description}
        image={category.image}
        badge="Mass Tort"
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
        title="Mass Tort"
      />

      <MidSectionCTA />

      <GroupedServicesSection
        serviceGroups={overview.serviceGroups}
        allServices={massTortServices}
        categorySlug={CATEGORY_SLUG}
      />

      <CaseStages variant="mass-tort" />

      <WhyChooseUs />

      <FAQAccordion faqs={faqs} title="Mass Tort FAQs" />

      <CTABanner />
    </>
  );
}
