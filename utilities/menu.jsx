import styles from "../styles/globalmenu.module.scss";
import { Link as ScrollLink } from "react-scroll";

const Menu = () => {
  return (
    <header className={styles.menuwrapper}>
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
          activeClass="active"
        >
          Projects
        </ScrollLink>
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          className={styles.menuitem}
        >
          About Me
        </ScrollLink>
        <a
          href="http://blog.shijunambiar.com"
          className={styles.menuitem}
          target="new"
        >
          Blog
        </a>
      </nav>
    </header>
  );
};

export default Menu;
