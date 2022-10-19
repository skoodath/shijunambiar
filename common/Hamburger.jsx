import React from "react";
import styles from "../styles/common/menu.module.scss";

const Hamburger = ({ onClick, showMenu }) => {
  return (
    <nav className={styles.menu_small} onClick={onClick}>
      <span
        className={
          showMenu ? `${styles.lines} ${styles.lines_clicked}` : styles.lines
        }
      ></span>
      <span
        className={
          showMenu ? `${styles.lines} ${styles.lines_clicked}` : styles.lines
        }
      ></span>
      <span
        className={
          showMenu ? `${styles.lines} ${styles.lines_clicked}` : styles.lines
        }
      ></span>
    </nav>
  );
};

export default Hamburger;
