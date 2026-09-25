function normalizeSiteUrl(url: string) {
  const normalizedUrl = url.startsWith("http") ? url : `https://${url}`;

  return normalizedUrl.replace(/\/+$/, "");
}

function getSiteUrl() {
  const envUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL ??
    process.env.URL;

  if (envUrl) {
    return normalizeSiteUrl(envUrl);
  }

  return "http://localhost:3000";
}

const siteUrl = getSiteUrl();

export type SiteContactDefinition = {
  label: string;
  value: string | null;
  href: string | null;
  note?: string;
};

export const siteIdentity = {
  name: "Satyam Singh",
  initials: "SD",
  heroRole: "Full-Stack Developer",
  navigationTagline: "Full-Stack Developer",
  footerTagline:
    "Building enterprise-grade web applications, secure backend services, and scalable product integrations.",
  description:
    "Portfolio of Satyam Singh, a Full-Stack Developer building enterprise-grade web applications, secure backend services, and scalable integrations with React.js, Node.js, Express.js, and Spring Boot.",
} as const;

export const siteContactDefinitions = {
  email: {
    label: "Email",
    value: "satyamsinghss861@gmail.com",
    href: "mailto:satyamsinghss861@gmail.com",
  },
  linkedin: {
    label: "LinkedIn",
    value: "linkedin.com/in/satyam88",
    href: "https://www.linkedin.com/in/satyam88/",
  },
} satisfies {
  email: SiteContactDefinition;
  linkedin: SiteContactDefinition;
};

export const siteConfig = {
  name: siteIdentity.name,
  title: `${siteIdentity.name} | ${siteIdentity.heroRole}`,
  description: siteIdentity.description,
  url: siteUrl,
  ogImage: "/opengraph-image",
  ogImageAlt:
    `${siteIdentity.name} portfolio preview for full-stack development, enterprise SaaS work, and verified resume projects.`,
  creator: siteIdentity.name,
  authors: [{ name: siteIdentity.name, url: siteUrl }],
  keywords: [
    "Satyam Singh",
    "Satyam Singh portfolio",
    "full-stack developer",
    "enterprise web applications",
    "Deliveroo Restaurant Integration Platform",
    "IRCTC Tatkal Assistant",
    "Salon Management System",
    "NDial",
    "License Management System",
    "CRM dashboard",
    "React.js",
    "PostgreSQL",
    "Next.js",
    "Node.js",
    "Express.js",
    "Spring Boot",
    "TypeScript",
    "RESTful APIs",
    "New Delhi",
  ],
} as const;

export const siteMetadataBase = new URL(siteUrl);
