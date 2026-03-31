import Link from "next/link";
import styles from "./page.module.css";

export default function SolutionsPage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <h1 className={styles.title}>حلول برمجية</h1>
        <p className={styles.desc}>هنا سيكون شرح تفصيلي للحلول البرمجية والخدمات المرتبطة بها.</p>
        <Link href="/" aria-label="العودة للرئيسية">العودة للرئيسية</Link>
      </div>
    </div>
  );
}

