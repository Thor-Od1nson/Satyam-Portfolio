import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { SkillCategory } from "@/lib/portfolio-content";

type SkillCategoryCardProps = {
  category: SkillCategory;
};

export function SkillCategoryCard({ category }: SkillCategoryCardProps) {
  return (
    <Card
      size="sm"
      className="h-full border border-border bg-elevated shadow-sm ring-1 ring-border/60"
    >
      <CardHeader className="gap-2">
        <CardTitle className="text-lg tracking-[var(--tracking-heading)] text-foreground sm:text-xl">
          {category.title}
        </CardTitle>

        <CardDescription className="text-sm leading-relaxed tracking-[var(--tracking-copy)] text-muted-foreground">
          {category.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="mt-auto">
        <ul className="flex flex-wrap gap-2" aria-label={`${category.title} skills`}>
          {category.skills.map((skill) => (
            <li key={skill}>
              <Badge
                variant="outline"
                className="h-7 rounded-full border-border-subtle bg-background px-3 text-xs font-medium tracking-[var(--tracking-copy)] text-foreground"
              >
                {skill}
              </Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
