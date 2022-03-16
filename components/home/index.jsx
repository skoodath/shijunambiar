import styles from "../../styles/landing.module.scss";
import Social from "./social";

const LandingComponent = () => {
  return (
    <>
      <section className={styles.wrapper} name="home">
        <div className={styles.inner}>
          <section className={styles.name}>
            <div className={styles.banner}></div>
            <div className={styles.name_wrapper}>
              <h3 className={styles.name_text}>Shiju Nambiar</h3>
              <p className={styles.value_para}>
                User interface designer and web developer passionate about
                creating elegant, responsive, accessible websites
              </p>
              <Social />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default LandingComponent;
