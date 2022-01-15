import styles from "../../styles/work.module.scss";
import WorkCard from "./workcard";
import works from "../data/showcase";

const Work = () => {
  return (
    <div className={styles.wrapper} name="work">
      <div className={styles.exp_inner}>
        <h2 className={styles.text}>Projects</h2>
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
