import { siteIdentity } from "@/lib/site";

export type HeroContent = {
  name: string;
  title: string;
  introduction: string;
  signals: ReadonlyArray<{
    label: string;
    value: string;
  }>;
  ctas: ReadonlyArray<{
    label: string;
    kind: "default" | "secondary" | "outline";
    href?: string;
    external?: boolean;
  }>;
  footnote: string;
};

export const heroContent: HeroContent = {
  name: siteIdentity.name,
  title:
    "Full-Stack Developer building scalable web applications, secure backend services, and API integrations.",
  introduction:
    "I work across React.js, Next.js, Node.js, Express.js, and Spring Boot to ship systems that move cleanly from interface to backend workflow.",
  signals: [
    {
      label: "Who I am",
      value: "A full-stack developer based in New Delhi with experience across enterprise SaaS, CRM, and operational software.",
    },
    {
      label: "What I build",
      value: "Responsive product surfaces, secure backend services, API integrations, and role-aware workflows for real business systems.",
    },
    {
      label: "Why scroll",
      value: "The rest of the page shows the product contexts, engineering capabilities, and implementation principles behind that work.",
    },
  ],
  ctas: [
    {
      label: "View Work",
      kind: "default",
      href: "/#selected-project-heading",
    },
    {
      label: "Email",
      kind: "secondary",
      href: "mailto:satyamsinghss861@gmail.com",
      external: true,
    },
    {
      label: "Experience",
      kind: "outline",
      href: "/#experience-heading",
    },
  ],
  footnote:
    "Recent work includes Deliveroo integrations, contact center products, CRM workflows, collections dashboards, and license management systems.",
} as const;
