import styles from "./InquiryBanner.module.css";

export default function InquiryBanner() {
    return (
        <div className={styles.bannerWrapper}>
            <div className={styles.bannerContainer}>
                {/* Animated Background Elements */}
                <div className={styles.bgDecoration}>
                    <div className={styles.circle1}></div>
                    <div className={styles.circle2}></div>
                    <div className={styles.circle3}></div>
                </div>

                {/* Content - All in one row */}
                <div className={styles.content}>
                    {/* Icon */}
                    <div className={styles.iconWrapper} data-aos="zoom-in">
                        <div className={styles.iconCircle}>
                            <i className="fas fa-headset"></i>
                        </div>
                        <div className={styles.pulse}></div>
                    </div>

                    {/* Text Section */}
                    <div className={styles.textSection} data-aos="fade-up" data-aos-delay="100">
                        <h3 className={styles.title}>
                            هل لديك <span className={styles.highlight}>استفسار</span> أو طلب؟
                        </h3>
                        <p className={styles.subtitle}>
                            نحن هنا للإجابة على كافة تساؤلاتك ومساعدتك في اختيار الحل الأمثل
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className={styles.ctaGroup} data-aos="fade-up" data-aos-delay="200">
                        <a
                            href="https://wa.me/201555855857"
                            className={`${styles.btn} ${styles.btnPrimary}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-whatsapp"></i>
                            <span>واتساب</span>
                        </a>

                        <a
                            href="tel:+201555855857"
                            className={`${styles.btn} ${styles.btnSecondary}`}
                        >
                            <i className="fas fa-phone-alt"></i>
                            <span>اتصل الآن</span>
                        </a>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className={styles.decorLine}></div>
            </div>
        </div>
    );
}
