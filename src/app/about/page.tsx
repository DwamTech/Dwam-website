"use client";

import { useEffect, useRef } from "react";

import Hero from "@/components/Hero";
import SimpleFooter from "@/components/SimpleFooter";

import styles from "./page.module.css";

export default function AboutPage() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <main className={styles.aboutPage}>
      <Hero title="من نحن" />

      <section id="about" className={styles.mainSection}>
        <div className={styles.container}>
          <div
            ref={(el) => {
              sectionRefs.current[0] = el;
            }}
            className={styles.aboutCard}
          >
            <div className={styles.aboutGrid}>
              <div className={styles.ceoSection}>
                <div className={styles.ceoImageWrapper}>
                  <img
                    src="/Picture1.webp"
                    alt="عبد الله زيدان - مدير شركة دوام"
                    className={styles.ceoImage}
                  />
                  <div className={styles.experienceBadge}>
                    <span className={styles.experienceNumber}>15+</span>
                    <span className={styles.experienceText}>عامًا من الخبرة</span>
                  </div>
                  <div className={styles.ceoBadge}>
                    <span className={styles.ceoName}>عبد الله زيدان</span>
                    <span className={styles.ceoTitle}>مدير شركة دوام</span>
                  </div>
                </div>
              </div>

              <div className={styles.aboutContent}>
                <h2 className={styles.companyTitle}>شركة دوام للأعمال التقنية</h2>
                <div className={styles.quoteWrapper}>
                  <svg className={styles.quoteIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                  </svg>
                  <p className={styles.aboutText}>
                    هي شركة رائدة في مجال تكنولوجيا المعلومات، تعمل على تحقيق التحول الرقمي من خلال حلول ذكية،
                    وإبداع راقٍ، وخبرة متميزة. يضم فريق العمل نخبة من المتخصصين الذين تتجاوز خبراتهم 15 عامًا
                    في مجالات التصميم، والبرمجة، وتطوير الأنظمة. نحرص على تقديم خدمات مبتكرة تلبي احتياجات
                    العملاء وتحقق أهدافهم بكفاءة، ومن خلال التزامنا بالجودة والاحترافية نسعى لبناء شراكات
                    طويلة الأمد مع عملائنا في مختلف القطاعات.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.featuresGrid}>
            <div
              ref={(el) => {
                sectionRefs.current[1] = el;
              }}
              className={styles.featureCard}
            >
              <div className={styles.featureHeader}>
                <div className={styles.featureIconWrapper}>
                  <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill="currentColor" />
                  </svg>
                </div>
                <h3 className={styles.featureTitle}>الرؤية</h3>
              </div>
              <p className={styles.featureText}>
                أن نكون الشريك التقني الأول في الشرق الأوسط، وأن نعمل على تصدير أعمالنا التقنية إلى كافة أنحاء
                العالم، من خلال تقديم حلول تقنية فعّالة، ومستدامة، وسهلة الاستخدام.
              </p>
            </div>

            <div
              ref={(el) => {
                sectionRefs.current[2] = el;
              }}
              className={styles.featureCard}
            >
              <div className={styles.featureHeader}>
                <div className={styles.featureIconWrapper}>
                  <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" fill="currentColor" />
                  </svg>
                </div>
                <h3 className={styles.featureTitle}>الرسالة</h3>
              </div>
              <p className={styles.featureText}>
                تقديم خدمات تقنية متكاملة تساعد الأفراد والمؤسسات على تحقيق التحول الرقمي، بأعلى درجات
                الجودة، والابتكار، والموثوقية، مع الالتزام بالقيم المهنية والمعايير العالمية.
              </p>
            </div>

            <div
              ref={(el) => {
                sectionRefs.current[3] = el;
              }}
              className={styles.featureCard}
            >
              <div className={styles.featureHeader}>
                <div className={styles.featureIconWrapper}>
                  <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z" fill="currentColor" />
                  </svg>
                </div>
                <h3 className={styles.featureTitle}>التراخيص</h3>
              </div>
              <ul className={styles.licenseList}>
                <li>مرخصة بالهيئة العامة للاستثمار بسجل تجاري 9069</li>
                <li>مرخصة رسميًا في إندونيسيا بسجل تجاري 4024021331103280</li>
                <li>وكلاء معتمدون في: السعودية، الكويت، المغرب، ألمانيا، وأمريكا</li>
              </ul>
            </div>
          </div>

          <div
            ref={(el) => {
              sectionRefs.current[4] = el;
            }}
            className={styles.mapSection}
          >
            <h3 className={styles.mapTitle}>انتشارنا العالمي</h3>
            <div className={styles.mapWrapper}>
              <img
                src="/World map.webp"
                alt="خريطة العالم - انتشار وكلاء شركة دوام"
                className={styles.mapImage}
              />
            </div>
          </div>
        </div>
      </section>

      <SimpleFooter />
    </main>
  );
}
