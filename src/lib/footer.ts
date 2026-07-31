import { siteContactDefinitions, siteIdentity } from "@/lib/site";

export const footerConfig = {
  tagline: siteIdentity.footerTagline,
  socialLinks: [siteContactDefinitions.linkedin],
  socialNote: "Resume-verified contact details are available in the contact section.",
} as const;
