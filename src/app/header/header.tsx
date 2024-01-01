import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "@/app/header/header.module.css";
import stylesTools from "@/styles/general/tools.module.css";
import logo from "@/../public/logos/Logo.svg";
import headerBackground from "@/../public/image/img-header.jpg";
import Button from "@/components/generic/button";

export default function Header() {
  return (
    <header
      className={styles.container}
      style={{ backgroundImage: `url(${headerBackground.src})` }}
    >
      <div className={styles.content_container}>
        <div className={`${stylesTools.container} ${styles.content}`}>
          <div className={styles.logo}>
            <h1 className={styles.title}>LAPS</h1>
            <p className={styles.subtitle}>LIMPIEZA Y AMBIENTE</p>
          </div>
          <div className={styles.links}>
            <Link href={"#"}>Contatar</Link>
            <Link href={"#"}>Presupuesto</Link>
          </div>
        </div>
        <div className={`${stylesTools.container} ${styles.container_us}`}>
          <div className={styles.us}>
            <h2 className={styles.title_us}>Nosotros</h2>
            <p>
              Liliana padovani se especializa en servicios de limpieza de
              oficinas. Nuestro equipo altamente capacitado utiliza tecnología
              de vanguardia y productos respetuosos con el medio ambiente para
              garantizar una limpieza eficaz y personalizada. Contáctenos para
              mantener su entorno de trabajo limpio y saludable.
            </p>
            <Button>solicitar presupuesto</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
