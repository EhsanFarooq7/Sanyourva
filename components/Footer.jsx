import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.brand}>Ehsan</p>
          <p className={styles.tagline}>
            US real estate operations support &mdash; CRM, automation &amp; transaction
            coordination for agents and teams across NY, GA, FL &amp; MI.
          </p>
        </div>

        <div className={styles.links}>
          <p className={styles.heading}>Site</p>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className={styles.links}>
          <p className={styles.heading}>Get in touch</p>
          {/* TODO: replace with your real contact details */}
          <a href="mailto:sanyour.va@gmail.com">sanyour.va@gmail.com</a>
          <a href="https://wa.me/923105895503?text=Hi!%20I'm%20interested%20in%20your%20services." target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href="https://www.upwork.com/freelancers/~014e7d5e62dc7e436a?viewMode=1" target="_blank" rel="noreferrer">
            Upwork profile
          </a>
          <a href="https://www.linkedin.com/in/muhammad-ehsan-farooq-17b2b8266/" target="_blank" rel="noreferrer">
            LinkedIn profile
          </a>
          <a href="https://ehsan-ai.online" target="_blank" rel="noreferrer">
            ehsan-ai.online
          </a>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>&copy; {year} Ehsan. All rights reserved.</p>
        <p className={styles.badge}>Top Rated &mdash; 100% Job Success &mdash; 5.0 Rating</p>
      </div>
    </footer>
  );
}
