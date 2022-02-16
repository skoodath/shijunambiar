import Head from "next/head";
import dynamic from "next/dynamic";
import styles from "../../styles/profile.module.scss";
import Menu from "./menu";

const Experience = dynamic(() => import("./experience"));

const Resume = () => {
  return (
    <>
      <main>
        <div className={styles.wrapper} name="profile">
          <div className={styles.inner}>
            <Experience />
          </div>
        </div>
      </main>
    </>
  );
};

export default Resume;
