import Button from "@/components/generic/button";
import styles from "./form.module.css";
import toolStyles from "@/styles/general/tools.module.css";
import Link from "next/link";
import { Suspense } from "react";

export default function Form() {
  return (
    <div className={`${toolStyles.container}`}>
      <div className={`${styles.container} `}>
        <h2 id="form" className={styles.title}>
          Solicitar presupuesto
        </h2>
        {/* <form className={styles.containerForm}>
        <div className={styles.containerInput}>
          <label>Nombre</label>
          <input type="text" />
        </div>
        <div className={styles.containerInput}>
          <label>Correo</label>
          <input type="text" />
        </div>
        <div>
          <div className={`${styles.containerInput} ${styles.number}`}>
            <label>Superficie (aprox)</label>
            <div>
              <input type="number" min="1" max="999" />
              <p>m2</p>
            </div>
          </div>
        </div>

        <div className={styles.textarea}>
          <label>Comentario</label>
          <textarea />
        </div>
        <div className={styles.containerCheckbox}>
          <input type="checkbox" />
          <label>
            Acepto los <Link href={"#"}>Terminos y Condiciones</Link>
          </label>
        </div>
        <Button type="submit">solicitar</Button>
      </form> */}
        {/* <Suspense fallback={<Loading />}> */}
        <iframe
          title="formulario"
          id="form"
          allow="geolocation; microphone; camera"
          src="https://respondto.forms.app/aldofabrizziocastellanop/untitled-form"
          frameBorder="0"
          style={{
            width: "100%",
            minWidth: "100%",
            height: "2000px",
            border: "none",
          }}
          loading="lazy"
        ></iframe>
      </div>
      {/* </Suspense> */}
    </div>
  );
}
