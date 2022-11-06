import styles from "../../../styles/home.module.scss";
import { ButtonPrimary } from "../../../common/Button";

const Landing = () => {
  return (
    <>
      <div className={styles.landing}>
        <section className={styles.name_wrapper}>
          <h1 className={styles.name_text}>
            Hi! I 'm <span>shiju</span>, I love{" "}
            <span style={{ textTransform: "lowercase", fontSize: "100%" }}>
              creating
            </span>{" "}
            for the web!
          </h1>
          <ButtonPrimary text="projects" route="projects" />
        </section>
      </div>
    </>
  );
};

export default Landing;
