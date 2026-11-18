import type { Metadata } from "next";
import { Inter, Great_Vibes } from "next/font/google";
import "./globals.css";
import MusicPlayer from "../components/MusicPlayer"; // Thêm dòng này

const inter = Inter({ 
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
});

export const metadata: Metadata = {
  title: "Đám Cưới Tuấn & Thanh",
  description: "Mời bạn đến dự lễ cưới của chúng mình",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} ${greatVibes.variable}`}>
      <body className={`${inter.variable} antialiased`}>
        {children}
        {/* Thêm MusicPlayer vào đây */}
        <MusicPlayer />
      </body>
    </html>
  );
}
