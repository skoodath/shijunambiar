import styles from "../styles/menu.module.scss";
import Link from "next/link";
import Hamburger from "./Hamburger";

const Menu = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/">
          <a className={styles.menuitem}>home</a>
        </Link>
        <Link href="/projects">
          <a className={styles.menuitem}>projects</a>
        </Link>
        <Link href="/about">
          <a className={styles.menuitem}>about</a>
        </Link>
        <a
          href="https://blog.shijunambiar.com/"
          className={styles.menuitem}
          target="new"
        >
          Blog
        </a>
      </nav>
      <Hamburger />
    </header>
  );
};

export default Menu;
