import Button from "@/components/generic/button";
import styles from "./form.module.css";
import toolStyles from "@/styles/general/tools.module.css";

export default function Form() {
  return (
    <div className={`${styles.container} ${toolStyles.container}`}>
      <h2 className={styles.title}>Solicitar presupuesto</h2>
      <form className={styles.containerForm}>
        <div className={styles.textInput}>
          <label>Nombre</label>
          <input type="text" />
        </div>
        <div className={styles.textInput}>
          <label>Correo</label>
          <input type="text" />
        </div>
        <div className={styles.textInput}>
          <label>Nombre</label>
          <input type="text" />
        </div>
        <div className={styles.textInput}>
          <label>Nombre</label>
          <input type="text" />
        </div>
        <Button type="submit">solicitar</Button>
      </form>
    </div>
  );
}
