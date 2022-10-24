import styles from "../styles/common/projectbutton.module.scss";
import { BsGithub } from "react-icons/bs";

const ProjectButton = ({ livesite, github }) => {
  return (
    <>
      <div className={styles.button_wrapper}>
        <a href={livesite} target="blank" className={styles.live}>
          Visit
        </a>
        <a href={github} target="blank" className={styles.source}>
          <BsGithub />
        </a>
      </div>
    </>
  );
};

export default ProjectButton;
