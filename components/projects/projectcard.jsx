import { FiGithub, FiLink } from "react-icons/fi";
import styles from "../../styles/project.module.scss";

const Projectcard = ({ ...project }) => {
  const { name, description, livesite, github, tech } = project;

  return (
    <div className={styles.card_wrapper}>
      <div className={styles.header}>
        <h3 className={styles.title}>{name}</h3>
        <div className={styles.details}>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.button_wrapper}>
          <a href={livesite} target="blank" className={styles.link}>
            <FiLink />
          </a>
          <a href={github} target="blank" className={styles.link}>
            <FiGithub />
          </a>
        </div>
      </div>
      <div className={styles.footer}>
        <ul className={styles.project_skills}>
          {tech.map((t) => (
            <li key={t} className={styles.skills}>
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projectcard;
