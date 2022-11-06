import { useRef } from "react";
import styles from "../../styles/home.module.scss";
import Featured from "./featured/Featured";
import Intro from "./intro/Intro";
import Landing from "./landing/Landing";
import { motion } from "framer-motion";

const home = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
  exit: {
    opacity: 0,
    x: -100,
  },
};

const Home = () => {
  return (
    <>
      <motion.section
        className={styles.home}
        variants={home}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Landing />
        <Intro />
        <Featured />
      </motion.section>
    </>
  );
};

export default Home;
