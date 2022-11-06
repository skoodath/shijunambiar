import ProjectCard from "../components/projects/ProjectCard";
import styles from "../styles/project.module.scss";
import extra from "../components/data/extra";
import Title from "../common/Title";
import { motion } from "framer-motion";

const project = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.001, -0.4, 0.6, 0.99],
    },
  },
  exit: {
    opacity: 0,
    x: 100,
  },
};

const cards = {
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const Projects = () => {
  return (
    <motion.section
      className={styles.container}
      variants={project}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className={styles.inner}>
        <Title text="project" />
        <motion.div className={styles.card_container} variants={cards}>
          {extra.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
