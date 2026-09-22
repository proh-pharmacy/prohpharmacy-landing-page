import { MetadataRoute } from "next";
import { branchesData } from "@/config/branches";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://prohpharmacy.com";
  const lastModified = "2026-09-22";
  const routes = [
    "",
    "/about",
    "/branches",
    "/services",
    "/wholesale",
    "/delivery",
    "/contact",
    "/privacy",
    "/terms",
    ...branchesData.map((branch) => `/branches/${branch.id}`),
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
  }));
}
