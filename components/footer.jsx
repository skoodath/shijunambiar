import styles from "../styles/footer.module.scss";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => (
  <section className={styles.wrapper}>
    <div className={styles.inner}>
      <div className={styles.social}>
        <FiGithub className={styles.socialicons} />
        <FiLinkedin className={styles.socialicons} />
        <FiMail className={styles.socialicons} />
      </div>
      <div className={styles.copyright}>
        &copy;{new Date().getFullYear()} All rights reserved
      </div>
    </div>
  </section>
);

export default Footer;
