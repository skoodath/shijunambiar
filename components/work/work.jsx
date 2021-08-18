import styles from "../../styles/work.module.scss";
import WorkCard from "./workcard";
import works from "../../components/data/workdata";

const Work = () => {
  return (
    <div className={styles.wrapper} name="work">
      <div className={styles.out_circle}>
        <div className={styles.inner_circle}>
          <span>2</span>
        </div>
      </div>
      <div className={styles.exp_inner}>
        <h2 className={styles.text}>My Work</h2>
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
