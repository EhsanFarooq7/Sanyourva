import SectionHeading from "@/components/SectionHeading";
import ExperienceItem from "@/components/ExperienceItem";
import StatBadge from "@/components/StatBadge";
import Tag from "@/components/Tag";
import CTABanner from "@/components/CTABanner";
import { EXPERIENCE } from "@/lib/data";
import styles from "./page.module.css";

export default function ExperiencePage() {
  return (
    <div className="container section">
      <SectionHeading
        eyebrow="Experience"
        title="Two years inside US real estate operations"
        lede="I've worked directly with agents and teams from Compass, eXp Realty, Century 21, and Virtual Properties — across listing pipelines, buyer follow-up, and transaction files."
      />

      <div className={styles.stats}>
        <StatBadge value="2 yrs" label="US real estate experience" />
        <StatBadge value="100%" label="Upwork job success score" />
        <StatBadge value="5.0" label="Average client rating" />
        <Tag tone="success">Top Rated Plus &mdash; Upwork</Tag>
      </div>

      <div className={styles.list}>
        {EXPERIENCE.map((item) => (
          <ExperienceItem key={item.title} {...item} />
        ))}
      </div>

      <CTABanner />
    </div>
  );
}
