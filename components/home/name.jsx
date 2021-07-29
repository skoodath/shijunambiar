import styles from "../../styles/landing.module.scss";
import Social from "./social";

const Name = () => {
  return (
    <section className={styles.name}>
      <h1 className={styles.nametext}>Shiju Nambiar</h1>
      <div className={styles.value}>
        <p className={styles.value_para}>
          A Web developer and tech enthusiast based in India, creating modern,
          accessible and responsive websites.
        </p>
      </div>
      <Social />
    </section>
  );
};

export default Name;
