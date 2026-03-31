import Link from "next/link";
import styles from "./page.module.css";

export default function TechConsultingPage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <h1 className={styles.title}>استشارات تقنية</h1>
        <p className={styles.desc}>شرح تفصيلي لخدمات الاستشارات التقنية.</p>
        <Link href="/">العودة للرئيسية</Link>
      </div>
    </div>
  );
}

