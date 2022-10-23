import styles from "../../../styles/home.module.scss";
import { ButtonPrimary } from "../../../common/Button";

const Landing = () => {
  return (
    <>
      <div className={styles.landing}>
        <div className={styles.pattern_one}></div>
        <div className={styles.pattern_two}></div>
        <section className={styles.name_wrapper}>
          <h1 className={styles.name_text}>Hi, I 'M SHIJU</h1>
          <p className={styles.value_para}>
            I am a web developer and user interface designer specializing in
            building performant, responsive websites
          </p>
          <ButtonPrimary text="projects" route="projects" />
        </section>
      </div>
    </>
  );
};

export default Landing;
