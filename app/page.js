import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import StatBadge from "@/components/StatBadge";
import Tag from "@/components/Tag";
import CTABanner from "@/components/CTABanner";
import { SERVICES, TOOLS } from "@/lib/data";
import styles from "./page.module.css";

export default function HomePage() {
  const featuredServices = SERVICES.slice(0, 4);

  return (
    <>
      <Hero />

      <section className="section">
        <div className="container">
          <div className={styles.stats}>
            <StatBadge value="2 yrs" label="US real estate experience" />
            <StatBadge value="100%" label="Upwork job success" />
            <StatBadge value="5.0" label="Average client rating" />
            <StatBadge value="4" label="US states served" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="What I do"
            title="Day-to-day support that keeps your business moving"
            lede="From automation to client follow-up, I cover the operational work behind a real estate business so you can focus on clients and closings."
          />

          <div className={styles.grid}>
            {featuredServices.map((service) => (
              <ServiceCard key={service.number} {...service} />
            ))}
          </div>

          <div className={styles.moreLink}>
            <a href="/services">View all 10 services →</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Tools I work in"
            title="Comfortable in the platforms your team already uses"
          />
          <div className={styles.toolRow}>
            {TOOLS.map((tool) => (
              <Tag key={tool}>{tool}</Tag>
            ))}
          </div>
        </div>
      </section>

      <div className="container">
        <CTABanner />
      </div>
    </>
  );
}
