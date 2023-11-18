import Image from "next/image";
import styles from "@/styles/page.module.css";
import Main from "@/components/main/main";
import Reviews from "@/components/main/reviews";

export default function Home() {
  return (
    <main>
      <Main />
      <Reviews />
    </main>
  );
}
