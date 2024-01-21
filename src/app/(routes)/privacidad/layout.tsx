import type { Metadata } from "next";
import { Roboto, Righteous } from "next/font/google";
import "@/styles/general/globals.css";
import Header from "@/components/headers/headerRoutes/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
