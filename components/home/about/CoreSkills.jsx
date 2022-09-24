import styles from "../../../styles/home.module.scss";
import { coreSkills } from "../../data/skills";

const CoreSkills = () => {
  return (
    <>
      <div className={styles.skill_wrapper}>
        <ul className={styles.skill_set}>
          {coreSkills.map((core) => (
            <li className={styles.core_skill}>{core}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CoreSkills;
