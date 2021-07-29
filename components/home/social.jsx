import styles from "../../styles/landing.module.scss";

const Social = () => {
  return (
    <div className={styles.cta_wrapper}>
      <a href="mailto:shiju.nambiar@outlook.com" className={styles.cta}>
        email
      </a>
      <a href="https://github.com/skoodath" className={styles.cta}>
        github
      </a>
      <a href="https://www.linkedin.com/in/nambiars/" className={styles.cta}>
        linkedin
      </a>
    </div>
  );
};

export default Social;
