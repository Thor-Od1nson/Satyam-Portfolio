import type { ReactNode } from "react";

import { ProjectCaseStudyLayout } from "@/components/project-case-study/project-case-study-layout";

type ProjectsLayoutProps = {
  children: ReactNode;
};

export default function ProjectsLayout({ children }: ProjectsLayoutProps) {
  return <ProjectCaseStudyLayout>{children}</ProjectCaseStudyLayout>;
}
