import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { SITE_NAME } from "@/constants";

import "./globals.css";

const fontSora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: SITE_NAME,
  description: `${SITE_NAME} test by M.Abu Bakar`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSora.variable} antialiased`}>{children}</body>
    </html>
  );
}
