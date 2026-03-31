import Link from "next/link";
import styles from "./page.module.css";

export default function AIPage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <h1 className={styles.title}>الذكاء الإصطناعي</h1>
        <p className={styles.desc}>شرح تفصيلي لخدمات الذكاء الإصطناعي.</p>
        <Link href="/">العودة للرئيسية</Link>
      </div>
    </div>
  );
}

