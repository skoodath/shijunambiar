import styles from "../../styles/work.module.scss";
import WorkCard from "./workcard";
import works from "../data/showcase";
import Title from "../../utilities/title";

const title = {
  name: "Projects",
};

const WorkComponent = () => {
  
  return (
    <>
      <section className={styles.wrapper} name="work">
        <div className={styles.inner}>
          <Title text={title.name} />
          <ul className={styles.card_container}>
            {works.map((work) => (
              <WorkCard key={work.id} work={work} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default WorkComponent;
