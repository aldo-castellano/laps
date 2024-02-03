import React from "react";
import styles from "./whatsapp.module.css";
import Link from "next/link";
import Image from "next/image";
import whatsappImg from "@/../public/icons/whatsapp.svg";

export default function Whatsapp() {
  return (
    <div className={`${styles.container}  `}>
      <Link href="https://wa.me/34678144504" target="_blank">
        <Image src={whatsappImg} alt="icono de whatsapp" fill priority />
      </Link>
    </div>
  );
}
