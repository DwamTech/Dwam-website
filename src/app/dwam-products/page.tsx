import Link from "next/link";
import styles from "./page.module.css";

export default function DwamProductsPage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <h1 className={styles.title}>منتجات دوام</h1>
        <p className={styles.desc}>عرض لمنتجات دوام وحلولها.</p>
        <Link href="/">العودة للرئيسية</Link>
      </div>
    </div>
  );
}

