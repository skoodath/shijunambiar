import styles from "../styles/footer.module.scss";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Link from "next/link";

const Footer = () => (
  <footer className={styles.wrapper}>
    <div className={styles.pattern_one}></div>
    <div className={styles.inner}>
      <div className={styles.title}>
        <h1 className={styles.footer_title}>Shiju Nambiar</h1>
        <section className={styles.social}>
          <FiGithub className={styles.socialicons} />
          <FiLinkedin className={styles.socialicons} />
          <FiMail className={styles.socialicons} />
        </section>
      </div>
      <nav className={styles.navbar}>
        <Link href="/">
          <a className={styles.menuitem}>home</a>
        </Link>
        <Link href="/projects" className={styles.menuitem}>
          <a className={styles.menuitem}>projects</a>
        </Link>
        <Link href="/about" className={styles.menuitem}>
          <a className={styles.menuitem}>about</a>
        </Link>
        <a
          href="https://blog.shijunambiar.com"
          target="new"
          className={styles.menuitem}
        >
          Blog
        </a>
      </nav>
      <div className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()}. Created by{" "}
        <a href="https://www.shijunambiar.com/">Shiju Nambiar</a>
      </div>
    </div>
  </footer>
);

export default Footer;
