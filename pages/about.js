import Head from 'next/head';
import Menu from '../components/globalmenu';
import Brand from '../components/brand';
import Introduction from '../components/about/intro';


const About = () => {
    return (
      <>
        <Head>
          <title>My learning and experience</title>
        </Head>
  
        <main>
          <Menu />
          <Introduction />
        </main>
      </>
    )
  }
  
  export default About;