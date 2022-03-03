import styles from "../styles/footer.module.scss";
import { FiGithub, FiLinkedin, FiMail, FiHome } from "react-icons/fi";
import { Link } from "react-scroll";

const Footer = () => (
  <section className={styles.wrapper}>
    <div className={styles.inner}>
      <div className={styles.social}>
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          className={styles.menuitem}
        >
          <FiHome className={styles.socialicons} />
        </Link>

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
