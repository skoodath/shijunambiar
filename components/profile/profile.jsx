import Head from "next/head";
import dynamic from "next/dynamic";
import styles from "../../styles/profile.module.scss";
import Menu from "./menu";

const Experience = dynamic(() => import("./workex"));
const Education = dynamic(() => import("./education"));
const Projects = dynamic(() => import("./projects"));
const TechStack = dynamic(() => import("./techstack"));

const Resume = () => {
  return (
    <>
      <main>
        <div className={styles.wrapper} name="profile">
          <div className={styles.inner}>
            <TechStack />
            <Experience />
            <Education />
          </div>
          <Menu />
        </div>
      </main>
    </>
  );
};

export default Resume;
