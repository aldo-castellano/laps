import React from "react";
import styles from "./testimonials.module.css";
import toolStyles from "@/styles/general/tools.module.css";
import Button from "@/components/generic/button/button";
import imgSweek from "@/../public/logos/sweeek-logo-es (1) 1.svg";
import imgPopcarte from "@/../public/logos/Popcarte.svg";
import Link from "next/link";
import Image from "next/image";

export default function Testimonials() {
  return (
    <div
      className={`${toolStyles.container}  ${toolStyles.animationScroll} ${styles.container}`}
    >
      <div className={`${styles.card} `}>
        <Link href={"#"} className={styles.title}>
          <Image alt="logo sweek" src={imgSweek} loading="lazy" sizes="208px" />
        </Link>

        <article className={styles.article}>
          {`"En Sweek, agradecemos a Lapservice por su colaboración excepcional.
          Su enfoque en la limpieza de calidad con productos ecológicos ha
          enriquecido nuestra oferta. Lapservice supera nuestras expectativas,
          brindando resultados notables y sostenibles. Valoramos su compromiso y
          confiabilidad. ¡Una asociación valiosa!"`}
        </article>
      </div>
      <div className={`${styles.card} `}>
        <h3 className={styles.title}>Lo que dicen nuestros clientes</h3>
      </div>
      <div className={`${styles.card} `}>
        <h3 className={styles.title}>Confianza</h3>
      </div>
      <div className={`${styles.card} `}>
        <Link href={"#"} className={styles.title}>
          <Image
            alt="logo sweek"
            src={imgPopcarte}
            loading="lazy"
            sizes="208px"
          />
        </Link>
        <article className={styles.article}>
          {`"En nombre de Popcarte, queremos expresar nuestra satisfacción por la
          colaboración con Lapservice. Su enfoque en la limpieza de calidad y el
          uso de productos ecológicos ha mejorado significativamente nuestros
          servicios. Lapservice supera nuestras expectativas, brindando
          resultados notables y sostenibles. Agradecemos a Lapservice por ser un
          socio confiable y comprometido con la excelencia. ¡Una colaboración
          que realmente valoramos!"`}
        </article>
      </div>
    </div>
  );
}
