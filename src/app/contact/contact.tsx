import React from "react";
import styles from "./contact.module.css";
import toolStyles from "@/styles/general/tools.module.css";
import Image from "next/image";
import img from "@/../public/image/barcelona-map.png";
import Link from "next/link";

export default function Contact() {
  return (
    <div className={`${styles.container}  `}>
      <h3 className={styles.title}>Contactanos</h3>
      <div className={`${styles.containerEmail}  ${toolStyles.container}`}>
        <p>Correo:</p>
        <Link href="mailto:lapservicees@gmail.com">lapservicees@gmail.com</Link>
      </div>
      <div className={`${styles.img}  ${toolStyles.container}`}>
        <Image sizes="cover" src={img} alt="Mapa de barcelona" />
      </div>
    </div>
  );
}
