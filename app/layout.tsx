import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "vietnam"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin", "vietnam"],
  weight: ["400", "500", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "TUẤN&THANH Wedding Invitation",
  description: "Lễ cưới của Tuấn & Thanh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${playfair.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F5F1E6] text-[#4A3728] font-sans">
        {children}
      </body>
    </html>
  );
}
