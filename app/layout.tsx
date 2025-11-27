import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import AsideMenu from "./components/menu/AsideMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coderfy",
  description:
    "Listen to the best selection of songs to help you concentrate, ad-free.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ViewTransitions>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="flex flex-row flex-wrap items-stretch relative h-screen p-2 gap-2 rounded-sm">
            <div className="flex gap-2 w-screen">
              <AsideMenu />
              {children}
            </div>
          </div>
        </body>
      </ViewTransitions>
    </html>
  );
}
