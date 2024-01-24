"use client";
import styles from "./steps.module.css";
import toolStyles from "@/styles/general/tools.module.css";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/location";

export default function Steps() {
  return (
    <section className={` ${styles.background} `}>
      <div className={` ${toolStyles.container} `}>
        <h2 className={styles.title}>
          ¿Cómo <span>Empezar?</span>
        </h2>
        <div className={`${styles.content} `}>
          <div
            className={`${styles.card} ${styles.cardThree} ${toolStyles.animationScroll}`}
          >
            <p className={styles.step}>1.</p>
            <div>
              <h3 className={styles.cardTitle}>
                Rellenar el Formulario de Solicitud
              </h3>
              <p>
                Inicia tu experiencia de limpieza personalizada llenando nuestro
                formulario en línea. Proporciona detalles sobre tus necesidades
                específicas para que podamos adaptar nuestros servicios a tus
                requerimientos y expectativas.
              </p>{" "}
            </div>
            <Icon icon="fluent:form-48-filled" />
          </div>

          <div
            className={`${styles.card} ${styles.cardOne} ${toolStyles.animationScroll}`}
          >
            <p className={styles.step}>2.</p>
            <div>
              <h3 className={styles.cardTitle}>
                Recibir una Respuesta en Menos de 48 Horas
              </h3>
              <p>
                Una vez hayas enviado tu solicitud, nuestro equipo se pondrá
                manos a la obra. En un plazo máximo de 48 horas, recibirás una
                respuesta detallada que incluirá el costo del servicio y todas
                las especificaciones acordadas. Revisa la propuesta y confirma
                para avanzar.
              </p>
            </div>
            <Icon icon="bxs:chat" />
          </div>

          <div
            className={`${styles.card} ${styles.cardTwo} ${toolStyles.animationScroll}`}
          >
            <p className={styles.step}>3.</p>
            <div>
              <h3 className={styles.cardTitle}>
                Disfrutar del Servicio de Limpieza Profesional
              </h3>
              <p>
                Con tu aprobación, nuestro equipo altamente capacitado se
                encargará de la limpieza de tus oficinas o comunidades de pisos.
                Ahora, simplemente relájate y disfruta de un espacio impecable,
                diseñado para satisfacer tus necesidades y proporcionarte un
                entorno limpio y agradable.
              </p>
            </div>
            <Icon icon="fa6-solid:handshake" />
          </div>
        </div>
      </div>
    </section>
  );
}
