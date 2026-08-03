import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

import styles from "./editorial-layout.module.css";

type EditorialPageProps = ComponentPropsWithoutRef<"div">;

export function EditorialPage({ children, className, ...props }: EditorialPageProps) {
  return (
    <div className={cn(styles.page, className)} {...props}>
      <div className={styles.background} aria-hidden="true">
        <div className={styles.texture} />
        <div className={styles.wash} />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

type EditorialSectionProps<T extends ElementType = "section"> = {
  as?: T;
  size?: "hero" | "default" | "compact";
  containerClassName?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children">;

const sectionSpacing = {
  hero: "py-[clamp(5rem,8vw,8rem)] md:py-[clamp(5.5rem,8vw,9rem)]",
  default: "py-[clamp(4.25rem,6vw,6.25rem)] md:py-[clamp(4.75rem,6vw,7rem)]",
  compact: "py-[clamp(2.75rem,4vw,4.25rem)] md:py-[clamp(3.25rem,4vw,4.75rem)]",
} as const;

export function EditorialSection<T extends ElementType = "section">({
  as,
  size = "default",
  className,
  containerClassName,
  children,
  ...props
}: EditorialSectionProps<T>) {
  const Component = as ?? "section";

  return (
    <Component className={cn("relative", className)} {...props}>
      <div
        className={cn(
          "mx-auto w-full max-w-[var(--layout-canvas)] px-[var(--space-gutter)]",
          sectionSpacing[size],
          containerClassName
        )}
      >
        {children}
      </div>
    </Component>
  );
}

type ContentColumnProps = ComponentPropsWithoutRef<"div">;

export function ContentColumn({ className, ...props }: ContentColumnProps) {
  return <div className={cn("max-w-[44rem]", className)} {...props} />;
}

type SectionHeaderProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  titleId?: string;
  titleAs?: ElementType;
  align?: "left" | "center";
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  titleId,
  titleAs,
  align = "left",
  className,
  eyebrowClassName,
  titleClassName,
  descriptionClassName,
}: SectionHeaderProps) {
  const Heading = titleAs ?? "h2";

  return (
    <div
        className={cn(
          "space-y-[var(--space-5)]",
          align === "center" ? "mx-auto text-center" : undefined,
          className
        )}
    >
      {eyebrow ? (
        <p
            className={cn(
              "text-2xs font-medium uppercase tracking-[0.16em] text-primary sm:text-xs",
              eyebrowClassName
            )}
          >
          {eyebrow}
        </p>
      ) : null}

      <Heading
        id={titleId}
        className={cn(
          "max-w-[15ch] text-3xl font-semibold tracking-[var(--tracking-display)] text-foreground sm:text-4xl xl:text-5xl",
          titleClassName
        )}
      >
        {title}
      </Heading>

      {description ? (
        <div
          className={cn(
            "max-w-[40rem] text-base leading-[1.78] tracking-[var(--tracking-copy)] text-muted-foreground sm:text-lg",
            align === "center" ? "mx-auto" : undefined,
            descriptionClassName
          )}
        >
          {description}
        </div>
      ) : null}
    </div>
  );
}

type SectionDividerProps = ComponentPropsWithoutRef<"div">;

export function SectionDivider({ className, ...props }: SectionDividerProps) {
  return (
      <div
        aria-hidden="true"
        className={cn(
          "mx-auto w-full max-w-[var(--layout-canvas)] px-[var(--space-gutter)] py-[clamp(0.5rem,1.4vw,1rem)]",
          className
        )}
        {...props}
      >
      <div className={styles.divider} />
    </div>
  );
}
