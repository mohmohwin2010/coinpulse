import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CoinPulse",
  description: "Crypto Screener App with a built-in High-Frequency Terminal & Dashboard",
};

/**
 * Root layout component that provides the application's HTML skeleton, applies font variables and dark theme, and renders the app header and page content.
 *
 * @param children - The page content to render inside the layout's body.
 * @returns The root `<html>` element containing a `<body>` with font CSS variables, the `dark` class on `<html>`, the `Header` component, and the supplied `children`.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Header />
        {children}
      </body>
    </html>
  );
}