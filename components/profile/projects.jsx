import styles from "../../styles/profile.module.scss";
import Title from "./title";

const Projects = () => {
  return (
    <section className={styles.projects}>
      <Title text={"Showcase Projects"} />
      <div className={styles.project}>
        <div className={styles.prevexp_left}>
          <h3 className={styles.proj_title}>NetworkEd</h3>

          <p className={styles.jd}>
            Website designed in Figma, built with React for a not for profit
            educational research project. Styled with Styled-components and
            animated with Greensock animation and Particle-react.
          </p>
          <a href="https://www.networked.in/">https://www.networked.in/</a>
        </div>
        <div className={styles.prevexp_right}>
          <h3 className={styles.proj_title}>KubeEd</h3>

          <p className={styles.jd}>
            Website for an online educator designed in AdobeXD, built with React
            and Styled-Components.
          </p>
          <a href="https://www.kubeed.com/">https://www.kubeed.com/</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
