import type { Metadata } from "next";
import { Montserrat } from "@/app/fonts";

import "./globals.css";
import logo from "../app/img/wordlogo.png";
import Head from "next/head";



export const metadata: Metadata = {
  title: "Word Tabernacle Bible church",
  description: "Word Tabernacle official website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href={`${logo}`} sizes="any" />
        <link rel="shortcut icon" href={`${logo}`} type="image/x-icon" />
      </Head>
      <body className={Montserrat.className}>{children}</body>
    </html>
  );
}
