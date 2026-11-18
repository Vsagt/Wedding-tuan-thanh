import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Đã sửa "vietnam" thành "vietnamese"
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
    // Loại bỏ langAttr và đưa inter.variable vào className
    <html lang="vi" className={inter.variable}>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
