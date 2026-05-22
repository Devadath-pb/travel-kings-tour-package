import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";
import { InquiryProvider } from "@/context/InquiryContext";
import { InquiryModal } from "@/components/InquiryModal";
import { TopNav } from "@/components/TopNav";
import { BottomNav } from "@/components/BottomNav";

export const metadata: Metadata = {
  title: "Travel Kings Premium | South India Luxury Travel",
  description:
    "Cinematic South India tours, curated stays, and premium journeys with Travel Kings.",
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
