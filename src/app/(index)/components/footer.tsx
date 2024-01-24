import React from "react";
import styles from "./footer.module.css";
import toolStyles from "@/styles/general/tools.module.css";
import Image from "next/image";
import img from "@/../public/image/barcelona-map.png";

export default function Footer() {
  return (
    <footer className={`${styles.container}  `}>
      <div className={`${styles.containerEmail}  ${toolStyles.container}`}>
        {/* <Link href="mailto:lapservicees@gmail.com">lapservicees@gmail.com</Link> */}
      </div>
      <div className={`${styles.img}  ${toolStyles.container}`}>
        <Image
          src={img}
          alt="Mapa de barcelona"
          placeholder="blur"
          loading="lazy"
          sizes="60vw"
          layout="responsive"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </footer>
  );
}
