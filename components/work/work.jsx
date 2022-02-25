import styles from "../../styles/work.module.scss";
import WorkCard from "./workcard";
import works from "../data/showcase";

const Work = () => {
  return (
    <>
      <section className={styles.wrapper} name="work">
        <div className={styles.inner}>
          <h2 className={styles.text}>Projects</h2>
          <div className={styles.card_container}>
            {works.map((work) => (
              <WorkCard key={work.id} {...work} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
