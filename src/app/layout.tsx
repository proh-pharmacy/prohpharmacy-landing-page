import type { Metadata } from "next";
import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Proh Pharmacy | Retail & Wholesale Medicine Delivery in Ghana",
    template: "%s | Proh Pharmacy",
  },
  description:
    "Proh Pharmacy provides retail and wholesale medicine supply to individuals and pharmacies, with reliable delivery anywhere in Ghana.",
  keywords: [
    "Pharmacy in Ghana",
    "Wholesale medicine supplier Ghana",
    "Pharmaceutical supplier Ghana",
    "Medicine delivery Ghana",
    "Wholesale pharmacy Ghana",
    "Proh Pharmacy",
  ],
  authors: [{ name: "Proh Pharmacy" }],
  metadataBase: new URL("https://prohpharmacy.com"),
  openGraph: {
    title: "Proh Pharmacy | Retail & Wholesale Medicine Delivery in Ghana",
    description:
      "Reliable retail and wholesale medicine supply to individuals and pharmacies with nationwide delivery across Ghana.",
    url: "https://prohpharmacy.com",
    siteName: "Proh Pharmacy",
    images: [
      {
        url: "/images/prohpharmacy_icon.png",
        width: 1024,
        height: 1024,
        alt: "Proh Pharmacy Logo",
      },
    ],
    locale: "en_GH",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-white text-main-text antialiased">
        <TopBar />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
