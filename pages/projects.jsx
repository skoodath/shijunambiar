import styles from "../styles/project.module.scss";
import projects from "../components/data/extra";
import Projectcard from "../components/projects/projectcard";

const Projects = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        {/* <h3 className={styles.text}>Side Projects</h3>
        <ul className={styles.card_container}>
          {projects.map((project) => (
            <Projectcard key={project.id} {...project} />
          ))}
        </ul> */}
        <div style={{ height: "100vh", padding: "20rem" }}>
          <p
            style={{
              backgroundColor: "#ddd",
              padding: "2rem",
              color: "#ff0000",
            }}
          >
            This page is being updated! Will be live shortly
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
