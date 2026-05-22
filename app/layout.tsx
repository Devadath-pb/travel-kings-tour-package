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
