import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>تواصل معنا الآن</h2>
        <div className={styles.actions}>
          <a className={styles.button} href="mailto:contact@dwam.sa">بريد إلكتروني</a>
          <a className={styles.button} href="tel:+966000000000">اتصال هاتفي</a>
          <a className={styles.button} href="https://wa.me/966000000000" target="_blank" rel="noopener noreferrer">واتساب</a>
        </div>
      </div>
    </section>
  );
}

