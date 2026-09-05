import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PharmacySchema } from "@/components/seo/pharmacy-schema";
import Nprogressprovider from "@/components/providers/nprogress-provider";
import { WhatsAppFab } from "@/components/ui/whatsapp-fab";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#022619",
  width: "device-width",
  initialScale: 1,
};

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
  alternates: {
    canonical: "https://prohpharmacy.com/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Proh Pharmacy | Retail & Wholesale Medicine Delivery in Ghana",
    description:
      "Reliable retail and wholesale medicine supply to individuals and pharmacies with nationwide delivery across Ghana.",
    url: "https://prohpharmacy.com/",
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
  twitter: {
    card: "summary_large_image",
    title: "Proh Pharmacy | Retail & Wholesale Medicine Delivery in Ghana",
    description:
      "Reliable retail and wholesale medicine supply to individuals and pharmacies with nationwide delivery across Ghana.",
    images: ["/images/prohpharmacy_icon.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <body className="min-h-screen flex flex-col bg-white text-main-text font-sans antialiased overflow-x-hidden w-full max-w-[100vw]">
        <Nprogressprovider>
          <ScrollToTop />
          <PharmacySchema />
          <TopBar />
          <Header />
          <main className="flex-grow overflow-x-hidden w-full">{children}</main>
          <Footer />
          <WhatsAppFab />
        </Nprogressprovider>
      </body>
    </html>
  );
}
