import Head from "next/head";
import Home from "../components/home/Home";

const HomePage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Portfolio website showcasing web development and web design skills like JavaScript, React, Next, CSS3, HTML5, Sass, Styled-Components, responsive web design and UI"
        />
        <meta name="author" content="Shiju Nambiar" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>React | Frontend | JavaScript | Shiju Nambiar</title>
      </Head>
      <Home />
    </>
  );
};

export default HomePage;
