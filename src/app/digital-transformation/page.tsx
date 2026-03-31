import Link from "next/link";
import styles from "./page.module.css";

export default function DigitalTransformationPage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <h1 className={styles.title}>التحول الرقمي</h1>
        <p className={styles.desc}>شرح تفصيلي لخدمات التحول الرقمي.</p>
        <Link href="/">العودة للرئيسية</Link>
      </div>
    </div>
  );
}

