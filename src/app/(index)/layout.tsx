import type { Metadata } from "next";
import { Roboto, Righteous } from "next/font/google";
import "@/styles/general/globals.css";
import Header from "@/components/headers/headersLanding/header";

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
  title: "Limpieza de Oficinas y Comercios con Productos Ecológicos | laps",

  description:
    "Descubre nuestros servicios de limpieza ecológica para oficinas y locales comerciales. Utilizamos productos amigables con el medio ambiente para un espacio más saludable y sostenible. ¡Contáctanos hoy!",
  keywords:
    "limpieza ecológica, productos ecológicos para oficinas, servicios de limpieza sostenible, limpieza verde para comercios",
  metadataBase: new URL("https://www.lapservice.es/"),
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
