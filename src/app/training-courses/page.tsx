import Link from "next/link";
import styles from "./page.module.css";

export default function TrainingCoursesPage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <h1 className={styles.title}>دورات تدريبية</h1>
        <p className={styles.desc}>شرح تفصيلي للدورات التدريبية.</p>
        <Link href="/">العودة للرئيسية</Link>
      </div>
    </div>
  );
}

