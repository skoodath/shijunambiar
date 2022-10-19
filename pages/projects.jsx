import Projectcard from "../components/projects/ProjectCard";
import styles from "../styles/project.module.scss";
import extra from "../components/data/extra";
import Title from "../common/Title";

const Projects = () => {
  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <Title text="project" />
        <div className={styles.card_container}>
          {extra.map((project) => (
            <Projectcard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
