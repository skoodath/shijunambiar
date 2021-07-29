import styles from "../styles/globalmenu.module.scss";
import { Link } from "react-scroll";

const Menu = () => {
  return (
    <section className={styles.menuwrapper}>
      <nav className={styles.menuwrapper__inner}>
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          className={styles.menuitem}
        >
          Home
        </Link>
        <Link to="work" spy={true} smooth={true} className={styles.menuitem}>
          work
        </Link>
        <Link to="about" spy={true} smooth={true} className={styles.menuitem}>
          about
        </Link>
      </nav>
    </section>
  );
};

export default Menu;
