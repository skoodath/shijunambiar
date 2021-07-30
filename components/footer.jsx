import styles from "../styles/footer.module.scss";
import { FaGithubSquare, FaLinkedin, FaEnvelopeSquare } from "react-icons/fa";

const Footer = () => (
  <div className={styles.wrapper}>
    <div className={styles.inner}>
      <h4 className={styles.name}>Shiju Nambiar</h4>

      <div className={styles.social}>
        <FaGithubSquare className={styles.socialicons} />
        <FaLinkedin className={styles.socialicons} />
        <FaEnvelopeSquare className={styles.socialicons} />
      </div>
      <div className={styles.copyright}>
        &copy;{new Date().getFullYear()} All rights reserved
      </div>
    </div>
  </div>
);

export default Footer;
