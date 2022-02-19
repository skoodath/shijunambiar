import Head from "next/head";
import dynamic from "next/dynamic";

import Landing from "../components/home/landing";
import Menu from "../components/menu";

const Work = dynamic(() => import("../components/work/work"));
const About = dynamic(() => import("../components/about/about"));
const Footer = dynamic(() => import("../components/footer"));

const Home = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Web development and web design portfolio site showcasing websites with react, html, css, javascript, nextjs, styled-components, scss and other javascript libraries "
        />
        <meta name="author" content="Shiju Nambiar" />
        <title>
          Web Developer | React Developer | Web Designer | Shiju Nambiar
        </title>
      </Head>
      <Menu />
      <main>
        <Landing />
        <Work />
        <About />
        <Footer />
      </main>
    </>
  );
};

export default Home;
