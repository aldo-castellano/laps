import styles from "./header.module.css";
import stylesTools from "@/styles/general/tools.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className={styles.container}>
        <div className={`${stylesTools.container} ${styles.content}`}>
          <Link href="/" className={styles.logo}>
            <h1 className={styles.title}>LAPS</h1>
            <p className={styles.subtitle}>LIMPIEZA Y AMBIENTE</p>
          </Link>
          <div className={styles.links}>
            {/* <Link href={"#contactar"}>Contactar</Link> */}
            <Link href={"/#form"}>Presupuesto</Link>
            <Link href={"/privacidad"}>Privacidad</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
