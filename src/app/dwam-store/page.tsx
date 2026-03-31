import Link from "next/link";
import styles from "./page.module.css";

export default function DwamStorePage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <h1 className={styles.title}>متجر دوام</h1>
        <p className={styles.desc}>صفحة متجر دوام.</p>
        <Link href="/">العودة للرئيسية</Link>
      </div>
    </div>
  );
}

