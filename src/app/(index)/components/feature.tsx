import styles from "./feature.module.css";
import toolStyles from "@/styles/general/tools.module.css";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/location";

export default function Feature() {
  return (
    <div className={`${toolStyles.container}`}>
      <h2 className={styles.title}>
        Mas sobre <span>nosotros</span>
      </h2>
      <div className={`${styles.container}`}>
        <div className={`${styles.containerCard}`}>
          <div className={`${styles.card} ${styles.cardThree}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"
              />
            </svg>{" "}
            <h3 className={styles.cardTitle}>Localidad</h3>
            <p>
              Ofrecemos servicios de limpieza de alta calidad exclusivamente en
              Barcelona. Nuestro equipo local garantiza atención personalizada y
              resultados excepcionales. Confía en nosotros para un servicio
              confiable y eficiente en tu área.
            </p>
          </div>
        </div>

        <div className={`${styles.containerCard}`}>
          <div className={`${styles.card} ${styles.cardOne}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 6V5l-1.875 1.875q-.025.025-.4.125q-.25 0-.387-.213t-.013-.437L10 5V4q-.425 0-.712-.288T9 3q0-.425.288-.712T10 2h5q.425 0 .713.288T16 3v.775q0 .125-.025.213T15.9 4.2L15 6zm-2 16q-.825 0-1.412-.587T8 20v-4.925q0-.25.05-.487t.175-.463l3.2-6.05q.275-.5.738-.788T13.2 7H15q.425 0 .713.288T16 8v12q0 .825-.587 1.413T14 22z"
              />
            </svg>
            <h3 className={styles.cardTitle}>Productos</h3>
            <p>
              Descubre nuestra línea ecoamigable de productos de limpieza.
              Cuidamos el planeta con fórmulas biodegradables y envases
              reciclables. Únete a la sostenibilidad sin comprometer la
              eficacia. ¡Limpia con conciencia!
            </p>
          </div>
        </div>
        <div className={`${styles.containerCard}`}>
          <div className={`${styles.card} ${styles.cardTwo}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m16.24 11.51l1.57-1.57l-3.75-3.75l-1.57 1.57l-4.14-4.13c-.78-.78-2.05-.78-2.83 0l-1.9 1.9c-.78.78-.78 2.05 0 2.83l4.13 4.13L3 17.25V21h3.75l4.76-4.76l4.13 4.13c.95.95 2.23.6 2.83 0l1.9-1.9c.78-.78.78-2.05 0-2.83zm-7.06-.44L5.04 6.94l1.89-1.9L8.2 6.31L7.02 7.5l1.41 1.41l1.19-1.19l1.45 1.45zm7.88 7.89l-4.13-4.13l1.9-1.9l1.45 1.45l-1.19 1.19l1.41 1.41l1.19-1.19l1.27 1.27zm3.65-11.92a.996.996 0 0 0 0-1.41l-2.34-2.34c-.47-.47-1.12-.29-1.41 0l-1.83 1.83l3.75 3.75z"
              />
            </svg>
            <h3 className={styles.cardTitle}>Servicios</h3>
            <p>
              Experimenta excelencia con nuestro servicio de limpieza.
              Garantizamos resultados impecables, atención personalizada y
              puntualidad. Tu satisfacción es nuestra prioridad. Descubre un
              estándar superior en limpieza.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
