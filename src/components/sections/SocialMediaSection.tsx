import styles from "./SocialMediaSection.module.css";

export default function SocialMediaSection() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: "fa-brands fa-facebook-f",
      url: "https://www.facebook.com/DwamITA",
      color: "#1877f2"
    },
    {
      name: "LinkedIn",
      icon: "fa-brands fa-linkedin-in",
      url: "https://www.linkedin.com/in/dwamita/",
      color: "#0a66c2"
    },
    {
      name: "Twitter",
      icon: "fa-brands fa-x-twitter",
      url: "https://x.com/DwamITA",
      color: "#000000"
    },
    {
      name: "YouTube",
      icon: "fa-brands fa-youtube",
      url: "https://www.youtube.com/@dwamita",
      color: "#ff0000"
    },
    {
      name: "Instagram",
      icon: "fa-brands fa-instagram",
      url: "https://www.instagram.com/DwamITA",
      color: "#e4405f"
    },
    {
      name: "TikTok",
      icon: "fa-brands fa-tiktok",
      url: "https://www.tiktok.com/@dwamita",
      color: "#000000"
    },
    {
      name: "Behance",
      icon: "fa-brands fa-behance",
      url: "https://www.behance.net/dwamita",
      color: "#1769ff"
    },
    {
      name: "WhatsApp",
      icon: "fa-brands fa-whatsapp",
      url: "https://wa.me/201555855857",
      color: "#25d366"
    },
    {
      name: "Telegram",
      icon: "fa-brands fa-telegram",
      url: "https://t.me/+201555855857",
      color: "#0088cc"
    },
    // {
    //   name: "Email",
    //   icon: "fas fa-envelope",
    //   url: "mailto:info@dawamtech.com",
    //   color: "#ff6a00"
    // }
  ];

  return (
    <section id="social-media" className={styles.section}>
      {/* Background */}
      <div className={styles.bgGradient}></div>
      <div className={styles.bgOverlay}></div>

      {/* Animated Particles */}
      <div className={styles.particles}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      <div className={styles.container}>
        {/* Title */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            تابعنا على <span className={styles.highlight}>السوشيال ميديا</span>
          </h2>
        </div>

        {/* Social Icons */}
        <div className={styles.socialGrid}>
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              className={styles.socialIcon}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="zoom-in"
              data-aos-delay={index * 50}
              style={{
                "--social-color": social.color,
              } as React.CSSProperties}
              title={social.name}
            >
              <div className={styles.iconCircle}>
                <i className={social.icon}></i>
              </div>
              <div className={styles.iconGlow}></div>
              <span className={styles.iconLabel}>{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
