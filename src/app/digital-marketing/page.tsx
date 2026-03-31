import Link from "next/link";
import styles from "./page.module.css";

export default function DigitalMarketingPage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <h1 className={styles.title}>التسويق الإلكتروني</h1>
        <p className={styles.desc}>شرح تفصيلي لخدمات التسويق الإلكتروني.</p>
        <Link href="/">العودة للرئيسية</Link>
      </div>
    </div>
  );
}

