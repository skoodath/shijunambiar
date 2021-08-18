import Head from "next/head";
import dynamic from "next/dynamic";
import styles from "../styles/resume.module.scss";
import Menu from "../components/resume/menu";

const Heading = dynamic(() => import("../components/resume/heading"));
const Summary = dynamic(() => import("../components/resume/summary"));
const Experience = dynamic(() => import("../components/resume/workex"));
const Education = dynamic(() => import("../components/resume/education"));
const Projects = dynamic(() => import("../components/resume/projects"));
const TechStack = dynamic(() => import("../components/resume/techstack"));

const Resume = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Web development and web design portfolio site showcasing websites with react, html, css, javascript, nextjs, styled-components, scss and other javascript libraries "
        />
        <meta name="author" content="Shiju Nambiar" />
        <title>Web Developer | React Developer | Profile | Shiju Nambiar</title>
      </Head>

      <main>
        <div className={styles.wrapper}>
          <Menu />
          <div className={styles.inner}>
            <Heading />
            <Summary />
            <Experience />
            <Projects />
            <Education />
            <TechStack />
          </div>
        </div>
      </main>
    </>
  );
};

export default Resume;
