import Link from "next/link";
import styles from "./page.module.css";

export default function CloudHostingPage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <h1 className={styles.title}>الاستضافة السحابية</h1>
        <p className={styles.desc}>شرح تفصيلي لخدمات الاستضافة السحابية.</p>
        <Link href="/">العودة للرئيسية</Link>
      </div>
    </div>
  );
}

