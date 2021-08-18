import styles from "../../styles/resume.module.scss";
import Title from "./title";

const TechStack = () => {
  return (
    <section className={styles.techstack}>
      <Title text={"tools & technologies"} />
      <ul className={styles.techlist}>
        <li className={styles.techitem}>ReactJS</li>
        <li className={styles.techitem}>Angular</li>
        <li className={styles.techitem}>HTML</li>
        <li className={styles.techitem}>CSS</li>
        <li className={styles.techitem}>JavaScript</li>
        <li className={styles.techitem}>NodeJS</li>
        <li className={styles.techitem}>ExpressJS</li>
        <li className={styles.techitem}>MongoDB</li>
        <li className={styles.techitem}>Sass</li>
        <li className={styles.techitem}>Styled-Components</li>
        <li className={styles.techitem}>Gulp</li>
        <li className={styles.techitem}>TypeScript</li>
        <li className={styles.techitem}>Git</li>
        <li className={styles.techitem}>Rest API</li>
        <li className={styles.techitem}>SEO</li>
        <li className={styles.techitem}>Bootstrap</li>
        <li className={styles.techitem}>Material Design</li>
        <li className={styles.techitem}>Adobe XD</li>
        <li className={styles.techitem}>Figma</li>
        <li className={styles.techitem}>GSAP</li>
      </ul>
    </section>
  );
};

export default TechStack;
