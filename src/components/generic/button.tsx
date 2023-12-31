import styles from "@/styles/components/button.module.css";

export default function Button({ children, type = "button" }: any) {
  return (
    <button type={type} className={styles.button}>
      {children}
    </button>
  );
}
