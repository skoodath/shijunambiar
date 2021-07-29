import styles from "../../styles/work.module.scss";
import WorkCard from "./WorkCard";
import works from "../../components/data/workdata";

const Work = () => {
  return (
    <div className={styles.wrapper} name="work">
      <div className={styles.exp_inner}>
        <h2 className={[styles.text, styles.text_color_dark].join(" ")}>
          My Work
        </h2>
        <div className={styles.card_container}>
          {works.map((work) => (
            <WorkCard key={work.id} {...work} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
