import styles from "./InternationalAgentsSection.module.css";

export default function InternationalAgentsSection() {
  const agents = [
    { flag: "/flags/flag-saudi-arabia.webp", country: "السعودية" },
    { flag: "/flags/flag-united-arab-emirates.webp", country: "الإمارات" },
    { flag: "/flags/flag-kuwait.webp", country: "الكويت" },
    { flag: "/flags/flag-indonesia.webp", country: "إندونيسيا" },
    { flag: "/flags/flag-united-states-america.webp", country: "أمريكا" },
    { flag: "/flags/flag-germany.webp", country: "ألمانيا" },
    
  ];

  return (
    <section id="international-agents" className={styles.section}>
      {/* Background */}
      <div className={styles.bgImage}></div>
      <div className={styles.bgOverlay}></div>

      {/* Animated Stars */}
      <div className={styles.starsContainer}>
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={styles.star}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header} data-aos="fade-down">
          <h2 className={styles.title}>
            <span className={styles.highlight}>وكلائنا</span> بالخارج
          </h2>
          <p className={styles.subtitle}>
            نفخر بشراكاتنا العالمية في مختلف دول العالم
          </p>
        </div>

        {/* Agents Grid */}
        <div className={styles.agentsGrid}>
          {agents.map((agent, index) => (
            <div
              key={index}
              className={styles.agentCard}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className={styles.flagWrapper}>
                <img
                  src={agent.flag}
                  alt={agent.country}
                  className={styles.flagImage}
                />
                <div className={styles.flagOverlay}></div>
              </div>
              <div className={styles.countryName}>{agent.country}</div>
              <div className={styles.cardGlow}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
