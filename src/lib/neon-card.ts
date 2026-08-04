import {
  deliverooCaseStudySlug,
  ndialCaseStudySlug,
  featuredProjectContent,
} from "@/lib/portfolio-content";

export type NeonCardVariant = "a" | "b" | "c" | "d" | "hero";

const projectSurfaceVariants: Record<string, NeonCardVariant> = {
  [featuredProjectContent.name]: "hero",
  "IRCTC Tatkal Assistant": "a",
  "Salon Management System": "b",
  "Enterprise Social Media Publishing Platform": "d",
};

const caseStudyVariants: Record<string, NeonCardVariant> = {
  [deliverooCaseStudySlug]: "hero",
  [ndialCaseStudySlug]: "c",
};

export function getProjectSurfaceVariant(projectName: string): NeonCardVariant {
  return projectSurfaceVariants[projectName] ?? "a";
}

export function getProjectCaseStudyVariant(slug: string): NeonCardVariant {
  return caseStudyVariants[slug] ?? "a";
}
