import type { Metadata } from "next";
import { Red_Hat_Text } from "next/font/google";
import "./globals.css";

const redhattext = Red_Hat_Text({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Countdown Timer",
  description: "A simple countdown timer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={redhattext.className}>{children}</body>
    </html>
  );
}
