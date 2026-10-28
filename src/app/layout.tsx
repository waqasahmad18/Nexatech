import type { Metadata } from "next";
import localFont from "next/font/local";
import CursorLight from "@/components/CursorLight";
import "./globals.css";

const geistSans = localFont({
  src: [
    {
      path: "./fonts/GeistVF.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = localFont({
  src: [
    {
      path: "./fonts/GeistMonoVF.woff2", 
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bravioniyx Technologies — Custom Software & IT Services",
  description:
    "Bravioniyx Technologies designs and supports custom software, websites, RDP, servers, networking, IT support, chat servers, cloud and VPS, and Unity games.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-neutral-950`}
      >
        <CursorLight />
        {children}
      </body>
    </html>
  );
}
