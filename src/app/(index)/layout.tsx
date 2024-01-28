import "@/styles/general/globals.css";
import Header from "@/components/headerLanding/header";
import "@/styles/general/globals.css";
import Footer from "@/components/footer/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />

      {children}
      <Footer />
    </>
  );
}
