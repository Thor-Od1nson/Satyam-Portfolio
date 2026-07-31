import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ExperienceEntry } from "@/lib/portfolio-content";

type ExperienceCardProps = {
  entry: ExperienceEntry;
};

export function ExperienceCard({ entry }: ExperienceCardProps) {
  return (
    <article>
      <Card className="border border-border bg-elevated shadow-sm ring-1 ring-border/60">
        <CardHeader className="gap-[var(--space-4)]">
          <div className="flex flex-col gap-[var(--space-4)] md:flex-row md:items-start md:justify-between">
            <div className="space-y-2">
              <p className="text-xs font-medium uppercase tracking-[var(--tracking-widest)] text-primary">
                {entry.company}
              </p>

              <CardTitle className="text-xl tracking-[var(--tracking-heading)] text-foreground sm:text-2xl">
                {entry.role}
              </CardTitle>
            </div>

            <div className="space-y-1 text-sm tracking-[var(--tracking-copy)] text-muted-foreground md:text-right">
              <p>{entry.period}</p>
              {entry.location ? <p>{entry.location}</p> : null}
            </div>
          </div>

          <CardDescription className="max-w-[var(--layout-copy)] text-sm leading-relaxed tracking-[var(--tracking-copy)] text-muted-foreground sm:text-base">
            {entry.overview}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-[var(--space-5)]">
          <div className="space-y-[var(--space-3)]">
            <h3 className="text-xs font-medium uppercase tracking-[var(--tracking-widest)] text-muted-foreground">
              Technology
            </h3>

            <ul className="flex flex-wrap gap-2" aria-label={`${entry.role} technology stack`}>
              {entry.stack.map((technology) => (
                <li key={technology}>
                  <Badge
                    variant="outline"
                    className="h-7 rounded-full border-border-subtle bg-background px-3 text-xs font-medium tracking-[var(--tracking-copy)] text-foreground"
                  >
                    {technology}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-[var(--space-3)]">
            <h3 className="text-xs font-medium uppercase tracking-[var(--tracking-widest)] text-muted-foreground">
              Engineering highlights
            </h3>

            <ul className="grid gap-3" aria-label={`${entry.role} engineering highlights`}>
              {entry.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span
                    className="mt-2 inline-flex size-2.5 shrink-0 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-relaxed tracking-[var(--tracking-copy)] text-foreground/92 sm:text-base">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </article>
  );
}
