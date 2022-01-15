import styles from "../../styles/profile.module.scss";
import Link from "next/link";

const Menu = () => {
  return (
    <div className={styles.resume_links}>
      <span className={styles.download}>Download</span>
    </div>
  );
};

export default Menu;
