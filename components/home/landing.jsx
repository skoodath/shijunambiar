import styles from "../../styles/landing.module.scss";
import Name from "./name";
import Social from "./social";

const Landing = () => {
  return (
    <div className={styles.wrapper} name="home">
      <div className={styles.out_circle}>
        <div className={styles.inner_circle}>
          <span>1</span>
        </div>
      </div>

      <div className={styles.inner}>
        <Name />
      </div>
    </div>
  );
};

export default Landing;
