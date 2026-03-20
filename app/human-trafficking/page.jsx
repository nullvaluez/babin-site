import { getCategoryBySlug, humanTraffickingServices } from "@/lib/data/practice-areas";
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

const CATEGORY_SLUG = "human-trafficking";
const category = getCategoryBySlug(CATEGORY_SLUG);
const faqs = faqsByCategory[CATEGORY_SLUG];
const overview = getCategoryOverview(CATEGORY_SLUG);
const featured = getFeaturedServicesWithImages(CATEGORY_SLUG, humanTraffickingServices);

export const metadata = generatePageMetadata({
  title: "Human Trafficking Lawyers | Babin Law, LLC",
  description:
    "Babin Law is a national leader in civil human trafficking litigation, representing approximately 40% of all hotel trafficking cases nationwide.",
  path: "/human-trafficking",
});

export default function HumanTraffickingPage() {
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Home", href: "/" },
    { name: "Practice Areas", href: "/practice-areas" },
    { name: "Human Trafficking" },
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
        title="Human Trafficking Lawyers"
        description={category.description}
        image={category.image}
        badge="Human Trafficking"
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
        title="Human Trafficking"
      />

      <MidSectionCTA />

      <CaseStages variant="human-trafficking" />

      <WhyChooseUs />

      <FAQAccordion faqs={faqs} title="Human Trafficking Case FAQs" />

      <CTABanner />
    </>
  );
}
