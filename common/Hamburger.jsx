import React from "react";
import styles from "../styles/common/menu.module.scss";

const Hamburger = ({ onClick }) => {
  return (
    <nav className={styles.menu_small} onClick={onClick}>
      <span className={styles.lines}></span>
      <span className={styles.lines}></span>
      <span className={styles.lines}></span>
    </nav>
  );
};

export default Hamburger;
