import styles from "../../styles/landing.module.scss";
import Social from "./social";

const Landing = () => {
  return (
    <>
      <section className={styles.wrapper} name="home">
        <div className={styles.inner}>
          <section className={styles.name}>
            <div className={styles.banner}></div>
            <div className={styles.name_left}>
              <div className={styles.name_title}>
                <h3 className={styles.name_text}>Shiju Nambiar</h3>
                <h1 className={styles.profile_text}>
                  UI | Front End Developer
                </h1>
              </div>

              <div className={styles.value}>
                <p className={styles.value_para}>
                  A passionate user interface designer, web developer and a
                  cloud enthusiast
                </p>
              </div>
              <Social />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Landing;
