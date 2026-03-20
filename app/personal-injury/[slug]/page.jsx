import { notFound } from "next/navigation";
import {
  getCategoryBySlug,
  getServiceBySlug,
  personalInjuryServices,
} from "@/lib/data/practice-areas";
import { getServiceContent } from "@/lib/data/content";
import { stripIcons } from "@/lib/utils/serialize";
import { ServicePageContent } from "@/components/sections/service-page-content";
import {
  generatePageMetadata,
  generateBreadcrumbJsonLd,
  generateLegalServiceJsonLd,
} from "@/lib/seo/metadata";

const CATEGORY_SLUG = "personal-injury";
const category = getCategoryBySlug(CATEGORY_SLUG);

export async function generateStaticParams() {
  return personalInjuryServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(CATEGORY_SLUG, slug);
  if (!service) return {};
  return generatePageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/${CATEGORY_SLUG}/${slug}`,
  });
}

export default async function PersonalInjuryServicePage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(CATEGORY_SLUG, slug);
  if (!service) notFound();

  const content = getServiceContent(CATEGORY_SLUG, slug);
  const relatedSlugs = content?.relatedSlugs ?? [];
  const relatedServices = stripIcons(
    relatedSlugs.map((s) => getServiceBySlug(CATEGORY_SLUG, s)).filter(Boolean)
  );

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Home", href: "/" },
    { name: "Personal Injury", href: "/personal-injury" },
    { name: service.title },
  ]);
  const legalServiceJsonLd = generateLegalServiceJsonLd({
    name: service.metaTitle,
    description: service.metaDescription,
    url: `/${CATEGORY_SLUG}/${slug}`,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbJsonLd, legalServiceJsonLd]),
        }}
      />
      <ServicePageContent
        service={{ title: service.title, shortDescription: service.shortDescription, slug: service.slug }}
        content={content}
        category={{ title: category.title, slug: category.slug }}
        relatedServices={relatedServices}
        categorySlug={CATEGORY_SLUG}
      />
    </>
  );
}
