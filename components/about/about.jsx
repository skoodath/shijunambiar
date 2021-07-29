import styles from "../../styles/about.module.scss";
import AboutMe from "./aboutlist";
import Skill from "./skills";

const About = () => {
  return (
    <div className={styles.wrapper} name="about">
      <div className={styles.inner}>
        <h2 className={[styles.text, styles.text_color_dark].join(" ")}>
          About Me
        </h2>
        <AboutMe />
        <Skill />
      </div>
    </div>
  );
};

export default About;
