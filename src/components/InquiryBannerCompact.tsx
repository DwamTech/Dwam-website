import styles from "./InquiryBannerCompact.module.css";

export default function InquiryBannerCompact() {
    return (
        <div className={styles.banner}>
            <div className={styles.container}>
                {/* Gradient Background */}
                <div className={styles.gradientBg}></div>

                <div className={styles.content}>
                    {/* Left Side - Text */}
                    <div className={styles.textContent} data-aos="fade-left">
                        <div className={styles.badge}>
                            <i className="fas fa-phone-volume"></i>
                            <span>تواصل معنا</span>
                        </div>
                        <h4 className={styles.heading}>
                            جاهزون للرد على <span className={styles.accent}>استفساراتك</span>
                        </h4>
                        <p className={styles.description}>
                            فريقنا متاح على مدار الساعة لمساعدتك
                        </p>
                    </div>

                    {/* Right Side - Buttons */}
                    <div className={styles.actions} data-aos="fade-right">
                        <a
                            href="https://wa.me/201555855857"
                            className={`${styles.actionBtn} ${styles.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-whatsapp"></i>
                            <span>واتساب</span>
                        </a>

                        <a
                            href="tel:+201555855857"
                            className={`${styles.actionBtn} ${styles.phone}`}
                        >
                            <i className="fas fa-phone"></i>
                            <span>اتصل الآن</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
