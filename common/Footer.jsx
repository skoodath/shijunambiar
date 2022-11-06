import styles from "../styles/common/footer.module.scss";
import {
  FaGithubSquare,
  FaLinkedin,
  FaEnvelopeSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => (
  <footer className={styles.wrapper}>
    <div className={styles.inner}>
      <div className={styles.title}>
        <h1 className={styles.footer_title}>Shiju Nambiar</h1>
        <section className={styles.social}>
          <FaEnvelopeSquare />
          <FaTwitterSquare />
          <FaLinkedin />
          <FaGithubSquare />
          <FaInstagramSquare />
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
