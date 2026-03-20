const UNSPLASH = "https://images.unsplash.com";

const photos = {
  carAccident: `${UNSPLASH}/photo-1673187139612-6bf684a74815`,
  semiTruck: `${UNSPLASH}/photo-1694090709409-78b1175a54a8`,
  medical: `${UNSPLASH}/photo-1666887360388-93e684b6474a`,
  construction: `${UNSPLASH}/photo-1762073574572-31cf6d0ebba4`,
  gavel: `${UNSPLASH}/photo-1589829545856-d10d557cf95f`,
  highway: `${UNSPLASH}/photo-1449965408869-eaa3f722e40d`,
  pills: `${UNSPLASH}/photo-1584308666744-24d5c474f2ae`,
  office: `${UNSPLASH}/photo-1521737604893-d14cc237f11d`,
  motorcycle: `${UNSPLASH}/photo-1558981806-ec527fa84c39`,
  cityStreet: `${UNSPLASH}/photo-1477959858617-67f85cf4f1df`,
  buildingExterior: `${UNSPLASH}/photo-1486406146926-c627a92ad1ab`,
  dogClose: `${UNSPLASH}/photo-1587300003388-59208cc962cb`,
  nightRoad: `${UNSPLASH}/photo-1504813184591-01572f98c85f`,
  carMechanic: `${UNSPLASH}/photo-1619642751034-765dfdf7c58e`,
  insuranceDocs: `${UNSPLASH}/photo-1554224155-8d04cb21cd6c`,
  memorial: `${UNSPLASH}/photo-1509099836639-18ba1795216d`,
  labResearch: `${UNSPLASH}/photo-1532094349884-543bc11b234d`,

  militaryVet: `${UNSPLASH}/photo-1579165466949-3180a3d056d5`,
  eyeExam: `${UNSPLASH}/photo-1551884170-09fb70a3a2ed`,
  medicalDevice: `${UNSPLASH}/photo-1530497610245-94d3c16cda28`,
  surgeryTeam: `${UNSPLASH}/photo-1551190822-a9ce113d0d15`,
  hospitalHallway: `${UNSPLASH}/photo-1519494026892-80bbd2d6fd0d`,
  womanDoctor: `${UNSPLASH}/photo-1559757148-5c350d0d3c56`,
  farmField: `${UNSPLASH}/photo-1500382017468-9049fed747ef`,
  waterTesting: `${UNSPLASH}/photo-1581093588401-fbb62a02f120`,
  sleepStudy: `${UNSPLASH}/photo-1541781774459-bb2af2f05b55`,
  pharmacy: `${UNSPLASH}/photo-1585435557343-3b092031a831`,
  heartMedical: `${UNSPLASH}/photo-1628348068343-c6a848d2b6dd`,
  stomachPain: `${UNSPLASH}/photo-1612349317150-e413f6a5b16d`,
  pillBottle: `${UNSPLASH}/photo-1550572017-4fcdbb59cc32`,
  labScience: `${UNSPLASH}/photo-1582719471384-894fbb16564e`,

  stainedGlass: `${UNSPLASH}/photo-1507692049790-de58290a4334`,
  schoolHallway: `${UNSPLASH}/photo-1580582932707-520aed937b7b`,
  rideshareCity: `${UNSPLASH}/photo-1449965408869-eaa3f722e40d`,
  institutionGate: `${UNSPLASH}/photo-1497366754035-f200968a6e72`,
  supportHands: `${UNSPLASH}/photo-1469571486292-0ba58a3f068b`,
  legalJustice: `${UNSPLASH}/photo-1589391886645-d51941baf7fb`,

  brokenChains: `${UNSPLASH}/photo-1507003211169-0a1dd7228f2d`,
  helpingHands: `${UNSPLASH}/photo-1559027615-cd4628902d4a`,
  awareness: `${UNSPLASH}/photo-1491438590914-bc09fcaaf77a`,
  courthouseSteps: `${UNSPLASH}/photo-1564596823821-79b97151055e`,
  communitySupport: `${UNSPLASH}/photo-1529156069898-49953e39b3ac`,
};

function img(src, alt) {
  return { src: `${src}?auto=format&fit=crop&w=1200&q=80`, alt };
}

const serviceImageMap = {
  "personal-injury": {
    "car-accidents": {
      hero: img(photos.carAccident, "Damaged vehicle after a car accident collision"),
      feature: img(photos.highway, "Busy highway intersection in Columbus, Ohio"),
    },
    "truck-accidents": {
      hero: img(photos.semiTruck, "Semi truck on highway representing truck accident cases"),
      feature: img(photos.highway, "Commercial trucking route through Ohio"),
    },
    "motorcycle-accidents": {
      hero: img(photos.motorcycle, "Motorcycle on open road"),
      feature: img(photos.highway, "Road conditions for motorcycle riders"),
    },
    "bicycle-accidents": {
      hero: img(photos.cityStreet, "Urban street where bicycle accidents commonly occur"),
      feature: img(photos.highway, "Road shared between cyclists and motor vehicles"),
    },
    "pedestrian-accidents": {
      hero: img(photos.cityStreet, "Busy city crosswalk with pedestrians"),
      feature: img(photos.gavel, "Legal representation for pedestrian accident victims"),
    },
    "brain-injuries": {
      hero: img(photos.medical, "Medical professional evaluating traumatic brain injury"),
      feature: img(photos.gavel, "Pursuing legal compensation for brain injury victims"),
    },
    "spinal-cord-injuries": {
      hero: img(photos.medical, "Healthcare provider treating spinal cord injuries"),
      feature: img(photos.gavel, "Legal advocacy for spinal cord injury survivors"),
    },
    "burn-injuries": {
      hero: img(photos.medical, "Medical care for severe burn injury treatment"),
      feature: img(photos.construction, "Workplace safety and burn injury prevention"),
    },
    "premises-liability": {
      hero: img(photos.buildingExterior, "Commercial property where premises liability incidents occur"),
      feature: img(photos.gavel, "Holding property owners accountable under Ohio law"),
    },
    "slip-and-fall": {
      hero: img(photos.buildingExterior, "Building entrance where slip and fall accidents happen"),
      feature: img(photos.gavel, "Legal rights of slip and fall injury victims"),
    },
    "dog-bites": {
      hero: img(photos.dogClose, "Dog representing Ohio strict liability for dog bites"),
      feature: img(photos.gavel, "Ohio dog bite laws and legal compensation"),
    },
    "dui-accidents": {
      hero: img(photos.nightRoad, "Highway at night where DUI accidents frequently occur"),
      feature: img(photos.gavel, "Civil claims against impaired drivers in Ohio"),
    },
    "commercial-vehicle-accidents": {
      hero: img(photos.semiTruck, "Commercial vehicles on Ohio highways"),
      feature: img(photos.highway, "Major transportation routes through Columbus"),
    },
    "uber-lyft-accidents": {
      hero: img(photos.cityStreet, "City traffic where rideshare accidents occur"),
      feature: img(photos.gavel, "Navigating complex Uber and Lyft insurance claims"),
    },
    "mechanical-failure": {
      hero: img(photos.carMechanic, "Auto mechanic inspecting vehicle for mechanical failures"),
      feature: img(photos.gavel, "Product liability for defective vehicle components"),
    },
    "workplace-injury": {
      hero: img(photos.construction, "Construction worker in safety gear at job site"),
      feature: img(photos.gavel, "Workers' compensation and third-party injury claims"),
    },
    "uninsured-underinsured": {
      hero: img(photos.insuranceDocs, "Insurance documents and coverage review"),
      feature: img(photos.highway, "Uninsured motorist risks on Ohio roadways"),
    },
    "wrongful-death": {
      hero: img(photos.memorial, "Compassionate memorial for wrongful death victims"),
      feature: img(photos.gavel, "Wrongful death legal advocacy for Ohio families"),
    },
  },

  "mass-tort": {
    _default: {
      hero: img(photos.pills, "Pharmaceutical medications under investigation in mass tort litigation"),
      feature: img(photos.labResearch, "Scientific research and evidence in mass tort cases"),
    },
    "3m-earplugs": {
      hero: img(photos.militaryVet, "Military veteran affected by defective 3M combat earplugs"),
      feature: img(photos.gavel, "Legal action for veterans with hearing damage from 3M earplugs"),
    },
    elmiron: {
      hero: img(photos.eyeExam, "Eye examination for Elmiron-related macular damage"),
      feature: img(photos.pills, "Elmiron medication linked to vision impairment"),
    },
    exachtech: {
      hero: img(photos.medicalDevice, "Medical device under investigation in Exachtech litigation"),
      feature: img(photos.labScience, "Product testing and evidence in Exachtech claims"),
    },
    "hernia-mesh": {
      hero: img(photos.surgeryTeam, "Surgical team in operating room for hernia mesh procedure"),
      feature: img(photos.hospitalHallway, "Hospital care for hernia mesh complication patients"),
    },
    "ivc-filter": {
      hero: img(photos.hospitalHallway, "Hospital care for patients with IVC filter complications"),
      feature: img(photos.medicalDevice, "IVC filter medical device under legal scrutiny"),
    },
    "paragard-iud": {
      hero: img(photos.womanDoctor, "Patient consulting doctor about Paragard IUD complications"),
      feature: img(photos.medicalDevice, "Paragard IUD device linked to serious injuries"),
    },
    paraquat: {
      hero: img(photos.farmField, "Agricultural field where paraquat herbicide exposure occurs"),
      feature: img(photos.labScience, "Scientific research linking paraquat to Parkinson's disease"),
    },
    penuma: {
      hero: img(photos.surgeryTeam, "Surgical complications from Penuma penile implant"),
      feature: img(photos.hospitalHallway, "Medical treatment for Penuma device injuries"),
    },
    "pfoa-pfos-water": {
      hero: img(photos.waterTesting, "Water quality testing for PFOA and PFOS contamination"),
      feature: img(photos.labScience, "Laboratory analysis of forever chemicals in water supply"),
    },
    "philips-cpap": {
      hero: img(photos.sleepStudy, "Patient affected by recalled Philips CPAP breathing machine"),
      feature: img(photos.medicalDevice, "Recalled Philips CPAP device linked to health risks"),
    },
    tylenol: {
      hero: img(photos.pharmacy, "Pharmacy shelf with Tylenol products under legal scrutiny"),
      feature: img(photos.labScience, "Research into Tylenol use during pregnancy and autism risk"),
    },
    valsartan: {
      hero: img(photos.heartMedical, "Heart medication contaminated with carcinogenic impurities"),
      feature: img(photos.pillBottle, "Recalled valsartan blood pressure medication"),
    },
    zantac: {
      hero: img(photos.stomachPain, "Patient experiencing health effects from long-term Zantac use"),
      feature: img(photos.pharmacy, "Zantac ranitidine products recalled over cancer risk"),
    },
  },

  "sexual-abuse": {
    _default: {
      hero: img(photos.memorial, "Strength and hope for survivors of sexual abuse"),
      feature: img(photos.gavel, "Pursuing justice and accountability for abuse survivors"),
    },
    "clergy-abuse": {
      hero: img(photos.stainedGlass, "Church stained glass representing clergy abuse accountability"),
      feature: img(photos.legalJustice, "Holding religious institutions accountable for abuse"),
    },
    "school-abuse": {
      hero: img(photos.schoolHallway, "School hallway where student safety is paramount"),
      feature: img(photos.supportHands, "Supporting families through school abuse litigation"),
    },
    "uber-lyft-sexual-assault": {
      hero: img(photos.rideshareCity, "City street at night where rideshare assaults occur"),
      feature: img(photos.legalJustice, "Holding rideshare companies accountable for passenger safety"),
    },
    "institutional-abuse": {
      hero: img(photos.institutionGate, "Institution entrance representing systemic accountability"),
      feature: img(photos.supportHands, "Empowering survivors of institutional abuse"),
    },
  },

  "human-trafficking": {
    _default: {
      hero: img(photos.gavel, "Legal justice for human trafficking survivors"),
      feature: img(photos.office, "Dedicated legal team fighting trafficking"),
    },
    "labor-trafficking": {
      hero: img(photos.courthouseSteps, "Courthouse steps representing justice for trafficking survivors"),
      feature: img(photos.helpingHands, "Support and advocacy for labor trafficking victims"),
    },
    "sex-trafficking": {
      hero: img(photos.legalJustice, "Aggressive civil litigation against sex trafficking enablers"),
      feature: img(photos.courthouseSteps, "Fighting for justice in federal trafficking cases"),
    },
    "trafficking-awareness": {
      hero: img(photos.awareness, "Community awareness and education about human trafficking"),
      feature: img(photos.communitySupport, "Community support in the fight against trafficking"),
    },
  },
};

// Temporary hero image used across all service pages until final photos are sourced
const HERO_IMAGE = "/images/hero.jpg";

export function getServiceImages(categorySlug, serviceSlug) {
  const category = serviceImageMap[categorySlug];
  const fallback = {
    hero: img(photos.gavel, "Babin Law professional legal services"),
    feature: img(photos.office, "Experienced Ohio legal team"),
  };

  const base = !category
    ? fallback
    : category[serviceSlug] || category._default || fallback;

  // Override hero with the local Columbus skyline photo for now
  return {
    ...base,
    hero: { src: HERO_IMAGE, alt: base.hero.alt },
  };
}

