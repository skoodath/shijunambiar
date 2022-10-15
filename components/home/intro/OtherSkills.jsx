import styles from "../../../styles/home.module.scss";
import { otherSkills } from "../../data/skills";

const OtherSkills = () => {
  return (
    <>
      <div className={styles.skill_wrapper}>
        <ul className={styles.skill_set}>
          {otherSkills.map((core) => (
            <li key={core} className={styles.other_skill}>
              {core}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default OtherSkills;
