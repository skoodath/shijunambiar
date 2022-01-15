import styles from "../styles/globalmenu.module.scss";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

const Menu = () => {
  return (
    <section className={styles.menuwrapper}>
      <nav className={styles.menuwrapper__inner}>
        <ScrollLink
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          className={styles.menuitem}
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="work"
          spy={true}
          smooth={true}
          className={styles.menuitem}
        >
          Projects
        </ScrollLink>
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          className={styles.menuitem}
        >
          About
        </ScrollLink>
        <Link href="/resume">
          <span className={styles.menuitem}>Resume</span>
        </Link>
      </nav>
    </section>
  );
};

export default Menu;
