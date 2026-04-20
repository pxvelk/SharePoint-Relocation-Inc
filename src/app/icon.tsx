import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 512,
  height: 512,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0C1F39",
          borderRadius: 96,
        }}
      >
        <div
          style={{
            width: 340,
            height: 340,
            borderRadius: 70,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#7de3ed",
            color: "#0C1F39",
            fontSize: 220,
            fontWeight: 800,
            fontFamily: "sans-serif",
          }}
        >
          P
        </div>
      </div>
    ),
    { ...size },
  );
}
