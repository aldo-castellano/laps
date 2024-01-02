import styles from "./feature.module.css";
import toolStyles from "@/styles/general/tools.module.css";

export default function Feature() {
  return (
    <div className={`${styles.container} ${toolStyles.container}`}>
      <h2>Nosotros</h2>
      <div className={`${styles.containerCard}`}>
        <div className={`${styles.card} ${styles.cardThree}`}>
          <h3>Localidad</h3>
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
          <h3>Productos</h3>
          <p>
            Descubre nuestra línea ecoamigable de productos de limpieza.
            Cuidamos el planeta con fórmulas biodegradables y envases
            reciclables. Únete a la sostenibilidad sin comprometer la eficacia.
            ¡Limpia con conciencia!
          </p>
        </div>
      </div>
      <div className={`${styles.containerCard}`}>
        <div className={`${styles.card} ${styles.cardTwo}`}>
          <h3>Servicios</h3>
          <p>
            Experimenta excelencia con nuestro servicio de limpieza.
            Garantizamos resultados impecables, atención personalizada y
            puntualidad. Tu satisfacción es nuestra prioridad. Descubre un
            estándar superior en limpieza.
          </p>
        </div>
      </div>
    </div>
  );
}
