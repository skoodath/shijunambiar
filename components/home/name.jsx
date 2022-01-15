import styles from "../../styles/landing.module.scss";
import Social from "./social";

const Name = () => {
  return (
    <section className={styles.name}>
      <div className={styles.name_left}>
        <h1 className={styles.name_text}>Shiju Nambiar</h1>
      </div>
      <div className={styles.name_divider}></div>
      <div className={styles.value}>
        <p className={styles.value_para}>
          A Web developer and tech enthusiast based in India, creating modern,
          accessible and responsive websites.
        </p>
      </div>
    </section>
  );
};

export default Name;
