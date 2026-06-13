import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import styles from "./page.module.css";

export default function ContactPage() {
  return (
    <div className="container section">
      <SectionHeading
        eyebrow="2-day free trial — limited time"
        title="Let's see if it's a fit, at no cost to you"
        lede="Try my support for 2 days, completely free — no cost and no obligation. If it helps, we keep going. If not, no hard feelings. Send a message or pick a time for a quick call below."
      />

      <div className={styles.layout}>
        <ContactForm />

        <div className={styles.sidebar}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Book a quick call</h3>
            <p className={styles.cardCopy}>
              Prefer to talk it through first? Pick a time that works for you and
              I&apos;ll walk through how the trial works and answer any questions.
            </p>
            {/*
              TODO: Replace this with your actual Calendly / Cal.com link.
              Currently pointing to a placeholder.
            */}
            <a href="https://calendly.com/sanyour-va/30min" target="_blank" rel="noreferrer" className={styles.calendlyButton}>
              Choose a time →
            </a>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Direct contact</h3>
            {/* TODO: replace with your real contact details */}
            <p className={styles.cardCopy}>
              Email: <a href="mailto:sanyour.va@gmail.com">sanyour.va@gmail.com</a>
            </p>
            <p className={styles.cardCopy}>
              WhatsApp:{" "}
              <a href="https://wa.me/923105895503?text=Hi!%20I'm%20interested%20in%20your%20services." target="_blank" rel="noreferrer">
                +92 3105895503
              </a>
            </p>
            <p className={styles.cardCopy}>
              Upwork:{" "}
              <a href="https://www.upwork.com/freelancers/~014e7d5e62dc7e436a?viewMode=1" target="_blank" rel="noreferrer">
                View profile
              </a>
            </p>
            <p className={styles.cardCopy}>
              LinkedIn:{" "}
              <a href="https://www.linkedin.com/in/muhammad-ehsan-farooq-17b2b8266/" target="_blank" rel="noreferrer">
                View profile
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
