import styles from "./button.module.css";
import Link from "next/link";

export default function Button({ children, type = "button", id, link }: any) {
  return link ? (
    <Link href={link} className={styles.button}>
      {children}
    </Link>
  ) : (
    <button type={type} className={styles.button}>
      {children}
    </button>
  );
}
