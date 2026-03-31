import Link from "next/link";
import styles from "./page.module.css";

export default function DwamMagazinePage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <h1 className={styles.title}>مجلة دوام</h1>
        <p className={styles.desc}>محتوى مجلة دوام.</p>
        <Link href="/">العودة للرئيسية</Link>
      </div>
    </div>
  );
}

