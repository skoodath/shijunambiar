import styles from "../styles/common/menu.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import Hamburger from "./Hamburger";
import { useState } from "react";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const router = useRouter();

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={styles.header}>
      <nav
        className={
          showMenu ? styles.navbar + " " + styles.navbar_show : styles.navbar
        }
        onClick={handleClick}
      >
        <Link href="/">
          <a
            className={
              router.pathname === "/"
                ? `${styles.menuitem} ${styles.active}`
                : styles.menuitem
            }
          >
            <span>home</span>
          </a>
        </Link>
        <Link href="/projects">
          <a
            className={
              router.pathname === "/projects"
                ? `${styles.menuitem} ${styles.active}`
                : styles.menuitem
            }
          >
            <span>projects</span>
          </a>
        </Link>
        <Link href="/about">
          <a
            className={
              router.pathname === "/about"
                ? `${styles.menuitem} ${styles.active}`
                : styles.menuitem
            }
          >
            <span>about</span>
          </a>
        </Link>
        <a
          href="https://blog.shijunambiar.com/"
          className={styles.menuitem}
          target="new"
        >
          <span>Blog</span>
        </a>
      </nav>
      <Hamburger onClick={handleClick} showMenu={showMenu} />
    </header>
  );
};

export default Menu;
