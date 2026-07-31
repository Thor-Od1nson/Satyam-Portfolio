import type { ReactNode } from "react";

type ProjectCaseStudyLayoutProps = {
  children: ReactNode;
};

export function ProjectCaseStudyLayout({ children }: ProjectCaseStudyLayoutProps) {
  return (
    <div className="mx-auto w-full max-w-[var(--layout-hero)] px-[var(--space-gutter)] pb-[var(--space-section)] pt-[var(--space-section)]">
      {children}
    </div>
  );
}
