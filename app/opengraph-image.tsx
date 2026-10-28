import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const photo = await readFile(join(process.cwd(), "public/John.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;
  const nameParts = siteConfig.name.split(" ");
  const surname = nameParts.pop();
  const firstNames = nameParts.join(" ");

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#000",
          color: "#F7F4EF",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
            padding: 72,
          }}
        >
          <div style={{ display: "flex", fontSize: 28, color: "#9a9894" }}>
            {siteConfig.location}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 80,
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
              }}
            >
              <div style={{ display: "flex" }}>{firstNames}</div>
              <div style={{ display: "flex" }}>
                {surname}
                <span style={{ color: "#E74C3C" }}>.</span>
              </div>
            </div>
            <div style={{ display: "flex", fontSize: 36, marginTop: 24, color: "#b8b6b2" }}>
              {siteConfig.role}
            </div>
          </div>
        </div>

        {/* Zoomed in so the face reads at link-preview size. */}
        <div
          style={{
            display: "flex",
            position: "relative",
            width: 480,
            height: 630,
            overflow: "hidden",
          }}
        >
          <img
            src={photoSrc}
            width={800}
            height={1067}
            alt=""
            style={{ position: "absolute", left: -128, top: -231 }}
          />
        </div>
      </div>
    ),
    size,
  );
}
