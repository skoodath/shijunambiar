import styles from "../../styles/work.module.scss";
import WorkCard from "./workcard";
import works from "../data/showcase";
import Title from "../title";

const Work = () => {
  const title = {
    name: "Projects",
  };
  return (
    <>
      <section className={styles.wrapper} name="work">
        <div className={styles.inner}>
          <Title text={title.name} />
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
