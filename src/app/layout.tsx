import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import logo from '../app/img/wordlogo.png'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Word Tabernacle",
  description: "Word Tabernacle official website",
  icons: {
    icon: '../app/img/wordlogo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
