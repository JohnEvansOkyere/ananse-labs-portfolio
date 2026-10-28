import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "#000",
          color: "#F7F4EF",
          fontSize: 46,
          fontWeight: 700,
          borderRadius: 14,
        }}
      >
        J<span style={{ color: "#E74C3C" }}>.</span>
      </div>
    ),
    size,
  );
}
