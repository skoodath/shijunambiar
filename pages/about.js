import Head from 'next/head';
import Menu from '../components/globalmenu';
import Brand from '../components/brand';
import Introduction from '../components/about/intro';


const About = () => {
    return (
      <>
        <Head>
          <title>About: Shiju Nambiar</title>
        </Head>
  
        <main>
          <Brand />
          <Menu />
          <Introduction />
        </main>
      </>
    )
  }
  
  export default About;