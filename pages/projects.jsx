import styles from "../styles/project.module.scss";
import projects from "../components/data/extra";
import Projectcard from "../components/projects/projectcard";

const Projects = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        <h3 className={styles.text}>Side Projects</h3>
        <ul className={styles.card_container}>
          {projects.map((project) => (
            <Projectcard key={project.id} {...project} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
