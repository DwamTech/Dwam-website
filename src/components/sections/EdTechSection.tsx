import styles from "./EdTechSection.module.css";

export default function EdTechSection() {
  return (
    <section id="edtech" className={styles.wrap}>
      <div className={styles.bg}>
        <div className={styles.bgImage}></div>
        <div className={styles.bgGradient}></div>
        <div className={styles.bgGrid}></div>
        <div className={styles.bgIcons}>
          <span className={`${styles.bgIcon} ${styles.bgIcon1}`}><i className="fas fa-graduation-cap"></i></span>
          <span className={`${styles.bgIcon} ${styles.bgIcon2}`}><i className="fas fa-chalkboard-teacher"></i></span>
          <span className={`${styles.bgIcon} ${styles.bgIcon3}`}><i className="fas fa-book-open"></i></span>
          <span className={`${styles.bgIcon} ${styles.bgIcon4}`}><i className="fas fa-mobile-alt"></i></span>
          <span className={`${styles.bgIcon} ${styles.bgIcon5}`}><i className="fas fa-vr-cardboard"></i></span>
          <span className={`${styles.bgIcon} ${styles.bgIcon6}`}><i className="fas fa-brain"></i></span>
        </div>
        <div className={styles.bgOverlay}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col} data-aos="fade-right" data-aos-duration="1200">
            <div className={styles.visual}>
              <div className={styles.orb}>
                <div className={styles.glow}></div>
                <div className={`${styles.ring} ${styles.ring1}`}></div>
                <div className={`${styles.ring} ${styles.ring2}`}></div>
                <div className={`${styles.ring} ${styles.ring3}`}></div>
                <div className={styles.sphere}></div>
                <div className={`${styles.orbit} ${styles.orbit1}`}>
                  <div className={`${styles.node} ${styles.nodeFar}`}>
                    <div className={styles.hexCard}>
                      <div className={styles.hexIcon}><i className="fas fa-graduation-cap"></i></div>
                      <div className={styles.hexLabel}>تعليم ذكي</div>
                    </div>
                  </div>
                </div>
                <div className={`${styles.orbit} ${styles.orbit2}`}>
                  <div className={`${styles.node} ${styles.nodeMid}`}>
                    <div className={styles.hexCard}>
                      <div className={styles.hexIcon}><i className="fas fa-vr-cardboard"></i></div>
                      <div className={styles.hexLabel}>تقنيات متطورة</div>
                    </div>
                  </div>
                </div>
                <div className={`${styles.orbit} ${styles.orbit3}`}>
                  <div className={`${styles.node} ${styles.nodeNear}`}>
                    <div className={styles.hexCard}>
                      <div className={styles.hexIcon}><i className="fas fa-brain"></i></div>
                      <div className={styles.hexLabel}>تفكير إبداعي</div>
                    </div>
                  </div>
                </div>
                <div className={`${styles.orbit} ${styles.orbit4}`}>
                  <div className={`${styles.node} ${styles.nodeMid}`}>
                    <div className={styles.hexCard}>
                      <div className={styles.hexIcon}><i className="fas fa-users"></i></div>
                      <div className={styles.hexLabel}>تعلم تفاعلي</div>
                    </div>
                  </div>
                </div>
                <div className={`${styles.orbit} ${styles.orbit5}`}>
                  <div className={`${styles.node} ${styles.nodeFar}`}>
                    <div className={styles.hexCard}>
                      <div className={styles.hexIcon}><i className="fas fa-mobile-alt"></i></div>
                      <div className={styles.hexLabel}>تطبيقات ذكية</div>
                    </div>
                  </div>
                </div>
                <div className={`${styles.orbit} ${styles.orbit6}`}>
                  <div className={`${styles.node} ${styles.nodeNear}`}>
                    <div className={styles.hexCard}>
                      <div className={styles.hexIcon}><i className="fas fa-book-open"></i></div>
                      <div className={styles.hexLabel}>محتوى متميز</div>
                    </div>
                  </div>
                </div>
                <div className={`${styles.orbit} ${styles.orbitStat1}`}>
                  <div className={styles.node}>
                    <div className={`${styles.hexCard} ${styles.hexStat}`}>
                      <div className={styles.hexIcon}><i className="fas fa-user-graduate"></i></div>
                      <div className={styles.hexLabel}>
                        <span className={styles.hexTitle}>طلاب مستفيدون</span>
                        <span className={styles.hexValue}>+5000</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${styles.orbit} ${styles.orbitStat2}`}>
                  <div className={styles.node}>
                    <div className={`${styles.hexCard} ${styles.hexStat}`}>
                      <div className={styles.hexIcon}><i className="fas fa-chalkboard-teacher"></i></div>
                      <div className={styles.hexLabel}>
                        <span className={styles.hexTitle}>منصات تعليمية</span>
                        <span className={styles.hexValue}>+50</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.col} data-aos="fade-left" data-aos-duration="1200">
            <div className={styles.content}>
              <div className={styles.titleWrap}>
                <h2 className={styles.title}>
                  تكنولوجيا التعليم
                  <span className={styles.titleLine}></span>
                </h2>
              </div>
              <h3 className={styles.subheading}>
                <i className={`fas fa-cogs ${styles.subheadingIcon}`}></i>
                ماذا نقدّم؟
              </h3>
              <div className={styles.servicesList}>
                <div className={styles.servicesGrid}>
                  <div className={`${styles.serviceItem} ${styles.proCard}`} data-aos="fade-up" data-aos-delay="100">
                    <div className={styles.proIconWrap}>
                      <div className={styles.serviceIcon}><i className="fas fa-desktop"></i></div>
                    </div>
                    <div className={styles.serviceContent}>
                      <p>برمجة المنصات التعليمية</p>
                      {/* <span className={styles.serviceArrow}><i className="fas fa-angle-left"></i></span> */}
                    </div>
                  </div>
                  <div className={`${styles.serviceItem} ${styles.proCard}`} data-aos="fade-up" data-aos-delay="200">
                    <div className={styles.proIconWrap}>
                      <div className={styles.serviceIcon}><i className="fas fa-file-alt"></i></div>
                    </div>
                    <div className={styles.serviceContent}>
                      <p>إنتاج المحتوى التعليمي</p>
                      {/* <span className={styles.serviceArrow}><i className="fas fa-angle-left"></i></span> */}
                    </div>
                  </div>
                  <div className={`${styles.serviceItem} ${styles.proCard}`} data-aos="fade-up" data-aos-delay="300">
                    <div className={styles.proIconWrap}>
                      <div className={styles.serviceIcon}><i className="fas fa-mobile-alt"></i></div>
                    </div>
                    <div className={styles.serviceContent}>
                      <p>تطوير التطبيقات التعليمية</p>
                      {/* <span className={styles.serviceArrow}><i className="fas fa-angle-left"></i></span> */}
                    </div>
                  </div>
                  <div className={`${styles.serviceItem} ${styles.proCard}`} data-aos="fade-up" data-aos-delay="400">
                    <div className={styles.proIconWrap}>
                      <div className={styles.serviceIcon}><i className="fas fa-book-open"></i></div>
                    </div>
                    <div className={styles.serviceContent}>
                      <p>تصميم الكتاب الإلكتروني</p>
                      {/* <span className={styles.serviceArrow}><i className="fas fa-angle-left"></i></span> */}
                    </div>
                  </div>
                  <div className={`${styles.serviceItem} ${styles.proCard}`} data-aos="fade-up" data-aos-delay="500">
                    <div className={styles.proIconWrap}>
                      <div className={styles.serviceIcon}><i className="fas fa-chart-bar"></i></div>
                    </div>
                    <div className={styles.serviceContent}>
                      <p>تصميم برزنتيشن احترافي</p>
                      {/* <span className={styles.serviceArrow}><i className="fas fa-angle-left"></i></span> */}
                    </div>
                  </div>
                  <div className={`${styles.serviceItem} ${styles.proCard}`} data-aos="fade-up" data-aos-delay="600">
                    <div className={styles.proIconWrap}>
                      <div className={styles.serviceIcon}><i className="fas fa-gamepad"></i></div>
                    </div>
                    <div className={styles.serviceContent}>
                      <p>تطوير الألعاب التعليمية</p>
                      {/* <span className={styles.serviceArrow}><i className="fas fa-angle-left"></i></span> */}
                    </div>
                  </div>
                  <div className={`${styles.serviceItem} ${styles.proCard}`} data-aos="fade-up" data-aos-delay="700">
                    <div className={styles.proIconWrap}>
                      <div className={styles.serviceIcon}><i className="fas fa-certificate"></i></div>
                    </div>
                    <div className={styles.serviceContent}>
                      <p>برنامج صناعة الشهادات</p>
                      {/* <span className={styles.serviceArrow}><i className="fas fa-angle-left"></i></span> */}
                    </div>
                  </div>
                  <div className={`${styles.serviceItem} ${styles.proCard}`} data-aos="fade-up" data-aos-delay="800">
                    <div className={styles.proIconWrap}>
                      <div className={styles.serviceIcon}><i className="fas fa-briefcase"></i></div>
                    </div>
                    <div className={styles.serviceContent}>
                      <p>تصميم الحقائب التدريبية</p>
                      {/* <span className={styles.serviceArrow}><i className="fas fa-angle-left"></i></span> */}
                    </div>
                  </div>
                  <div className={`${styles.serviceItem} ${styles.proCard}`} data-aos="fade-up" data-aos-delay="900">
                    <div className={styles.proIconWrap}>
                      <div className={styles.serviceIcon}><i className="fas fa-chalkboard"></i></div>
                    </div>
                    <div className={styles.serviceContent}>
                      <p>واجهات أنظمة إدارة التعلم LMS</p>
                      {/* <span className={styles.serviceArrow}><i className="fas fa-angle-left"></i></span> */}
                    </div>
                  </div>
                  <div className={`${styles.serviceItem} ${styles.proCard}`} data-aos="fade-up" data-aos-delay="1000">
                    <div className={styles.proIconWrap}>
                      <div className={styles.serviceIcon}><i className="fas fa-robot"></i></div>
                    </div>
                    <div className={styles.serviceContent}>
                      <p>تطوير بوت تعليمي بAI</p>
                      {/* <span className={styles.serviceArrow}><i className="fas fa-angle-left"></i></span> */}
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-delay="1100">
                <a
                  href="https://wa.me/201555855857"
                  className={styles.ctaBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`fas fa-rocket ${styles.ctaIcon}`}></i>
                  ابدأ رحلتك التعليمية الآن
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.scrollDownArrow}>
          <a href="#training-courses" aria-label="الانتقال إلى قسم الدورات التدريبية">
            <i className="fas fa-chevron-down"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
