import type { ExperienceEntry } from "@/lib/portfolio-content";

type ExperienceTimelineItemProps = {
  entry: ExperienceEntry;
};

export function ExperienceTimelineItem({ entry }: ExperienceTimelineItemProps) {
  return (
    <article className="space-y-[var(--space-5)]">
      <header className="grid gap-3.5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
        <div className="space-y-2">
          <p className="text-2xs font-medium uppercase tracking-[0.14em] text-primary">
            {entry.company}
          </p>

          <h3 className="max-w-[16ch] text-xl font-semibold tracking-[var(--tracking-heading)] text-foreground sm:text-3xl">
            {entry.role}
          </h3>
        </div>

        <div className="space-y-1 text-sm tracking-[var(--tracking-copy)] text-muted-foreground sm:text-right">
          <p>{entry.period}</p>
          {entry.location ? <p>{entry.location}</p> : null}
        </div>
      </header>

      <p className="max-w-[40rem] text-base leading-[1.78] tracking-[var(--tracking-copy)] text-foreground/92 sm:text-lg">
        {entry.overview}
      </p>

      <ul className="grid gap-3" aria-label={`${entry.role} key achievements`}>
        {entry.highlights.map((highlight) => (
          <li key={highlight} className="grid grid-cols-[auto_1fr] gap-3">
            <span className="pt-[0.45rem] text-sm text-primary" aria-hidden="true">
              /
            </span>
            <span className="text-sm leading-relaxed tracking-[var(--tracking-copy)] text-muted-foreground sm:text-base">
              {highlight}
            </span>
          </li>
        ))}
      </ul>

      <div className="space-y-2.5">
        <p className="text-2xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
          Technologies
        </p>
        <p className="text-sm leading-relaxed tracking-[var(--tracking-copy)] text-muted-foreground">
          {entry.stack.join(" • ")}
        </p>
      </div>
    </article>
  );
}
