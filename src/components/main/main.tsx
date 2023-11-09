import Image from "next/image";
import React from "react";
import banner from "@/../public/image/img-header.jpg";
import styles from "@/styles/main.module.css";
import stylesTools from "@/styles/general/tools.module.css";

export default function Main() {
  return (
    <div className={styles.container}>
      <Image className={styles.banner} src={banner} alt="banner" />
      {/* <div></div> */}
      <div className={`${styles.content} ${stylesTools.container}`}>
        <h2>NOSOTROS</h2>
        <p>
          Liliana padovani se especializa en servicios de limpieza de oficinas.
          Nuestro equipo altamente capacitado utiliza tecnología de vanguardia y
          productos respetuosos con el medio ambiente para garantizar una
          limpieza eficaz y personalizada. Contáctenos para mantener su entorno
          de trabajo limpio y saludable.
        </p>
      </div>
    </div>
  );
}
