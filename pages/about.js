import Head from 'next/head';
import AboutList from '../components/about/aboutlist';
import HeaderWrapper from '../components/headerwrapper';
import PageTitle from '../components/pagetitle';

const About = () => {
    return (
      <>
        <Head>
          <title>About: Shiju Nambiar</title>
        </Head>
  
        <main>
          <HeaderWrapper />
          <PageTitle text={'About'} />
          <AboutList />
        </main>
      </>
    )
  }
  
  export default About;