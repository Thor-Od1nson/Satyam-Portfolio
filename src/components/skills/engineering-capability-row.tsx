import type { EngineeringCapability } from "@/lib/portfolio-content";

type EngineeringCapabilityRowProps = {
  capability: EngineeringCapability;
};

export function EngineeringCapabilityRow({ capability }: EngineeringCapabilityRowProps) {
  return (
    <article className="grid gap-3.5 border-t border-border-subtle/80 py-[var(--space-6)] md:grid-cols-[minmax(0,14rem)_1fr] md:gap-[var(--space-6)]">
      <div>
        <h3 className="text-xl font-semibold tracking-[var(--tracking-heading)] text-foreground sm:text-2xl">
          {capability.title}
        </h3>
      </div>

      <div className="space-y-3">
        <p className="text-xs leading-relaxed tracking-[var(--tracking-copy)] text-muted-foreground sm:text-sm">
          {capability.technologies.join(" • ")}
        </p>

        <p className="max-w-[40rem] text-sm leading-[1.76] tracking-[var(--tracking-copy)] text-foreground/92 sm:text-base">
          {capability.description}
        </p>
      </div>
    </article>
  );
}
