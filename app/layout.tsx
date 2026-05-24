import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";
import { InquiryProvider } from "@/context/InquiryContext";
import { InquiryModal } from "@/components/InquiryModal";
import { TopNav } from "@/components/TopNav";
import { BottomNav } from "@/components/BottomNav";

export const metadata: Metadata = {
  metadataBase: new URL("https://travelkings.com"),
  title: {
    default: "Travel Kings Premium | South India Luxury Travel",
    template: "%s | Travel Kings"
  },
  description: "Experience cinematic Kerala journeys through misty hills, waterfalls, tea plantations, and curated premium travel experiences with Travel Kings.",
  robots: { index: true, follow: true },
  authors: [{ name: "Travel Kings" }],
  category: "travel",
  icons: {
    icon: "/branding/logo-tk.png",
    shortcut: "/branding/logo-tk.png",
    apple: "/branding/logo-tk.png",
    other: [{ url: "/branding/logo-tk.svg", rel: "mask-icon" }]
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://travelkings.com",
    siteName: "Travel Kings",
    images: [{ url: "/og/homepage.jpg", width: 1200, height: 630, alt: "Travel Kings cinematic Kerala overview" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Kings Premium | South India Luxury Travel",
    description: "Experience cinematic Kerala journeys through misty hills, waterfalls, tea plantations, and curated premium travel experiences with Travel Kings.",
    images: ["https://travelkings.com/og/homepage.jpg"]
  }
};

export const viewport = {
  themeColor: "#000000"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-GYDLDLYP53"
        />

        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-GYDLDLYP53');
          `}
        </Script>
        <InquiryProvider>
          <TopNav />
          {children}
          <BottomNav />
          <InquiryModal />
        </InquiryProvider>
      </body>
    </html>
  );
}
