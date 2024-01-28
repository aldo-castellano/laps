import Header from "@/components/headerRoutes/header";
import "@/styles/general/globals.css";
import Footer from "@/components/footer/footer";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Limpieza de Oficinas y Comercios con Productos Ecológicos | laps | privacidad",

  metadataBase: new URL("https://www.lapservice.es/privacidad"),
};
export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />

      {children}
      {/* <Footer /> */}
    </>
  );
}
