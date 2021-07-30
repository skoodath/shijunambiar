import { useContext } from "react";
import { FaChevronRight } from "react-icons/fa";
import styles from "../../styles/work.module.scss";
import DetailContext from "../context";

const ViewButton = ({ link, caption, showDetails }) => {
  const { details } = useContext(DetailContext);

  return (
    <>
      <div className={styles.viewbutton} onClick={showDetails}>
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
