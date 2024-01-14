import type { Metadata } from "next";
import { Roboto, Righteous } from "next/font/google";
import "@/styles/general/globals.css";
import Header from "@/app/header/header";
import icon from "../../public/logos/Logo.svg";

const roboto = Roboto({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--roboto",
});
const righteous = Righteous({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--righteous",
});

export const metadata: Metadata = {
  title: "LapService - Servicios de Limpieza Ecológicos",
  description: "Servicios de limpieza con productos ecológicos en LapService",
  keywords: "limpieza, servicios, ecológico, productos ecológicos",
  viewport: "width=device-width, initial-scale=1.0",
  authors: { name: "Aldo Castellano" },
  icons: {
    icon: "../../public/logos/favicon.ico", // /public path
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${righteous.variable} ${roboto.variable} `}
        suppressHydrationWarning={true}
      >
        <Header />

        {children}
      </body>
    </html>
  );
}
