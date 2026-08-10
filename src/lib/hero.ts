import { siteIdentity } from "@/lib/site";

export type HeroContent = {
  name: string;
  role: string;
  valueProposition: string;
  technologies: ReadonlyArray<string>;
  ctas: ReadonlyArray<{
    label: string;
    kind: "default" | "secondary" | "outline";
    href: string;
    external?: boolean;
    download?: boolean;
  }>;
};

export const heroContent: HeroContent = {
  name: siteIdentity.name,
  role: siteIdentity.heroRole,
  valueProposition:
    "Building enterprise platforms, scalable APIs, and production-ready backend systems.",
  technologies: ["Spring Boot", "React", "Node.js", "PostgreSQL", "Redis"],
  ctas: [
    {
      label: "View Projects",
      kind: "default",
      href: "/#featured-projects-heading",
    },
    {
      label: "Download Resume",
      kind: "secondary",
      href: "/resume.pdf",
      download: true,
    },
  ],
} as const;
