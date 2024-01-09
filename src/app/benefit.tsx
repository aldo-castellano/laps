import React from "react";
import styles from "@/app/benefit.module.css";
import toolStyles from "@/styles/general/tools.module.css";
import Button from "@/components/generic/button";

export default function Benefit() {
  return (
    <div className={styles.container}>
      <div className={`${toolStyles.container} ${styles.containerBenefit}`}>
        <div>
          <h3 className={styles.title}>¿Que ofrecemos?</h3>
          <p className={styles.text}>
            Nos especializamos en ofrecer servicios de limpieza con un enfoque
            ecoamigable. Utilizamos exclusivamente productos ecológicos para
            garantizar un impacto positivo en el medio ambiente. Nuestro
            compromiso con la limpieza sostenible se refleja en cada detalle,
            brindando un cuidado excepcional para tu hogar o negocio. Descubre
            cómo podemos transformar tu espacio con servicios comprometidos con
            la salud del planeta.
          </p>
        </div>
        <Button link={"#form"}>solicitar presupuesto</Button>
      </div>
    </div>
  );
}
