import SimpleFooter from "@/components/SimpleFooter";
import styles from "./page.module.css";
import Link from "next/link";

export default function TermsConditions() {
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
          <h1 className={styles.heroTitle}>الشروط والأحكام</h1>
          <p className={styles.heroSubtitle}>
            يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام خدماتنا
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
                <i className="fas fa-file-contract"></i>
              </div>
              <h2 className={styles.sectionTitle}>القبول والموافقة</h2>
              <p className={styles.text}>
                باستخدامك لخدمات دوام للبرمجيات والأعمال التقنية، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط، يرجى عدم استخدام خدماتنا.
              </p>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionIcon}>
                <i className="fas fa-handshake"></i>
              </div>
              <h2 className={styles.sectionTitle}>الخدمات المقدمة</h2>
              <p className={styles.text}>
                نقدم مجموعة واسعة من الخدمات التقنية والبرمجية، بما في ذلك:
              </p>
              <ul className={styles.list}>
                <li>تطوير البرمجيات والتطبيقات المخصصة</li>
                <li>تصميم وتطوير المواقع الإلكترونية</li>
                <li>خدمات الاستضافة السحابية</li>
                <li>التسويق الرقمي وإدارة المحتوى</li>
                <li>الاستشارات التقنية والتحول الرقمي</li>
                <li>التدريب والدعم الفني</li>
              </ul>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionIcon}>
                <i className="fas fa-user-shield"></i>
              </div>
              <h2 className={styles.sectionTitle}>مسؤوليات العميل</h2>
              <ul className={styles.list}>
                <li>تقديم معلومات دقيقة وكاملة عند طلب الخدمات</li>
                <li>الالتزام بمواعيد الدفع المتفق عليها</li>
                <li>توفير المحتوى والمواد اللازمة في الوقت المحدد</li>
                <li>التعاون مع فريقنا لضمان نجاح المشروع</li>
                <li>عدم استخدام خدماتنا لأغراض غير قانونية</li>
              </ul>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionIcon}>
                <i className="fas fa-briefcase"></i>
              </div>
              <h2 className={styles.sectionTitle}>مسؤولياتنا</h2>
              <ul className={styles.list}>
                <li>تقديم خدمات عالية الجودة وفقاً للمعايير المتفق عليها</li>
                <li>الالتزام بالمواعيد النهائية المحددة في العقد</li>
                <li>توفير الدعم الفني خلال فترة الضمان</li>
                <li>حماية بيانات العملاء والحفاظ على سريتها</li>
                <li>إبلاغ العميل بأي تأخيرات أو مشاكل محتملة</li>
              </ul>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionIcon}>
                <i className="fas fa-dollar-sign"></i>
              </div>
              <h2 className={styles.sectionTitle}>الأسعار والدفع</h2>
              <ul className={styles.list}>
                <li>جميع الأسعار المعروضة بالجنيه المصري ما لم يُذكر خلاف ذلك</li>
                <li>يتم الدفع وفقاً للجدول الزمني المتفق عليه في العقد</li>
                <li>قد تخضع الأسعار للتغيير دون إشعار مسبق</li>
                <li>الدفعة المقدمة غير قابلة للاسترداد بعد بدء العمل</li>
                <li>التأخر في الدفع قد يؤدي إلى تعليق الخدمات</li>
              </ul>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionIcon}>
                <i className="fas fa-copyright"></i>
              </div>
              <h2 className={styles.sectionTitle}>الملكية الفكرية</h2>
              <p className={styles.text}>
                جميع حقوق الملكية الفكرية للأعمال المنجزة تنتقل إلى العميل بعد استلام كامل المبلغ المتفق عليه، ما لم يُنص على خلاف ذلك في العقد. نحتفظ بالحق في استخدام المشاريع المنجزة كأمثلة في معرض أعمالنا.
              </p>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionIcon}>
                <i className="fas fa-shield-alt"></i>
              </div>
              <h2 className={styles.sectionTitle}>الضمان والصيانة</h2>
              <ul className={styles.list}>
                <li>نقدم ضمان لمدة 3 أشهر على جميع المشاريع البرمجية</li>
                <li>الضمان يشمل إصلاح الأخطاء البرمجية فقط</li>
                <li>التعديلات والإضافات الجديدة تخضع لرسوم إضافية</li>
                <li>نوفر عقود صيانة سنوية بأسعار تنافسية</li>
              </ul>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionIcon}>
                <i className="fas fa-ban"></i>
              </div>
              <h2 className={styles.sectionTitle}>الإلغاء والاسترداد</h2>
              <ul className={styles.list}>
                <li>يمكن إلغاء المشروع قبل بدء العمل مع استرداد 80% من المبلغ</li>
                <li>بعد بدء العمل، لا يمكن استرداد الدفعة المقدمة</li>
                <li>في حالة الإلغاء، يتم احتساب تكلفة العمل المنجز</li>
                <li>نحتفظ بالحق في إلغاء المشروع في حالة عدم التزام العميل</li>
              </ul>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionIcon}>
                <i className="fas fa-exclamation-triangle"></i>
              </div>
              <h2 className={styles.sectionTitle}>إخلاء المسؤولية</h2>
              <p className={styles.text}>
                لا نتحمل المسؤولية عن أي أضرار مباشرة أو غير مباشرة ناتجة عن استخدام خدماتنا، بما في ذلك فقدان البيانات أو الأرباح. نبذل قصارى جهدنا لضمان جودة الخدمات، لكننا لا نضمن خلوها التام من الأخطاء.
              </p>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionIcon}>
                <i className="fas fa-balance-scale"></i>
              </div>
              <h2 className={styles.sectionTitle}>القانون الحاكم</h2>
              <p className={styles.text}>
                تخضع هذه الشروط والأحكام لقوانين جمهورية مصر العربية. أي نزاع ينشأ عن هذه الشروط يتم حله ودياً، وإلا يتم اللجوء إلى المحاكم المصرية المختصة.
              </p>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionIcon}>
                <i className="fas fa-envelope"></i>
              </div>
              <h2 className={styles.sectionTitle}>اتصل بنا</h2>
              <p className={styles.text}>
                لأي استفسارات حول الشروط والأحكام، يرجى التواصل معنا:
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
