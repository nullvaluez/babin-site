import { personalInjuryContent } from "./personal-injury";
import { massTortContent } from "./mass-tort";
import { sexualAbuseContent } from "./sexual-abuse";
import { humanTraffickingContent } from "./human-trafficking";

const allContent = {
  "personal-injury": personalInjuryContent,
  "mass-tort": massTortContent,
  "sexual-abuse": sexualAbuseContent,
  "human-trafficking": humanTraffickingContent,
};

export function getServiceContent(categorySlug, serviceSlug) {
  return allContent[categorySlug]?.[serviceSlug] ?? null;
}

export {
  personalInjuryContent,
  massTortContent,
  sexualAbuseContent,
  humanTraffickingContent,
};
