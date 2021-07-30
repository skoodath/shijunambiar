import { useContext } from "react";
import { FaChevronRight, FaChevronUp } from "react-icons/fa";
import styles from "../../styles/work.module.scss";
import DetailContext from "../context";

const ViewButton = ({ link, caption, showDetails }) => {
  const { details } = useContext(DetailContext);

  return (
    <>
      <div
        className={
          details
            ? `${[styles.viewbutton, styles.viewbutton_lite].join(" ")}`
            : `${[styles.viewbutton, styles.viewbutton_dark].join(" ")}`
        }
        onClick={showDetails}
      >
        <div className={styles.view_text}>
          {!details ? (
            <span className={styles.view_common}>
              Learn More <FaChevronUp />
            </span>
          ) : (
            <a href={link} target="blank" className={styles.view_link}>
              {caption}
              <FaChevronRight />
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default ViewButton;
