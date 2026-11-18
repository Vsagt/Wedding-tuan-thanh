import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Sửa "vietnam" thành "vietnamese" ở đây
const inter = Inter({ 
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
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
    <html lang="vi" langAttr={inter.variable}>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
