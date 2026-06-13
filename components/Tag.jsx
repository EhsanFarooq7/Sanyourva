import styles from "./Tag.module.css";

/**
 * Tag — a small "property tag" badge, styled after the hang-tags used on
 * real estate lockboxes and keychains. Used throughout the site for
 * states served, CRMs/tools, and skills.
 */
export default function Tag({ children, tone = "default" }) {
  return (
    <span className={`${styles.tag} ${styles[tone] || ""}`}>
      <span className={styles.hole} aria-hidden="true" />
      <span className={styles.label}>{children}</span>
    </span>
  );
}
