import { useContext } from "react";
import styles from "../../styles/work.module.scss";
import DetailContext from "../context";

const WorkDesc = ({ description, title, id, details }) => {
  /* const { details } = useContext(DetailContext); */

  return (
    <div className={styles.desc}>
      <h3 className={styles.desc_title}>{title}</h3>
      <p
        className={
          !details ? `${styles.desc_text}` : `${styles.desc_text_hide}`
        }
      >
        {description}
      </p>
    </div>
  );
};

export default WorkDesc;
