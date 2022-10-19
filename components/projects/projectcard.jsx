import styles from "../../styles/project.module.scss";

const ProjectCard = ({ project }) => {
  const { name, description, livesite, github, tech } = project;
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <div className={styles.button_wrapper}>
          <h3 className={styles.link}>
            <a href={livesite} target="blank">
              {name}
            </a>
          </h3>
          <a href={github} target="blank" className={styles.source}>
            <code>Github</code>
          </a>
        </div>
        <div className={styles.details}>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
      <ul className={styles.project_skills}>
        {tech.map((t) => (
          <li key={t} className={styles.skills}>
            {t}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ProjectCard;
