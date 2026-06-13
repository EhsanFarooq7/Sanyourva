import Link from "next/link";
import Tag from "./Tag";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <p className="eyebrow">US real estate operations &amp; AI support</p>
          <h1 className={styles.heading}>
            Your CRM, follow-ups, and back office &mdash; handled.
          </h1>
          <p className={styles.lede}>
            I help real estate agents and teams run smoother with hands-on CRM
            management, automation, transaction coordination, and reverse
            prospecting &mdash; built on 2 years of experience supporting US
            agents from Compass, eXp Realty, C21, and Virtual Properties.
          </p>

          <div className={styles.actions}>
            <Link href="/contact" className={styles.primaryButton}>
              Start your 2-day free trial
            </Link>
            <Link href="/services" className={styles.secondaryButton}>
              See what I do
            </Link>
          </div>

          <div className={styles.tagRow}>
            <Tag tone="accent">NY</Tag>
            <Tag tone="accent">GA</Tag>
            <Tag tone="accent">FL</Tag>
            <Tag tone="accent">MI</Tag>
            <Tag tone="success">Top Rated &mdash; Upwork</Tag>
          </div>
        </div>

        <div className={styles.photoWrap}>
          <div className={styles.photoFrame}>
            {/*
              TODO: replace this placeholder with your photo.
              1. Add your image to /public/images/profile.jpg
              2. Replace the placeholder <div> below with:
                 <Image src="/images/profile.jpg" alt="Ehsan" fill style={{ objectFit: "cover" }} />
            */}
            <div className={styles.photoPlaceholder} aria-hidden="true">
              <span>Your photo here</span>
            </div>
          </div>
          <div className={styles.photoTag}>
            <p className={styles.photoTagLabel}>Available for</p>
            <p className={styles.photoTagValue}>New clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}
