import styles from "./page.module.css";
import Link from "next/link";
import Footer from "@/components/Footer";
import SimpleFooter from "@/components/SimpleFooter";

export default function PrivacyPolicy() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <Link href="/" className={styles.backButton}>
            <i className="fas fa-arrow-right"></i>
            <span>العودة للرئيسية</span>
          </Link>
          <h1 className={styles.heroTitle}>سياسة الخصوصية</h1>
          <p className={styles.heroSubtitle}>
            نحن في دوام للبرمجيات والأعمال التقنية نلتزم بحماية خصوصيتك وبياناتك الشخصية
          </p>
          <div className={styles.heroDate}>
            آخر تحديث: فبراير 2026
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            
            <div className={styles.section}>
              <div className={styles.sectionIcon}>
                <i className="fas fa-shield-alt"></i>
              </div>
              <h2 className={styles.sectionTitle}>المقدمة</h2>
              <p className={styles.text}>
                تصف سياسة الخصوصية هذه كيفية جمع واستخدام وحماية المعلومات الشخصية التي تقدمها عند استخدام خدماتنا. نحن ملتزمون بضمان حماية خصوصيتك وأمان بياناتك.
              </p>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionIcon}>
                <i className="fas fa-database"></i>
              </div>
              <h2 className={styles.sectionTitle}>المعلومات التي نجمعها</h2>
              <ul className={styles.list}>
                <li>المعلومات الشخصية: الاسم، البريد الإلكتروني، رقم الهاتف</li>
                <li>معلومات الشركة: اسم الشركة، المجال، الموقع الإلكتروني</li>
                <li>البيانات التقنية: عنوان IP، نوع المتصفح، نظام التشغيل</li>
                <li>معلومات الاستخدام: كيفية تفاعلك مع خدماتنا ومنصاتنا</li>
              </ul>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionIcon}>
                <i className="fas fa-cogs"></i>
              </div>
              <h2 className={styles.sectionTitle}>كيفية استخدام المعلومات</h2>
              <ul className={styles.list}>
                <li>تقديم وتحسين خدماتنا البرمجية والتقنية</li>
                <li>التواصل معك بخصوص الخدمات والمشاريع</li>
                <li>إرسال التحديثات والعروض الخاصة (بموافقتك)</li>
                <li>تحليل وتحسين تجربة المستخدم</li>
                <li>الامتثال للمتطلبات القانونية والتنظيمية</li>
              </ul>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionIcon}>
                <i className="fas fa-lock"></i>
              </div>
              <h2 className={styles.sectionTitle}>حماية البيانات</h2>
              <p className={styles.text}>
                نستخدم إجراءات أمنية متقدمة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التعديل أو الإفصاح أو الإتلاف. نستخدم تشفير SSL/TLS لجميع عمليات نقل البيانات الحساسة.
              </p>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionIcon}>
                <i className="fas fa-share-alt"></i>
              </div>
              <h2 className={styles.sectionTitle}>مشاركة المعلومات</h2>
              <p className={styles.text}>
                لا نبيع أو نؤجر أو نشارك معلوماتك الشخصية مع أطراف ثالثة إلا في الحالات التالية:
              </p>
              <ul className={styles.list}>
                <li>بموافقتك الصريحة</li>
                <li>لمقدمي الخدمات الذين يساعدوننا في تشغيل أعمالنا</li>
                <li>عند الامتثال للمتطلبات القانونية</li>
                <li>لحماية حقوقنا وممتلكاتنا</li>
              </ul>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionIcon}>
                <i className="fas fa-cookie-bite"></i>
              </div>
              <h2 className={styles.sectionTitle}>ملفات تعريف الارتباط (Cookies)</h2>
              <p className={styles.text}>
                نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا. يمكنك التحكم في ملفات تعريف الارتباط من خلال إعدادات المتصفح الخاص بك.
              </p>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionIcon}>
                <i className="fas fa-user-check"></i>
              </div>
              <h2 className={styles.sectionTitle}>حقوقك</h2>
              <ul className={styles.list}>
                <li>الحق في الوصول إلى بياناتك الشخصية</li>
                <li>الحق في تصحيح البيانات غير الدقيقة</li>
                <li>الحق في حذف بياناتك (الحق في النسيان)</li>
                <li>الحق في الاعتراض على معالجة بياناتك</li>
                <li>الحق في نقل البيانات</li>
              </ul>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionIcon}>
                <i className="fas fa-envelope"></i>
              </div>
              <h2 className={styles.sectionTitle}>اتصل بنا</h2>
              <p className={styles.text}>
                إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا:
              </p>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:info@dawamtech.com">info@dawamtech.com</a>
                </div>
                <div className={styles.contactItem}>
                  <i className="fas fa-phone"></i>
                  <a href="tel:+201555855857">+201555855857</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
         <SimpleFooter />
    </div>
  );
}
