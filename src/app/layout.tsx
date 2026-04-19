import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/footer/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: 'swap',
});

export const viewport: Viewport = { width: "device-width", initialScale: 1 };
export const metadata: Metadata = {
  title: "LAPS | Limpieza Ecológica Premium en Barcelona",
  description:
    "Limpieza profesional de oficinas y locales con productos 100% ecológicos. Especialistas en limpieza a vapor para baños y cocinas. Sostenibilidad y brillo en cada rincón.",
  keywords:
    "limpieza ecológica, limpieza a vapor Barcelona, servicios limpieza sostenible, limpieza oficinas eco",
  metadataBase: new URL("https://www.lapservice.es/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${outfit.variable}`}>
       <body className="font-inter antialiased overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
