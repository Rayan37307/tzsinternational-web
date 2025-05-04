import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "TZS International - Travel and Tour Services",
  description:
    "Discover amazing destinations and tour packages with TZS International. Your journey to unforgettable experiences starts here.",
  keywords:
    "travel, tours, vacation, holiday packages, international travel, adventure tours",
  authors: [{ name: "TZS International" }],
  creator: "TZS International",
  publisher: "TZS International",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://tzsinternational.com"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TZS International - Travel and Tour Services",
    description:
      "Discover amazing destinations and tour packages with TZS International. Your journey to unforgettable experiences starts here.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://tzsinternational.com",
    siteName: "TZS International",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TZS International - Travel and Tour Services",
    description:
      "Discover amazing destinations and tour packages with TZS International. Your journey to unforgettable experiences starts here.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="apple-touch-icon" href="/logo192.png" />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
