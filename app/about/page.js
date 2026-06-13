import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import Tag from "@/components/Tag";
import StatBadge from "@/components/StatBadge";
import { TOOLS, STATES } from "@/lib/data";
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <div className="container section">
      <SectionHeading
        eyebrow="About"
        title="A dedicated operations partner for your real estate business"
        lede="I'm Ehsan (San), a US real estate virtual assistant and AI-focused developer. Over the last two years I've worked behind the scenes for agents and teams across NY, GA, FL, and MI — keeping CRMs clean, pipelines moving, and clients followed up with."
      />

      <div className={styles.layout}>
        <div className={styles.photoFrame}>
          {/*
            TODO: replace this placeholder with your photo.
            1. Add your image to /public/images/profile.jpg
            2. Replace the placeholder <div> below with:
               <Image src="/images/profile.jpg" alt="Ehsan" fill style={{ objectFit: "cover" }} />
          */}
          <Image src="/images/self-face.jpg" alt="Ehsan" fill style={{ objectFit: "cover" }} />
          {/* <div className={styles.photoPlaceholder} aria-hidden="true">
            <span>Your photo here</span>
          </div> */}
        </div>

        <div className={styles.content}>
          <h3 className={styles.heading}>How I work</h3>
          <p className={styles.paragraph}>
            I started supporting US real estate agents two years ago and have since
            worked with agents from Compass, eXp Realty, C21, and Virtual Properties.
            My focus is simple: take repetitive operational work off your plate —
            CRM upkeep, follow-ups, transaction paperwork, and reporting — so you can
            spend your time with clients.
          </p>
          <p className={styles.paragraph}>
            Alongside real estate operations, I work on web development and AI-powered
            automation, which means I can also build and maintain the tools your
            business runs on, not just operate the ones you already have.
          </p>

          <h3 className={styles.heading}>Education</h3>
          {/* TODO: replace with your real education details */}
          <ul className={styles.educationList}>
            <li>
              <p className={styles.eduDegree}>BS in Software Engineering</p>
              <p className={styles.eduMeta}>NUML Islamabad PK · 2026</p>
            </li>
          </ul>

          <h3 className={styles.heading}>States I&apos;ve worked in</h3>
          <div className={styles.tagRow}>
            {STATES.map((state) => (
              <Tag key={state} tone="accent">
                {state}
              </Tag>
            ))}
          </div>

          <h3 className={styles.heading}>CRMs &amp; tools</h3>
          <div className={styles.tagRow}>
            {TOOLS.map((tool) => (
              <Tag key={tool}>{tool}</Tag>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.stats}>
        <StatBadge value="2 yrs" label="US real estate experience" />
        <StatBadge value="100%" label="Upwork job success" />
        <StatBadge value="5.0" label="Average client rating" />
      </div>
    </div>
  );
}
