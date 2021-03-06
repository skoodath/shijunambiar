import Head from 'next/head';
import AboutList from '../components/about/aboutlist';
import AboutMenu from '../components/about/menu';
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
          <AboutMenu />
        </main>
      </>
    )
  }
  
  export default About;