import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "58px",
          background:
            "linear-gradient(155deg, #0C1F39 0%, #102C52 55%, #0c9ead 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              background: "#7de3ed",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0C1F39",
              fontWeight: 800,
            }}
          >
            P
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ fontSize: 34, fontWeight: 700 }}>PhasePoint Relocation</span>
            <span style={{ fontSize: 22, opacity: 0.8 }}>
              Commercial Relocation & Renovation Support
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: 60, fontWeight: 760, lineHeight: 1.1 }}>
            Move with minimal disruption
          </div>
          <div style={{ fontSize: 28, opacity: 0.85 }}>
            Structured business transitions across Quebec
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
