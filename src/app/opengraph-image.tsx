import { ImageResponse } from "next/og";

import { siteConfig, siteIdentity } from "@/lib/site";

export const alt = siteConfig.ogImageAlt;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

function getSubtitle() {
  const prefix = `Portfolio of ${siteIdentity.name}, a ${siteIdentity.heroRole} `;

  if (siteConfig.description.startsWith(prefix)) {
    return siteConfig.description.slice(prefix.length);
  }

  return siteConfig.description;
}

export default function OpenGraphImage() {
  const subtitle = getSubtitle();

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#09090b",
          color: "#fafafa",
          padding: "56px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              height: "92px",
              width: "92px",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "28px",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              background: "linear-gradient(180deg, rgba(24, 24, 27, 0.98), rgba(39, 39, 42, 0.92))",
              boxShadow:
                "inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 24px 64px -36px rgba(168, 85, 247, 0.45)",
              color: "#c084fc",
              fontSize: "38px",
              fontWeight: 700,
              letterSpacing: "-0.06em",
            }}
          >
            {siteIdentity.initials}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: "22px",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#a1a1aa",
              }}
            >
              {siteIdentity.heroRole}
            </div>

            <div
              style={{
                display: "flex",
                fontSize: "34px",
                fontWeight: 600,
                letterSpacing: "-0.04em",
                color: "#fafafa",
              }}
            >
              {siteIdentity.name}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            maxWidth: "920px",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "98px",
              fontWeight: 700,
              lineHeight: 0.98,
              letterSpacing: "-0.06em",
            }}
          >
            {siteIdentity.name}
          </div>

          <div
            style={{
              display: "flex",
              fontSize: "42px",
              fontWeight: 500,
              lineHeight: 1.15,
              letterSpacing: "-0.04em",
              color: "#d4d4d8",
            }}
          >
            {siteIdentity.heroRole}
          </div>

          <div
            style={{
              display: "flex",
              maxWidth: "880px",
              fontSize: "28px",
              lineHeight: 1.45,
              color: "#a1a1aa",
            }}
          >
            {subtitle}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <div
            style={{
              display: "flex",
              height: "14px",
              width: "14px",
              borderRadius: "9999px",
              background: "#a855f7",
              boxShadow: "0 0 42px rgba(168, 85, 247, 0.48)",
            }}
          />

          <div
            style={{
              display: "flex",
              fontSize: "22px",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#d4d4d8",
            }}
          >
            {siteConfig.name}
          </div>
        </div>
      </div>
    ),
    size
  );
}
