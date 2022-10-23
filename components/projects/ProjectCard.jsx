import styles from "../../styles/project.module.scss";

const ProjectCard = ({ project }) => {
  const { name, description, livesite, github, tech } = project;
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.link}>{name}</h3>
      </div>
      <div className={styles.details}>
        <p className={styles.description}>{description}</p>
      </div>
      <ul className={styles.project_skills}>
        {tech.map((t) => (
          <li key={t} className={styles.skills}>
            {t}
          </li>
        ))}
      </ul>
      <div className={styles.button_wrapper}>
        <a href={livesite} target="blank" className={styles.live}>
          Visit
        </a>
        <a href={github} target="blank" className={styles.source}>
          Github
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
