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
  title: "Greenland Overseas (RL-040) - Connecting People with Possibilities",
  description:
    "Leading international recruitment and manpower solutions company specializing in connecting skilled professionals with global opportunities. Expertise in bulk recruitment, skill development, and foreign language training.",
  keywords:
    "recruitment, manpower, international recruitment, overseas jobs, skill development, foreign language training, staffing solutions, global employment",
  authors: [{ name: "Greenland Overseas" }],
  creator: "Greenland Overseas",
  publisher: "Greenland Overseas",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://greenlandoverseas.com"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Greenland Overseas (RL-040) - Connecting People with Possibilities",
    description:
      "Leading international recruitment and manpower solutions company specializing in connecting skilled professionals with global opportunities.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://greenlandoverseas.com",
    siteName: "Greenland Overseas",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Greenland Overseas (RL-040) - Connecting People with Possibilities",
    description:
      "Leading international recruitment and manpower solutions company specializing in connecting skilled professionals with global opportunities.",
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
        <meta name="theme-color" content="#ff6600" />
        <link rel="apple-touch-icon" href="/logo192.png" />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
