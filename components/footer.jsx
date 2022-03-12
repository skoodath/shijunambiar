import styles from "../styles/footer.module.scss";
import { FiGithub, FiLinkedin, FiMail, FiHome } from "react-icons/fi";
import { Link } from "react-scroll";

const Footer = () => (
  <section className={styles.wrapper}>
    <div className={styles.inner}>
      <div className={styles.sitelinks}>
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          className={styles.menuitem}
        >
          Home
        </Link>
        <Link
          to="work"
          spy={true}
          smooth={true}
          offset={0}
          className={styles.menuitem}
        >
          Projects
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          className={styles.menuitem}
        >
          About
        </Link>
        <a
          href="https://blog.shijunambiar.com"
          target="new"
          className={styles.menuitem}
        >
          Blog
        </a>
      </div>
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
