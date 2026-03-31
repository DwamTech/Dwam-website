"use client";
import { useEffect, useState, ReactNode } from "react";
import Image from "next/image";
import styles from "./MultimediaSection.module.css";
import {
  FaMagic,
  FaLanguage,
  FaMobileAlt,
  FaHeadphones,
  FaChartBar,
  FaMicrophone,
  FaVideo,
  FaBookOpen,
  FaMoon,
  FaFileVideo,
  FaBezierCurve,
  FaBullhorn,
  FaMusic,
  FaVolumeUp,
} from "react-icons/fa";

type Playlist = {
  id: string;
  title: string;
  url: string;
  thumbnailUrl?: string;
};

export default function MultimediaSection() {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [flipIndex, setFlipIndex] = useState(0);
  const [selectedPlaylistId, setSelectedPlaylistId] = useState<string | null>(null);

  const services: { icon: ReactNode; label: string; url?: string; desktopOnly?: boolean }[] = [
    { icon: <FaMagic />, label: " لوجو انيميشن", url: "https://www.youtube.com/playlist?list=PLKB9gdK4mtM0yLslxgOCPMPmEB5GvUUMm" },
    { icon: <FaLanguage />, label: " فيديو مونتاج باللغات", url: "https://www.youtube.com/playlist?list=PLKB9gdK4mtM0thJasaUzwPz7CXBM7r1Qs" },
    { icon: <FaMobileAlt />, label: " ريلز دعوي", url: "https://www.youtube.com/playlist?list=PLKB9gdK4mtM003TpAfy4jpnw12ewK-h5-" },
    { icon: <FaHeadphones />, label: " الكتب الصوتيه", url: "https://youtube.com/playlist?list=PLKB9gdK4mtM3ELK3IQSmmqfqUNjMAGcbu&si=An5Bw4QobcVE6dLH" },
    { icon: <FaChartBar />, label: " تقارير مرئية", url: "https://youtube.com/playlist?list=PLKB9gdK4mtM2N5ymXgCOOL8vTW8CyJUUr&si=ZofPMzj-fxRuNUlc" },
    { icon: <FaMicrophone />, label: " البودكاست", url: "https://youtube.com/playlist?list=PLKB9gdK4mtM2KeVbi61IS-Z53trjXuDNH&si=pizff7J-g1CNVBqU" },
    { icon: <FaVideo />, label: " الفيديو بوست", url: "https://youtube.com/playlist?list=PLKB9gdK4mtM1oy5c7o39c1BW7GQk_tl_8&si=fwdu9VQk3hi09hIg" },
    { icon: <FaBookOpen />, label: " مقاطع تعليمية", url: "https://youtube.com/playlist?list=PLKB9gdK4mtM2_Mo0H5aD2dU_oo30D9eI2&si=rr25kYnhF3-lnmXu" },
    { icon: <FaMoon />, label: " فيديوهات دعوية", url: "https://youtube.com/playlist?list=PLKB9gdK4mtM1PEAX2uKK5-4K9MRws747C&si=UdNvOmfonDQIIEaE" },
    { icon: <FaFileVideo />, label: " افلام وثائقية", url: "https://youtube.com/playlist?list=PLKB9gdK4mtM3T86wvy5b07tiG1BlrTUTm&si=xwZXsuJK9ti_zgEr" },
    { icon: <FaBezierCurve />, label: " موشن جرافيك", url: "https://youtube.com/playlist?list=PLKB9gdK4mtM3NQdzYWhlDHks-BHU0EgbT&si=XPqbxg7ia7zsRUMi" },
    { icon: <FaBullhorn />, label: " الإعلانات التجارية", url: "https://youtube.com/playlist?list=PLKB9gdK4mtM0i69JGCVPWRMZcmKO6mn4A&si=hn47v7hRtdelL4Ij" },
    { icon: <FaVolumeUp />, label: " تعليق صوتي", url: "https://youtube.com/playlist?list=PLKB9gdK4mtM3qvoRBLmhgNp9ehhYy2mua&si=k9jmevxAKlJtxer7" },
    { icon: <FaMusic />, label: "إنتاج أناشيد" , url: "https://youtube.com/playlist?list=PLKB9gdK4mtM1CaF2LyAH_AFMZUWRHN4EN&si=stBnBnWnyu420yr2" },
    { icon: <FaBookOpen />, label: " تسجيلات قرآنية", url: "https://youtube.com/playlist?list=PLKB9gdK4mtM0sEUbNG0vr86YAeP2jnJjG&si=fVF7fYZIbxm3flcE" , desktopOnly: true },
  ];

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const res = await fetch("/api/youtube/playlists", { cache: "no-store" });
        const data = await res.json();
        if (!cancelled) setPlaylists(Array.isArray(data.playlists) ? data.playlists : []);
      } catch {
        if (!cancelled) setError("تعذر تحميل قوائم التشغيل");
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!playlists.length) return;
    const id = setInterval(() => {
      setFlipIndex((i) => (i + 1) % playlists.length);
    }, 2200);
    return () => clearInterval(id);
  }, [playlists.length]);

  

  const openModal = (id: string) => setSelectedPlaylistId(id);
  const closeModal = () => setSelectedPlaylistId(null);
  const insertIndex = Math.floor(playlists.length / 2);
  const openServicePlaylist = (url?: string) => {
    if (!url) return;
    try {
      const u = new URL(url);
      const listId = u.searchParams.get("list");
      if (listId) {
        setSelectedPlaylistId(listId);
        return;
      }
    } catch {
    }
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="multimedia" className={styles.wrap}>
      <video
        className={styles.bgVideo}
        src="/Multimedia_1.webm"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div className={styles.layout}>
          <div className={styles.device}>
            <div className={styles.deviceScreen}>
              <video
                className={styles.deviceVideo}
                src="/Multimedia_1.webm"
                autoPlay
                muted
                loop
                playsInline
              />
              {playlists.length > 0 && playlists[flipIndex % playlists.length]?.thumbnailUrl && (
                <Image
                  className={styles.flipImage}
                  src={playlists[flipIndex % playlists.length].thumbnailUrl!}
                  alt="preview"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                  draggable={false}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              )}
            </div>
          </div>
          <div className={styles.side}>
            <div className={styles.sideHeader}>
              <h2 className={styles.title}>الوسائط المتعددة</h2>
              <p className={styles.sectionHint2}>{"( اضغط لمشاهدة أعمالنا )"}</p>
            </div>
            <div className={styles.servicesGrid}>
              {services.map((s, i) => (
                <div
                  className={`${styles.serviceItem} ${s.desktopOnly ? styles.desktopOnly : ""}`}
                  key={i}
                  title={s.label}
                  onClick={() => openServicePlaylist(s.url)}
                >
                  <div className={styles.serviceIcon}>{s.icon}</div>
                  <div className={styles.serviceLabel}>{s.label}</div>
                </div>
              ))}
            </div>
            <div 
              className={`${styles.voiceOverItem} ${styles.voiceOverItemMobileOnly}`}
              onClick={() => openServicePlaylist("https://youtube.com/playlist?list=PLKB9gdK4mtM0sEUbNG0vr86YAeP2jnJjG&si=fVF7fYZIbxm3flcE")}
            >
              <div className={styles.serviceIcon}><FaBookOpen /></div>
              <div className={styles.serviceLabel}>خدمة تسجيلات قرآنية</div>
            </div>
            <div className={styles.moreBtnWrapper}>
              <a href="https://wa.me/201555855857" target="_blank" rel="noopener noreferrer" className={styles.moreBtn}>
                <span>الـمـزيـد</span>
              </a>
              <div className={styles.scrollDownArrow}>
                <a href="#ai" aria-label="الانتقال إلى قسم الذكاء الاصطناعي">
                  <i className="fas fa-chevron-down"></i>
                </a>
              </div>
            </div>
           
          </div>
        </div>
      </div>
      {selectedPlaylistId && (
        <div className={styles.modalBackdrop} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <iframe
              className={styles.modalFrame}
              src={`https://www.youtube.com/embed/videoseries?list=${selectedPlaylistId}`}
              title="YouTube playlist"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <button className={styles.closeBtn} onClick={closeModal}>إغلاق</button>
          </div>
        </div>
      )}
    </section>
  );
}
