import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";
import { SERVICES } from "@/lib/data";
import styles from "./page.module.css";

export default function ServicesPage() {
  return (
    <div className="container section">
      <SectionHeading
        eyebrow="Services"
        title="Everything you need to keep your business running"
        lede="Pick a single service or combine a few — most clients start with one task, then hand over more once they see how it fits into their workflow."
      />

      <div className={styles.grid}>
        {SERVICES.map((service) => (
          <ServiceCard key={service.number} {...service} />
        ))}
      </div>

      <CTABanner />
    </div>
  );
}
