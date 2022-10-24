import styles from "../../styles/project.module.scss";
import { BsGithub } from "react-icons/bs";
import ProjectButton from "../../common/ProjectButton";

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
      <ProjectButton livesite={livesite} github={github} />
    </article>
  );
};

export default ProjectCard;
