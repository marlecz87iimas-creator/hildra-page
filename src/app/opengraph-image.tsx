import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { SITE } from "@/lib/constants";

export const alt = `${SITE.name} — Tecnología más humana`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const iconData = await readFile(
    join(process.cwd(), "public/brand/hildra-icon-square.png"),
  );
  const iconSrc = `data:image/png;base64,${iconData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(145deg, #061018 0%, #0A192F 48%, #163A66 100%)",
          padding: "64px",
          color: "#EEF4FB",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <img src={iconSrc} width={72} height={72} alt="" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: 2 }}>
              {SITE.name.toUpperCase()}
            </div>
            <div
              style={{
                fontSize: 16,
                color: "#9DB0C7",
                letterSpacing: 3,
                textTransform: "uppercase",
              }}
            >
              {SITE.brandLine}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 52,
              fontWeight: 700,
              lineHeight: 1.15,
              maxWidth: 900,
            }}
          >
            Tecnología más humana para simplificar la vida y los negocios.
          </div>
          <div style={{ fontSize: 24, color: "#9DB0C7", maxWidth: 820 }}>
            Software, apps y sistemas a la medida para empresas en crecimiento.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
