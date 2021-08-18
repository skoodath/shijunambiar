import styles from "../../styles/resume.module.scss";
import Link from "next/link";

const Menu = () => {
  return (
    <div className={styles.resume_links}>
      <Link href="/">
        <span className={styles.home_btn}>Home</span>
      </Link>
      <span className={styles.download}>Download</span>
    </div>
  );
};

export default Menu;
