import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const font = Raleway({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nebula ✨",
  description: "Explore some of the most incredible websites on the web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.variable}`}>{children}</body>
    </html>
  );
}
