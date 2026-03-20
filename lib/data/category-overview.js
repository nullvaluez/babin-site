import { getServiceImages } from "@/lib/data/service-images";

export const categoryOverviewContent = {
  "personal-injury": {
    introHeading: "Fighting for Injury Victims Across Ohio",
    introParagraphs: [
      "When an accident turns your life upside down, you need attorneys who will stand up to insurance companies and fight for every dollar you deserve. Babin Law's personal injury team has spent decades handling complex injury cases throughout Columbus, Central Ohio, and beyond — from high-speed highway collisions on I-70 to catastrophic workplace accidents in Ohio's industrial corridors.",
      "Under Ohio's modified comparative negligence rule, you can recover compensation as long as you are less than 51% at fault. But navigating the legal system alone means risking a lowball settlement that doesn't come close to covering your medical bills, lost wages, and long-term care needs. Our attorneys work on a contingency fee basis — you pay nothing unless we win.",
    ],
    featuredSlugs: ["car-accidents", "truck-accidents", "brain-injuries", "wrongful-death"],
    serviceGroups: [
      {
        heading: "Vehicle & Traffic Accidents",
        description: "Ohio sees tens of thousands of motor vehicle collisions annually. Our attorneys handle the full range of traffic-related injury claims.",
        slugs: [
          "car-accidents",
          "truck-accidents",
          "motorcycle-accidents",
          "bicycle-accidents",
          "pedestrian-accidents",
          "commercial-vehicle-accidents",
          "uber-lyft-accidents",
          "dui-accidents",
          "uninsured-underinsured",
          "mechanical-failure",
        ],
      },
      {
        heading: "Catastrophic & Life-Altering Injuries",
        description: "Severe injuries demand aggressive representation and deep resources to project lifetime costs accurately.",
        slugs: ["brain-injuries", "spinal-cord-injuries", "burn-injuries", "wrongful-death"],
      },
      {
        heading: "Property & Workplace Injuries",
        description: "Property owners and employers have a duty of care. When they fail, we hold them accountable.",
        slugs: ["premises-liability", "slip-and-fall", "dog-bites", "workplace-injury"],
      },
    ],
  },

  "mass-tort": {
    introHeading: "Holding Corporations Accountable",
    introParagraphs: [
      "When pharmaceutical companies rush dangerous drugs to market or device manufacturers cut corners on safety testing, real people suffer the consequences. Babin Law's mass tort division has secured leadership positions on multiple federal MDL steering committees — including the Valsartan and Hernia Mesh litigations — giving our clients a direct seat at the table where settlements are negotiated.",
      "Mass tort litigation is uniquely complex: it requires coordinating with scientific experts, navigating multi-district litigation procedures, and standing firm against corporations with virtually unlimited legal budgets. Steven Babin's track record of MDL appointments proves that federal judges trust our firm with that responsibility.",
    ],
    featuredSlugs: ["hernia-mesh", "philips-cpap", "valsartan"],
    serviceGroups: [
      {
        heading: "Dangerous Drugs",
        description: "Medications marketed as safe have caused severe side effects, from organ damage to cancer. We pursue the manufacturers responsible.",
        slugs: ["elmiron", "paraquat", "tylenol", "valsartan", "zantac"],
      },
      {
        heading: "Defective Medical Devices",
        description: "Implants and devices that malfunction inside the body can cause life-threatening complications requiring emergency intervention.",
        slugs: ["3m-earplugs", "hernia-mesh", "ivc-filter", "paragard-iud", "penuma", "philips-cpap"],
      },
      {
        heading: "Environmental & Chemical Exposure",
        description: "Toxic chemicals in drinking water and everyday products have contaminated communities across Ohio and the nation.",
        slugs: ["pfoa-pfos-water", "exachtech"],
      },
    ],
  },

  "sexual-abuse": {
    introHeading: "Compassionate Advocacy for Survivors",
    introParagraphs: [
      "Coming forward about sexual abuse takes extraordinary courage. At Babin Law, we believe that courage deserves to be met with attorneys who are not only skilled litigators but also deeply empathetic to the trauma survivors carry. Our entire approach is built on trauma-informed principles — we move at your pace, protect your privacy absolutely, and never pressure you into decisions you're not ready for.",
      "Ohio law provides civil remedies that allow survivors to hold both individual abusers and the institutions that enabled them financially accountable. Recent legislative changes have extended or eliminated statutes of limitations for many abuse claims, opening doors for survivors who were previously barred from seeking justice. Every consultation is 100% confidential.",
    ],
    featuredSlugs: ["clergy-abuse", "school-abuse", "uber-lyft-sexual-assault", "institutional-abuse"],
    serviceGroups: [],
  },

  "human-trafficking": {
    introHeading: "National Leaders in Civil Trafficking Litigation",
    introParagraphs: [
      "Babin Law stands at the forefront of civil human trafficking litigation nationwide. Steven Babin serves as lead trial counsel on the very first case filed under the federal Trafficking Victims Protection Act (TVPA) against major hotel brands — and our firm now represents approximately 40% of all hotel human trafficking cases in the country.",
      "We pursue every entity in the trafficking supply chain: the traffickers themselves, the hotel chains that looked the other way, the websites that facilitated exploitation, and the businesses that profited from forced labor. Our survivor-centered approach means your safety and well-being always come first, with connections to advocacy organizations and support services at every stage.",
    ],
    featuredSlugs: ["labor-trafficking", "sex-trafficking", "trafficking-awareness"],
    serviceGroups: [],
  },
};

export function getCategoryOverview(categorySlug) {
  return categoryOverviewContent[categorySlug] || null;
}

export function getFeaturedServicesWithImages(categorySlug, allServices) {
  const overview = categoryOverviewContent[categorySlug];
  if (!overview) return [];

  return overview.featuredSlugs
    .map((slug) => {
      const service = allServices.find((s) => s.slug === slug);
      if (!service) return null;
      const images = getServiceImages(categorySlug, slug);
      return { ...service, heroImage: images.hero };
    })
    .filter(Boolean);
}
