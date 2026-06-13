import styles from "./SectionHeading.module.css";

export default function SectionHeading({ eyebrow, title, lede }) {
  return (
    <div className={styles.wrap}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className={styles.title}>{title}</h2>
      {lede && <p className={styles.lede}>{lede}</p>}
    </div>
  );
}
