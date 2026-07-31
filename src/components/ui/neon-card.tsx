import * as React from "react";

import type { NeonCardVariant } from "@/lib/neon-card";
import { cn } from "@/lib/utils";

import { Card } from "./card";
import styles from "./neon-card.module.css";

export const neonCardChipClassName = styles.chip;
export const neonCardInteractiveChipClassName = styles.chipInteractive;

type NeonCardProps = React.ComponentProps<typeof Card> & {
  interactive?: boolean;
  variant?: NeonCardVariant;
  dashed?: boolean;
};

export function NeonCard({
  className,
  children,
  interactive = true,
  variant = "a",
  dashed = false,
  ...props
}: NeonCardProps) {
  return (
    <Card
      data-dashed={dashed ? "true" : "false"}
      data-interactive={interactive ? "true" : "false"}
      data-variant={variant}
      className={cn(
        "relative isolate overflow-hidden border-0 bg-transparent shadow-none ring-0",
        styles.neonCard,
        className
      )}
      {...props}
    >
      <span aria-hidden="true" className={cn(styles.layer, styles.borderGlow)} />
      <span aria-hidden="true" className={cn(styles.layer, styles.innerBorder)} />
      <span aria-hidden="true" className={cn(styles.layer, styles.surface)} />
      <span aria-hidden="true" className={cn(styles.layer, styles.geometry)} />
      <span aria-hidden="true" className={cn(styles.layer, styles.planes)} />
      <span aria-hidden="true" className={cn(styles.layer, styles.vignette)} />
      <span aria-hidden="true" className={cn(styles.layer, styles.glow)} />
      <span aria-hidden="true" className={cn(styles.layer, styles.grain)} />
      {children}
    </Card>
  );
}
