import { Hero } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { PracticeAreaGrid } from "@/components/sections/practice-area-grid";
import { CaseStages } from "@/components/sections/case-stages";
import { AboutTeaser } from "@/components/sections/about-teaser";
import { AwardsBadges } from "@/components/sections/awards-badges";
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel";
import { ServiceAreas } from "@/components/sections/service-areas";
import { BlogPreview } from "@/components/sections/blog-preview";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { CTABanner } from "@/components/sections/cta-banner";
import { StickyFormBar } from "@/components/forms/sticky-form-bar";
import { generateOrganizationJsonLd, generateFAQJsonLd } from "@/lib/seo/metadata";
import { homepageFaqs } from "@/lib/data/faqs";

export const metadata = {
  title: "Babin Law, LLC | Columbus Personal Injury Attorneys",
  description:
    "Top-rated Columbus personal injury attorneys fighting for justice. Specializing in personal injury, mass tort, sexual abuse, and human trafficking. No fees unless we win. Call (614) 761-8800.",
  alternates: {
    canonical: "https://babin.lawyer",
  },
};

export default function HomePage() {
  const organizationJsonLd = generateOrganizationJsonLd();
  const faqJsonLd = generateFAQJsonLd(homepageFaqs);

  return (
    <>
      {/* Structured data: Organization + FAQPage (enables rich results in SERPs) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Hero
        title="Your Ally Against the Powerful"
        subtitle="Top-rated Columbus attorneys with 75+ years of combined experience fighting for individuals — not corporations. No fees unless we win."
        backgroundImage="/images/hero.jpg"
        showClippersPartnership
        // Replace with your actual YouTube video ID (found in the URL: youtube.com/watch?v=XXXX)
        featuredVideoId={null}
        featuredVideoTitle="Meet the Team at Babin Law"
        // Add up to 2 more videos: [{ id: "XXXX", title: "..." }, ...]
        additionalVideoIds={[]}
      />

      {/* Media mentions — E-E-A-T trust signals */}
      <TrustStrip />

      {/* Practice area categories — internal linking to key service pages */}
      <PracticeAreaGrid />

      {/* Process walkthrough — reduces bounce by answering "what happens next" */}
      <CaseStages variant="homepage" />

      {/* About the firm — E-E-A-T content, keyword-rich firm description */}
      <AboutTeaser />

      {/* Awards, bar memberships, credentials — critical for YMYL E-E-A-T */}
      <AwardsBadges />

      {/* Client testimonials — social proof, implicitly adds review signals */}
      <TestimonialsCarousel />

      {/* Service areas — local SEO keyword density for all 5 cities */}
      <ServiceAreas />

      {/* Blog preview — fresh content signal, internal links to category pages */}
      <BlogPreview />

      {/* FAQ with FAQPage schema — "People Also Ask" rich results in Google */}
      <FAQAccordion
        faqs={homepageFaqs}
        title="Frequently Asked Questions"
        variant="side"
      />

      <CTABanner />

      <StickyFormBar />
    </>
  );
}
