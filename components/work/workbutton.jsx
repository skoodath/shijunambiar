import { FaChevronRight } from "react-icons/fa";
import styles from "../../styles/work.module.scss";

const ViewButton = ({ link, caption }) => {
  return (
    <>
      <div className={styles.viewbutton}>
        <div className={styles.view_text}>
          <a href={link} target="blank" className={styles.view_link}>
            {caption}
            <FaChevronRight />
          </a>
        </div>
      </div>
    </>
  );
};

export default ViewButton;
