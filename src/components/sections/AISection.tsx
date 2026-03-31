import styles from "./AISection.module.css";
import Link from "next/link";

export default function AISection() {
  return (
    <section id="ai" className={styles.wrap}>
      <div className={styles.background}>
        <div className={styles.neuralNetwork} aria-hidden="true">
          <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <defs>
              <pattern id="neural-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="3" fill="#ff8400" className={styles.neuralNode}></circle>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#neural-pattern)"></rect>
          </svg>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.contentFull}>
          <div className={styles.header}>
            <h2 className={styles.title}>
               حلول الذكاء الاصطناعي
              <span className={styles.titleLine}></span>
            </h2>
          </div>
          <div className={styles.contentGrid}>
            <div className={`${styles.textCol} ${styles.content}`} data-aos="fade-left" data-aos-duration="1200">
              <div className={styles.showcase}>
                <div className={styles.mainImage}>
                  <img
                    src="/AIs.webp"
                    alt="رسم توضيحي لعقل بشري متصل بدوائر إلكترونية يمثل الذكاء الاصطناعي"
                    loading="lazy"
                    className={styles.mainImg}
                  />
                </div>
                <div className={`${styles.aiElement} ${styles.pos1}`}>
                  <div className={styles.aiElementInner}>
                    <i className="fas fa-brain"></i>
                    <p>تعلم آلي</p>
                  </div>
                </div>
                <div className={`${styles.aiElement} ${styles.pos2}`}>
                  <div className={styles.aiElementInner}>
                    <i className={`fas fa-robot ${styles.icon35}`}></i>
                    <p className={styles.text12}>روبوتات ذكية</p>
                  </div>
                </div>
                <div className={`${styles.neuralElement} ${styles.neuralPos}`}>
                  <svg width="100%" height="100%" viewBox="0 0 140 100" aria-hidden="true">
                    <circle cx="30" cy="50" r="5" fill="#ff8400" className={styles.node}></circle>
                    <line x1="30" y1="50" x2="70" y2="50" stroke="#ff8400" strokeWidth="1" className={styles.connection}></line>
                  </svg>
                </div>
                <div className={`${styles.dataFlow} ${styles.dataFlowPos}`}>
                  <div className={`${styles.aiElementInner} ${styles.innerPad10}`}>
                    <i className={`fas fa-database ${styles.icon30}`}></i>
                    <p className={styles.text12}>تحليل البيانات</p>
                  </div>
                </div>
              </div>
              <h3 className={styles.subheading}>
                <i className={`fas fa-tasks ${styles.subheadingIcon}`}></i>
                كيف نُساعدك
              </h3>
              <div className={styles.servicesList}>
                <div className={styles.servicesGrid}>
                  <div className={styles.serviceItem} data-aos="fade-up" data-aos-delay="100">
                    <div className={styles.serviceIcon}><i className="fas fa-code"></i></div>
                    <p>دمج الذكاء الإصطناعي في أعمالك البرمجية</p>
                  </div>
                  <div className={styles.serviceItem} data-aos="fade-up" data-aos-delay="200">
                    <div className={styles.serviceIcon}><i className="fas fa-thumbs-up"></i></div>
                    <p>أنظمة التوصية الذكية</p>
                  </div>
                  <div className={styles.serviceItem} data-aos="fade-up" data-aos-delay="300">
                    <div className={styles.serviceIcon}><i className="fas fa-chart-line"></i></div>
                    <p>تحليل البيانات الضخمة واستخراج الأنماط</p>
                  </div>
                  <div className={styles.serviceItem} data-aos="fade-up" data-aos-delay="400">
                    <div className={styles.serviceIcon}><i className="fas fa-comment-dots"></i></div>
                    <p>روبوتات المحادثة (Chatbots) لخدمة العملاء</p>
                  </div>
                  <div className={styles.serviceItem} data-aos="fade-up" data-aos-delay="500">
                    <div className={styles.serviceIcon}><i className="fas fa-cog"></i></div>
                    <p>أتمتة العمليات واتخاذ القرار بناءً على المعطيات</p>
                  </div>
                  <div className={styles.serviceItem} data-aos="fade-up" data-aos-delay="600">
                    <div className={styles.serviceIcon}><i className="fas fa-shopping-cart"></i></div>
                    <p>تنبؤ المبيعات والسلوك الشرائي للعملاء</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.moreBtnWrapper}>
            <a href="https://wa.me/201555855857" target="_blank" rel="noopener noreferrer" className={styles.moreBtn}>
              <span>المزيد</span>
            </a>
          </div>
          <div className={styles.scrollDownArrow}>
            <a href="#content-creation" aria-label="الانتقال إلى قسم صناعة المحتوى">
              <i className="fas fa-chevron-down"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
