import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Proh Pharmacy",
    short_name: "Proh Pharmacy",
    description:
      "Retail and wholesale pharmaceutical medicine supply and delivery across Ghana.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#022619",
    icons: [
      {
        src: "/favicon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
