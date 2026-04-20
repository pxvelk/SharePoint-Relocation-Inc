import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  const image = new ImageResponse(
    (
      <div
        style={{
          width: "512px",
          height: "512px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
        }}
      >
        <div
          style={{
            width: 400,
            height: 400,
            borderRadius: 90,
            background: "#0C1F39",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#7de3ed",
            fontSize: 280,
            fontWeight: 800,
            fontFamily: "sans-serif",
          }}
        >
          P
        </div>
      </div>
    ),
    { width: 512, height: 512 },
  );

  return new Response(image.body, {
    headers: { "Content-Type": "image/png", "Cache-Control": "public, max-age=31536000, immutable" },
  });
}
