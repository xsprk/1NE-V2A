import type { Metadata } from "next";
import '@/styles/globals.css';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import { Footer } from "@/components/footer";
import { HeaderMenu } from "@/components/HeaderMenu";
import { inter } from '@/components/fonts';
import { ThemeProvider } from "@/components/darkmodel/theme-provider"



export const metadata: Metadata = {
  title: {
    template: '%s | 1NE video to audio converter',
    default: 'video to audio converter',
  },
  description: "A Browser-Based Video to Audio Converter",
  metadataBase: new URL('https://www.qianniuspace.com/'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href={`https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap`}
          rel="stylesheet"
        />
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID ?? ''} />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID ?? ''} />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <HeaderMenu />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
