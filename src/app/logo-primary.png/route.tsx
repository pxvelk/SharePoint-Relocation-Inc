import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  const image = new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "320px",
          display: "flex",
          alignItems: "center",
          padding: "40px 46px",
          background: "transparent",
          color: "#0C1F39",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: 160,
            height: 160,
            borderRadius: 34,
            background: "#0C1F39",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ color: "#7de3ed", fontSize: 112, fontWeight: 800 }}>P</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", marginLeft: 28 }}>
          <div style={{ fontSize: 74, fontWeight: 750 }}>PhasePoint Relocation</div>
          <div style={{ fontSize: 34, color: "#4E5F77" }}>
            Commercial Relocation & Renovation Support
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 320 },
  );

  return new Response(image.body, {
    headers: { "Content-Type": "image/png", "Cache-Control": "public, max-age=31536000, immutable" },
  });
}
