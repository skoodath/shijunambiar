import styles from "../../styles/profile.module.scss";
import Title from "./title";

const Education = () => {
  return (
    <section className={styles.education}>
      <Title text={"Education & certification"} />
      <div className={styles.edu_wrapper}>
        <p className={styles.edu_desc}>
          Full Stack Open - MERN Stack (2019)(Online course from University of
          Helsinki)
        </p>
        <p className={styles.edu_desc}>
          Certified Scrum Master from Scrum Alliance
        </p>
        <p className={styles.edu_desc}>
          ICFAI University – Diploma in Business Administration and General
          Management (2007)
        </p>
        <p className={styles.edu_desc}>
          APTECH – Higher Diploma in Software Engineering (HDSE) | 3 year
          Diploma Program (2002)
        </p>
        <p className={styles.edu_desc}>Bachelor Of Science (2002)</p>
      </div>
    </section>
  );
};

export default Education;
