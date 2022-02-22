import styles from "../../styles/landing.module.scss";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Social = () => {
  return (
    <div className={styles.cta_wrapper}>
      <a href="https://github.com/skoodath" className={styles.cta}>
        <FiGithub />
      </a>
      <a href="https://www.linkedin.com/in/nambiars/" className={styles.cta}>
        <FiLinkedin />
      </a>
      <a href="mailto:shiju.nambiar@outlook.com" className={styles.cta}>
        <FiMail />
      </a>
    </div>
  );
};

export default Social;
