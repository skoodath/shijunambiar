import styles from "../../styles/project.module.scss";
import ProjectButton from "../../common/ProjectButton";
import { motion } from "framer-motion";

const variants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.6,
      ease: [0.001, -0.4, 0.6, 0.99],
    },
  },
};

const ProjectCard = ({ project }) => {
  const { name, description, livesite, github, tech } = project;
  return (
    <motion.article
      className={styles.card}
      variants={variants}
      initial="initial"
      animate="animate"
    >
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
    </motion.article>
  );
};

export default ProjectCard;
