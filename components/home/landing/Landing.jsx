import styles from "../../../styles/home.module.scss";
import { ButtonPrimary } from "../../../utilities/Button";

const Landing = () => {
  return (
    <>
      <div className={styles.landing}>
        <div className={styles.pattern_one}></div>
        <div className={styles.pattern_two}></div>
        <div className={styles.pattern_three}></div>
        <section className={styles.name}>
          <div className={styles.name_wrapper}>
            <h1 className={styles.name_text}>Hi, I 'M SHIJU</h1>
            <p className={styles.value_para}>
              I am a web developer and user interface designer specializing in
              building performant, responsive websites
            </p>
          </div>
        </section>
        <ButtonPrimary text="projects" route="projects" />
      </div>
    </>
  );
};

export default Landing;
