import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "@/styles/general/header.module.css";
import stylesTools from "@/styles/general/tools.module.css";
import logo from "@/../public/logos/Logo.svg";

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={`${stylesTools.container} ${styles.content}`}>
        <div className={styles.logo}>
          <Image src={logo} alt="logo" />
        </div>
        <div className={styles.body}>
          <Link href={"#"}>Nosotros</Link>
          <Link href={"#"}>Contactanos</Link>
        </div>
      </div>
    </header>
  );
}
