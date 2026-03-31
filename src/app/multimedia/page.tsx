import Link from "next/link";
import styles from "./page.module.css";

export default function MultimediaPage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <h1 className={styles.title}>المالتيميديا</h1>
        <p className={styles.desc}>شرح تفصيلي لخدمات المالتيميديا.</p>
        <Link href="/">العودة للرئيسية</Link>
      </div>
    </div>
  );
}

