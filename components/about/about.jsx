import styles from "../../styles/about.module.scss";
import AboutMe from "./aboutlist";

const About = () => {
  return (
    <div className={styles.wrapper} name="about">
      <div className={styles.inner}>
        <h2 className={styles.text} style={{ color: "#322e2e" }}>
          About Me
        </h2>
        <AboutMe />
      </div>
    </div>
  );
};

export default About;
