import styles from "../../styles/profile.module.scss";

const Heading = () => {
  return (
    <section className={styles.header}>
      <div className={styles.header_left}>
        <h1 className={styles.header_name}>Shiju Nambiar</h1>
        <h2 className={styles.header_title}>React | Web Developer</h2>
        <h3 className={styles.header_contact}>Ph: +91 779 901 6600</h3>
      </div>
      <div className={styles.header_right}>
        <a
          href="mailto:shiju.nambiar@outlook.com"
          className={styles.header_links}
        >
          shiju.nambiar@outlook.com
        </a>
        <a href="https://github.com/skoodath" className={styles.header_links}>
          https://github.com/skoodath
        </a>
        <a
          href="https://www.linkedin.com/in/nambiars/"
          className={styles.header_links}
        >
          https://www.linkedin.com/in/nambiars
        </a>
      </div>
    </section>
  );
};

export default Heading;
