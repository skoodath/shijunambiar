import styles from "../styles/common/menu.module.scss";
import Link from "next/link";
import Hamburger from "./Hamburger";
import { useState } from "react";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={styles.header}>
      <nav
        className={
          showMenu ? styles.navbar + " " + styles.navbar_show : styles.navbar
        }
      >
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
      <Hamburger onClick={handleClick} />
    </header>
  );
};

export default Menu;
