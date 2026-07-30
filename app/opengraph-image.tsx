import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site";

export const size = { width: 1200, height: 630 };
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
          padding: "72px",
          background: "#171717",
          color: "#fafaf7",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "520px",
            height: "520px",
            right: "-90px",
            top: "-120px",
            border: "1px solid rgba(244,211,11,.42)",
            borderRadius: "50%",
            boxShadow: "0 0 100px rgba(244,211,11,.12)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            textTransform: "uppercase",
            letterSpacing: "0.16em",
            fontSize: 18,
          }}
        >
          <span style={{ width: 12, height: 12, background: "#f4d30b" }} />
          AI systems · Robotics · Full-stack
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, lineHeight: 1, letterSpacing: "-0.05em" }}>
            {siteConfig.name}
          </div>
          <div style={{ marginTop: 22, fontSize: 34, color: "#b8b8b2" }}>
            {siteConfig.role}
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: 4,
            display: "flex",
            background: "linear-gradient(90deg, #f4d30b 0 30%, #343434 30%)",
          }}
        />
      </div>
    ),
    size,
  );
}
