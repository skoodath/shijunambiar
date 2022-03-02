import styles from "../../styles/project.module.scss";
import projects from "../data/extra";
import Projectcard from "./projectcard";

const Project = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        <h3
          className={styles.text}
          style={{ color: "#ffffff", fontSize: "1.5rem" }}
        >
          Other Projects
        </h3>
        <div className={styles.card_container}>
          {projects.map((project) => (
            <Projectcard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
