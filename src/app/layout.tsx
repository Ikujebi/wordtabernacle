import type { Metadata } from "next";
import { Montserrat } from "@/app/fonts";
import "./globals.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

export const metadata: Metadata = {
  title: "Word Tabernacle Bible church",
  description: "Word Tabernacle Bible church official website",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Montserrat.className}>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}