import Link from "next/link";
import React from "react";
import styles from "@/components/headers/headersLanding/header.module.css";
import stylesTools from "@/styles/general/tools.module.css";

import Button from "@/components/generic/button";
import Image from "next/image";
import background from "@/../public/image/img-header.png";

export default function Header() {
  return (
    <header className={styles.container}>
      <Image src={background} alt="background" priority placeholder="blur" />
      <div className={styles.content_container}>
        <div className={`${stylesTools.container} ${styles.content}`}>
          <div className={styles.logo}>
            <h1 className={styles.title}>LAPS</h1>
            <p className={styles.subtitle}>LIMPIEZA Y AMBIENTE</p>
          </div>
          <div className={styles.links}>
            {/* <Link href={"#contactar"}>Contactar</Link> */}
            <Link href={"#form"}>Presupuesto</Link>
          </div>
        </div>
        <div className={`${stylesTools.container} ${styles.container_us}`}>
          <div></div>
          <div className={styles.us}>
            <h2 className={styles.title_us}>
              ¿Listo para <span>empezar</span>?
            </h2>
            <p>
              Simplificamos la limpieza para ti. En LAPS, ofrecemos soluciones
              de limpieza personalizadas que se adaptan a tus necesidades.
              Descubre la comodidad de un espacio impecable con solo un clic.
            </p>{" "}
            <Button link={"#form"}>solicitar presupuesto</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
