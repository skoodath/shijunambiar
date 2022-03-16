import Head from "next/head";
import dynamic from "next/dynamic";

import Landing from "../components/home";
import Menu from "../components/menu";

const Work = dynamic(() => import("../components/work"));
const Projects = dynamic(() => import("../components/projects"));
const About = dynamic(() => import("../components/about"));
const Profile = dynamic(() => import("../components/profile"));
const Footer = dynamic(() => import("../components/footer"));

const Home = () => {
  console.log(Landing);
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Web developer and designer portfolio website showcasing web projects built with Reactjs, html, css, javascript, nextjs, scss and other javascript libraries and tools"
        />
        <meta name="author" content="Shiju Nambiar" />
        <title>Web Developer | React Developer | Shiju Nambiar</title>
      </Head>
      <Menu />
      <main>
        <Landing />
        <Profile />
        <About />
        <Work />
        <Projects />
        <Footer />
      </main>
    </>
  );
};

export default Home;
