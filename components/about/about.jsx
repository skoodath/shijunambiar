import styles from "../../styles/about.module.scss";
import AboutMe from "./aboutlist";
import Skill from "./skills";

const About = () => {
  return (
    <div className={styles.wrapper} name="about">
      <div className={styles.out_circle}>
        <div className={styles.inner_circle}>
          <span>3</span>
        </div>
      </div>
      <div className={styles.inner}>
        <h2 className={styles.text}>About Me</h2>
        <AboutMe />
        <Skill />
      </div>
    </div>
  );
};

export default About;
