import Image from "next/image";

import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NeonCard } from "@/components/ui/neon-card";
import type { NeonCardVariant } from "@/lib/neon-card";
import type { ProjectCaseStudyGallery } from "@/lib/project-case-studies";

import { ProjectCaseStudySection } from "./project-case-study-section";

type ProjectCaseStudyGallerySectionProps = {
  gallery: ProjectCaseStudyGallery;
  variant: NeonCardVariant;
};

export function ProjectCaseStudyGallerySection({
  gallery,
  variant,
}: ProjectCaseStudyGallerySectionProps) {
  return (
    <ProjectCaseStudySection title={gallery.title}>
      <div className="grid gap-[var(--space-4)]">
        {gallery.introduction ? (
          <p className="max-w-[var(--layout-copy)] text-sm leading-relaxed tracking-[var(--tracking-copy)] text-muted-foreground sm:text-base">
            {gallery.introduction}
          </p>
        ) : null}

        {gallery.items.length > 0 ? (
          <div className="grid gap-[var(--space-4)] md:grid-cols-2">
            {gallery.items.map((item) => (
              <NeonCard key={item.title} variant={variant}>
                <CardHeader className="gap-2">
                  <CardTitle className="text-lg tracking-[var(--tracking-heading)] text-foreground sm:text-xl">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-[var(--space-3)]">
                  {item.image ? (
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[calc(var(--radius-2xl)+0.125rem)] border border-border-subtle bg-background/60">
                      <Image
                        src={item.image.src}
                        alt={item.image.alt}
                        fill
                        unoptimized
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[16/10] rounded-[calc(var(--radius-2xl)+0.125rem)] border border-dashed border-border bg-background/60" />
                  )}
                  <p className="text-sm leading-relaxed tracking-[var(--tracking-copy)] text-muted-foreground sm:text-base">
                    {item.description}
                  </p>
                  {item.note ? (
                    <p className="text-sm leading-relaxed tracking-[var(--tracking-copy)] text-muted-foreground sm:text-base">
                      {item.note}
                    </p>
                  ) : null}
                </CardContent>
              </NeonCard>
            ))}
          </div>
        ) : null}

        {gallery.note ? (
          <NeonCard dashed variant={variant}>
            <CardContent className="pt-[var(--space-5)]">
              <p className="text-sm leading-relaxed tracking-[var(--tracking-copy)] text-muted-foreground sm:text-base">
                {gallery.note}
              </p>
            </CardContent>
          </NeonCard>
        ) : null}
      </div>
    </ProjectCaseStudySection>
  );
}
