import type { ReactNode } from "react";

type ProjectCaseStudySectionProps = {
  title: string;
  children: ReactNode;
  eyebrow?: string;
};

export function ProjectCaseStudySection({
  title,
  children,
  eyebrow,
}: ProjectCaseStudySectionProps) {
  const headingId = `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-heading`;

  return (
    <section className="space-y-[var(--space-5)]" aria-labelledby={headingId}>
      <div className="max-w-[var(--layout-reading)] space-y-[var(--space-2)]">
        {eyebrow ? (
          <p className="text-sm font-medium uppercase tracking-[var(--tracking-widest)] text-primary">
            {eyebrow}
          </p>
        ) : null}

        <h2
          id={headingId}
          className="text-2xl font-semibold tracking-[var(--tracking-heading)] text-foreground sm:text-3xl"
        >
          {title}
        </h2>
      </div>

      {children}
    </section>
  );
}
