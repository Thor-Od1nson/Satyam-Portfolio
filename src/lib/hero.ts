import { siteIdentity } from "@/lib/site";

export type HeroContent = {
  name: string;
  title: string;
  introduction: string;
  availability: {
    label: string;
    title: string;
    description: string;
  };
  featuredProject: {
    label: string;
    title: string;
    description: string;
    highlights: readonly string[];
    note: string;
  };
  ctas: ReadonlyArray<{
    label: string;
    kind: "default" | "secondary" | "outline";
    href?: string;
    external?: boolean;
  }>;
  availabilityNote: string;
};

export const heroContent: HeroContent = {
  name: siteIdentity.name,
  title: siteIdentity.heroRole,
  introduction:
    "Full-stack developer building scalable, enterprise-grade web applications, secure backend services, and API-driven workflows with React.js, Node.js, Express.js, and Spring Boot.",
  availability: {
    label: "Based in New Delhi",
    title: "Resume-verified contact details and project history.",
    description:
      "Everything shown here stays aligned with the resume and is limited to verified experience, skills, and project work.",
  },
  featuredProject: {
    label: "Featured Project Preview",
    title: "Deliveroo Restaurant Integration Platform",
    description:
      "Built a full-stack platform that connected restaurant operations with Deliveroo through responsive dashboards, Deliveroo API integrations, OAuth 2.0, webhook processing, and secure backend services.",
    highlights: [
      "React.js dashboards",
      "Node.js and Express.js APIs",
      "OAuth 2.0 and webhooks",
      "Supabase-backed services",
    ],
    note: "This project summary is taken directly from the resume project section.",
  },
  ctas: [
    {
      label: "View Projects",
      kind: "default",
      href: "/#projects-heading",
    },
    {
      label: "Email",
      kind: "secondary",
      href: "mailto:satyamsinghss861@gmail.com",
      external: true,
    },
    {
      label: "Contact",
      kind: "outline",
      href: "/#contact-heading",
    },
  ],
  availabilityNote:
    "Phone, email, and LinkedIn are available below.",
} as const;
