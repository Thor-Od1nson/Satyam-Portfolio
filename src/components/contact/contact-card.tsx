import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ContactMethod } from "@/lib/portfolio-content";
import { cn } from "@/lib/utils";

type ContactCardProps = {
  method: ContactMethod;
};

export function ContactCard({ method }: ContactCardProps) {
  const detail = method.value ?? method.note;
  const isExternalWebsite = method.href?.startsWith("http") ?? false;
  const isInteractive = Boolean(method.href && method.value);

  const cardContent = (
    <>
      <CardHeader className="gap-[var(--space-3)]">
        <CardTitle className="text-lg tracking-[var(--tracking-heading)] text-foreground sm:text-xl">
          {method.label}
        </CardTitle>
      </CardHeader>

      <CardContent className="mt-auto space-y-[var(--space-3)]">
        {detail ? (
          <p className="text-sm leading-relaxed tracking-[var(--tracking-copy)] text-muted-foreground sm:text-base">
            {detail}
          </p>
        ) : null}

        {method.value ? (
          <span className="inline-flex text-sm font-medium tracking-[var(--tracking-copy)] text-foreground transition-colors group-hover/contact-card:text-primary group-focus-visible/contact-card:text-primary">
            {method.value}
          </span>
        ) : null}
      </CardContent>
    </>
  );

  return (
    <Card
      size="sm"
      className={cn(
        "h-full border border-border bg-elevated shadow-sm ring-1 ring-border/60",
        isInteractive
          ? "transition-transform duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:-translate-y-0.5 hover:shadow-md focus-within:-translate-y-0.5 focus-within:shadow-md focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background"
          : undefined
      )}
    >
      {isInteractive ? (
        <a
          href={method.href ?? undefined}
          target={isExternalWebsite ? "_blank" : undefined}
          rel={isExternalWebsite ? "noopener noreferrer" : undefined}
          className="group/contact-card flex h-full flex-col rounded-xl focus-visible:outline-none"
        >
          {cardContent}
        </a>
      ) : (
        cardContent
      )}
    </Card>
  );
}
