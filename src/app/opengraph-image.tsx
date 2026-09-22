import { ImageResponse } from "next/og";

export const alt = "Proh Pharmacy medicine supply and delivery across Ghana";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "72px 82px",
        color: "#022619",
        background: "linear-gradient(120deg, #ffffff 0%, #f2f9f5 48%, #dff8ef 100%)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: "650px" }}>
        <div style={{ display: "flex", color: "#2D6A4F", fontSize: 25, fontWeight: 700, letterSpacing: 3 }}>
          RETAIL • WHOLESALE • DELIVERY
        </div>
        <div style={{ display: "flex", marginTop: 22, fontSize: 68, fontWeight: 800, lineHeight: 1.05 }}>
          Proh Pharmacy
        </div>
        <div style={{ display: "flex", marginTop: 24, color: "#4B6358", fontSize: 30, lineHeight: 1.35 }}>
          Dependable medicine supply and delivery across Ghana
        </div>
      </div>

      <div
        style={{
          width: 300,
          height: 300,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 44,
          color: "white",
          background: "#087A2D",
          boxShadow: "0 26px 60px rgba(2, 38, 25, 0.18)",
          fontSize: 138,
          fontWeight: 900,
        }}
      >
        P<span style={{ color: "#F8010F" }}>+</span>
      </div>
    </div>,
    size,
  );
}
