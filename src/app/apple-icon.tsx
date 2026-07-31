import { ImageResponse } from "next/og";

import { brandMonogram } from "@/lib/brand";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          background: "#fafafa",
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox={brandMonogram.viewBox}
          fill="none"
        >
          <path
            d={brandMonogram.path}
            stroke="#09090b"
            strokeWidth={brandMonogram.strokeWidth.icon}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    size
  );
}
