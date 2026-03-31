"use client";
import styles from "./IconGrid.module.css";

type Item = {
  id: string;
  label: string;
  icon: string;
  color?: string;
};

export default function IconGrid({ items }: { items: Item[] }) {
  const onClick = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className={styles.grid} aria-label="الخدمات">
      {items.map((item) => (
        <button
          key={item.id}
          className={styles.card}
          style={{ borderColor: item.color || "var(--color-orange)" }}
          onClick={() => onClick(item.id)}
        >
          <span className={styles.icon} style={{ color: item.color || "var(--color-orange)" }}>
            {item.icon}
          </span>
          <span className={styles.label}>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
