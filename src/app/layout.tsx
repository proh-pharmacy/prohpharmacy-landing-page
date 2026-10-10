import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { OrganizationSchema, WebSiteSchema } from "@/components/seo/pharmacy-schema";
import Nprogressprovider from "@/components/providers/nprogress-provider";
import { ChatwootProvider } from "@/components/providers/chatwoot-provider";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { DEFAULT_SOCIAL_IMAGE } from "@/lib/seo";
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
    default: "Proh Pharmacy | Medicine Supply & Delivery in Ghana",
    template: "%s | Proh Pharmacy",
  },
  description:
    "Proh Pharmacy provides retail and wholesale medicine supply to individuals and pharmacies, with reliable delivery anywhere in Ghana.",
  authors: [{ name: "Proh Pharmacy" }],
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
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
    title: "Proh Pharmacy | Medicine Supply & Delivery in Ghana",
    description:
      "Reliable retail and wholesale medicine supply to individuals and pharmacies with nationwide delivery across Ghana.",
    url: "https://prohpharmacy.com/",
    siteName: "Proh Pharmacy",
    images: [
      {
        url: DEFAULT_SOCIAL_IMAGE,
        width: 1200,
        height: 630,
        alt: "Proh Pharmacy medicine supply and delivery in Ghana",
      },
    ],
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Proh Pharmacy | Medicine Supply & Delivery in Ghana",
    description:
      "Reliable retail and wholesale medicine supply to individuals and pharmacies with nationwide delivery across Ghana.",
    images: [DEFAULT_SOCIAL_IMAGE],
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
    <html lang="en-GH" className={inter.variable} data-scroll-behavior="smooth">
      <body className="min-h-screen flex flex-col bg-white text-main-text font-sans antialiased overflow-x-hidden w-full max-w-[100vw]">
        <Nprogressprovider>
          <ScrollToTop />
          <WebSiteSchema />
          <OrganizationSchema />
          <TopBar />
          <Header />
          <main className="flex-grow overflow-x-hidden w-full">{children}</main>
          <Footer />
          <ChatwootProvider />
        </Nprogressprovider>
      </body>
    </html>
  );
}
