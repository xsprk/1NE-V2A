import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import { GoogleAnalyticsTracking } from "@/components/GoogleAnalytics";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "video to audio converter",
  description: "A Browser-Based Video to Audio Converter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalyticsTracking />
      <GoogleTagManager gtmId="GTM-K5WPSNPR" />
      <body className={inter.className}>{children}</body>
      {/* <GoogleAnalytics gaId="G-M0S8FPNR8E" /> */}
    </html>
  );
}
