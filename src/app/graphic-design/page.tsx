import Link from "next/link";
import styles from "./page.module.css";

export default function GraphicDesignPage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <h1 className={styles.title}>تصميم الجرافيك</h1>
        <p className={styles.desc}>شرح تفصيلي لخدمات التصميم الجرافيكي.</p>
        <Link href="/">العودة للرئيسية</Link>
      </div>
    </div>
  );
}

