import React from "react";
import styles from "@/app/(index)/components/benefit.module.css";
import toolStyles from "@/styles/general/tools.module.css";
import Button from "@/components/button/button";
import Image from "next/image";
import background from "@/../public/image/bgmc.png";
import Testimonials from "./testimonials";

export default function Benefit() {
  return (
    <section className={`${toolStyles.animationScroll} `}>
      <div className={` ${styles.container}`}>
        <Image
          src={background}
          alt="fondo de beneficios"
          placeholder="blur"
          loading="lazy"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            zIndex: "-1",
            position: "absolute",
            filter: "brightness(0.5)",
            objectPosition: "center",
            minHeight: "100%",
            maxHeight: "100%",
          }}
        />
        <div className={`${toolStyles.container} ${styles.containerBenefit}`}>
          <div>
            <h3 className={styles.title}>¿Que ofrecemos?</h3>
            <p className={styles.text}>
              Nos especializamos en ofrecer servicios de limpieza con un enfoque
              ecoamigable.{" "}
              <span>Utilizamos exclusivamente productos ecológicos</span> para
              garantizar un impacto positivo en el medio ambiente. Nuestro
              compromiso con la limpieza sostenible se refleja en cada detalle,
              brindando un cuidado excepcional para tu hogar o negocio. Descubre
              cómo podemos transformar tu espacio con servicios comprometidos
              con la salud del planeta.
            </p>
          </div>
          <Button link={"#form"}>solicitar presupuesto</Button>
        </div>
      </div>
      <Testimonials />
    </section>
  );
}
