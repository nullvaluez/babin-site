export const practiceAreaNav = [
  {
    category: "Personal Injury",
    href: "/personal-injury",
    items: [
      { title: "Car Accidents", href: "/personal-injury/car-accidents" },
      { title: "Truck Accidents", href: "/personal-injury/truck-accidents" },
      { title: "Motorcycle Accidents", href: "/personal-injury/motorcycle-accidents" },
      { title: "Bicycle Accidents", href: "/personal-injury/bicycle-accidents" },
      { title: "Pedestrian Accidents", href: "/personal-injury/pedestrian-accidents" },
      { title: "Brain Injuries", href: "/personal-injury/brain-injuries" },
      { title: "Spinal Cord Injuries", href: "/personal-injury/spinal-cord-injuries" },
      { title: "Burn Injuries", href: "/personal-injury/burn-injuries" },
      { title: "Premises Liability", href: "/personal-injury/premises-liability" },
      { title: "Slip & Fall", href: "/personal-injury/slip-and-fall" },
      { title: "Dog Bites", href: "/personal-injury/dog-bites" },
      { title: "DUI Accidents", href: "/personal-injury/dui-accidents" },
      { title: "Commercial Vehicle", href: "/personal-injury/commercial-vehicle-accidents" },
      { title: "Uber/Lyft Accidents", href: "/personal-injury/uber-lyft-accidents" },
      { title: "Mechanical Failure", href: "/personal-injury/mechanical-failure" },
      { title: "Workplace Injury", href: "/personal-injury/workplace-injury" },
      { title: "Uninsured/Underinsured", href: "/personal-injury/uninsured-underinsured" },
      { title: "Wrongful Death", href: "/personal-injury/wrongful-death" },
    ],
  },
  {
    category: "Mass Tort",
    href: "/mass-tort",
    items: [
      { title: "Dangerous Drugs & Devices", href: "/mass-tort" },
      { title: "3M Earplugs", href: "/mass-tort/3m-earplugs" },
      { title: "Elmiron", href: "/mass-tort/elmiron" },
      { title: "Hernia Mesh", href: "/mass-tort/hernia-mesh" },
      { title: "IVC Filter", href: "/mass-tort/ivc-filter" },
      { title: "Paragard IUD", href: "/mass-tort/paragard-iud" },
      { title: "Paraquat", href: "/mass-tort/paraquat" },
      { title: "Penuma", href: "/mass-tort/penuma" },
      { title: "PFOA & PFOS Water", href: "/mass-tort/pfoa-pfos-water" },
      { title: "Philips CPAP", href: "/mass-tort/philips-cpap" },
      { title: "Tylenol", href: "/mass-tort/tylenol" },
      { title: "Valsartan", href: "/mass-tort/valsartan" },
      { title: "Zantac", href: "/mass-tort/zantac" },
      { title: "Exachtech", href: "/mass-tort/exachtech" },
    ],
  },
  {
    category: "Sexual Abuse",
    href: "/sexual-abuse",
    items: [
      { title: "Sexual Abuse & Assault", href: "/sexual-abuse" },
      { title: "Clergy Sex Abuse", href: "/sexual-abuse/clergy-abuse" },
      { title: "School Sexual Abuse", href: "/sexual-abuse/school-abuse" },
      { title: "Uber/Lyft Sexual Assault", href: "/sexual-abuse/uber-lyft-sexual-assault" },
      { title: "Institutional Abuse", href: "/sexual-abuse/institutional-abuse" },
    ],
  },
  {
    category: "Human Trafficking",
    href: "/human-trafficking",
    items: [
      { title: "Human Trafficking", href: "/human-trafficking" },
      { title: "Labor Trafficking", href: "/human-trafficking/labor-trafficking" },
      { title: "Sex Trafficking", href: "/human-trafficking/sex-trafficking" },
      { title: "Trafficking Awareness", href: "/human-trafficking/trafficking-awareness" },
    ],
  },
];

export const otherServicesNav = [
  { title: "Class Action Lawsuits", href: "/class-actions" },
  { title: "Unpaid Wages", href: "/unpaid-wages" },
];

export const aboutNav = [
  { title: "Our Firm", href: "/about" },
  { title: "Core Values", href: "/about/core-values" },
  { title: "Blog / News", href: "/blog" },
  { title: "Media & Press", href: "/media" },
  { title: "Video Center", href: "/videos" },
  { title: "FAQs", href: "/faq" },
  { title: "Co-Counsel", href: "/about/co-counsel" },
];

export const mainNav = [
  { title: "Home", href: "/" },
  { title: "Practice Areas", href: "/practice-areas", megaMenu: true },
  { title: "Other Services", href: "#", dropdown: "otherServices" },
  { title: "Our Team", href: "/team" },
  { title: "About", href: "/about", dropdown: "about" },
  { title: "Contact", href: "/contact" },
];

export const footerNav = {
  quickLinks: [
    { title: "Home", href: "/" },
    { title: "About Our Firm", href: "/about" },
    { title: "Our Team", href: "/team" },
    { title: "Testimonials", href: "/testimonials" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
    { title: "Client Portal", href: "https://app.smartadvocate.com/cp/?lawfirm=BabinLaws", external: true },
  ],
  practiceAreas: [
    { title: "Personal Injury", href: "/personal-injury" },
    { title: "Mass Tort", href: "/mass-tort" },
    { title: "Sexual Abuse", href: "/sexual-abuse" },
    { title: "Human Trafficking", href: "/human-trafficking" },
    { title: "Class Actions", href: "/class-actions" },
    { title: "Unpaid Wages", href: "/unpaid-wages" },
  ],
};
