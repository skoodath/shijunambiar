import styles from "../../styles/landing.module.scss";
import Social from "./social";

const Name = () => {
  return (
    <section className={styles.name}>
      <div className={styles.name_left}>
        <div className={styles.name_title}>
          <h3 className={styles.name_text}>Shiju Nambiar</h3>
          <h1 className={styles.profile_text}>Frontend Web Developer</h1>
        </div>
        <div>
          <div className={styles.profile_mask}></div>
          <img
            className={styles.profile}
            src="../../images/profile.png"
            alt="Shiju Nambiar"
            width="100"
          />
        </div>
        <div className={styles.name_right}>
          <div className={styles.value}>
            <p className={styles.value_para}>
              I am web developer and tech enthusiast based out of India. I want
              to built websites which are accessible, responsive, elegant and
              purposeful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Name;
