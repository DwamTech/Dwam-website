import Link from "next/link";
import styles from "./page.module.css";

export default function ContentCreationPage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <h1 className={styles.title}>صناعة المحتوى</h1>
        <p className={styles.desc}>شرح تفصيلي لخدمات صناعة وإنشاء المحتوى.</p>
        <Link href="/">العودة للرئيسية</Link>
      </div>
    </div>
  );
}
