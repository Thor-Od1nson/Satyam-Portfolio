import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { EngineeringPrinciple } from "@/lib/portfolio-content";

type PrincipleCardProps = {
  principle: EngineeringPrinciple;
};

export function PrincipleCard({ principle }: PrincipleCardProps) {
  return (
    <Card
      size="sm"
      className="h-full border border-border bg-elevated shadow-sm ring-1 ring-border/60"
    >
      <CardHeader className="gap-2">
        <CardTitle className="text-lg tracking-[var(--tracking-heading)] text-foreground sm:text-xl">
          {principle.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="mt-auto">
        <p className="text-sm leading-relaxed tracking-[var(--tracking-copy)] text-muted-foreground sm:text-base">
          {principle.description}
        </p>
      </CardContent>
    </Card>
  );
}
