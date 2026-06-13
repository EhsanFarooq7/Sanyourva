import Tag from "./Tag";
import styles from "./ExperienceItem.module.css";

export default function ExperienceItem({ title, period, states, description, tools }) {
  return (
    <article className={styles.item}>
      <div className={styles.head}>
        <div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.period}>{period}</p>
        </div>
        <div className={styles.states}>
          {states.map((state) => (
            <Tag key={state} tone="accent">
              {state}
            </Tag>
          ))}
        </div>
      </div>

      <p className={styles.description}>{description}</p>

      {tools && tools.length > 0 && (
        <div className={styles.tools}>
          {tools.map((tool) => (
            <Tag key={tool}>{tool}</Tag>
          ))}
        </div>
      )}
    </article>
  );
}
