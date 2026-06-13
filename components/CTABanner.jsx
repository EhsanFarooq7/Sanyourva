import Link from "next/link";
import styles from "./CTABanner.module.css";

export default function CTABanner() {
  return (
    <section className={styles.banner}>
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.eyebrow}>Limited time offer</p>
          <h2 className={styles.heading}>Try the work before you commit</h2>
          <p className={styles.copy}>
            Take a <strong>2-day free trial</strong> &mdash; no cost, no obligation.
            See how I handle your CRM, follow-ups, or transaction files, then decide
            if I&apos;m the right fit for your team.
          </p>
        </div>
        <Link href="/contact" className={styles.button}>
          Claim your free trial
        </Link>
      </div>
    </section>
  );
}
