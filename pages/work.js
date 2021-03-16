import Head from 'next/head';
import HeaderWrapper from '../components/headerwrapper';
import PageTitle from '../components/pagetitle';
import WorkCard from '../components/work/workcard';

const Work = () => {
    return (
      <>
        <Head>
          <title>Work: Shiju Nambiar</title>
        </Head>
        <main>
          <HeaderWrapper />
          <PageTitle text={'Work'} />
          <WorkCard />
        </main>
        
      </>
    )
  }
  
  export default Work;