import styles from "./StatBadge.module.css";

export default function StatBadge({ value, label }) {
  return (
    <div className={styles.stat}>
      <p className={styles.value}>{value}</p>
      <p className={styles.label}>{label}</p>
    </div>
  );
}
