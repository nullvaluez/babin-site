const SITE_URL = "https://babin.lawyer";
const SITE_NAME = "Babin Law, LLC";

export function generatePageMetadata({
  title,
  description,
  path = "",
  image = "/images/og-default.jpg",
}) {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: `${SITE_URL}${image}`, width: 1200, height: 630 }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}${image}`],
    },
  };
}

export function generateOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.svg`,
    description:
      "Top-rated Columbus personal injury attorneys fighting for justice. Specializing in personal injury, mass tort, sexual abuse, and human trafficking cases.",
    telephone: "+1-614-761-8800",
    address: {
      "@type": "PostalAddress",
      streetAddress: "10 W Broad St, Suite 900",
      addressLocality: "Columbus",
      addressRegion: "OH",
      postalCode: "43215",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 39.9625256,
      longitude: -83.001179,
    },
    areaServed: [
      { "@type": "State", name: "Ohio" },
      { "@type": "State", name: "Arizona" },
    ],
    priceRange: "Free Consultation",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    sameAs: [],
  };
}

export function generateLocalBusinessJsonLd(office) {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: `${SITE_NAME} - ${office.city}`,
    telephone: office.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: office.address || "",
      addressLocality: office.city,
      addressRegion: office.state,
      addressCountry: "US",
    },
    parentOrganization: {
      "@type": "LegalService",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function generateFAQJsonLd(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateLegalServiceJsonLd({ name, description, url }) {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name,
    description,
    url: `${SITE_URL}${url}`,
    provider: {
      "@type": "LegalService",
      name: SITE_NAME,
      url: SITE_URL,
      telephone: "+1-614-761-8800",
    },
    areaServed: {
      "@type": "State",
      name: "Ohio",
    },
  };
}

export function generateAttorneyJsonLd({ name, slug, title, description }) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle: title,
    description,
    url: `${SITE_URL}/team/${slug}`,
    worksFor: {
      "@type": "LegalService",
      name: SITE_NAME,
      url: SITE_URL,
    },
    memberOf: [
      { "@type": "Organization", name: "Ohio State Bar Association" },
      { "@type": "Organization", name: "American Association for Justice" },
      { "@type": "Organization", name: "Federal Bar Association" },
    ],
  };
}

export function generateBreadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.href ? `${SITE_URL}${item.href}` : undefined,
    })),
  };
}
