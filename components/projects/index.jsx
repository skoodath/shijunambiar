import styles from "../../styles/project.module.scss";
import projects from "../data/extra";
import Projectcard from "./projectcard";

const ProjectComponent = () => {
  const TitleStyle = {
    color: "#12141b",
    fontSize: "1.5rem",
    fontWeight: 400,
    margin: "2rem auto",
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        <h3 className={styles.text} style={TitleStyle}>
          Side Projects
        </h3>
        <ul className={styles.card_container}>
          {projects.map((project) => (
            <Projectcard key={project.id} {...project} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectComponent;
