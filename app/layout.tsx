import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { HeaderSticky } from "./components/header-sticky";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moss | Stay Present. Revisit What Mattered.",
  description:
    "Moss is a wearable and companion app concept designed to help churchgoers record sermons, revisit key points and Scripture, and reflect during the week.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
      <HeaderSticky/>
        {children}
      </body>
    </html>
  );
}
