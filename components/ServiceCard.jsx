import styles from "./ServiceCard.module.css";

export default function ServiceCard({ number, title, description }) {
  return (
    <article className={styles.card}>
      <p className={styles.number}>{number}</p>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  );
}
