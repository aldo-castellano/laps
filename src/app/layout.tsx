import "./globals.css";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Outfit } from "next/font/google";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/footer/footer";
import {
  GoogleTagManagerBody,
  GoogleTagManagerHead,
} from "@/components/analytics/google-tag-manager";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport: Viewport = { width: "device-width", initialScale: 1 };
export const metadata: Metadata = {
  title: "Limpieza profesional en Barcelona | LAPS",
  description:
    "Limpieza profesional en Barcelona para oficinas, despachos y locales comerciales. Servicios recurrentes, puntuales y limpieza profunda a vapor.",
  metadataBase: new URL("https://www.lapservice.es/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Limpieza profesional en Barcelona | LAPS",
    description:
      "Servicios de limpieza para oficinas, despachos y locales comerciales en Barcelona, con productos responsables y limpieza profunda a vapor.",
    url: "https://www.lapservice.es/",
    siteName: "LAPS",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Limpieza profesional en Barcelona | LAPS",
    description:
      "Limpieza para oficinas, despachos, locales y espacios profesionales en Barcelona.",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <GoogleTagManagerHead />
      </head>
      <body className="font-inter antialiased overflow-x-hidden">
        <GoogleTagManagerBody />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
