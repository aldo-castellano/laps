import styles from "./main.module.css";
import toolsStyles from "@/styles/general/tools.module.css";

export default function Main() {
  return (
    <div className={`${toolsStyles.container} ${styles.container}`}>
      <h1 className={styles.title}>Politicas de privacidad</h1>
      <p className={`${styles.text}  `}>
        {" "}
        <span>1. Información recopilada:</span> Recopilaremos la siguiente
        información a través de nuestro formulario de solicitud de presupuesto
        para el servicio de limpieza: Nombre Dirección de correo electrónico
        Superficie a limpiar Tipo de suelo Áreas comunes deseadas para limpieza
        Preferencia sobre el uso de nuestros productos Preferencia sobre la
        recurrencia del servicio <br />
        <br />
        <span>2. Uso de la información:</span> La información recopilada se
        utilizará con el único propósito de proporcionar un presupuesto preciso
        para nuestros servicios de limpieza. Podemos utilizar la dirección de
        correo electrónico para ponernos en contacto con usted con respecto a su
        solicitud y brindar información adicional sobre nuestros servicios.
        <br />
        <br /> <span>3. Protección de la información:</span> Nos comprometemos a
        proteger la privacidad y seguridad de la información proporcionada.
        Implementamos medidas de seguridad para salvaguardar la información
        contra accesos no autorizados o divulgación.
        <br />
        <br /> <span>4. Compartir información:</span> No compartiremos su
        información personal con terceros sin su consentimiento, a menos que sea
        necesario para cumplir con requisitos legales.
        <br />
        <br /> <span>5. Duración del almacenamiento:</span> La información
        proporcionada se almacenará durante el tiempo necesario para cumplir con
        el propósito para el cual fue recopilada, a menos que se requiera un
        período de retención más largo por obligaciones legales. <br />
        <br />
        <span>6. Preferencias de cookies:</span> No utilizamos cookies ni otras
        tecnologías de seguimiento en nuestro formulario de solicitud de
        presupuesto.
        <br />
        <br /> <span>7. Derechos del usuario:</span> Usted tiene el derecho de
        acceder, corregir o eliminar sus datos personales. Para ejercer estos
        derechos o para realizar preguntas sobre nuestra política de privacidad,
        comuníquese con nosotros a través de [su dirección de contacto].
        <br />
        <br /> <span>8. Aceptación de los términos:</span> Al enviar el
        formulario de solicitud de presupuesto, usted acepta los términos de
        esta política de privacidad. Esta política de privacidad está sujeta a
        cambios. Cualquier modificación será publicada en nuestro sitio web.
      </p>
    </div>
  );
}
