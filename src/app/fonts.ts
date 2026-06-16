// src/app/fonts.ts
import localFont from "next/font/local";

export const lawFont = localFont({
  src: "../assets/fonts/law-font-regular.woff2",
  variable: "--font-law",
  display: "swap",
});

export const SourceCodePro = localFont({
  src: "../assets/fonts/LibreBaskerville-Italic-VariableFont_wght.ttf",
  variable: "--font-source-code-pro",
  display: "swap",
});

export const Nunito = localFont({
  src: "../assets/fonts/Nunito-VariableFont_wght.ttf",
  variable: "--font-nunito",
  display: "swap",
});

export const Roboto = localFont({
  src: "../assets/fonts/Roboto-VariableFont_wdth,wght.ttf",
  variable: "--font-roboto",
  display: "swap",
});

export const Gyahegi = localFont({
  src: "../assets/fonts/Gyahegi Regular.ttf",
  variable: "--font-gyahegi",
  display: "swap",
});

export const Montserrat = localFont({
  src: "../assets/fonts/Montserrat-VariableFont_wght.ttf",
  variable: "--font-montserrat",
  display: "swap",
});