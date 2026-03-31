import styles from "./ContactUsSection.module.css";
import { 
  FaPhoneAlt, 
  FaHeadset, 
  FaGlobe, 
  FaComments, 
  FaFax,
  FaEnvelope 
} from "react-icons/fa";

export default function ContactUsSection() {
  const contacts = [
    {
      icon: <FaPhoneAlt />,
      title: "الخط الساخن",
      number: "+201555855857",
      href: "tel:+201555855857",
      color: "#ff6a00",
      
    },
    {
      icon: <FaHeadset />,
      title: "الدعم الفني",
      number: "+201277588568",
      href: "https://wa.me/201555855857",
      color: "#00b7ff",
     
    },
    {
      icon: <FaGlobe />,
      title: "الاتصال الدولي",
      number: "+1-929-243-9722",
      href: "https://wa.me/201555855857",
      color: "#00d084",
      
    },
    {
      icon: <FaComments />,
      title: "الاستشارات التقنية",
      number: "+201022501043",
      href: "https://wa.me/201555855857",
      color: "#9b59b6",
     
    },
    {
      icon: <FaFax />,
      title: "تليفاكس",
      number: "064-3207490",
      href: "tel:+064-3207490",
      color: "#e74c3c",
      
    },
    {
      icon: <FaEnvelope />,
      title: "البريد الإلكتروني",
      number: "info@dawamtech.com",
      href: "mailto:info@dawamtech.com",
      color: "#ff8400",
      
    },
    
  ];

  return (
    <section id="contact-us" className={styles.section}>
      {/* Background Elements */}
      <div className={styles.bgPattern}></div>
      <div className={styles.bgOverlay}></div>

      {/* Floating Shapes */}
      <div className={styles.floatingShapes}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
        <div className={styles.shape3}></div>
      </div>

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header} data-aos="fade-down">
          <h2 className={styles.title}>
            يسعدنا <span className={styles.highlight}>اتصالك</span>
          </h2>
          <p className={styles.subtitle}>
            نحن هنا لخدمتك على مدار الساعة، تواصل معنا عبر أي من القنوات التالية
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className={styles.contactGrid}>
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              className={styles.contactCard}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              style={{
                "--card-color": contact.color,
              } as React.CSSProperties}
            >
              <div className={styles.cardBackground}></div>
              
              <div className={styles.iconWrapper}>
                <div className={styles.iconCircle}>
                  {contact.icon}
                </div>
                <div className={styles.iconGlow}></div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.contactTitle}>{contact.title}</h3>
                
                <p className={styles.contactNumber}>{contact.number}</p>
              </div>

              <div className={styles.cardShine}></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
