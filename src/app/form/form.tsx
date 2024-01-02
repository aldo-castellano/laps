import Button from "@/components/generic/button";
import styles from "./form.module.css";
import toolStyles from "@/styles/general/tools.module.css";
import Link from "next/link";

export default function Form() {
  return (
    <div className={`${styles.container} ${toolStyles.container}`}>
      <h2 id="form" className={styles.title}>
        Solicitar presupuesto
      </h2>
      <form className={styles.containerForm}>
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
      </form>
    </div>
  );
}
