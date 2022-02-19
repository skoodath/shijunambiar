import styles from "../styles/globalmenu.module.scss";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

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
        <ScrollLink
          to="profile"
          spy={true}
          smooth={true}
          className={styles.menuitem}
        >
          Profile
        </ScrollLink>
      </nav>
    </header>
  );
};

export default Menu;
