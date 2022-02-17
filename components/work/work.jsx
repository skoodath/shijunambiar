import styles from "../../styles/work.module.scss";
import WorkCard from "./workcard";
import works from "../data/showcase";

const Work = () => {
  return (
    <>
      <div className={styles.section_separator}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1246 226">
          <path
            id="rectangle"
            d="M0,0S211.8,103.8,523.3,160.3,1246,226,1246,226H0Z"
            fill="#7328ff"
          />
        </svg>
      </div>
      <div className={styles.wrapper} name="work">
        <div className={styles.exp_inner}>
          <h2 className={styles.text} style={{ color: "#ffffff" }}>
            Projects
          </h2>
          <div className={styles.card_container}>
            {works.map((work) => (
              <WorkCard key={work.id} {...work} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.section_separator}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#7328ff"
            d="M0,0L120,32C240,64,480,128,720,144C960,160,1200,128,1320,112L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Work;
