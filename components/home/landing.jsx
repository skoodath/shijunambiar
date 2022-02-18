import styles from "../../styles/landing.module.scss";
import Social from "./social";

const Landing = () => {
  return (
    <>
      <div className={styles.wrapper} name="home">
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
                  I am web developer and tech enthusiast based out of India. I
                  love creating websites which are accessible, responsive,
                  elegant and purposeful.
                </p>
              </div>
              <Social />
            </div>
          </section>
          <div className={styles.profile}>
            <img
              src="../../images/profile.png"
              alt="Shiju Nambiar"
              className={styles.profile_pic}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
