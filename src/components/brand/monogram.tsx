import type { SVGProps } from "react";

import { brandMonogram } from "@/lib/brand";

type BrandMonogramProps = SVGProps<SVGSVGElement> & {
  title?: string;
};

export function BrandMonogram({ title, ...props }: BrandMonogramProps) {
  return (
    <svg
      viewBox={brandMonogram.viewBox}
      fill="none"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path
        d={brandMonogram.path}
        stroke="currentColor"
        strokeWidth={brandMonogram.strokeWidth.navbar}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
