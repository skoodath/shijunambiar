import React from "react";
import styles from "../styles/menu.module.scss";

const Hamburger = () => {
  return (
    <nav className={styles.menu_small}>
      <span className={styles.lines}></span>
      <span className={styles.lines}></span>
      <span className={styles.lines}></span>
    </nav>
  );
};

export default Hamburger;
