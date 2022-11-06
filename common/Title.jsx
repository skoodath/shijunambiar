import styles from "../styles/common/title.module.scss";
import { motion } from "framer-motion";

const title = {
  initial: {
    opacity: 0,
    y: -10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.5,
      ease: [0.001, -0.4, 0.6, 0.99],
    },
  },
};

const Title = ({ text }) => {
  return (
    <motion.h2
      layout
      className={styles.text}
      variants={title}
      initial="initial"
      animate="animate"
    >
      {text}
    </motion.h2>
  );
};

export default Title;
